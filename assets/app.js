/* ===========================================================
   每日热榜 · 前端逻辑
   =========================================================== */

(function () {
  "use strict";

  var DATA = window.NEWS_DATA || { editions: [] };
  var STORE_KEY = "dailyhot.read.v1";

  var PLATFORM_COLOR = {
    "网易":      "#d33a2c",
    "新浪":      "#e0742a",
    "知乎":      "#0a76d8",
    "小红书":    "#ef3b4f",
    "澎湃":      "#e8641c",
    "bilibili":  "#e56a94",
    "水木社区":  "#5c7080",
    "36氪":      "#2f6bff",
    "腾讯新闻":  "#2b7de9"
  };

  var SECTION_COLOR = {
    ai:     "#4356e8",
    social: "#cf4a2c",
    meme:   "#0d8a7c"
  };

  var state = {
    edition: 0,
    filter: "all",
    read: loadRead()
  };

  /* ---------- 已读记录 ---------- */

  function loadRead() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? new Set(arr) : new Set();
    } catch (e) {
      return new Set();
    }
  }

  function saveRead() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(state.read)));
    } catch (e) { /* 隐私模式下忽略 */ }
  }

  /* ---------- 工具 ---------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function currentEdition() {
    return DATA.editions[state.edition] || null;
  }

  function totalItems(ed) {
    if (!ed) return 0;
    return ed.sections.reduce(function (sum, s) { return sum + s.items.length; }, 0);
  }

  /* ---------- 头部 ---------- */

  function renderHead() {
    var ed = currentEdition();
    if (!ed) return;

    var parts = String(ed.date).split("-");
    var modeLabel = ed.mode === "auto" ? " · 自动聚合" : ed.mode === "editorial" ? " · 精编" : "";
    document.getElementById("dateNum").textContent = parts[1] + "." + parts[2];
    document.getElementById("dateMeta").textContent =
      parts[0] + " " + ed.weekday + " · 第 " + ed.issue + " 期" + modeLabel;

    document.getElementById("footUpdate").textContent =
      "每日 08:00 自动更新。最近一次更新：" + (ed.updatedAt || DATA.updatedAt || "—");

    var sel = document.getElementById("editionSelect");
    sel.innerHTML = "";
    DATA.editions.forEach(function (e, i) {
      var opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = e.date + "（" + e.weekday + "）";
      if (i === state.edition) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.parentElement.hidden = DATA.editions.length < 2;
  }

  /* ---------- 筛选按钮 ---------- */

  function renderFilters() {
    var ed = currentEdition();
    var box = document.getElementById("filters");
    box.innerHTML = "";
    if (!ed) return;

    var all = { id: "all", name: "全部", color: "#8b939f" };
    var list = [all].concat(ed.sections.map(function (s) {
      return { id: s.id, name: s.name, color: SECTION_COLOR[s.id] || "#8b939f" };
    }));

    list.forEach(function (f) {
      var btn = el("button", "filter-btn");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", state.filter === f.id ? "true" : "false");
      btn.style.setProperty("--fc", f.color);

      var dot = el("span", "fdot");
      btn.appendChild(dot);
      btn.appendChild(document.createTextNode(f.name));

      btn.addEventListener("click", function () {
        state.filter = f.id;
        renderFilters();
        applyFilter();
      });

      box.appendChild(btn);
    });
  }

  function applyFilter() {
    var sections = document.querySelectorAll(".section");
    var shown = 0;
    Array.prototype.forEach.call(sections, function (sec) {
      var keep = state.filter === "all" || sec.dataset.section === state.filter;
      sec.hidden = !keep;
      if (keep) shown++;
    });
    document.getElementById("empty").hidden = shown !== 0;
  }

  /* ---------- 主体渲染 ---------- */

  function renderSections() {
    var ed = currentEdition();
    var root = document.getElementById("sections");
    root.innerHTML = "";
    if (!ed) {
      document.getElementById("empty").hidden = false;
      return;
    }

    ed.sections.forEach(function (sec, si) {
      var accent = SECTION_COLOR[sec.id] || "#4356e8";

      var section = el("section", "section");
      section.dataset.section = sec.id;
      section.id = "sec-" + sec.id;
      section.style.setProperty("--accent", accent);

      /* 标题栏 */
      var head = el("div", "section-head");

      head.appendChild(el("span", "section-idx", String(si + 1).padStart(2, "0")));

      var titleWrap = el("div");
      titleWrap.appendChild(el("h2", "section-title", sec.name));
      titleWrap.appendChild(el("p", "section-desc", sec.desc));
      head.appendChild(titleWrap);

      head.appendChild(el("span", "section-count", sec.items.length + " 条"));
      section.appendChild(head);

      /* 卡片 */
      var cards = el("div", "cards");
      sec.items.forEach(function (item, ii) {
        cards.appendChild(buildCard(item, ii, accent));
      });
      section.appendChild(cards);

      root.appendChild(section);
    });

    applyFilter();
    updateReadStat();
  }

  function buildCard(item, index, accent) {
    var isRead = state.read.has(item.id);

    var card = el("article", "card" + (isRead ? " is-read" : ""));
    card.dataset.id = item.id;

    var flag = el("span", "read-flag", "已读");
    card.appendChild(flag);

    /* 顶部：序号 + 标签 */
    var top = el("div", "card-top");
    top.appendChild(el("span", "card-num", String(index + 1).padStart(2, "0")));

    var tags = el("div", "tags");
    (item.tags || []).forEach(function (t) {
      tags.appendChild(el("span", "tag", t));
    });
    top.appendChild(tags);
    card.appendChild(top);

    /* 标题 */
    var h3 = el("h3", "card-title");
    var titleLink = el("a", null, item.title);
    titleLink.href = pickUrl(item);
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    h3.appendChild(titleLink);
    card.appendChild(h3);

    /* 摘要 */
    card.appendChild(el("p", "card-desc", item.desc));

    /* 看点 */
    if (item.take) {
      var take = el("p", "take");
      take.appendChild(el("b", null, "看点"));
      take.appendChild(document.createTextNode(item.take));
      card.appendChild(take);
    }

    /* 链接 */
    var links = el("div", "links");
    (item.links || []).forEach(function (lk) {
      links.appendChild(buildLinkChip(lk, item, card));
    });
    card.appendChild(links);

    return card;
  }

  function buildLinkChip(lk, item, card) {
    var a = el("a", "link-chip");
    a.href = lk.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = lk.title || (lk.platform + " · " + lk.type);
    a.style.setProperty("--pc", PLATFORM_COLOR[lk.platform] || "#8b939f");

    a.appendChild(el("span", "dot"));
    a.appendChild(el("span", "pf", lk.platform));
    if (lk.type) a.appendChild(el("span", "lt", lk.type));
    a.appendChild(el("span", "arw", "↗"));

    a.addEventListener("click", function () {
      markRead(item.id, card);
    });

    return a;
  }

  function pickUrl(item) {
    var links = item.links || [];
    var direct = links.filter(function (l) { return l.kind === "article"; });
    return (direct[0] || links[0] || {}).url || "#";
  }

  function markRead(id, card) {
    if (state.read.has(id)) return;
    state.read.add(id);
    saveRead();
    card.classList.add("is-read");
    updateReadStat();
  }

  function updateReadStat() {
    var ed = currentEdition();
    var total = totalItems(ed);
    var read = 0;
    if (ed) {
      ed.sections.forEach(function (s) {
        s.items.forEach(function (i) { if (state.read.has(i.id)) read++; });
      });
    }
    document.getElementById("readStat").textContent = "已读 " + read + " / " + total;
  }

  /* ---------- 事件 ---------- */

  function bindEvents() {
    document.getElementById("editionSelect").addEventListener("change", function (e) {
      state.edition = Number(e.target.value) || 0;
      renderHead();
      renderFilters();
      renderSections();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("clearRead").addEventListener("click", function () {
      state.read.clear();
      saveRead();
      renderSections();
    });

    var toTop = document.getElementById("toTop");
    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------- 启动 ---------- */

  function init() {
    if (!DATA.editions || !DATA.editions.length) {
      document.getElementById("empty").hidden = false;
      return;
    }
    renderHead();
    renderFilters();
    renderSections();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
