/**
 * 每日热榜 · 云端更新脚本
 * ---------------------------------------------------------------
 * 由 GitHub Actions 每天 08:00（北京时间）执行：
 *   1. 抓取多个公开信息源（RSS / 热榜 JSON）
 *   2. 与历史期数比对，剔除已推送过的事件
 *   3. 选稿：有 LLM_API_KEY 时用大模型精编；没有时走规则聚合兜底
 *   4. 把新一期写回 data.js（保持最新在前）
 *
 * 运行：node scripts/update.mjs
 * 环境变量（都可选）：
 *   LLM_API_KEY   OpenAI 兼容接口的 Key
 *   LLM_BASE_URL  默认 https://api.deepseek.com/v1
 *   LLM_MODEL     默认 deepseek-chat
 */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = process.env.DATA_FILE || resolve(__dirname, "../data.js");
const MARKER = "window.NEWS_DATA = ";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const WEEKDAYS = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

/** 抓取源：(方向, 类型) */
const SOURCES = [
  { id: "qbitai",   name: "量子位",   section: "ai", kind: "rss",  url: "https://www.qbitai.com/feed" },
  { id: "leiphone", name: "雷锋网",   section: "ai", kind: "rss",  url: "https://www.leiphone.com/feed" },
  { id: "ithome",   name: "IT之家",   section: "ai", kind: "rss",  url: "https://www.ithome.com/rss/" },
  { id: "solidot",  name: "Solidot",  section: "ai", kind: "rss",  url: "https://www.solidot.org/index.rss" },
  { id: "baidu",    name: "百度热搜", section: "hot", kind: "baidu", url: "https://top.baidu.com/api/board?platform=wise&tab=realtime" },
  { id: "zhihu",    name: "知乎热榜", section: "hot", kind: "zhihu", url: "https://api.zhihu.com/topstory/hot-lists/total?limit=50" }
];

/* 政治与敏感类关键词：热榜里出现一律跳过，只保留社会民生向内容 */
const BLOCK_WORDS = [
  "习近平", "总书记", "政治局", "国务院", "外交部", "国防部", "人大", "政协", "纪委",
  "落马", "双开", "选举", "台独", "港独", "中美", "关税", "制裁", "导弹", "军演",
  "以色列", "乌克兰", "特朗普", "普京", "内塔尼亚胡", "巴以", "俄乌",
  "复兴", "共襄", "建党", "党史", "军区", "战区", "南海", "台湾", "国民党", "民进党",
  "金正恩", "朝鲜", "伊朗", "驻美大使", "开除党籍", "党组"
];

const AI_WORDS = [
  "AI", "人工智能", "大模型", "模型", "推理", "训练", "芯片", "算力", "GPU", "智能体",
  "Agent", "机器人", "具身", "多模态", "开源", "OpenAI", "GPT", "Gemini", "Claude",
  "英伟达", "字节", "阿里", "腾讯", "百度", "华为", "谷歌", "微软", "DeepSeek", "Kimi"
];

const MEME_WORDS = [
  "梗", "玩梗", "笑死", "网友", "抽象", "自嘲", "破防", "出圈", "名场面", "评论区",
  "热搜", "整活", "二创", "表情包", "神回复", "火了", "翻红", "吵翻"
];

/* 健康科普、养生类不进"热梗"兜底 */
const HEALTH_WORDS = [
  "脑梗", "癌症", "医生", "养生", "减肥", "血压", "血糖", "睡眠", "疾病", "症状",
  "体检", "中医", "药", "医院", "致癌"
];

/* ------------------------------------------------------------------ */
/* 抓取                                                                */
/* ------------------------------------------------------------------ */

const stripHtml = (s = "") =>
  s.replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/&lt;/g, "<")   // 先还原被转义的标签，再去掉
    .replace(/&gt;/g, ">")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const cdata = (s = "") =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();

async function fetchText(url, referer) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        Accept: "application/rss+xml, application/xml, application/json, text/html;q=0.9,*/*;q=0.8",
        ...(referer ? { Referer: referer } : {})
      },
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

/** 极简 RSS 解析：<item> 或 <entry> */
function parseRss(xml, source) {
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  const pick = (block, tag) => {
    const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
    return m ? cdata(stripHtml(m[1])) : "";
  };

  return blocks
    .map((block) => {
      const title = pick(block, "title");
      let link = pick(block, "link");
      if (!link) {
        const href = block.match(/<link[^>]*href="([^"]+)"/i);
        link = href ? href[1] : "";
      }
      const desc = pick(block, "description") || pick(block, "summary") || pick(block, "content");
      const date = pick(block, "pubDate") || pick(block, "updated") || "";
      return {
        title,
        url: link,
        excerpt: desc.slice(0, 200),
        publishedAt: date,
        source: source.name,
        section: source.section,
        hot: 0
      };
    })
    .filter((it) => it.title && it.url);
}

function parseBaidu(jsonText, source) {
  const data = JSON.parse(jsonText);
  const cards = data?.data?.cards || [];
  const out = [];
  for (const card of cards) {
    for (const group of card.content || []) {
      for (const it of group.content || []) {
        if (!it.word && !it.query) continue;
        const rank = Number(it.index) || out.length;
        out.push({
          title: it.word || it.query,
          url: it.url || it.rawUrl || "",
          excerpt: it.desc || "",
          publishedAt: "",
          source: source.name,
          section: source.section,
          hot: Math.max(100 - rank, 1) * 1000 // 榜单名次越靠前分值越高
        });
      }
    }
  }
  return out.filter((it) => it.title);
}

function parseZhihu(jsonText, source) {
  const data = JSON.parse(jsonText);
  return (data?.data || [])
    .map((entry, idx) => {
      const t = entry.target || {};
      const qid = t.id;
      return {
        title: stripHtml(t.title || ""),
        url: qid ? `https://www.zhihu.com/question/${qid}` : "",
        excerpt: stripHtml(t.excerpt || ""),
        publishedAt: "",
        source: source.name,
        section: source.section,
        hot: Math.max(100 - idx * 2, 1) * 1000
      };
    })
    .filter((it) => it.title && it.url);
}

async function gather() {
  const results = await Promise.allSettled(
    SOURCES.map(async (s) => {
      const text = await fetchText(s.url, s.kind === "baidu" ? "https://www.baidu.com/" : undefined);
      if (s.kind === "rss") return parseRss(text, s);
      if (s.kind === "baidu") return parseBaidu(text, s);
      if (s.kind === "zhihu") return parseZhihu(text, s);
      return [];
    })
  );

  const items = [];
  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      items.push(...r.value);
      console.log(`  ✓ ${SOURCES[i].name}: ${r.value.length} 条`);
    } else {
      console.warn(`  ✗ ${SOURCES[i].name}: ${r.reason?.message || r.reason}`);
    }
  });
  return items;
}

/* ------------------------------------------------------------------ */
/* 去重与打分                                                          */
/* ------------------------------------------------------------------ */

const norm = (s = "") => s.replace(/[\s\p{P}\p{S}]/gu, "").toLowerCase();

function similar(a, b) {
  const x = norm(a);
  const y = norm(b);
  if (!x || !y) return false;
  if (x === y) return true;
  if (x.length >= 4 && y.length >= 4 && (x.includes(y) || y.includes(x))) return true;
  const sx = new Set(x);
  const sy = new Set(y);
  let inter = 0;
  sx.forEach((ch) => { if (sy.has(ch)) inter++; });
  return inter / Math.min(sx.size, sy.size) > 0.82;
}

function score(item, words) {
  const text = `${item.title} ${item.excerpt}`;
  let s = 0;
  for (const w of words) if (text.includes(w)) s += 3;
  s += Math.min(item.hot / 20000, 8); // 榜单名次贡献，最多 8 分
  return s;
}

const blocked = (item) => BLOCK_WORDS.some((w) => item.title.includes(w));

/* ------------------------------------------------------------------ */
/* 链接生成                                                            */
/* ------------------------------------------------------------------ */

const searchLinks = (title) => {
  const kw = encodeURIComponent(title.replace(/[?？!！。，,]/g, " ").trim().slice(0, 24));
  return [
    { platform: "知乎", type: "站内话题", kind: "topic", title: `知乎讨论：${title.slice(0, 20)}`, url: `https://www.zhihu.com/search?type=content&q=${kw}` },
    { platform: "小红书", type: "站内话题", kind: "topic", title: `小红书笔记：${title.slice(0, 20)}`, url: `https://www.xiaohongshu.com/search_result?keyword=${kw}` },
    { platform: "bilibili", type: "站内话题", kind: "topic", title: `B 站相关视频：${title.slice(0, 20)}`, url: `https://search.bilibili.com/all?keyword=${kw}` }
  ];
};

/* ------------------------------------------------------------------ */
/* LLM 精编                                                            */
/* ------------------------------------------------------------------ */

const SYSTEM_PROMPT = `你是一位中文新闻编辑，为「每日热榜」网站选稿。网站每天三个方向各 3 条，共 9 条。

要求：
1. 只从给定的候选列表里挑，不要编造事件，不要编造 URL。
2. 三个方向：ai（人工智能科技动态）、social（热度最高的社会民生事件）、meme（网络热梗/流行语）。
3. 严格避开政治、涉外军事、领导人相关话题；社会方向只收民生、消费、安全、教育、职场类。
4. 每条输出：title（不超过 34 字的新闻式标题）、desc（60~110 字，只写事实：谁、何时、发生了什么、关键数字）、take（30~50 字的一句判断，说明为什么值得看）、tags（2~3 个短标签）、sourceIndex（候选列表里的下标）。
5. 同一事件只能出现在一个方向。已在"历史已推送"里的主题不要再选，除非有大进展。
6. 只输出 JSON，不要任何解释文字。

输出格式：
{"sections":[{"id":"ai","items":[{"title":"","desc":"","take":"","tags":["",""],"sourceIndex":0}]},...]}
每个 section 恰好 3 条。`;

async function llmCurate(candidates, history) {
  const key = process.env.LLM_API_KEY;
  if (!key) return null;

  const base = (process.env.LLM_BASE_URL || "https://api.deepseek.com/v1").replace(/\/$/, "");
  const model = process.env.LLM_MODEL || "deepseek-chat";

  const list = candidates.slice(0, 90).map((c, i) => ({
    i,
    t: c.title.slice(0, 60),
    s: c.source,
    d: c.excerpt.slice(0, 60)
  }));

  const body = {
    model,
    temperature: 0.4,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content:
          `【候选列表】\n${JSON.stringify(list)}\n\n` +
          `【历史已推送（勿重复）】\n${JSON.stringify(history.slice(0, 120))}`
      }
    ]
  };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 120000);
  try {
    const res = await fetch(`${base}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify(body),
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error(`LLM HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const json = await res.json();
    const text = json?.choices?.[0]?.message?.content || "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("LLM 返回里没有 JSON");
    return JSON.parse(match[0]);
  } finally {
    clearTimeout(timer);
  }
}

/* ------------------------------------------------------------------ */
/* 规则兜底                                                            */
/* ------------------------------------------------------------------ */

function ruleBased(candidates, history) {
  const fresh = candidates.filter((c) => !blocked(c) && !history.some((h) => similar(h, c.title)));

  const rank = (pool, words) =>
    pool
      .map((c) => ({ ...c, _s: score(c, words) }))
      .sort((a, b) => b._s - a._s);

  const aiPool = rank(fresh.filter((c) => c.section === "ai"), AI_WORDS).filter((c) => c._s >= 3);

  const hotPool = rank(fresh.filter((c) => c.section === "hot"), []);

  // 社会：优先百度热搜（是真新闻），知乎热榜次之
  const socialPool = hotPool
    .map((c) => ({ ...c, _s: c._s + (c.source === "百度热搜" ? 2 : 0) }))
    .sort((a, b) => b._s - a._s);

  const memePool = rank(
    fresh.filter(
      (c) =>
        c.section === "hot" &&
        !HEALTH_WORDS.some((w) => c.title.includes(w)) &&
        MEME_WORDS.some((w) => c.title.includes(w))
    ),
    MEME_WORDS
  );

  const used = new Set();
  const take = (pool, n, fallback, maxPerSource = 99) => {
    const out = [];
    const srcCount = {};
    const accept = (c) => {
      if (out.length >= n) return;
      if (used.has(c.title)) return;
      if ((srcCount[c.source] || 0) >= maxPerSource) return;
      if (out.some((o) => similar(o.title, c.title))) return;
      used.add(c.title);
      srcCount[c.source] = (srcCount[c.source] || 0) + 1;
      out.push(c);
    };
    pool.forEach(accept);
    if (out.length < n && fallback) fallback.forEach(accept);
    return out;
  };

  const ai = take(aiPool, 3, hotPool, 1);
  const meme = take(memePool, 3, hotPool.filter((c) => !HEALTH_WORDS.some((w) => c.title.includes(w))), 2);
  const social = take(socialPool, 3, null, 3);

  const toItem = (c, prefix, idx) => {
    const desc = (c.excerpt || "").replace(/\s+/g, " ").slice(0, 120) || `来自${c.source}的热点：${c.title}`;
    return {
      id: `${prefix}-${idx + 1}`,
      title: c.title.slice(0, 46),
      desc: desc + (/[。！？]$/.test(desc) ? "" : "。"),
      take: "",
      tags: [c.source],
      sourceIndex: c._i,
      links: [
        { platform: c.source, type: "原文", kind: "article", title: c.title.slice(0, 40), url: c.url },
        ...searchLinks(c.title).slice(0, 2)
      ]
    };
  };

  return {
    sections: [
      { id: "ai", items: ai.map((c, i) => toItem(c, "ai", i)) },
      { id: "social", items: social.map((c, i) => toItem(c, "so", i)) },
      { id: "meme", items: meme.map((c, i) => toItem(c, "me", i)) }
    ]
  };
}

/* ------------------------------------------------------------------ */
/* 写回 data.js                                                        */
/* ------------------------------------------------------------------ */

function fmtTime(d) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

async function main() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const raw = await readFile(DATA_FILE, "utf8");
  const cut = raw.lastIndexOf(MARKER); // 注释里也出现过这个字符串，取最后一处
  if (cut < 0) throw new Error("data.js 里找不到 window.NEWS_DATA");
  const header = raw.slice(0, cut);
  // data.js 早期版本是手写的对象字面量（键没加引号），用 Function 求值才能兼容
  const body = raw.slice(cut + MARKER.length).replace(/;\s*$/, "");
  const store = new Function(`return (${body});`)();

  if ((store.editions?.[0]?.date || "") === dateStr && process.env.DRY_RUN !== "1") {
    console.log(`今天（${dateStr}）已经有一期了，跳过。`);
    return;
  }

  // 历史标题（用于去重）
  const history = [];
  for (const ed of store.editions || []) {
    for (const sec of ed.sections || []) {
      for (const it of sec.items || []) history.push(it.title);
    }
  }

  console.log("抓取信息源…");
  const candidates = (await gather()).filter((c) => c.title && c.url);
  candidates.forEach((c, i) => { c._i = i; });
  console.log(`共 ${candidates.length} 条候选`);

  let result = null;
  let mode = "auto";
  if (process.env.LLM_API_KEY) {
    console.log("使用大模型精编…");
    try {
      result = await llmCurate(candidates, history);
      mode = "editorial";
      console.log("精编完成");
    } catch (err) {
      console.warn(`LLM 精编失败，回落规则聚合：${err.message}`);
    }
  } else {
    console.log("未配置 LLM_API_KEY，使用规则聚合模式");
  }
  if (!result) result = ruleBased(candidates, history);

  // 组装 section（补全名称与描述，限定每条 1~3 个链接）
  const META = {
    ai: { name: "人工智能", desc: "模型迭代、算力格局与产品落地" },
    social: { name: "社会热点", desc: "当日讨论量最高、且仍有后续的公共事件" },
    meme: { name: "网络热梗", desc: "正在刷屏的句式、梗图与自嘲标签" }
  };

  const sections = ["ai", "social", "meme"].map((id) => {
    const found = (result.sections || []).find((s) => s.id === id) || { items: [] };
    const items = (found.items || []).slice(0, 3).map((it, idx) => {
      const src = Number.isInteger(it.sourceIndex) ? candidates[it.sourceIndex] : null;
      let links = [];
      if (src) {
        links.push({ platform: src.source, type: "原文", kind: "article", title: it.title.slice(0, 40), url: src.url });
      }
      links = links.concat(searchLinks(it.title)).slice(0, 3);
      return {
        id: `${dateStr.replace(/-/g, "")}-${id}-${idx + 1}`,
        title: String(it.title || "").slice(0, 60),
        desc: String(it.desc || ""),
        take: String(it.take || ""),
        tags: Array.isArray(it.tags) ? it.tags.slice(0, 3) : [META[id].name],
        links
      };
    });
    return { id, name: META[id].name, desc: META[id].desc, items };
  });

  const total = sections.reduce((n, s) => n + s.items.length, 0);
  if (total < 6) throw new Error(`只选出了 ${total} 条，太少，本次不写入`);

  const prevIssue = store.editions?.[0]?.issue || 0;
  const edition = {
    date: dateStr,
    weekday: WEEKDAYS[now.getDay()],
    issue: prevIssue + 1,
    updatedAt: fmtTime(now),
    mode,
    sections
  };

  store.editions = [edition, ...(store.editions || [])].slice(0, 90); // 保留约 3 个月
  store.updatedAt = fmtTime(now);

  if (process.env.DRY_RUN === "1") {
    console.log("\n[DRY RUN] 不写文件。本次选出：");
    for (const s of sections) {
      console.log(`\n## ${s.name}`);
      for (const it of s.items) {
        console.log(` - ${it.title}`);
        console.log(`   源：${it.links[0]?.platform} ${it.links[0]?.url}`);
      }
    }
    return;
  }

  await writeFile(DATA_FILE, header + MARKER + JSON.stringify(store, null, 2) + ";\n", "utf8");
  console.log(`已写入 ${dateStr}（第 ${edition.issue} 期，${mode}，共 ${total} 条）`);
}

main().catch((err) => {
  console.error("更新失败：", err);
  process.exit(1);
});
