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
  "updatedAt": "2026-11-22 00:59",
  "editions": [
    {
      "date": "2026-11-22",
      "weekday": "周日",
      "issue": 8,
      "updatedAt": "2026-11-22 00:59",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261122-ai-1",
              "title": "华中科技大学与阿里巴巴联合成立 AI 前沿安全研究中心，课题覆盖大模型安全攻防等",
              "desc": "IT之家 11 月 21 日消息，华中科技大学与阿里巴巴集团于 11 月 18 日签署合作协议，聚焦 AI 安全共建“智能攻防与前沿安全联合研究中心”，首批启动 9 个课题。 IT之家获悉，联合研究中心首批启动的 9 个课题，覆盖 大模型安。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "华中科技大学与阿里巴巴联合成立 AI 前沿安全研究中心，课题覆盖大模型安全攻防等",
                  "url": "https://www.ithome.com/1/030/423.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：华中科技大学与阿里巴巴联合成立 AI 前",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E4%B8%8E%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E8%81%94%E5%90%88%E6%88%90%E7%AB%8B%20AI%20%E5%89%8D%E6%B2%BF%E5%AE%89%E5%85%A8%E7%A0%94"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：华中科技大学与阿里巴巴联合成立 AI 前",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E4%B8%8E%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E8%81%94%E5%90%88%E6%88%90%E7%AB%8B%20AI%20%E5%89%8D%E6%B2%BF%E5%AE%89%E5%85%A8%E7%A0%94"
                }
              ]
            },
            {
              "id": "20261122-ai-2",
              "title": "GPT-6.2 Astra再次暴击具身模型：16项任务成功率较GPT-6 Astra翻倍",
              "desc": "来自量子位的热点：GPT-6.2 Astra再次暴击具身模型：16项任务成功率较GPT-6 Astra翻倍。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "GPT-6.2 Astra再次暴击具身模型：16项任务成功率较GPT-6 Ast",
                  "url": "https://www.qbitai.com/2026/11/511779.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：GPT-6.2 Astra再次暴击具身模",
                  "url": "https://www.zhihu.com/search?type=content&q=GPT-6.2%20Astra%E5%86%8D%E6%AC%A1%E6%9A%B4%E5%87%BB%E5%85%B7%E8%BA%AB%E6%A8%A1%E5%9E%8B%EF%BC%9A16"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：GPT-6.2 Astra再次暴击具身模",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=GPT-6.2%20Astra%E5%86%8D%E6%AC%A1%E6%9A%B4%E5%87%BB%E5%85%B7%E8%BA%AB%E6%A8%A1%E5%9E%8B%EF%BC%9A16"
                }
              ]
            },
            {
              "id": "20261122-ai-3",
              "title": "当 Kling Image 4.0 自己出设计方案，生图的门槛又变了！",
              "desc": "过去几年，AI 生图模型在真实感、分辨率和光影表现上不断刷新人们的认知。但当这些图片真正被用于海报、广告这些商业场景时仍会面临文字能否准确呈现、局部修改是否能保留原有设计等问题。 这些看似不起眼的要求，至今仍是图像模型的难题。（雷峰网） 今。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "当 Kling Image 4.0 自己出设计方案，生图的门槛又变了！",
                  "url": "https://www.leiphone.com/category/yanxishe/zjw3hyGGqzhBaPj7.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：当 Kling Image 4.0 自己",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%BD%93%20Kling%20Image%204.0%20%E8%87%AA%E5%B7%B1%E5%87%BA%E8%AE%BE%E8%AE%A1%E6%96%B9"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：当 Kling Image 4.0 自己",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BD%93%20Kling%20Image%204.0%20%E8%87%AA%E5%B7%B1%E5%87%BA%E8%AE%BE%E8%AE%A1%E6%96%B9"
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
              "id": "20261122-social-1",
              "title": "看五十年的中国就来深圳",
              "desc": "来自百度热搜的热点：看五十年的中国就来深圳。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "看五十年的中国就来深圳",
                  "url": "https://m.baidu.com/s?word=%E7%9C%8B%E4%BA%94%E5%8D%81%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B0%B1%E6%9D%A5%E6%B7%B1%E5%9C%B3&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：看五十年的中国就来深圳",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%9C%8B%E4%BA%94%E5%8D%81%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B0%B1%E6%9D%A5%E6%B7%B1%E5%9C%B3"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：看五十年的中国就来深圳",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%9C%8B%E4%BA%94%E5%8D%81%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B0%B1%E6%9D%A5%E6%B7%B1%E5%9C%B3"
                }
              ]
            },
            {
              "id": "20261122-social-2",
              "title": "央视揭秘网络女主播真实生态",
              "desc": "来自百度热搜的热点：央视揭秘网络女主播真实生态。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "央视揭秘网络女主播真实生态",
                  "url": "https://m.baidu.com/s?word=%E5%A4%AE%E8%A7%86%E6%8F%AD%E7%A7%98%E7%BD%91%E7%BB%9C%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%9C%9F%E5%AE%9E%E7%94%9F%E6%80%81&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：央视揭秘网络女主播真实生态",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%A4%AE%E8%A7%86%E6%8F%AD%E7%A7%98%E7%BD%91%E7%BB%9C%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%9C%9F%E5%AE%9E%E7%94%9F%E6%80%81"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：央视揭秘网络女主播真实生态",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%A4%AE%E8%A7%86%E6%8F%AD%E7%A7%98%E7%BD%91%E7%BB%9C%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%9C%9F%E5%AE%9E%E7%94%9F%E6%80%81"
                }
              ]
            },
            {
              "id": "20261122-social-3",
              "title": "“深圳展望”为何成APEC新的里程碑",
              "desc": "来自百度热搜的热点：“深圳展望”为何成APEC新的里程碑。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "“深圳展望”为何成APEC新的里程碑",
                  "url": "https://m.baidu.com/s?word=%E2%80%9C%E6%B7%B1%E5%9C%B3%E5%B1%95%E6%9C%9B%E2%80%9D%E4%B8%BA%E4%BD%95%E6%88%90APEC%E6%96%B0%E7%9A%84%E9%87%8C%E7%A8%8B%E7%A2%91&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：“深圳展望”为何成APEC新的里程碑",
                  "url": "https://www.zhihu.com/search?type=content&q=%E2%80%9C%E6%B7%B1%E5%9C%B3%E5%B1%95%E6%9C%9B%E2%80%9D%E4%B8%BA%E4%BD%95%E6%88%90APEC%E6%96%B0%E7%9A%84%E9%87%8C%E7%A8%8B%E7%A2%91"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：“深圳展望”为何成APEC新的里程碑",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E2%80%9C%E6%B7%B1%E5%9C%B3%E5%B1%95%E6%9C%9B%E2%80%9D%E4%B8%BA%E4%BD%95%E6%88%90APEC%E6%96%B0%E7%9A%84%E9%87%8C%E7%A8%8B%E7%A2%91"
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
              "id": "20261122-meme-1",
              "title": "《GTA 6》火了 游戏主机也涨疯了",
              "desc": "来自百度热搜的热点：《GTA 6》火了 游戏主机也涨疯了。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "《GTA 6》火了 游戏主机也涨疯了",
                  "url": "https://m.baidu.com/s?word=%E3%80%8AGTA+6%E3%80%8B%E7%81%AB%E4%BA%86+%E6%B8%B8%E6%88%8F%E4%B8%BB%E6%9C%BA%E4%B9%9F%E6%B6%A8%E7%96%AF%E4%BA%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：《GTA 6》火了 游戏主机也涨疯了",
                  "url": "https://www.zhihu.com/search?type=content&q=%E3%80%8AGTA%206%E3%80%8B%E7%81%AB%E4%BA%86%20%E6%B8%B8%E6%88%8F%E4%B8%BB%E6%9C%BA%E4%B9%9F%E6%B6%A8%E7%96%AF%E4%BA%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：《GTA 6》火了 游戏主机也涨疯了",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E3%80%8AGTA%206%E3%80%8B%E7%81%AB%E4%BA%86%20%E6%B8%B8%E6%88%8F%E4%B8%BB%E6%9C%BA%E4%B9%9F%E6%B6%A8%E7%96%AF%E4%BA%86"
                }
              ]
            },
            {
              "id": "20261122-meme-2",
              "title": "网友称零跑A10装啤酒致后备厢储物盒脱落，客服称未接到反馈，具体是怎么回事？储物盒能如何规避",
              "desc": "拉几箱啤酒，就把汽车后备厢压得露了底？11月19日晚，一段疑似零跑A10后备厢储物盒脱落的视频在网络流传。视频中，一辆汽车车尾下方的黑色箱状部件明显下垂，车后地面上还放着一箱啤酒。有网友称，车辆装载啤酒后出现了这一情况。新黄河记者获得的这段。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "网友称零跑A10装啤酒致后备厢储物盒脱落，客服称未接到反馈，具体是怎么回事？储物",
                  "url": "https://www.zhihu.com/question/2107047283686691600"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：网友称零跑A10装啤酒致后备厢储物盒脱落",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%BD%91%E5%8F%8B%E7%A7%B0%E9%9B%B6%E8%B7%91A10%E8%A3%85%E5%95%A4%E9%85%92%E8%87%B4%E5%90%8E%E5%A4%87%E5%8E%A2%E5%82%A8%E7%89%A9%E7%9B%92%E8%84%B1%E8%90%BD%20%E5%AE%A2%E6%9C%8D%E7%A7%B0"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：网友称零跑A10装啤酒致后备厢储物盒脱落",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%BD%91%E5%8F%8B%E7%A7%B0%E9%9B%B6%E8%B7%91A10%E8%A3%85%E5%95%A4%E9%85%92%E8%87%B4%E5%90%8E%E5%A4%87%E5%8E%A2%E5%82%A8%E7%89%A9%E7%9B%92%E8%84%B1%E8%90%BD%20%E5%AE%A2%E6%9C%8D%E7%A7%B0"
                }
              ]
            },
            {
              "id": "20261122-meme-3",
              "title": "网友扫共享单车半小时15元",
              "desc": "来自百度热搜的热点：网友扫共享单车半小时15元。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "网友扫共享单车半小时15元",
                  "url": "https://m.baidu.com/s?word=%E7%BD%91%E5%8F%8B%E6%89%AB%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E5%8D%8A%E5%B0%8F%E6%97%B615%E5%85%83&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：网友扫共享单车半小时15元",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%BD%91%E5%8F%8B%E6%89%AB%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E5%8D%8A%E5%B0%8F%E6%97%B615%E5%85%83"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：网友扫共享单车半小时15元",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%BD%91%E5%8F%8B%E6%89%AB%E5%85%B1%E4%BA%AB%E5%8D%95%E8%BD%A6%E5%8D%8A%E5%B0%8F%E6%97%B615%E5%85%83"
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
              "id": "20261122-edu-1",
              "title": "幼升小到小升初的完整时间线（西城）",
              "desc": "4 月 30 日前完成毕业生信息核对；5 月 8-14 日受理外区/外省市回西城审核；5 月下旬直升资格认定；5 月 19-21 日一次性填报全部入学意向；6 月完成全区派位等批次；7 月 2 日学区派位录取，7 月上旬发通知书。",
              "take": "西城升学是按月推进的流程战，5 月中下旬的填报窗口错过就只剩兜底。",
              "tags": [
                "时间线"
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
            },
            {
              "id": "20261122-edu-2",
              "title": "德胜学区初中盘点：无弱校的「第一梯队」学区",
              "desc": "德胜学区初中含四中、八中、十三中、十三分什刹海校区、三帆、三帆裕中、北师大二附中西城实验、西城外国语等。小学端有实验二小德胜校区、育翔、五路通、西师附小、三帆附小，是西城公认顶配学区。",
              "take": "五路通小学所在的德胜学区，兜底校质量全区最高，这是它的底牌。",
              "tags": [
                "德胜学区",
                "初中"
              ],
              "links": [
                {
                  "platform": "今日头条",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 西城区德胜学区梯队及房价深度分析",
                  "url": "https://m.toutiao.com/article/7703561980522611209"
                }
              ]
            },
            {
              "id": "20261122-edu-3",
              "title": "西城学区三大梯队：德胜、月坛、金融街居首",
              "desc": "家长圈通行分法：德胜（小学初中双顶配、无弱校）、月坛（初中实力超强）、金融街（直升名额多但有掉坑率）为第一梯队；什刹海、展览路、新街口、陶白为均衡的第二梯队。梯队决定了学区房的价差。",
              "take": "梯队是房价的底层逻辑：德胜贵，贵在「哪所学校都不差」的确定性。",
              "tags": [
                "学区选择"
              ],
              "links": [
                {
                  "platform": "小升初信息网",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 西城小升初新政全解析",
                  "url": "https://www.xscxx.com/xiaoshengchu/xcqxsc/2026040813504.html"
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
              "id": "20261122-house-1",
              "title": "总价段分布：500-800 万是德胜的主战场",
              "desc": "10 月成交中 500-800 万占 74%，这就是德胜刚改家庭的主力区间。低于 500 万的多为小面积或特殊房况，高于 900 万的塔尖房源买家池小、去化慢，议价空间反而更大。",
              "take": "你的预算落在主力区间，选择最多、可以慢慢挑；越偏离主力，越要警惕流动性。",
              "tags": [
                "预算规划"
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
              "id": "20261122-house-2",
              "title": "新风南里：同一小区同一周，单价能差 4.6 万",
              "desc": "10 月同一周内：35.6㎡ 一居成交 486 万（13.65 万/㎡），62.8㎡ 两居成交 567 万（9.03 万/㎡）。小户型的价格按「最低上车门槛」定价，不看每平米值多少，看最少多少钱能进来。",
              "take": "均价是小户型的记分牌——你买大户型，就别被小户型的高单价吓到。",
              "tags": [
                "定价逻辑"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：新风南里",
                  "url": "https://bj.ke.com/xiaoqu/rs%E6%96%B0%E9%A3%8E%E5%8D%97%E9%87%8C/"
                },
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
              "id": "20261122-house-3",
              "title": "裕中西里 / 裕中东里：德胜的成交量发动机",
              "desc": "三帆附小划片，两个小区 10 月各成交 11 套并列第一，单价多在 8-11 万、总价 500-700 万，挂牌量大、流通性最好。80% 直升三帆中学的通路在这两个老院子里兑现得最直接。",
              "take": "预算 600 万上下求直升确定性，这两个盘是绕不开的第一站。",
              "tags": [
                "三帆附小",
                "走量盘"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：裕中西里",
                  "url": "https://bj.ke.com/xiaoqu/rs%E8%A3%95%E4%B8%AD%E8%A5%BF%E9%87%8C/"
                },
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜学区 10 月成交全解码",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzYyMjk1MTI3NQ==&mid=2247484778&idx=1&sn=4667222b5bc802b00450b1c0930428d2&chksm=fef311f9b9b34fc1d6b043bcd957eec74792515e1c3d3389ce040693de1b40b75ab9bd7c712e#rd"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-21",
      "weekday": "周六",
      "issue": 7,
      "updatedAt": "2026-11-21 01:02",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261121-ai-1",
              "title": "匿名 AI 模型 Gestalt 登顶 Contra 前沿设计榜单：性能远超 Claude ",
              "desc": "IT之家 11 月 21 日消息，Contra Labs 于当地时间 11 月 18 日发布 AI 设计能力评测榜单 Frontier Design Benchmark。 其中，一款代号为 Gestalt、目前处于隐身开发状态（Stealt。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "匿名 AI 模型 Gestalt 登顶 Contra 前沿设计榜单：性能远超 C",
                  "url": "https://www.ithome.com/1/030/291.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：匿名 AI 模型 Gestalt 登顶 ",
                  "url": "https://www.zhihu.com/search?type=content&q=%E5%8C%BF%E5%90%8D%20AI%20%E6%A8%A1%E5%9E%8B%20Gestalt%20%E7%99%BB%E9%A1%B6%20Cont"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：匿名 AI 模型 Gestalt 登顶 ",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%8C%BF%E5%90%8D%20AI%20%E6%A8%A1%E5%9E%8B%20Gestalt%20%E7%99%BB%E9%A1%B6%20Cont"
                }
              ]
            },
            {
              "id": "20261121-ai-2",
              "title": "昇腾算力训出了双榜SOTA的具身世界模型，华为云这次想把整套底座开放出来",
              "desc": "来自量子位的热点：昇腾算力训出了双榜SOTA的具身世界模型，华为云这次想把整套底座开放出来。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "昇腾算力训出了双榜SOTA的具身世界模型，华为云这次想把整套底座开放出来",
                  "url": "https://www.qbitai.com/2026/11/511610.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：昇腾算力训出了双榜SOTA的具身世界模型",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%98%87%E8%85%BE%E7%AE%97%E5%8A%9B%E8%AE%AD%E5%87%BA%E4%BA%86%E5%8F%8C%E6%A6%9CSOTA%E7%9A%84%E5%85%B7%E8%BA%AB%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%20%E5%8D%8E%E4%B8%BA%E4%BA%91"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：昇腾算力训出了双榜SOTA的具身世界模型",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%98%87%E8%85%BE%E7%AE%97%E5%8A%9B%E8%AE%AD%E5%87%BA%E4%BA%86%E5%8F%8C%E6%A6%9CSOTA%E7%9A%84%E5%85%B7%E8%BA%AB%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%20%E5%8D%8E%E4%B8%BA%E4%BA%91"
                }
              ]
            },
            {
              "id": "20261121-ai-3",
              "title": "独家丨荣耀、腾讯背景团队创业做 AI 交互吊坠，已获李泽湘早期投资",
              "desc": "创始人肖裕炜曾在荣耀工作五年，经历横跨 GPU 底层技术与 AI 终端设备。 作者丨黄艳冰 编辑丨 姚单 雷峰网·鲸犀独家获悉， 荣耀前高级算法工程师肖裕炜已离职创业，于今年年中创立 AI 交互硬件公司 KnowVoice。 其目前正在李泽。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "独家丨荣耀、腾讯背景团队创业做 AI 交互吊坠，已获李泽湘早期投资",
                  "url": "https://www.leiphone.com/category/weiwu/cmj50XKwCB4drkus.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：独家丨荣耀、腾讯背景团队创业做 AI 交",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%8B%AC%E5%AE%B6%E4%B8%A8%E8%8D%A3%E8%80%80%E3%80%81%E8%85%BE%E8%AE%AF%E8%83%8C%E6%99%AF%E5%9B%A2%E9%98%9F%E5%88%9B%E4%B8%9A%E5%81%9A%20AI%20%E4%BA%A4%E4%BA%92%E5%90%8A%E5%9D%A0%20"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：独家丨荣耀、腾讯背景团队创业做 AI 交",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%8B%AC%E5%AE%B6%E4%B8%A8%E8%8D%A3%E8%80%80%E3%80%81%E8%85%BE%E8%AE%AF%E8%83%8C%E6%99%AF%E5%9B%A2%E9%98%9F%E5%88%9B%E4%B8%9A%E5%81%9A%20AI%20%E4%BA%A4%E4%BA%92%E5%90%8A%E5%9D%A0%20"
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
              "id": "20261121-social-1",
              "title": "科技新国货成“深圳特产”",
              "desc": "来自百度热搜的热点：科技新国货成“深圳特产”。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "科技新国货成“深圳特产”",
                  "url": "https://m.baidu.com/s?word=%E7%A7%91%E6%8A%80%E6%96%B0%E5%9B%BD%E8%B4%A7%E6%88%90%E2%80%9C%E6%B7%B1%E5%9C%B3%E7%89%B9%E4%BA%A7%E2%80%9D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：科技新国货成“深圳特产”",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%A7%91%E6%8A%80%E6%96%B0%E5%9B%BD%E8%B4%A7%E6%88%90%E2%80%9C%E6%B7%B1%E5%9C%B3%E7%89%B9%E4%BA%A7%E2%80%9D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：科技新国货成“深圳特产”",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%A7%91%E6%8A%80%E6%96%B0%E5%9B%BD%E8%B4%A7%E6%88%90%E2%80%9C%E6%B7%B1%E5%9C%B3%E7%89%B9%E4%BA%A7%E2%80%9D"
                }
              ]
            },
            {
              "id": "20261121-social-2",
              "title": "一家人遛弯误入剧组还上了央视",
              "desc": "来自百度热搜的热点：一家人遛弯误入剧组还上了央视。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "一家人遛弯误入剧组还上了央视",
                  "url": "https://m.baidu.com/s?word=%E4%B8%80%E5%AE%B6%E4%BA%BA%E9%81%9B%E5%BC%AF%E8%AF%AF%E5%85%A5%E5%89%A7%E7%BB%84%E8%BF%98%E4%B8%8A%E4%BA%86%E5%A4%AE%E8%A7%86&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：一家人遛弯误入剧组还上了央视",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%80%E5%AE%B6%E4%BA%BA%E9%81%9B%E5%BC%AF%E8%AF%AF%E5%85%A5%E5%89%A7%E7%BB%84%E8%BF%98%E4%B8%8A%E4%BA%86%E5%A4%AE%E8%A7%86"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：一家人遛弯误入剧组还上了央视",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%80%E5%AE%B6%E4%BA%BA%E9%81%9B%E5%BC%AF%E8%AF%AF%E5%85%A5%E5%89%A7%E7%BB%84%E8%BF%98%E4%B8%8A%E4%BA%86%E5%A4%AE%E8%A7%86"
                }
              ]
            },
            {
              "id": "20261121-social-3",
              "title": "睡觉穿袜子有助入睡 但5类人不建议",
              "desc": "来自百度热搜的热点：睡觉穿袜子有助入睡 但5类人不建议。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "睡觉穿袜子有助入睡 但5类人不建议",
                  "url": "https://m.baidu.com/s?word=%E7%9D%A1%E8%A7%89%E7%A9%BF%E8%A2%9C%E5%AD%90%E6%9C%89%E5%8A%A9%E5%85%A5%E7%9D%A1+%E4%BD%865%E7%B1%BB%E4%BA%BA%E4%B8%8D%E5%BB%BA%E8%AE%AE&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：睡觉穿袜子有助入睡 但5类人不建议",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%9D%A1%E8%A7%89%E7%A9%BF%E8%A2%9C%E5%AD%90%E6%9C%89%E5%8A%A9%E5%85%A5%E7%9D%A1%20%E4%BD%865%E7%B1%BB%E4%BA%BA%E4%B8%8D%E5%BB%BA%E8%AE%AE"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：睡觉穿袜子有助入睡 但5类人不建议",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%9D%A1%E8%A7%89%E7%A9%BF%E8%A2%9C%E5%AD%90%E6%9C%89%E5%8A%A9%E5%85%A5%E7%9D%A1%20%E4%BD%865%E7%B1%BB%E4%BA%BA%E4%B8%8D%E5%BB%BA%E8%AE%AE"
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
              "id": "20261121-meme-1",
              "title": "两张历史性同框照为何在中国定格",
              "desc": "来自百度热搜的热点：两张历史性同框照为何在中国定格。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "两张历史性同框照为何在中国定格",
                  "url": "https://m.baidu.com/s?word=%E4%B8%A4%E5%BC%A0%E5%8E%86%E5%8F%B2%E6%80%A7%E5%90%8C%E6%A1%86%E7%85%A7%E4%B8%BA%E4%BD%95%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%AE%9A%E6%A0%BC&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：两张历史性同框照为何在中国定格",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%A4%E5%BC%A0%E5%8E%86%E5%8F%B2%E6%80%A7%E5%90%8C%E6%A1%86%E7%85%A7%E4%B8%BA%E4%BD%95%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%AE%9A%E6%A0%BC"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：两张历史性同框照为何在中国定格",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%A4%E5%BC%A0%E5%8E%86%E5%8F%B2%E6%80%A7%E5%90%8C%E6%A1%86%E7%85%A7%E4%B8%BA%E4%BD%95%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%AE%9A%E6%A0%BC"
                }
              ]
            },
            {
              "id": "20261121-meme-2",
              "title": "数学家称与 AI 合作证明了黎曼猜想，证明稿超 25 万页，黎曼猜想真的被解决了吗？",
              "desc": "近期，levent alpoge 公开了一份名为 remark.pdf`的文档（见alpo.ge/remark.pdf），宣称自己与Claude 合作，发现了黎曼猜想（Riemann Hypothesis）的证明。 根据公开文档中的内容，作。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "数学家称与 AI 合作证明了黎曼猜想，证明稿超 25 万页，黎曼猜想真的被解决了",
                  "url": "https://www.zhihu.com/question/2107239235015263500"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：数学家称与 AI 合作证明了黎曼猜想，证",
                  "url": "https://www.zhihu.com/search?type=content&q=%E6%95%B0%E5%AD%A6%E5%AE%B6%E7%A7%B0%E4%B8%8E%20AI%20%E5%90%88%E4%BD%9C%E8%AF%81%E6%98%8E%E4%BA%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%20%E8%AF%81%E6%98%8E%E7%A8%BF%E8%B6%85%20"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：数学家称与 AI 合作证明了黎曼猜想，证",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%95%B0%E5%AD%A6%E5%AE%B6%E7%A7%B0%E4%B8%8E%20AI%20%E5%90%88%E4%BD%9C%E8%AF%81%E6%98%8E%E4%BA%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%20%E8%AF%81%E6%98%8E%E7%A8%BF%E8%B6%85%20"
                }
              ]
            },
            {
              "id": "20261121-meme-3",
              "title": "人民日报评“老人拆墙让路遭质疑”",
              "desc": "来自百度热搜的热点：人民日报评“老人拆墙让路遭质疑”。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "人民日报评“老人拆墙让路遭质疑”",
                  "url": "https://m.baidu.com/s?word=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E2%80%9C%E8%80%81%E4%BA%BA%E6%8B%86%E5%A2%99%E8%AE%A9%E8%B7%AF%E9%81%AD%E8%B4%A8%E7%96%91%E2%80%9D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：人民日报评“老人拆墙让路遭质疑”",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E2%80%9C%E8%80%81%E4%BA%BA%E6%8B%86%E5%A2%99%E8%AE%A9%E8%B7%AF%E9%81%AD%E8%B4%A8%E7%96%91%E2%80%9D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：人民日报评“老人拆墙让路遭质疑”",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E2%80%9C%E8%80%81%E4%BA%BA%E6%8B%86%E5%A2%99%E8%AE%A9%E8%B7%AF%E9%81%AD%E8%B4%A8%E7%96%91%E2%80%9D"
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
              "id": "20261121-edu-1",
              "title": "非京籍家庭在西城：四证审核与工作居住证新规",
              "desc": "非京籍入学需通过四证审核（就业、住所、户口簿、居住证明）。2026 年北京工作居住证社保要求缩短至 3-12 个月，部分学历可凭中级职称申请。非京籍在西城小升初与京籍同平台填报，但住房产多校划片规则一致。",
              "take": "非京籍家庭的关键词是「提前一年准备材料」，临到报名再办基本来不及。",
              "tags": [
                "非京籍"
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
              "id": "20261121-edu-2",
              "title": "对口直升：80% 比例的 14 组小学-初中组合",
              "desc": "西城 14 组直升组合（如三帆附小→三帆、宏庙→北师大实验分校、西什库→四中），直升比例 80%，要求连续 6 年本校学籍。注意：731 后购房家庭在部分热门直升校（三帆附小、宏庙、西什库等）暂不享直升资格。",
              "take": "直升是最确定的通路，但「连续六年学籍 + 731 前购房」两个条件缺一不可。",
              "tags": [
                "小升初",
                "对口直升"
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
            },
            {
              "id": "20261121-edu-3",
              "title": "2026 年西城小升初新增三所优质初中，全部面向全区派位",
              "desc": "十三分德胜校区（本部直属，8 个班约 320 人）、北京第四实验学校（初中寄宿班约 80 人，保留西城学籍）、北师大实验中学广外校区（360 人）。三所新校 2026 年 9 月开学，全部纳入全区派位。",
              "take": "新增学位集中投放，对德胜等热门学区的派位池是直接利好。",
              "tags": [
                "小升初",
                "新校"
              ],
              "links": [
                {
                  "platform": "小升初信息网",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 西城小升初新增 3 所优质初中",
                  "url": "https://www.xscxx.com/youshengxiao/zhuanti/2025032713587.html"
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
              "id": "20261121-house-1",
              "title": "731 政策对购房的直接影响：买房 ≠ 锁定学校",
              "desc": "2020 年 7 月 31 日后购房，幼升小走多校划片（在学区或相邻学区内派位），「买哪套房 = 上哪所学校」的公式在西城已不成立。房子决定的是划片池，摇号与调剂仍有变数，二孩顺位是唯一的强确定项。",
              "take": "为「某所学校」付高溢价的逻辑已经变了，为「学区整体质量」付费更稳。",
              "tags": [
                "731政策",
                "购房逻辑"
              ],
              "links": [
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：西城 731 多校划片 买房",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%A5%BF%E5%9F%8E%20731%20%E5%A4%9A%E6%A0%A1%E5%88%92%E7%89%87%20%E4%B9%B0%E6%88%BF"
                },
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
              "id": "20261121-house-2",
              "title": "新明胡同：育翔/实验二小双划片的老社区",
              "desc": "划片育翔小学与实验二小德胜校区，2021 年高点约 16 万/㎡，2026 年约 9.7 万/㎡（跌幅 40%）。社区老但紧邻人定湖公园，生活配套成熟，月成交稳定在 5 套上下，流通性不错。",
              "take": "公园旁边的老社区，居住体验比数字上的「老」要好，适合实地验证。",
              "tags": [
                "改善盘",
                "老公房"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：新明胡同",
                  "url": "https://bj.ke.com/xiaoqu/rs%E6%96%B0%E6%98%8E%E8%83%A1%E5%90%8C/"
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
              "id": "20261121-house-3",
              "title": "德胜里一区：1987 年楼龄，成交活跃的育翔划片盘",
              "desc": "育翔小学划片，1987 年建成，18 层带电梯塔楼，10 月成交 48-60㎡ 户型单价 10.3-11.4 万/㎡。满五唯一房源为主，挂牌价与成交价差距不大，是德胜置换链条里的标准盘。",
              "take": "带电梯的老塔楼比无电梯板楼抗跌，看房时先看楼体形态再谈价格。",
              "tags": [
                "育翔划片",
                "成交活跃"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：德胜里一区",
                  "url": "https://bj.ke.com/xiaoqu/rs%E5%BE%B7%E8%83%9C%E9%87%8C%E4%B8%80%E5%8C%BA/"
                },
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 年 10 月西城德胜成交汇总",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzI3NTAyMDA2Mg==&mid=2649152369&idx=2&sn=40a421b4464690556aab4807c525e744&chksm=f21aa41911b6db671c72d89bdb7773ee33402441c482263dc2723d20148bb5b4dfdc7cd34322#rd"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-11-20",
      "weekday": "周五",
      "issue": 6,
      "updatedAt": "2026-11-20 00:58",
      "mode": "auto",
      "sections": [
        {
          "id": "ai",
          "name": "人工智能",
          "desc": "模型迭代、算力格局与产品落地",
          "items": [
            {
              "id": "20261120-ai-1",
              "title": "阿里巴巴 CEO 吴泳铭：2027、2028 年将是中国算力最紧缺的两年",
              "desc": "IT之家 11 月 19 日消息，据界面新闻今日报道，在 2027 财年第二季度财报分析师电话会上，阿里巴巴集团 CEO 吴泳铭表示， 2027 年和 2028 年，将是中国算力最紧缺的两年 。2027 年以后，阿里云的芯片供给都会以国产平。",
              "take": "",
              "tags": [
                "IT之家"
              ],
              "links": [
                {
                  "platform": "IT之家",
                  "type": "原文",
                  "kind": "article",
                  "title": "阿里巴巴 CEO 吴泳铭：2027、2028 年将是中国算力最紧缺的两年",
                  "url": "https://www.ithome.com/1/029/682.htm"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：阿里巴巴 CEO 吴泳铭：2027、20",
                  "url": "https://www.zhihu.com/search?type=content&q=%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%20CEO%20%E5%90%B4%E6%B3%B3%E9%93%AD%EF%BC%9A2027%E3%80%812028%20%E5%B9%B4"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：阿里巴巴 CEO 吴泳铭：2027、20",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%20CEO%20%E5%90%B4%E6%B3%B3%E9%93%AD%EF%BC%9A2027%E3%80%812028%20%E5%B9%B4"
                }
              ]
            },
            {
              "id": "20261120-ai-2",
              "title": "英伟达临时CEO称将不再向中国出货H200芯片；一天之内173名管理人员被免，宗馥莉大规模「",
              "desc": "要闻提示 1.英特尔被曝再度裁员，波及全球IT员工 2.英伟达临时CEO称将不再向中国出货H200芯片，外交部回应 3.权志龙母公司将推机器人女团，与宇树合作的K-pop演唱会12月首演 4.宗馥莉再掀人事风暴：173名管理人员被免职 5.。",
              "take": "",
              "tags": [
                "雷锋网"
              ],
              "links": [
                {
                  "platform": "雷锋网",
                  "type": "原文",
                  "kind": "article",
                  "title": "英伟达临时CEO称将不再向中国出货H200芯片；一天之内173名管理人员被免，宗",
                  "url": "https://www.leiphone.com/category/zaobao/wMg9SCFKwT7JSsGq.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：英伟达临时CEO称将不再向中国出货H20",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E7%A7%B0%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E5%87%BA%E8%B4%A7H200%E8%8A%AF%E7%89%87%EF%BC%9B"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：英伟达临时CEO称将不再向中国出货H20",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E7%A7%B0%E5%B0%86%E4%B8%8D%E5%86%8D%E5%90%91%E4%B8%AD%E5%9B%BD%E5%87%BA%E8%B4%A7H200%E8%8A%AF%E7%89%87%EF%BC%9B"
                }
              ]
            },
            {
              "id": "20261120-ai-3",
              "title": "范式下场做基模了！国产算力全链路训练，双模型同步亮相",
              "desc": "来自量子位的热点：范式下场做基模了！国产算力全链路训练，双模型同步亮相。",
              "take": "",
              "tags": [
                "量子位"
              ],
              "links": [
                {
                  "platform": "量子位",
                  "type": "原文",
                  "kind": "article",
                  "title": "范式下场做基模了！国产算力全链路训练，双模型同步亮相",
                  "url": "https://www.qbitai.com/2026/11/511071.html"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：范式下场做基模了！国产算力全链路训练，双",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%8C%83%E5%BC%8F%E4%B8%8B%E5%9C%BA%E5%81%9A%E5%9F%BA%E6%A8%A1%E4%BA%86%20%E5%9B%BD%E4%BA%A7%E7%AE%97%E5%8A%9B%E5%85%A8%E9%93%BE%E8%B7%AF%E8%AE%AD%E7%BB%83%20%E5%8F%8C%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：范式下场做基模了！国产算力全链路训练，双",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%8C%83%E5%BC%8F%E4%B8%8B%E5%9C%BA%E5%81%9A%E5%9F%BA%E6%A8%A1%E4%BA%86%20%E5%9B%BD%E4%BA%A7%E7%AE%97%E5%8A%9B%E5%85%A8%E9%93%BE%E8%B7%AF%E8%AE%AD%E7%BB%83%20%E5%8F%8C%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5"
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
              "id": "20261120-social-1",
              "title": "中俄美元首和平宣言",
              "desc": "来自百度热搜的热点：中俄美元首和平宣言。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中俄美元首和平宣言",
                  "url": "https://m.baidu.com/s?word=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中俄美元首和平宣言",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中俄美元首和平宣言",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80"
                }
              ]
            },
            {
              "id": "20261120-social-2",
              "title": "30年 第一次叫“倡议”",
              "desc": "来自百度热搜的热点：30年 第一次叫“倡议”。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "30年 第一次叫“倡议”",
                  "url": "https://m.baidu.com/s?word=30%E5%B9%B4+%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8F%AB%E2%80%9C%E5%80%A1%E8%AE%AE%E2%80%9D&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：30年 第一次叫“倡议”",
                  "url": "https://www.zhihu.com/search?type=content&q=30%E5%B9%B4%20%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8F%AB%E2%80%9C%E5%80%A1%E8%AE%AE%E2%80%9D"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：30年 第一次叫“倡议”",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=30%E5%B9%B4%20%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8F%AB%E2%80%9C%E5%80%A1%E8%AE%AE%E2%80%9D"
                }
              ]
            },
            {
              "id": "20261120-social-3",
              "title": "中国支持成立新联盟",
              "desc": "来自百度热搜的热点：中国支持成立新联盟。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中国支持成立新联盟",
                  "url": "https://m.baidu.com/s?word=%E4%B8%AD%E5%9B%BD%E6%94%AF%E6%8C%81%E6%88%90%E7%AB%8B%E6%96%B0%E8%81%94%E7%9B%9F&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中国支持成立新联盟",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E5%9B%BD%E6%94%AF%E6%8C%81%E6%88%90%E7%AB%8B%E6%96%B0%E8%81%94%E7%9B%9F"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中国支持成立新联盟",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E5%9B%BD%E6%94%AF%E6%8C%81%E6%88%90%E7%AB%8B%E6%96%B0%E8%81%94%E7%9B%9F"
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
              "id": "20261120-meme-1",
              "title": "起床后这4件事易引发心梗",
              "desc": "来自百度热搜的热点：起床后这4件事易引发心梗。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "起床后这4件事易引发心梗",
                  "url": "https://m.baidu.com/s?word=%E8%B5%B7%E5%BA%8A%E5%90%8E%E8%BF%994%E4%BB%B6%E4%BA%8B%E6%98%93%E5%BC%95%E5%8F%91%E5%BF%83%E6%A2%97&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：起床后这4件事易引发心梗",
                  "url": "https://www.zhihu.com/search?type=content&q=%E8%B5%B7%E5%BA%8A%E5%90%8E%E8%BF%994%E4%BB%B6%E4%BA%8B%E6%98%93%E5%BC%95%E5%8F%91%E5%BF%83%E6%A2%97"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：起床后这4件事易引发心梗",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B5%B7%E5%BA%8A%E5%90%8E%E8%BF%994%E4%BB%B6%E4%BA%8B%E6%98%93%E5%BC%95%E5%8F%91%E5%BF%83%E6%A2%97"
                }
              ]
            },
            {
              "id": "20261120-meme-2",
              "title": "网友偶遇泰国总理夫妇逛深圳南头古城",
              "desc": "来自百度热搜的热点：网友偶遇泰国总理夫妇逛深圳南头古城。",
              "take": "",
              "tags": [
                "百度热搜"
              ],
              "links": [
                {
                  "platform": "百度热搜",
                  "type": "原文",
                  "kind": "article",
                  "title": "网友偶遇泰国总理夫妇逛深圳南头古城",
                  "url": "https://m.baidu.com/s?word=%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%A4%AB%E5%A6%87%E9%80%9B%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%A4%B4%E5%8F%A4%E5%9F%8E&sa=fyb_news"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：网友偶遇泰国总理夫妇逛深圳南头古城",
                  "url": "https://www.zhihu.com/search?type=content&q=%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%A4%AB%E5%A6%87%E9%80%9B%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%A4%B4%E5%8F%A4%E5%9F%8E"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：网友偶遇泰国总理夫妇逛深圳南头古城",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%A4%AB%E5%A6%87%E9%80%9B%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%A4%B4%E5%8F%A4%E5%9F%8E"
                }
              ]
            },
            {
              "id": "20261120-meme-3",
              "title": "中俄美元首发表和平宣言，三国元首重申核战争打不赢也打不得，哪些信息值得重点关注？",
              "desc": "中俄美元首和平宣言 中国国家主席习近平、俄罗斯总统普京、美国总统特朗普于2026年11月19日在深圳举行会晤。俄美领导人感谢中方主办此次历史性会晤。三国元首就当前国际形势深入交换了意见，致力于维护战略稳定和国际安全。 一、中国、俄罗斯、美国。",
              "take": "",
              "tags": [
                "知乎热榜"
              ],
              "links": [
                {
                  "platform": "知乎热榜",
                  "type": "原文",
                  "kind": "article",
                  "title": "中俄美元首发表和平宣言，三国元首重申核战争打不赢也打不得，哪些信息值得重点关注？",
                  "url": "https://www.zhihu.com/question/2106822157141534200"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：中俄美元首发表和平宣言，三国元首重申核战",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%8F%91%E8%A1%A8%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80%20%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E9%87%8D%E7%94%B3%E6%A0%B8%E6%88%98%E4%BA%89%E6%89%93%E4%B8%8D%E8%B5%A2"
                },
                {
                  "platform": "小红书",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "小红书笔记：中俄美元首发表和平宣言，三国元首重申核战",
                  "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%8F%91%E8%A1%A8%E5%92%8C%E5%B9%B3%E5%AE%A3%E8%A8%80%20%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E9%87%8D%E7%94%B3%E6%A0%B8%E6%88%98%E4%BA%89%E6%89%93%E4%B8%8D%E8%B5%A2"
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
              "id": "20261120-edu-1",
              "title": "特色校、寄宿班与民办校：第二优先级的三类选择",
              "desc": "与全区派位同批填报：特色校 6 所（回民学校、徐悲鸿美术、月坛日语、西城外国语多语种等）、寄宿校 3 所、民办校可兼报多所。特色校之间不可兼报，被多校同时初录只能确认 1 所且不可更改。",
              "take": "有明确特长方向（外语、美术）的孩子，这一批次值得用足。",
              "tags": [
                "小升初",
                "特色校"
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
            },
            {
              "id": "20261120-edu-2",
              "title": "西城小升初六大途径的录取顺序，一次填报全部生效",
              "desc": "所有入学意向 5 月下旬一次性同时填报，按顺序录取：全区派位 → 特色/寄宿/民办 → 对口直升 → 学区登记 → 学区派位。前一批次录取后，后面批次自动作废。理解顺序是填志愿的前提。",
              "take": "全区派位是「冲高」机会，一旦命中后面志愿全部作废，顺序要按真实意愿排。",
              "tags": [
                "小升初",
                "志愿填报"
              ],
              "links": [
                {
                  "platform": "小升初信息网",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "2026 西城小升初新政全解析",
                  "url": "https://www.xscxx.com/xiaoshengchu/xcqxsc/2026040813504.html"
                }
              ]
            },
            {
              "id": "20261120-edu-3",
              "title": "全区派位：西城小升初的第一优先级，2026 年扩招 1200 人",
              "desc": "全区派位可自愿填 1-5 所全区任意初中，不看学区。2026 年总计划 6010 人，较上年扩招超 25%：十三分什刹海校区 +320、一六一广安分校 +160、四中道元 +80、三帆 +70、北师大附中 +80。",
              "take": "名额多的学校中签概率相对高，这是普通学区内孩子进优质初中最公平的一扇门。",
              "tags": [
                "小升初",
                "全区派位"
              ],
              "links": [
                {
                  "platform": "北京小升初网",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "西城小升初全区派位招生计划汇总",
                  "url": "https://www.xschu.com/zhengcezixun/88628.html"
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
              "id": "20261120-house-1",
              "title": "改善看房的九项硬清单",
              "desc": "德胜老房子情况复杂，实地看房逐项过：产权性质（商品房/央产/经适房）、抵押查封、学位占用、税费年限、楼层与电梯、户型改造空间、车位、物业与取暖费、腾房时间。成交快的房子都是条件干净的。",
              "take": "九项里任何一项含糊，就先别交定金——条件说清楚比藏着值钱。",
              "tags": [
                "看房清单"
              ],
              "links": [
                {
                  "platform": "微信公众号",
                  "type": "深度 / 解读",
                  "kind": "article",
                  "title": "德胜周记 · 每周成交复盘",
                  "url": "http://mp.weixin.qq.com/s?__biz=MzI3NTAyMDA2Mg==&mid=2649152063&idx=1&sn=e00d5d0fb03e31949f81d5ef12ff3db8&chksm=f2805e4ae251e84bf675fe0d8e4ed52341801ebe829c6167a66ddd1ab9da28f6328b757cb14b#rd"
                },
                {
                  "platform": "知乎",
                  "type": "站内话题",
                  "kind": "topic",
                  "title": "知乎讨论：二手房 看房 注意事项 清单",
                  "url": "https://www.zhihu.com/search?type=content&q=%E4%BA%8C%E6%89%8B%E6%88%BF%20%E7%9C%8B%E6%88%BF%20%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%20%E6%B8%85%E5%8D%95"
                }
              ]
            },
            {
              "id": "20261120-house-2",
              "title": "双旗杆东里：五路通划片的主力老公房社区",
              "desc": "五路通小学划片内体量较大的社区，2021 年高点约 14.6 万/㎡，2026 年回落至 9.4 万/㎡左右（跌幅约 36%）。户型以一居、两居为主，楼龄老但位置紧贴五路通，是「以五路通为中心」搜索时的第一圈层。",
              "take": "价格已从高点回落三成以上，同样是老公房，它比高点时便宜了三分之一。",
              "tags": [
                "五路通划片",
                "老公房"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：双旗杆东里",
                  "url": "https://bj.ke.com/xiaoqu/rs%E5%8F%8C%E6%97%97%E6%9D%86%E4%B8%9C%E9%87%8C/"
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
              "id": "20261120-house-3",
              "title": "什坊街 2 号院：跌幅最大的五路通划片盘，水分挤得最干",
              "desc": "五路通小学划片，2021 年高点 17.86 万/㎡，2026 年回落至约 9.6 万/㎡，跌幅约 47%，是德胜跌得最狠的小区之一。老楼无电梯、户型旧，高点的溢价主要来自学位，如今已基本挤干。",
              "take": "它标注了纯学位房的定价底线：学区溢价退潮后，房子本身值多少钱。",
              "tags": [
                "五路通划片",
                "价格参考"
              ],
              "links": [
                {
                  "platform": "贝壳",
                  "type": "在售房源",
                  "kind": "topic",
                  "title": "贝壳在售：什坊街2号院",
                  "url": "https://bj.ke.com/xiaoqu/rs%E4%BB%80%E5%9D%8A%E8%A1%972%E5%8F%B7%E9%99%A2/"
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
