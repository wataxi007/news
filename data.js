/* ===========================================================
   每日热榜 · 数据文件
   -----------------------------------------------------------
   每日更新只需要改这个文件，页面会自动渲染。

   结构：
   window.NEWS_DATA = {
     updatedAt: "2026-11-13 15:40",
     editions: [                     // 最新的放最前面
       {
         date: "2026-11-13",
         weekday: "周五",
         issue: 1,                   // 第几期
         updatedAt: "2026-11-13 15:40",
         sections: [
           {
             id: "ai",               // ai | social | meme
             name: "人工智能",
             desc: "模型、算力与产品落地",
             items: [
               {
                 id: "ai-01",        // 唯一 id，用于记录已读
                 title: "标题",
                 desc: "两到三句话讲清事实",
                 take: "一句判断 / 为什么值得看",
                 tags: ["标签"],
                 links: [
                   {
                     platform: "36氪",        // 平台名
                     type: "深度",            // 深度 | 解读 | 通报 | 热议 | 站内话题 ...
                     url: "https://...",
                     title: "链接的标题（hover 显示）",
                     kind: "article"          // article = 直接可读；topic = 站内搜索结果页
                   }
                 ]
               }
             ]
           }
         ]
       }
     ]
   }

   去重规则（更新时人工/自动都要遵守）：
   1. 先扫一遍 editions 里所有历史 items 的 title 与事件主体；
   2. 同一事件若此前推过、且当日没有实质进展（新数据、新回应、新处置），不再收录；
   3. 同一事件有重大进展才收录，并在 take 里写明"进展：…"。
   =========================================================== */

window.NEWS_DATA = {
  "updatedAt": "2026-11-19 01:04",
  "editions": [
    {
      "date": "2026-11-19",
      "weekday": "周四",
      "issue": 5,
      "updatedAt": "2026-11-19 01:04",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261119-ai-1",
              "title": "谷歌推出 Gemini 4 Neon 模型，编程 AI 智能体指数超 Claude Opus",
              "desc": "IT之家 11 月 19 日消息，谷歌今天（11 月 18 日）宣布推出 AI 模型 Gemini 4 Neon， 主攻复杂编程、科学研究和企业工作流程，更好平衡推理能力、任务处理速度与成本 ，目前已开始向开发者、企业及部分付费订阅用户开放。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "谷歌推出 Gemini 4 Neon 模型，编程 AI 智能体指数超 Claud",
                  "url": "https://www.ithome.com/1/029/144.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：谷歌推出 Gemini 4 Neon 模",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%B0%B7%E6%AD%8C%E6%8E%A8%E5%87%BA%20Gemini%204%20Neon%20%E6%A8%A1%E5%9E%8B%20%E7%BC%96%E7%A8%8B"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：谷歌推出 Gemini 4 Neon 模",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B0%B7%E6%AD%8C%E6%8E%A8%E5%87%BA%20Gemini%204%20Neon%20%E6%A8%A1%E5%9E%8B%20%E7%BC%96%E7%A8%8B"
                }
              ]
            },
            {
              "id": "20261119-ai-2",
              "title": "纽娲机器人创始人杨睿刚：自动驾驶踩过的数据坑，机器人还会再踩一遍丨物理 AI 50 人",
              "desc": "做了十多年自动驾驶之后，杨睿刚决定把下一次创业的方向，从高速公路转向居民社区。 在此之前，他曾在美国高校研究三维视觉，后来加入百度研究院，负责机器人与自动驾驶实验室，又担任嬴彻科技CTO，推动自动驾驶重卡前装量产。从研究算法到让几十吨重的卡。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "纽娲机器人创始人杨睿刚：自动驾驶踩过的数据坑，机器人还会再踩一遍丨物理 AI 5",
                  "url": "https://www.leiphone.com/category/transportation/GLv3yGaPGK64teuS.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：纽娲机器人创始人杨睿刚：自动驾驶踩过的数",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%BA%BD%E5%A8%B2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%A8%E7%9D%BF%E5%88%9A%EF%BC%9A%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E8%B8%A9%E8%BF%87%E7%9A%84%E6%95%B0%E6%8D%AE%E5%9D%91%20%E6%9C%BA"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：纽娲机器人创始人杨睿刚：自动驾驶踩过的数",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%BA%BD%E5%A8%B2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9D%A8%E7%9D%BF%E5%88%9A%EF%BC%9A%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E8%B8%A9%E8%BF%87%E7%9A%84%E6%95%B0%E6%8D%AE%E5%9D%91%20%E6%9C%BA"
                }
              ]
            },
            {
              "id": "20261119-ai-3",
              "title": "GPT-6.2难产！OpenAI怕了",
              "desc": "来自量子位的热点：GPT-6.2难产！OpenAI怕了。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "GPT-6.2难产！OpenAI怕了",
                  "url": "https://www.qbitai.com/2026/11/510914.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：GPT-6.2难产！OpenAI怕了",
                  "url": "https://www.zhihu.com/search?type=content&q=GPT-6.2%E9%9A%BE%E4%BA%A7%20OpenAI%E6%80%95%E4%BA%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：GPT-6.2难产！OpenAI怕了",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=GPT-6.2%E9%9A%BE%E4%BA%A7%20OpenAI%E6%80%95%E4%BA%86"
                }
              ]
            }
          ]
        },
        {
          "id": "social",
          "name": "社会热点",
          "desc": "当日讨论量最高、且仍有后续的公共事件",
          "items": [
            {
              "id": "20261119-social-1",
              "title": "APEC工商领导人峰会什么话题最热",
              "desc": "来自百度热搜的热点：APEC工商领导人峰会什么话题最热。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "APEC工商领导人峰会什么话题最热",
                  "url": "https://m.baidu.com/s?word=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E4%BB%80%E4%B9%88%E8%AF%9D%E9%A2%98%E6%9C%80%E7%83%AD&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：APEC工商领导人峰会什么话题最热",
                  "url": "https://www.zhihu.com/search?type=content&q=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E4%BB%80%E4%B9%88%E8%AF%9D%E9%A2%98%E6%9C%80%E7%83%AD"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：APEC工商领导人峰会什么话题最热",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E4%BB%80%E4%B9%88%E8%AF%9D%E9%A2%98%E6%9C%80%E7%83%AD"
                }
              ]
            },
            {
              "id": "20261119-social-2",
              "title": "国产“空中重卡”来了",
              "desc": "来自百度热搜的热点：国产“空中重卡”来了。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "国产“空中重卡”来了",
                  "url": "https://m.baidu.com/s?word=%E5%9B%BD%E4%BA%A7%E2%80%9C%E7%A9%BA%E4%B8%AD%E9%87%8D%E5%8D%A1%E2%80%9D%E6%9D%A5%E4%BA%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：国产“空中重卡”来了",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%9B%BD%E4%BA%A7%E2%80%9C%E7%A9%BA%E4%B8%AD%E9%87%8D%E5%8D%A1%E2%80%9D%E6%9D%A5%E4%BA%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：国产“空中重卡”来了",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%9B%BD%E4%BA%A7%E2%80%9C%E7%A9%BA%E4%B8%AD%E9%87%8D%E5%8D%A1%E2%80%9D%E6%9D%A5%E4%BA%86"
                }
              ]
            },
            {
              "id": "20261119-social-3",
              "title": "超市服装区挤满了年轻人",
              "desc": "来自百度热搜的热点：超市服装区挤满了年轻人。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "超市服装区挤满了年轻人",
                  "url": "https://m.baidu.com/s?word=%E8%B6%85%E5%B8%82%E6%9C%8D%E8%A3%85%E5%8C%BA%E6%8C%A4%E6%BB%A1%E4%BA%86%E5%B9%B4%E8%BD%BB%E4%BA%BA&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：超市服装区挤满了年轻人",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%B6%85%E5%B8%82%E6%9C%8D%E8%A3%85%E5%8C%BA%E6%8C%A4%E6%BB%A1%E4%BA%86%E5%B9%B4%E8%BD%BB%E4%BA%BA"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：超市服装区挤满了年轻人",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B6%85%E5%B8%82%E6%9C%8D%E8%A3%85%E5%8C%BA%E6%8C%A4%E6%BB%A1%E4%BA%86%E5%B9%B4%E8%BD%BB%E4%BA%BA"
                }
              ]
            }
          ]
        },
        {
          "id": "meme",
          "name": "网络热梗",
          "desc": "正在刷屏的句式、梗图与自嘲标签",
          "items": [
            {
              "id": "20261119-meme-1",
              "title": "如何看待雷军 APEC 发言紧张，网友称「好像略微有点社恐」？",
              "desc": "来自APEC工商领导人峰会中外嘉宾的声音 11月17日，雷军晒出APEC发言图，并配文“APEC CEO Summit 2026！”雷军在评论区写道“给台下朋友们拍了一张合影 ”。 评论区里，有粉丝问道，“全程看完雷总发言，好像略微有点社恐。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "如何看待雷军 APEC 发言紧张，网友称「好像略微有点社恐」？",
                  "url": "https://www.zhihu.com/question/2106133971863954400"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：如何看待雷军 APEC 发言紧张，网友称",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E9%9B%B7%E5%86%9B%20APEC%20%E5%8F%91%E8%A8%80%E7%B4%A7%E5%BC%A0%20%E7%BD%91%E5%8F%8B%E7%A7%B0%E3%80%8C%E5%A5%BD%E5%83%8F%E7%95%A5"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：如何看待雷军 APEC 发言紧张，网友称",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E9%9B%B7%E5%86%9B%20APEC%20%E5%8F%91%E8%A8%80%E7%B4%A7%E5%BC%A0%20%E7%BD%91%E5%8F%8B%E7%A7%B0%E3%80%8C%E5%A5%BD%E5%83%8F%E7%95%A5"
                }
              ]
            },
            {
              "id": "20261119-meme-2",
              "title": "在大湾区看如何促进亚太共同繁荣",
              "desc": "来自百度热搜的热点：在大湾区看如何促进亚太共同繁荣。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "在大湾区看如何促进亚太共同繁荣",
                  "url": "https://m.baidu.com/s?word=%E5%9C%A8%E5%A4%A7%E6%B9%BE%E5%8C%BA%E7%9C%8B%E5%A6%82%E4%BD%95%E4%BF%83%E8%BF%9B%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E7%B9%81%E8%8D%A3&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：在大湾区看如何促进亚太共同繁荣",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%9C%A8%E5%A4%A7%E6%B9%BE%E5%8C%BA%E7%9C%8B%E5%A6%82%E4%BD%95%E4%BF%83%E8%BF%9B%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E7%B9%81%E8%8D%A3"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：在大湾区看如何促进亚太共同繁荣",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%9C%A8%E5%A4%A7%E6%B9%BE%E5%8C%BA%E7%9C%8B%E5%A6%82%E4%BD%95%E4%BF%83%E8%BF%9B%E4%BA%9A%E5%A4%AA%E5%85%B1%E5%90%8C%E7%B9%81%E8%8D%A3"
                }
              ]
            },
            {
              "id": "20261119-meme-3",
              "title": "中俄美元首同框",
              "desc": "来自百度热搜的热点：中俄美元首同框。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中俄美元首同框",
                  "url": "https://m.baidu.com/s?word=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%8C%E6%A1%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中俄美元首同框",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%8C%E6%A1%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中俄美元首同框",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%8C%E6%A1%86"
                }
              ]
            }
          ]
        },
        {
          "id": "edu",
          "name": "教育规划",
          "desc": "北京西城升学路径与政策解读 · 以当年官方发布为准",
          "items": [
            {
              "id": "20261119-edu-1",
              "title": "热门学区小升初的隐性门槛：六年级上学期成绩",
              "desc": "2026 年热门学区（如德胜）部分学校录取中，六年级上学期 290 分以上成为坊间流传的参考硬门槛（非官方标准）。小升初名义免试，但热门校的实际筛选仍会参考过程性评价与校内排名。",
              "take": "免试就近是规则，但校内成绩始终是隐性货币，六上这一学期别松。",
              "tags": [
                "小升初",
                "校内成绩"
              ],
              "links": [
                {
                  "platform": "北京中考信息网",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 北京小升初热点汇总",
                  "url": "https://www.zhongkaobj.cn/zhaosheng/tcszs/2025050713469.html"
                }
              ]
            },
            {
              "id": "20261119-edu-2",
              "title": "「731 政策」：2020 年 7 月 31 日是西城幼升小的分水岭",
              "desc": "731 后在西城购房或迁入户籍的，孩子幼升小不再对应单一划片学校，全部以多校划片方式在学区或相邻学区入学；731 前购房的仍可单校划片。这是西城学区房最核心的一条时间线。",
              "take": "买房时间点直接决定入学方式，比选哪个小区更要紧。",
              "tags": [
                "幼升小",
                "731政策"
              ],
              "links": [
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 年西城区小升初完整指南",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzU5ODAzMzgyMA==&mid=2247485350&idx=1&sn=4b30e035077d8d780b35e08c24ef1f98&chksm=ffa781ca29eb3303aab20aedfae1c871ace8524229ca796cfd643b91e20165d65fc40be633d6#rd"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：西城 731 政策",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%A5%BF%E5%9F%8E%20731%E6%94%BF%E7%AD%96"
                }
              ]
            },
            {
              "id": "20261119-edu-3",
              "title": "多校划片的「三优先」：二孩顺位、房本早、父母房",
              "desc": "731 后多校划片录取顺序：同一家庭二孩可直接顺位继承老大就读的学校；同类房产中房本取得时间越早越有优势；父母房优先于四老房（祖辈房）。2027 年起父母新购房可重新超越 731 前的四老房本。",
              "take": "多校划片不是纯摇号，家庭房产结构本身就有先后手。",
              "tags": [
                "幼升小",
                "多校划片"
              ],
              "links": [
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 年西城区小升初完整指南",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzU5ODAzMzgyMA==&mid=2247485350&idx=1&sn=4b30e035077d8d780b35e08c24ef1f98&chksm=ffa781ca29eb3303aab20aedfae1c871ace8524229ca796cfd643b91e20165d65fc40be633d6#rd"
                }
              ]
            }
          ]
        },
        {
          "id": "house",
          "name": "安家置业",
          "desc": "五路通周边改善盘档案与购房要点 · 仅供参考，不构成任何购房建议",
          "items": [
            {
              "id": "20261119-house-1",
              "title": "德外大街乙 12 号院：五路通划片的价格洼地样本",
              "desc": "五路通小学划片内价格较低的社区，2026 年单价约 9.9 万/㎡（高点跌约 43%）。楼龄老、临街户型多，但总价门槛在五路通划片里相对友好，适合预算有限、认准划片池的家庭。",
              "take": "洼地=有理由的便宜，实地确认硬伤可接受，它就是性价比。",
              "tags": [
                "五路通划片",
                "价格洼地"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：德外大街乙12号院",
                  "url": "https://bj.ke.com/xiaoqu/rs%E5%BE%B7%E5%A4%96%E5%A4%A7%E8%A1%97%E4%B9%9912%E5%8F%B7%E9%99%A2/"
                },
                {
                  "platform": "今日头条",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜学区梯队及房价深度分析",
                  "url": "https://m.toutiao.com/article/7703561980522611209"
                }
              ]
            },
            {
              "id": "20261119-house-2",
              "title": "阳光丽景：德胜少有的次新商品房，改善绕不开的小区",
              "desc": "黄寺大街 23 号院，首创开发，2002-2008 年分期建成，7 栋 2063 户，容积率 2.8、绿化率 40%，车位比 1:0.8。主力三居 130-148㎡，另有二居 92-112㎡。育翔/西师附小双划片，10 月成交单价约 13.3 万/㎡。",
              "take": "德胜老公房占绝对多数，想要「学区 + 居住品质」，它几乎没对手——稀缺就是溢价。",
              "tags": [
                "改善盘",
                "次新房"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "阳光丽景小区楼书档案",
                  "url": "https://m.ke.com/news/bj/xiaoqu/1111027381668.html"
                },
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：阳光丽景",
                  "url": "https://bj.ke.com/xiaoqu/rs%E9%98%B3%E5%85%89%E4%B8%BD%E6%99%AF/"
                },
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜学区 10 月成交全解码",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzYyMjk1MTI3NQ==&mid=2247484778&idx=1&sn=4667222b5bc802b00450b1c0930428d2&chksm=fef311f9b9b34fc1d6b043bcd957eec74792515e1c3d3389ce040693de1b40b75ab9bd7c712e#rd"
                }
              ]
            },
            {
              "id": "20261119-house-3",
              "title": "新风街 1 号院：2000 年央产大三居，德胜的「能住的老房」",
              "desc": "2000 年央产房社区，高楼层正规三居 112㎡ 成交约 12.5 万/㎡、总价 1400 万级，满五唯一。德胜不缺老破小，缺的是楼体、户型、采光都站得住的「能住的老房」，这类房源一年出不了几套。",
              "take": "高总价老房能撑住单价，靠的不是学区而是稀缺的居住品质。",
              "tags": [
                "改善盘",
                "大三居"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：新风街1号院",
                  "url": "https://bj.ke.com/xiaoqu/rs%E6%96%B0%E9%A3%8E%E8%A1%971%E5%8F%B7%E9%99%A2/"
                },
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜周记 · 每周成交复盘",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzI3NTAyMDA2Mg==&mid=2649152063&idx=1&sn=e00d5d0fb03e31949f81d5ef12ff3db8&chksm=f2805e4ae251e84bf675fe0d8e4ed52341801ebe829c6167a66ddd1ab9da28f6328b757cb14b#rd"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-18",
      "weekday": "周三",
      "issue": 4,
      "updatedAt": "2026-11-18 01:06",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261118-ai-1",
              "title": "微软自研芯片 Maia 200 投入生产：每瓦 token 性能提升 1.7 倍",
              "desc": "IT之家 11 月 18 日消息，昨日（11 月 17 日）召开的 Ignite 2026 活动中，微软宣布旗下第二代自研人工智能加速器 Maia 200 现已正式投入规模化生产， 并开始在数据中心运行微软最大规模的前沿 AI 大模型。 与。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "微软自研芯片 Maia 200 投入生产：每瓦 token 性能提升 1.7 倍",
                  "url": "https://www.ithome.com/1/028/597.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：微软自研芯片 Maia 200 投入生产",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%BE%AE%E8%BD%AF%E8%87%AA%E7%A0%94%E8%8A%AF%E7%89%87%20Maia%20200%20%E6%8A%95%E5%85%A5%E7%94%9F%E4%BA%A7%EF%BC%9A%E6%AF%8F%E7%93%A6%20"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：微软自研芯片 Maia 200 投入生产",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BE%AE%E8%BD%AF%E8%87%AA%E7%A0%94%E8%8A%AF%E7%89%87%20Maia%20200%20%E6%8A%95%E5%85%A5%E7%94%9F%E4%BA%A7%EF%BC%9A%E6%AF%8F%E7%93%A6%20"
                }
              ]
            },
            {
              "id": "20261118-ai-2",
              "title": "独家丨腾讯优图实验室研究总监孙星离职",
              "desc": "雷峰网独家消息，腾讯优图实验室研究总监、专家研究员孙星已离职。 据公开资源显示，孙星本科毕业于南京理工大学，博士毕业于香港大学工程学院。2016年加入腾讯优图实验室。 早期，他主要深耕医疗影像 AI，参与了肺癌识别和糖尿病视网膜病变筛查研究。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "独家丨腾讯优图实验室研究总监孙星离职",
                  "url": "https://www.leiphone.com/category/CorporateServices/ndF7IsEHBffZkbzy.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：独家丨腾讯优图实验室研究总监孙星离职",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%8B%AC%E5%AE%B6%E4%B8%A8%E8%85%BE%E8%AE%AF%E4%BC%98%E5%9B%BE%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%A0%94%E7%A9%B6%E6%80%BB%E7%9B%91%E5%AD%99%E6%98%9F%E7%A6%BB%E8%81%8C"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：独家丨腾讯优图实验室研究总监孙星离职",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%8B%AC%E5%AE%B6%E4%B8%A8%E8%85%BE%E8%AE%AF%E4%BC%98%E5%9B%BE%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%A0%94%E7%A9%B6%E6%80%BB%E7%9B%91%E5%AD%99%E6%98%9F%E7%A6%BB%E8%81%8C"
                }
              ]
            },
            {
              "id": "20261118-ai-3",
              "title": "材料科学智能体MatOS正式开源！大幅提高材料研发任务成功率",
              "desc": "来自量子位的热点：材料科学智能体MatOS正式开源！大幅提高材料研发任务成功率。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "材料科学智能体MatOS正式开源！大幅提高材料研发任务成功率",
                  "url": "https://www.qbitai.com/2026/11/510652.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：材料科学智能体MatOS正式开源！大幅提",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%9D%90%E6%96%99%E7%A7%91%E5%AD%A6%E6%99%BA%E8%83%BD%E4%BD%93MatOS%E6%AD%A3%E5%BC%8F%E5%BC%80%E6%BA%90%20%E5%A4%A7%E5%B9%85%E6%8F%90%E9%AB%98%E6%9D%90%E6%96%99%E7%A0%94"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：材料科学智能体MatOS正式开源！大幅提",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%9D%90%E6%96%99%E7%A7%91%E5%AD%A6%E6%99%BA%E8%83%BD%E4%BD%93MatOS%E6%AD%A3%E5%BC%8F%E5%BC%80%E6%BA%90%20%E5%A4%A7%E5%B9%85%E6%8F%90%E9%AB%98%E6%9D%90%E6%96%99%E7%A0%94"
                }
              ]
            }
          ]
        },
        {
          "id": "social",
          "name": "社会热点",
          "desc": "当日讨论量最高、且仍有后续的公共事件",
          "items": [
            {
              "id": "20261118-social-1",
              "title": "凌晨接机 “中国排面”依旧整齐划一",
              "desc": "来自百度热搜的热点：凌晨接机 “中国排面”依旧整齐划一。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "凌晨接机 “中国排面”依旧整齐划一",
                  "url": "https://m.baidu.com/s?word=%E5%87%8C%E6%99%A8%E6%8E%A5%E6%9C%BA+%E2%80%9C%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%E2%80%9D%E4%BE%9D%E6%97%A7%E6%95%B4%E9%BD%90%E5%88%92%E4%B8%80&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：凌晨接机 “中国排面”依旧整齐划一",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%87%8C%E6%99%A8%E6%8E%A5%E6%9C%BA%20%E2%80%9C%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%E2%80%9D%E4%BE%9D%E6%97%A7%E6%95%B4%E9%BD%90%E5%88%92%E4%B8%80"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：凌晨接机 “中国排面”依旧整齐划一",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%8C%E6%99%A8%E6%8E%A5%E6%9C%BA%20%E2%80%9C%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%E2%80%9D%E4%BE%9D%E6%97%A7%E6%95%B4%E9%BD%90%E5%88%92%E4%B8%80"
                }
              ]
            },
            {
              "id": "20261118-social-2",
              "title": "APEC工商领导人峰会聚焦哪些议题",
              "desc": "来自百度热搜的热点：APEC工商领导人峰会聚焦哪些议题。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "APEC工商领导人峰会聚焦哪些议题",
                  "url": "https://m.baidu.com/s?word=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E8%81%9A%E7%84%A6%E5%93%AA%E4%BA%9B%E8%AE%AE%E9%A2%98&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：APEC工商领导人峰会聚焦哪些议题",
                  "url": "https://www.zhihu.com/search?type=content&q=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E8%81%9A%E7%84%A6%E5%93%AA%E4%BA%9B%E8%AE%AE%E9%A2%98"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：APEC工商领导人峰会聚焦哪些议题",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=APEC%E5%B7%A5%E5%95%86%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B3%B0%E4%BC%9A%E8%81%9A%E7%84%A6%E5%93%AA%E4%BA%9B%E8%AE%AE%E9%A2%98"
                }
              ]
            },
            {
              "id": "20261118-social-3",
              "title": "文莱领导人特意和中方保卫人员握手",
              "desc": "来自百度热搜的热点：文莱领导人特意和中方保卫人员握手。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "文莱领导人特意和中方保卫人员握手",
                  "url": "https://m.baidu.com/s?word=%E6%96%87%E8%8E%B1%E9%A2%86%E5%AF%BC%E4%BA%BA%E7%89%B9%E6%84%8F%E5%92%8C%E4%B8%AD%E6%96%B9%E4%BF%9D%E5%8D%AB%E4%BA%BA%E5%91%98%E6%8F%A1%E6%89%8B&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：文莱领导人特意和中方保卫人员握手",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%96%87%E8%8E%B1%E9%A2%86%E5%AF%BC%E4%BA%BA%E7%89%B9%E6%84%8F%E5%92%8C%E4%B8%AD%E6%96%B9%E4%BF%9D%E5%8D%AB%E4%BA%BA%E5%91%98%E6%8F%A1%E6%89%8B"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：文莱领导人特意和中方保卫人员握手",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%96%87%E8%8E%B1%E9%A2%86%E5%AF%BC%E4%BA%BA%E7%89%B9%E6%84%8F%E5%92%8C%E4%B8%AD%E6%96%B9%E4%BF%9D%E5%8D%AB%E4%BA%BA%E5%91%98%E6%8F%A1%E6%89%8B"
                }
              ]
            }
          ]
        },
        {
          "id": "meme",
          "name": "网络热梗",
          "desc": "正在刷屏的句式、梗图与自嘲标签",
          "items": [
            {
              "id": "20261118-meme-1",
              "title": "CNN披露“爆炸性”新闻！评论区亮了",
              "desc": "来自百度热搜的热点：CNN披露“爆炸性”新闻！评论区亮了。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "CNN披露“爆炸性”新闻！评论区亮了",
                  "url": "https://m.baidu.com/s?word=CNN%E6%8A%AB%E9%9C%B2%E2%80%9C%E7%88%86%E7%82%B8%E6%80%A7%E2%80%9D%E6%96%B0%E9%97%BB%EF%BC%81%E8%AF%84%E8%AE%BA%E5%8C%BA%E4%BA%AE%E4%BA%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：CNN披露“爆炸性”新闻！评论区亮了",
                  "url": "https://www.zhihu.com/search?type=content&q=CNN%E6%8A%AB%E9%9C%B2%E2%80%9C%E7%88%86%E7%82%B8%E6%80%A7%E2%80%9D%E6%96%B0%E9%97%BB%20%E8%AF%84%E8%AE%BA%E5%8C%BA%E4%BA%AE%E4%BA%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：CNN披露“爆炸性”新闻！评论区亮了",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=CNN%E6%8A%AB%E9%9C%B2%E2%80%9C%E7%88%86%E7%82%B8%E6%80%A7%E2%80%9D%E6%96%B0%E9%97%BB%20%E8%AF%84%E8%AE%BA%E5%8C%BA%E4%BA%AE%E4%BA%86"
                }
              ]
            },
            {
              "id": "20261118-meme-2",
              "title": "近半米高的超长奶茶火了",
              "desc": "来自百度热搜的热点：近半米高的超长奶茶火了。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "近半米高的超长奶茶火了",
                  "url": "https://m.baidu.com/s?word=%E8%BF%91%E5%8D%8A%E7%B1%B3%E9%AB%98%E7%9A%84%E8%B6%85%E9%95%BF%E5%A5%B6%E8%8C%B6%E7%81%AB%E4%BA%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：近半米高的超长奶茶火了",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%BF%91%E5%8D%8A%E7%B1%B3%E9%AB%98%E7%9A%84%E8%B6%85%E9%95%BF%E5%A5%B6%E8%8C%B6%E7%81%AB%E4%BA%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：近半米高的超长奶茶火了",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%BF%91%E5%8D%8A%E7%B1%B3%E9%AB%98%E7%9A%84%E8%B6%85%E9%95%BF%E5%A5%B6%E8%8C%B6%E7%81%AB%E4%BA%86"
                }
              ]
            },
            {
              "id": "20261118-meme-3",
              "title": "雷军APEC发言称过去几年挣到钱的 AI 公司很少，认为具身智能产业想象力将超汽车产业，对此",
              "desc": "2026年APEC工商领导人峰会11月17日至18日在深圳举办，主题为“共促繁荣，共赢未来”。小米集团创始人、董事长兼首席执行官雷军表示，过去四年，AI大模型技术突飞猛进，给我们的生活和工作带来了巨大的变化。但AI能够落地的场景非常有限，能。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "雷军APEC发言称过去几年挣到钱的 AI 公司很少，认为具身智能产业想象力将超汽",
                  "url": "https://www.zhihu.com/question/2106085808956560100"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：雷军APEC发言称过去几年挣到钱的 AI",
                  "url": "https://www.zhihu.com/search?type=content&q=%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80%E7%A7%B0%E8%BF%87%E5%8E%BB%E5%87%A0%E5%B9%B4%E6%8C%A3%E5%88%B0%E9%92%B1%E7%9A%84%20AI%20%E5%85%AC%E5%8F%B8%E5%BE%88"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：雷军APEC发言称过去几年挣到钱的 AI",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80%E7%A7%B0%E8%BF%87%E5%8E%BB%E5%87%A0%E5%B9%B4%E6%8C%A3%E5%88%B0%E9%92%B1%E7%9A%84%20AI%20%E5%85%AC%E5%8F%B8%E5%BE%88"
                }
              ]
            }
          ]
        },
        {
          "id": "edu",
          "name": "教育规划",
          "desc": "北京西城升学路径与政策解读 · 以当年官方发布为准",
          "items": [
            {
              "id": "20261118-edu-1",
              "title": "从高中到大学：北京高考格局与西城的位置",
              "desc": "西城高中第一梯队为四中、八中、北师大实验、北师大附中等，清北录取与 985 率常年全市领先。北京高考以「强基计划 + 综合评价 + 统招」三条路并行，头部高中在综评和强基报名资源上优势明显。",
              "take": "升学规划拉长到 12 年看：小学学区的意义是「起点站位」，真正分层在初升高和高考。",
              "tags": [
                "高考",
                "长期规划"
              ],
              "links": [
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：北京高考升学路径",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%8C%97%E4%BA%AC%E9%AB%98%E8%80%83%20%E5%BC%BA%E5%9F%BA%E8%AE%A1%E5%88%92%20%E7%BB%BC%E5%90%88%E8%AF%84%E4%BB%B7"
                }
              ]
            },
            {
              "id": "20261118-edu-2",
              "title": "官方信息渠道清单：政策以谁发布为准",
              "desc": "西城升学政策的唯一权威出口是西城区教育考试中心（每年 4-5 月发布义务教育入学政策）与北京市教委官网；北京市义务教育入学服务平台为统一报名入口。公众号解读文章仅作参考，冲突时以官方为准。",
              "take": "所有升学决策前，先去官方渠道核对当年原文——每年政策都有微调。",
              "tags": [
                "官方渠道"
              ],
              "links": [
                {
                  "platform": "北京市教委",
                  "type": "官网",
                  "kind": "article",
                  "title": "北京市教育委员会官网",
                  "url": "https://jw.beijing.gov.cn/"
                },
                {
                  "platform": "北京市义务教育入学服务平台",
                  "type": "官网",
                  "kind": "article",
                  "title": "义务教育入学服务平台",
                  "url": "https://yjcx.bjedu.cn/"
                }
              ]
            },
            {
              "id": "20261118-edu-3",
              "title": "给小学家长的长期视角：比择校更稳的三件事",
              "desc": "政策年年微调，能穿越周期的只有：稳定的家庭学习环境（习惯与阅读量）、身体素质与视力储备、亲子沟通质量。西城路径的意义在于托底与公平，孩子长期的竞争力不来自某一次派位结果。",
              "take": "把「必须进某校」的焦虑换成「六年里每天可做的事」，性价比高得多。",
              "tags": [
                "长期规划"
              ],
              "links": [
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：西城升学 规划",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%A5%BF%E5%9F%8E%20%E5%8D%87%E5%AD%A6%20%E8%A7%84%E5%88%92"
                }
              ]
            }
          ]
        },
        {
          "id": "house",
          "name": "安家置业",
          "desc": "五路通周边改善盘档案与购房要点 · 仅供参考，不构成任何购房建议",
          "items": [
            {
              "id": "20261118-house-1",
              "title": "顶层与一层：折价是常态，但流动也最好",
              "desc": "德胜 10 月 34 套成交里 12 套是顶层或一层，无电梯老楼六层顶折价最狠（低层需降价 10-15% 才能成交）。市场认这些房子，但折价也是真的——买它省下的钱，就是将来卖它要让出的利。",
              "take": "自住能接受楼层，折价就是你的折扣；但别指望将来原价卖出。",
              "tags": [
                "楼层选择"
              ],
              "links": [
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜周记 · 每周成交复盘",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzI3NTAyMDA2Mg==&mid=2649152063&idx=1&sn=e00d5d0fb03e31949f81d5ef12ff3db8&chksm=f2805e4ae251e84bf675fe0d8e4ed52341801ebe829c6167a66ddd1ab9da28f6328b757cb14b#rd"
                }
              ]
            },
            {
              "id": "20261118-house-2",
              "title": "阳光丽景为什么能贵 2.8 万：次新 + 学区的稀缺组合",
              "desc": "10 月阳光丽景成交 4 套、均价 13.26 万/㎡，比片区综合价高近 3 万。德胜绝大多数是老公房，成规模的次新商品房只有它——不靠走量靠稀缺。自住率 85%+，租客多为周边陪读家庭。",
              "take": "判断改善盘价值就一句话：小区形态在整个片区里有多稀缺。",
              "tags": [
                "改善盘",
                "定价逻辑"
              ],
              "links": [
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜学区 10 月成交全解码",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzYyMjk1MTI3NQ==&mid=2247484778&idx=1&sn=4667222b5bc802b00450b1c0930428d2&chksm=fef311f9b9b34fc1d6b043bcd957eec74792515e1c3d3389ce040693de1b40b75ab9bd7c712e#rd"
                }
              ]
            },
            {
              "id": "20261118-house-3",
              "title": "「以五路通为中心」的地毯式搜索圈层怎么画",
              "desc": "第一圈：双旗杆东里、什坊街 2 号院、德外大街乙 12 号院等五路通直划片；第二圈：育翔、西师附小划片（同属德胜学区，派位池相同）；第三圈：阳光丽景等双划片次新盘。三圈房价差可到 4 万/㎡。",
              "take": "先划圈再逐盘建档，比中介带着 random 看房效率高得多。",
              "tags": [
                "选盘方法"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：五路通",
                  "url": "https://bj.ke.com/xiaoqu/rs%E4%BA%94%E8%B7%AF%E9%80%9A/"
                },
                {
                  "platform": "今日头条",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜学区梯队及房价深度分析",
                  "url": "https://m.toutiao.com/article/7703561980522611209"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-17",
      "weekday": "周二",
      "issue": 3,
      "updatedAt": "2026-11-17 00:58",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261117-ai-1",
              "title": "智算接棒：物理AI的下一个风口，在于计算基础设施",
              "desc": "物理AI的热度，正从机器人本体向产业链上下游扩散。 过去一年，人形机器人、四足机器狗频繁出现在工厂、仓库和门店。产业界关心的问题正在变化：从“机器人能完成什么动作”转向“如何让它越做越准”。 答案不只在机器人本体，更在其背后的计算系统：数据。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "智算接棒：物理AI的下一个风口，在于计算基础设施",
                  "url": "https://www.leiphone.com/category/chips/yYPDwzuTBbcMSCSx.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：智算接棒：物理AI的下一个风口，在于计算",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%99%BA%E7%AE%97%E6%8E%A5%E6%A3%92%EF%BC%9A%E7%89%A9%E7%90%86AI%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E9%A3%8E%E5%8F%A3%20%E5%9C%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：智算接棒：物理AI的下一个风口，在于计算",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%99%BA%E7%AE%97%E6%8E%A5%E6%A3%92%EF%BC%9A%E7%89%A9%E7%90%86AI%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E9%A3%8E%E5%8F%A3%20%E5%9C%A8%E4%BA%8E%E8%AE%A1%E7%AE%97%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD"
                }
              ]
            },
            {
              "id": "20261117-ai-2",
              "title": "美国加州正式起诉 OpenAI，指控 AI 智能体至少 80 次失控",
              "desc": "IT之家 11 月 17 日消息，当地时间 11 月 16 日，美国加利福尼亚州正式起诉 OpenAI，指控该公司在开发和测试先进人工智能模型时缺乏必要的安全防护与监控措施，导致 AI 智能体多次失去控制，并对第三方网络发起未经授权的攻击。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "美国加州正式起诉 OpenAI，指控 AI 智能体至少 80 次失控",
                  "url": "https://www.ithome.com/1/028/028.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：美国加州正式起诉 OpenAI，指控 A",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%BE%8E%E5%9B%BD%E5%8A%A0%E5%B7%9E%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%20OpenAI%20%E6%8C%87%E6%8E%A7%20AI%20%E6%99%BA%E8%83%BD"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：美国加州正式起诉 OpenAI，指控 A",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%BE%8E%E5%9B%BD%E5%8A%A0%E5%B7%9E%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%20OpenAI%20%E6%8C%87%E6%8E%A7%20AI%20%E6%99%BA%E8%83%BD"
                }
              ]
            },
            {
              "id": "20261117-ai-3",
              "title": "阿里正式发布Qwen4，智能体及编程能力进阶，迈向真实全场景",
              "desc": "来自量子位的热点：阿里正式发布Qwen4，智能体及编程能力进阶，迈向真实全场景。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "阿里正式发布Qwen4，智能体及编程能力进阶，迈向真实全场景",
                  "url": "https://www.qbitai.com/2026/11/510486.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：阿里正式发布Qwen4，智能体及编程能力",
                  "url": "https://www.zhihu.com/search?type=content&q=%E9%98%BF%E9%87%8C%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83Qwen4%20%E6%99%BA%E8%83%BD%E4%BD%93%E5%8F%8A%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B%E8%BF%9B%E9%98%B6%20%E8%BF%88"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：阿里正式发布Qwen4，智能体及编程能力",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%98%BF%E9%87%8C%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83Qwen4%20%E6%99%BA%E8%83%BD%E4%BD%93%E5%8F%8A%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B%E8%BF%9B%E9%98%B6%20%E8%BF%88"
                }
              ]
            }
          ]
        },
        {
          "id": "social",
          "name": "社会热点",
          "desc": "当日讨论量最高、且仍有后续的公共事件",
          "items": [
            {
              "id": "20261117-social-1",
              "title": "俄美运输机已率先抵达深圳",
              "desc": "来自百度热搜的热点：俄美运输机已率先抵达深圳。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "俄美运输机已率先抵达深圳",
                  "url": "https://m.baidu.com/s?word=%E4%BF%84%E7%BE%8E%E8%BF%90%E8%BE%93%E6%9C%BA%E5%B7%B2%E7%8E%87%E5%85%88%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：俄美运输机已率先抵达深圳",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%BF%84%E7%BE%8E%E8%BF%90%E8%BE%93%E6%9C%BA%E5%B7%B2%E7%8E%87%E5%85%88%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：俄美运输机已率先抵达深圳",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%84%E7%BE%8E%E8%BF%90%E8%BE%93%E6%9C%BA%E5%B7%B2%E7%8E%87%E5%85%88%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3"
                }
              ]
            },
            {
              "id": "20261117-social-2",
              "title": "APEC离我们的生活有多远",
              "desc": "来自百度热搜的热点：APEC离我们的生活有多远。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "APEC离我们的生活有多远",
                  "url": "https://m.baidu.com/s?word=APEC%E7%A6%BB%E6%88%91%E4%BB%AC%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9C%89%E5%A4%9A%E8%BF%9C&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：APEC离我们的生活有多远",
                  "url": "https://www.zhihu.com/search?type=content&q=APEC%E7%A6%BB%E6%88%91%E4%BB%AC%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9C%89%E5%A4%9A%E8%BF%9C"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：APEC离我们的生活有多远",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=APEC%E7%A6%BB%E6%88%91%E4%BB%AC%E7%9A%84%E7%94%9F%E6%B4%BB%E6%9C%89%E5%A4%9A%E8%BF%9C"
                }
              ]
            },
            {
              "id": "20261117-social-3",
              "title": "华强北档口老板娘集齐APEC经济体签名",
              "desc": "来自百度热搜的热点：华强北档口老板娘集齐APEC经济体签名。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "华强北档口老板娘集齐APEC经济体签名",
                  "url": "https://m.baidu.com/s?word=%E5%8D%8E%E5%BC%BA%E5%8C%97%E6%A1%A3%E5%8F%A3%E8%80%81%E6%9D%BF%E5%A8%98%E9%9B%86%E9%BD%90APEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E7%AD%BE%E5%90%8D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：华强北档口老板娘集齐APEC经济体签名",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%8D%8E%E5%BC%BA%E5%8C%97%E6%A1%A3%E5%8F%A3%E8%80%81%E6%9D%BF%E5%A8%98%E9%9B%86%E9%BD%90APEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E7%AD%BE%E5%90%8D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：华强北档口老板娘集齐APEC经济体签名",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%8D%8E%E5%BC%BA%E5%8C%97%E6%A1%A3%E5%8F%A3%E8%80%81%E6%9D%BF%E5%A8%98%E9%9B%86%E9%BD%90APEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E7%AD%BE%E5%90%8D"
                }
              ]
            }
          ]
        },
        {
          "id": "meme",
          "name": "网络热梗",
          "desc": "正在刷屏的句式、梗图与自嘲标签",
          "items": [
            {
              "id": "20261117-meme-1",
              "title": "AI火了柴油发电机卖爆 订单排到明年",
              "desc": "来自百度热搜的热点：AI火了柴油发电机卖爆 订单排到明年。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "AI火了柴油发电机卖爆 订单排到明年",
                  "url": "https://m.baidu.com/s?word=AI%E7%81%AB%E4%BA%86%E6%9F%B4%E6%B2%B9%E5%8F%91%E7%94%B5%E6%9C%BA%E5%8D%96%E7%88%86+%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E6%98%8E%E5%B9%B4&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：AI火了柴油发电机卖爆 订单排到明年",
                  "url": "https://www.zhihu.com/search?type=content&q=AI%E7%81%AB%E4%BA%86%E6%9F%B4%E6%B2%B9%E5%8F%91%E7%94%B5%E6%9C%BA%E5%8D%96%E7%88%86%20%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E6%98%8E%E5%B9%B4"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：AI火了柴油发电机卖爆 订单排到明年",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=AI%E7%81%AB%E4%BA%86%E6%9F%B4%E6%B2%B9%E5%8F%91%E7%94%B5%E6%9C%BA%E5%8D%96%E7%88%86%20%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E6%98%8E%E5%B9%B4"
                }
              ]
            },
            {
              "id": "20261117-meme-2",
              "title": "如何看待清华特等奖学金答辩中，候选人被问「为什么三年绩点越来越低」？大学生的优秀到底应该如何",
              "desc": "[2 张图片]。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "如何看待清华特等奖学金答辩中，候选人被问「为什么三年绩点越来越低」？大学生的优秀",
                  "url": "https://www.zhihu.com/question/2105681388028393000"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：如何看待清华特等奖学金答辩中，候选人被问",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E6%B8%85%E5%8D%8E%E7%89%B9%E7%AD%89%E5%A5%96%E5%AD%A6%E9%87%91%E7%AD%94%E8%BE%A9%E4%B8%AD%20%E5%80%99%E9%80%89%E4%BA%BA%E8%A2%AB%E9%97%AE%E3%80%8C%E4%B8%BA%E4%BB%80%E4%B9%88"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：如何看待清华特等奖学金答辩中，候选人被问",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E6%B8%85%E5%8D%8E%E7%89%B9%E7%AD%89%E5%A5%96%E5%AD%A6%E9%87%91%E7%AD%94%E8%BE%A9%E4%B8%AD%20%E5%80%99%E9%80%89%E4%BA%BA%E8%A2%AB%E9%97%AE%E3%80%8C%E4%B8%BA%E4%BB%80%E4%B9%88"
                }
              ]
            },
            {
              "id": "20261117-meme-3",
              "title": "中俄美三国元首历史首次面对面会晤",
              "desc": "来自百度热搜的热点：中俄美三国元首历史首次面对面会晤。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中俄美三国元首历史首次面对面会晤",
                  "url": "https://m.baidu.com/s?word=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%9A%E6%99%A4&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中俄美三国元首历史首次面对面会晤",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%9A%E6%99%A4"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中俄美三国元首历史首次面对面会晤",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%9A%E6%99%A4"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-16",
      "weekday": "周一",
      "issue": 2,
      "updatedAt": "2026-11-16 03:27",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261116-ai-1",
              "title": "腾讯 WorkBuddy 国际版上线 Gemini 4 Carbon 大模型：支持百万 To",
              "desc": "IT之家 11 月 16 日消息，腾讯 WorkBuddy 国际版昨日宣布，已正式上线谷歌 Gemini 4 Carbon 模型，主要面向需要更深入推理和处理更长任务的使用场景。 官方将其定位为适合处理复杂问题的模型，目前仅面向 Pro 计。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "腾讯 WorkBuddy 国际版上线 Gemini 4 Carbon 大模型：支",
                  "url": "https://www.ithome.com/1/027/487.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：腾讯 WorkBuddy 国际版上线 G",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%85%BE%E8%AE%AF%20WorkBuddy%20%E5%9B%BD%E9%99%85%E7%89%88%E4%B8%8A%E7%BA%BF%20Gemin"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：腾讯 WorkBuddy 国际版上线 G",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%85%BE%E8%AE%AF%20WorkBuddy%20%E5%9B%BD%E9%99%85%E7%89%88%E4%B8%8A%E7%BA%BF%20Gemin"
                }
              ]
            },
            {
              "id": "20261116-ai-2",
              "title": "中金公司与蚂蚁集团达成战略合作 共探AI赋能财富管理",
              "desc": "11月13日，中国国际金融股份有限公司（简称“中金公司”）与蚂蚁科技集团股份有限公司（简称“蚂蚁集团”）签署战略合作协议。 双方将结合中金公司在专业投研、金融服务等方面的积累，以及蚂蚁集团在人工智能、行业生态、客户运营等方面的优势，围绕金融。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "中金公司与蚂蚁集团达成战略合作 共探AI赋能财富管理",
                  "url": "https://www.leiphone.com/category/industrynews/U7WtbV9kyb90UuZ0.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中金公司与蚂蚁集团达成战略合作 共探AI",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E9%87%91%E5%85%AC%E5%8F%B8%E4%B8%8E%E8%9A%82%E8%9A%81%E9%9B%86%E5%9B%A2%E8%BE%BE%E6%88%90%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%20%E5%85%B1%E6%8E%A2AI%E8%B5%8B%E8%83%BD%E8%B4%A2%E5%AF%8C"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中金公司与蚂蚁集团达成战略合作 共探AI",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E9%87%91%E5%85%AC%E5%8F%B8%E4%B8%8E%E8%9A%82%E8%9A%81%E9%9B%86%E5%9B%A2%E8%BE%BE%E6%88%90%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%20%E5%85%B1%E6%8E%A2AI%E8%B5%8B%E8%83%BD%E8%B4%A2%E5%AF%8C"
                }
              ]
            },
            {
              "id": "20261116-ai-3",
              "title": "「史上最严」湿实验预测基准发布！推理拉满、算力翻5倍也白搭",
              "desc": "来自量子位的热点：「史上最严」湿实验预测基准发布！推理拉满、算力翻5倍也白搭。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "「史上最严」湿实验预测基准发布！推理拉满、算力翻5倍也白搭",
                  "url": "https://www.qbitai.com/2026/11/510232.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：「史上最严」湿实验预测基准发布！推理拉满",
                  "url": "https://www.zhihu.com/search?type=content&q=%E3%80%8C%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E3%80%8D%E6%B9%BF%E5%AE%9E%E9%AA%8C%E9%A2%84%E6%B5%8B%E5%9F%BA%E5%87%86%E5%8F%91%E5%B8%83%20%E6%8E%A8%E7%90%86%E6%8B%89%E6%BB%A1%E3%80%81%E7%AE%97%E5%8A%9B%E7%BF%BB"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：「史上最严」湿实验预测基准发布！推理拉满",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E3%80%8C%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E3%80%8D%E6%B9%BF%E5%AE%9E%E9%AA%8C%E9%A2%84%E6%B5%8B%E5%9F%BA%E5%87%86%E5%8F%91%E5%B8%83%20%E6%8E%A8%E7%90%86%E6%8B%89%E6%BB%A1%E3%80%81%E7%AE%97%E5%8A%9B%E7%BF%BB"
                }
              ]
            }
          ]
        },
        {
          "id": "social",
          "name": "社会热点",
          "desc": "当日讨论量最高、且仍有后续的公共事件",
          "items": [
            {
              "id": "20261116-social-1",
              "title": "看一颗蓝莓的APEC加速度",
              "desc": "来自百度热搜的热点：看一颗蓝莓的APEC加速度。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "看一颗蓝莓的APEC加速度",
                  "url": "https://m.baidu.com/s?word=%E7%9C%8B%E4%B8%80%E9%A2%97%E8%93%9D%E8%8E%93%E7%9A%84APEC%E5%8A%A0%E9%80%9F%E5%BA%A6&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：看一颗蓝莓的APEC加速度",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%9C%8B%E4%B8%80%E9%A2%97%E8%93%9D%E8%8E%93%E7%9A%84APEC%E5%8A%A0%E9%80%9F%E5%BA%A6"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：看一颗蓝莓的APEC加速度",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%9C%8B%E4%B8%80%E9%A2%97%E8%93%9D%E8%8E%93%E7%9A%84APEC%E5%8A%A0%E9%80%9F%E5%BA%A6"
                }
              ]
            },
            {
              "id": "20261116-social-2",
              "title": "深圳主打一个听劝",
              "desc": "来自百度热搜的热点：深圳主打一个听劝。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "深圳主打一个听劝",
                  "url": "https://m.baidu.com/s?word=%E6%B7%B1%E5%9C%B3%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E5%90%AC%E5%8A%9D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：深圳主打一个听劝",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%B7%B1%E5%9C%B3%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E5%90%AC%E5%8A%9D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：深圳主打一个听劝",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%B7%B1%E5%9C%B3%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E5%90%AC%E5%8A%9D"
                }
              ]
            },
            {
              "id": "20261116-social-3",
              "title": "央视曝光后 浙江金华连夜成立调查组",
              "desc": "来自百度热搜的热点：央视曝光后 浙江金华连夜成立调查组。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "央视曝光后 浙江金华连夜成立调查组",
                  "url": "https://m.baidu.com/s?word=%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%90%8E+%E6%B5%99%E6%B1%9F%E9%87%91%E5%8D%8E%E8%BF%9E%E5%A4%9C%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：央视曝光后 浙江金华连夜成立调查组",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%90%8E%20%E6%B5%99%E6%B1%9F%E9%87%91%E5%8D%8E%E8%BF%9E%E5%A4%9C%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：央视曝光后 浙江金华连夜成立调查组",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%90%8E%20%E6%B5%99%E6%B1%9F%E9%87%91%E5%8D%8E%E8%BF%9E%E5%A4%9C%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84"
                }
              ]
            }
          ]
        },
        {
          "id": "meme",
          "name": "网络热梗",
          "desc": "正在刷屏的句式、梗图与自嘲标签",
          "items": [
            {
              "id": "20261116-meme-1",
              "title": "创新是亚太经济腾飞的翅膀",
              "desc": "来自百度热搜的热点：创新是亚太经济腾飞的翅膀。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "创新是亚太经济腾飞的翅膀",
                  "url": "https://m.baidu.com/s?word=%E5%88%9B%E6%96%B0%E6%98%AF%E4%BA%9A%E5%A4%AA%E7%BB%8F%E6%B5%8E%E8%85%BE%E9%A3%9E%E7%9A%84%E7%BF%85%E8%86%80&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：创新是亚太经济腾飞的翅膀",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%88%9B%E6%96%B0%E6%98%AF%E4%BA%9A%E5%A4%AA%E7%BB%8F%E6%B5%8E%E8%85%BE%E9%A3%9E%E7%9A%84%E7%BF%85%E8%86%80"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：创新是亚太经济腾飞的翅膀",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%88%9B%E6%96%B0%E6%98%AF%E4%BA%9A%E5%A4%AA%E7%BB%8F%E6%B5%8E%E8%85%BE%E9%A3%9E%E7%9A%84%E7%BF%85%E8%86%80"
                }
              ]
            },
            {
              "id": "20261116-meme-2",
              "title": "中国平均每个家庭户人数降至2.52人，25年间减少近1人，背后有哪些社会变化？会带来哪些影响",
              "desc": "2025年，中国平均每个家庭只有不到三个人。 《中国统计年鉴2026》和此前公布的《2025年全国1%人口抽样调查主要数据公报》给出了同一组数字：全国共有家庭户约5.15亿户，家庭户人口约12.97亿人，平均每个家庭户2.52人。 把过去2。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中国平均每个家庭户人数降至2.52人，25年间减少近1人，背后有哪些社会变化？会",
                  "url": "https://www.zhihu.com/question/2105340483975304200"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中国平均每个家庭户人数降至2.52人，2",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E5%9B%BD%E5%B9%B3%E5%9D%87%E6%AF%8F%E4%B8%AA%E5%AE%B6%E5%BA%AD%E6%88%B7%E4%BA%BA%E6%95%B0%E9%99%8D%E8%87%B32.52%E4%BA%BA%2025%E5%B9%B4%E9%97%B4%E5%87%8F"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中国平均每个家庭户人数降至2.52人，2",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E5%9B%BD%E5%B9%B3%E5%9D%87%E6%AF%8F%E4%B8%AA%E5%AE%B6%E5%BA%AD%E6%88%B7%E4%BA%BA%E6%95%B0%E9%99%8D%E8%87%B32.52%E4%BA%BA%2025%E5%B9%B4%E9%97%B4%E5%87%8F"
                }
              ]
            },
            {
              "id": "20261116-meme-3",
              "title": "“不建议小孩玩这个 因为我没玩过”",
              "desc": "来自百度热搜的热点：“不建议小孩玩这个 因为我没玩过”。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "“不建议小孩玩这个 因为我没玩过”",
                  "url": "https://m.baidu.com/s?word=%E2%80%9C%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A9%E7%8E%A9%E8%BF%99%E4%B8%AA+%E5%9B%A0%E4%B8%BA%E6%88%91%E6%B2%A1%E7%8E%A9%E8%BF%87%E2%80%9D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：“不建议小孩玩这个 因为我没玩过”",
                  "url": "https://www.zhihu.com/search?type=content&q=%E2%80%9C%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A9%E7%8E%A9%E8%BF%99%E4%B8%AA%20%E5%9B%A0%E4%B8%BA%E6%88%91%E6%B2%A1%E7%8E%A9%E8%BF%87%E2%80%9D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：“不建议小孩玩这个 因为我没玩过”",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E2%80%9C%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A9%E7%8E%A9%E8%BF%99%E4%B8%AA%20%E5%9B%A0%E4%B8%BA%E6%88%91%E6%B2%A1%E7%8E%A9%E8%BF%87%E2%80%9D"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-13",
      "weekday": "周五",
      "issue": 1,
      "updatedAt": "2026-11-13 15:40",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261113-ai-01",
              "title": "黄仁勋辞任英伟达 CEO，CFO 临时代班，市值一日蒸发超千亿美元",
              "desc": "11 月 12 日英伟达公告，黄仁勋辞去总裁、CEO 及董事职务，即刻生效；CFO 科莱特·克雷斯出任临时 CEO，董事会同步启动继任者遴选，并首设董事会主席。当日股价盘中一度跌超 13%，收盘跌幅收窄至 4% 附近，市值仍蒸发约 1820 亿美元。",
              "take": "33 年里英伟达没有二号人物，数十名高管直接向他汇报——这套「超人架构」的账，市场今天一次性结了。而他一直是内部主张对华销售的主要力量，人走了，口子大概率更紧。",
              "tags": [
                "英伟达",
                "人事地震",
                "AI 算力"
              ],
              "links": [
                {
                  "platform": "36氪",
                  "type": "深度",
                  "kind": "article",
                  "title": "段永平、但斌谈黄仁勋离职：短期影响有限，长期看竞争",
                  "url": "https://www.36kr.com/p/4067641356539009"
                },
                {
                  "platform": "网易",
                  "type": "解读",
                  "kind": "article",
                  "title": "黄仁勋辞职背后：四面楚歌与多米诺骨牌",
                  "url": "https://www.163.com/dy/article/LBKA932F0556P74B.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎上关于此事的讨论与提问",
                  "url": "https://www.zhihu.com/search?type=content&q=%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E8%8B%B1%E4%BC%9F%E8%BE%BE"
                }
              ]
            },
            {
              "id": "20261113-ai-02",
              "title": "谷歌 Gemini 4 Hydrogen：不卷跑分，免费用户也能用",
              "desc": "六周内的第三款新模型。默认高档位的速度是上代 3.8 Flash 的 2.5 倍，编造事实减少 80% 以上；免费用户在 Gemini 应用里由系统自动选型即可调用，API 每百万输入 / 输出 1.5 / 7.5 美元，上下文 100 万词元。",
              "take": "谷歌把衡量标准从「榜单第一」换成了「每美元能交付多少活」。当「接近第一梯队 + 2.5 倍速度 + 三分之一成本」成为卖点，模型正式变成按次计费的消耗品。",
              "tags": [
                "谷歌",
                "大模型",
                "价格战"
              ],
              "links": [
                {
                  "platform": "36氪",
                  "type": "首发",
                  "kind": "article",
                  "title": "Gemini 4 Hydrogen 来了，所有人都能用",
                  "url": "https://36kr.com/p/4067431058855815"
                },
                {
                  "platform": "36氪",
                  "type": "实测",
                  "kind": "article",
                  "title": "速度飙升 2.5 倍，多项实测超越 GPT-6.1 Terra",
                  "url": "https://36kr.com/p/4067513147135112"
                },
                {
                  "platform": "网易",
                  "type": "参数",
                  "kind": "article",
                  "title": "支持百万词元输入输出，免费用户自动选型",
                  "url": "https://www.163.com/dy/article/LBJ4LF6805527PMU.html"
                }
              ]
            },
            {
              "id": "20261113-ai-03",
              "title": "张一鸣定调「追平 OpenAI 最早 2029–2030」，同日豆包工作上架 Kimi、GLM、DeepSeek",
              "desc": "张一鸣在 Seed 全员会上承认，预训练数据规模比顶尖对手少几个数量级，且坚持不走蒸馏捷径；同一天，豆包工作宣布接入 Kimi K3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash 等第三方模型，按额度消耗倍率计费。",
              "take": "一边给前沿模型降温，一边把对手的模型摆上自家货架——字节在用渠道换时间。这也是今年国产大模型最真实的分工：谁的入口多，谁的模型就能活下去。",
              "tags": [
                "字节跳动",
                "Seed",
                "模型货架"
              ],
              "links": [
                {
                  "platform": "网易",
                  "type": "快讯",
                  "kind": "article",
                  "title": "张一鸣称字节 AI 可与 OpenAI 和 Anthropic 竞争",
                  "url": "https://www.163.com/dy/article/LBIUM6F6055280AV.html"
                },
                {
                  "platform": "腾讯新闻",
                  "type": "评论",
                  "kind": "article",
                  "title": "小K快评：张一鸣的「差距说」，到底差在哪里",
                  "url": "https://news.qq.com/rain/a/20261112A0F04D00"
                },
                {
                  "platform": "水木社区",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "水木社区站内搜索：张一鸣 AI",
                  "url": "https://www.newsmth.net/nForum/search?q=%E5%BC%A0%E4%B8%80%E9%B8%A3%20AI"
                }
              ]
            }
          ]
        },
        {
          "id": "social",
          "name": "社会热点",
          "desc": "当日讨论量最高、且仍有后续的公共事件",
          "items": [
            {
              "id": "20261113-so-01",
              "title": "「甲醛白菜」「硫磺竹笋」等 18 起食安大案，被三部门挂牌督办",
              "desc": "公安部、最高检、最高法集中挂牌督办 18 起涉食品安全重大犯罪案件，含「甲醛白菜」「假洋保健品」「硫磺竹笋」。甲醛白菜案今年 8 月由博主曝光，3 名嫌疑人已被刑拘；假洋保健品则是「出口转内销」式的完整造假链。",
              "take": "治理对象正从「几批问题白菜」转向「违法更划算」的生意逻辑。难点也摆在明面上：种植、收购、加工、运输、零售分段监管，最容易漏的恰恰是部门交界处。",
              "tags": [
                "食品安全",
                "挂牌督办",
                "监管"
              ],
              "links": [
                {
                  "platform": "澎湃",
                  "type": "通报",
                  "kind": "article",
                  "title": "18 起涉食品安全重大犯罪案件，被挂牌督办",
                  "url": "https://www.thepaper.cn/newsDetail_forward_34459328"
                },
                {
                  "platform": "腾讯新闻",
                  "type": "锐评",
                  "kind": "article",
                  "title": "关键要让违法变得「不划算」",
                  "url": "https://news.qq.com/rain/a/20261113A07D6G00"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎上关于食安挂牌督办的讨论",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%20%E6%8C%82%E7%89%8C%E7%9D%A3%E5%8A%9E"
                }
              ]
            },
            {
              "id": "20261113-so-02",
              "title": "大一新生被「冒充公检法」骗走 180 万，实际损失 142 万",
              "desc": "首都医科大学通报：一名 2026 级本科新生 9 月 23 日接到「涉案」电话，被要求下载会议软件视频「办案」，随后被要求搬出宿舍住酒店、切断与父母和辅导员的联系。共取出 20 万现金、450 克黄金、37 万虚拟货币，另转账 71 万。银行和到场民警多次劝阻均未拦住。",
              "take": "全程没有「贪」，只有「怕」。骗术的核心不是话术，是把人从熟人网络里摘出来做成信息孤岛——所以「我知道警察不会电话办案」救不了任何人。",
              "tags": [
                "电信诈骗",
                "反诈",
                "校园"
              ],
              "links": [
                {
                  "platform": "网易",
                  "type": "评论",
                  "kind": "article",
                  "title": "追问「为何如此有钱」并非猎奇",
                  "url": "https://www.163.com/dy/article/LBKB1V2E053469LG.html"
                },
                {
                  "platform": "新浪",
                  "type": "细节",
                  "kind": "article",
                  "title": "冒充警察骗局：线下线上转付 180 万",
                  "url": "https://k.sina.cn/article_2188202475_826d51eb04001mhjs.html"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书上的反诈经验贴",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%86%92%E5%85%85%E5%85%AC%E6%A3%80%E6%B3%95%E8%AF%88%E9%AA%97"
                }
              ]
            },
            {
              "id": "20261113-so-03",
              "title": "10 元快剪「暴打」全国设计总监：一季度 21.3 万家理发店关停",
              "desc": "「10 元快剪正暴打全国的设计总监」冲上知乎热搜第一。中国美发美容协会数据：2026 年一季度全国 21.3 万家美发门店注销、关停或转让，同期新开 12.7 万家；快剪门店总量已达 3.2 万家。中青报调查显示 77.5% 的受访者有过不满意的理发体验。",
              "take": "打败高价理发的不是低价，是「确定性」：进门就知道花多少钱、等多久、得到什么，不用在一整套话术里保持礼貌的拒绝。",
              "tags": [
                "消费",
                "理发",
                "反套路"
              ],
              "links": [
                {
                  "platform": "新浪",
                  "type": "评论",
                  "kind": "article",
                  "title": "让理发回归传统手艺，10 元快剪给「托尼老师」上了一课",
                  "url": "https://finance.sina.com.cn/jjxw/2026-11-12/doc-iniymmzq8689890.shtml"
                },
                {
                  "platform": "网易",
                  "type": "观察",
                  "kind": "article",
                  "title": "10 元快剪正「暴打」设计总监",
                  "url": "https://www.163.com/dy/article/LBI644D40556142K_pdya11y.html"
                },
                {
                  "platform": "知乎",
                  "type": "热搜第一",
                  "kind": "topic",
                  "title": "如何看待 10 元快剪正暴打全国的设计总监",
                  "url": "https://www.zhihu.com/search?type=content&q=10%E5%85%83%E5%BF%AB%E5%89%AA%20%E8%AE%BE%E8%AE%A1%E6%80%BB%E7%9B%91"
                }
              ]
            }
          ]
        },
        {
          "id": "meme",
          "name": "网络热梗",
          "desc": "正在刷屏的句式、梗图与自嘲标签",
          "items": [
            {
              "id": "20261113-me-01",
              "title": "「厉娜体」：全网把一个名字当句号用",
              "desc": "综艺《后会友期》里许飞在悬崖小屋哽咽说出「我画地为牢啊，厉娜」，网友把它拆成万能模板「我 + 任意短句，厉娜」。随后烧烤环节「看到厉娜走近立刻把油烟扇向另一边」又被总结成「厉娜以下，众生平等」。B 站、小红书造句刷屏，芒果 TV 官方也在文案末尾接梗。",
              "take": "它火不是因为好笑，是因为「娜」谐音「啊」，一句话缀个名字就有了被听见的错觉。AI 能批量生产情绪的时代，笨拙的真实反应反而稀缺。",
              "tags": [
                "厉娜体",
                "后会友期",
                "造句"
              ],
              "links": [
                {
                  "platform": "新浪",
                  "type": "解析",
                  "kind": "article",
                  "title": "许飞和厉娜当年到底发生了什么",
                  "url": "https://ent.sina.cn/2026-11-10/detail-iniyehxt3132147.d.html"
                },
                {
                  "platform": "新浪",
                  "type": "句式",
                  "kind": "article",
                  "title": "厉娜体万能句式有哪些经典例子",
                  "url": "https://ent.sina.cn/2026-11-07/detail-inixwtha4777209.d.html"
                },
                {
                  "platform": "bilibili",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "B 站上的二创与解说",
                  "url": "https://search.bilibili.com/all?keyword=%E5%8E%89%E5%A8%9C%E4%BD%93"
                }
              ]
            },
            {
              "id": "20261113-me-02",
              "title": "「她不一样，她懂显卡」：一句老台词被改成三格梗图",
              "desc": "黄仁勋婚外情曝光、随后辞任 CEO，网友把《人民的名义》高育良名台词「她不一样，她懂明史」的末两字换成「显卡」，做成三格梗图；「高育良：她懂明史啊，她懂我 / 黄仁勋：她懂显卡啊，她懂我」成对照句式，在抖音、微博、知乎同步扩散。",
              "take": "这是今年最典型的「旧台词 + 新事件」二创：梗的寿命取决于原句的记忆度，热点只是给它换了个主语。",
              "tags": [
                "黄仁勋",
                "人民的名义",
                "梗图"
              ],
              "links": [
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎上「她懂明史」相关讨论",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%A5%B9%E4%B8%8D%E4%B8%80%E6%A0%B7%20%E5%A5%B9%E6%87%82%E6%98%8E%E5%8F%B2"
                },
                {
                  "platform": "bilibili",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "B 站上的高育良台词二创",
                  "url": "https://search.bilibili.com/all?keyword=%E9%AB%98%E8%82%B2%E8%89%AF%20%E5%8F%B0%E8%AF%8D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书上的梗图合集",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%A5%B9%E6%87%82%E6%98%8E%E5%8F%B2"
                }
              ]
            },
            {
              "id": "20261113-me-03",
              "title": "「老式人类」：不打卡、穿秋裤、爱路边摊的年轻人自嘲",
              "desc": "2026 年的自我标签，和年龄无关，只和心态有关：不爱网红店、爱保温杯、偏爱慢节奏，把「不追赶潮流」说成一种体面。同期流行的还有「胆子真是肥嘟嘟的」（外卖小哥奶凶语气）和「野生狗奶」（人类畏惧时间，而时间畏惧野生狗奶）。",
              "take": "从「发疯文学」到「老式人类」，年轻人的情绪出口正从对抗转向自我安放——不吵了，先把自己过舒服。",
              "tags": [
                "老式人类",
                "自嘲",
                "生活方式"
              ],
              "links": [
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书上的「老式人类」笔记",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%80%81%E5%BC%8F%E4%BA%BA%E7%B1%BB"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎上关于「老式人类」的讨论",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%80%81%E5%BC%8F%E4%BA%BA%E7%B1%BB"
                },
                {
                  "platform": "bilibili",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "B 站上的相关视频",
                  "url": "https://search.bilibili.com/all?keyword=%E8%80%81%E5%BC%8F%E4%BA%BA%E7%B1%BB"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
