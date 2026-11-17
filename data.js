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
  "updatedAt": "2026-11-17 00:58",
  "editions": [
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
