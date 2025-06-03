<template>
  <iframe v-if="$route.query.url" ref="iframe" :src="$route.query.url" frameborder="0" width="100%" class="article-detail-iframe"></iframe>
  <div class="article-detail" v-else-if="articleDetail">
    <div class="article-detail-title">
      <n-skeleton height="60px" v-if="isLoading"/>
      <h1 v-else>{{ articleDetail.title }}</h1>
    </div>
    <div class="" v-if="isLoading">
      <n-skeleton style="margin: 10px 0;" height="20px" text :repeat="20" />
    </div>
    <article class="article-detail-content" >{{ articleDetail.content }}</article>
  </div>
  <div class="article-detail-empty" v-else>
    <n-empty description="你什么也找不到" size="large">
    <template #extra>
      <n-button size="small" @click="$router.push({name:'ArticleView'})">
        看看别的
      </n-button>
    </template>
  </n-empty>
  </div>
</template>

<script setup>
import { ElLoading } from 'element-plus'
const articleList = ref([
  {
    id:1,
    title:'“2.5万元就买了个摆设？”Vision Pro用户一年后集体后悔：吃灰、脖子疼、卖不掉!',
    img: new URL('@/assets/images/article/img1.png',import.meta.url).href,
    content:`整理 | 郑丽媛

出品 | CSDN（ID：CSDNnews）

还记得去年 2 月苹果 Vision Pro 正式发售时，科技圈被它搅得火热的场景吗？

当时，它就像一个来自未来的使者，承载着大家对空间计算时代的无限遐想。那时库克对苹果 Vision Pro 的期望也仿佛还在耳边回响：“正如 Mac 电脑开启了 PC 革命，iPhone 引领了现代移动计算的潮流，苹果 Vision Pro 正站在新的历史起点上，揭开空间计算时代的序幕。”

可谁能想到，仅仅一年多过去，剧情却来了个大反转。曾经被寄予厚望的 Vision Pro，如今在市场上却遭遇了滑铁卢：这款售价高达 3500 美元（约合人民币 2.5 万元）的混合现实头显，被用户频繁吐槽 “买了就后悔，只能在家吃灰”。

“我买了个苹果 Vision Pro，结果它成了家里的昂贵摆设。”——这是许多苹果 Vision Pro 用户在购买一年后发出的共同感叹。





3500 美元的“高价玩具”，如今无人问津 

自 2024 年 2 月苹果 Vision Pro 正式发售以来，市场对它的反应就像坐了过山车。

刚上市时，凭借苹果的品牌光环和前期铺天盖地的宣传，确实吸引了一大批科技尝鲜者和忠实果粉的关注，首发周末的预购量一度看似很可观，据估算，在正式发布前的 1 月份，苹果仅用一个周末就通过预售卖出了 16-18 万台。 

可热潮退去后，残酷的现实摆在眼前：近来《华尔街日报》的调查采访显示，众多早期购买者如今满心懊悔。

当初，弗吉尼亚州的房地产经纪人 Dustin Fox 被苹果 Vision Pro 的新奇感和可能提升工作效率的宣传所吸引，可如今他只无奈表示：“它现在完全在吃灰，过去一年我大概就用了四次。这东西太重了，我戴 20-30 分钟脖子就疼得受不了。” 

另一位买家 Tovia Goldstein 也抱怨连连：“戴 60 分钟后，你就再也受不了，只能把它扔下来。我绝对不建议别人买，除非你钱多到没处花。”他还特别提到 Vision Pro 启动时间过长，连接外接电池后，还要等好几分钟设备才能使用，十分影响体验。 

还有不少消费者反映，在公共场合佩戴 Vision Pro 会遭遇异样的眼光和负面评价，有人因此干脆以大幅低于购买价的价格将其转手，损失惨重。



不仅价格贵、设备重，还问题频出

最重要的是，苹果 Vision Pro 的问题可不止用户体验不佳这一点。

高昂的售价，3500 美元的定价，让绝大多数普通消费者望而却步，即便对苹果忠实粉丝而言，这也是一笔不小的开支。而且，除了硬件本身价格高，若用户有视力矫正需求，还得额外花费 149 美元购买定制镜片；为减少维修成本，购买 Apple care 又得花 499 美元——算下来，总支出近 4000 美元，这无疑让更多人对其敬而远之。 

在性能方面，虽然 Vision Pro 号称拥有先进的技术，但实际表现却未能达到人们的预期。

例如，它的重量问题一直饱受诟病，650 克的机身，长时间佩戴会给头部和颈部带来沉重负担。即便苹果为其配备了两种不同的带子，试图改善佩戴舒适度，但从上文的用户评价来看，效果依旧不理想。单带的 Solo Knit Band 包裹性强但对脸颊压力大，双带的 Dual Loop Band 虽分散了部分压力，却又会压头发，总之都不舒服。 

苹果 Vision Pro 的续航也是个大麻烦。外置电池续航仅 2 - 2.5 小时，而且电池像个巨型充电宝，又沉又不方便：使用时，头上戴着头显，口袋装着电池，中间还连着一根线，别提多累赘了。另外，Vision Pro 还存在漏光、视场角狭窄等问题，其中漏光可能是因为亚洲人鼻型问题导致遮光罩无法完全贴合，视场角则与分辨率和芯片算力相关，屏幕四周的黑边影响视觉体验。 

而在软件生态方面，Vision Pro 同样面临困境。苹果至今未能推出一款真正能吸引用户、充分发挥设备潜力的 “杀手级应用”。虽说有超过 2000 款专为 Vision Pro 设计的空间应用，以及 150 多万款兼容的 iOS 和 iPadOS 应用，但这些应用在实际使用中，并没有展现出与传统设备应用截然不同的独特优势——许多用户反馈，除了看电影能有较好的沉浸式体验外，在日常办公、社交等场景下，Vision Pro 并没有比电脑、手机等现有设备带来更多便利。



销量惨淡，苹果紧急调整策略

市场研究机构 IDC 的数据也印证了 Vision Pro 的困境。自去年 2 月份在美国推出以来，Vision Pro 仅在发售初期短暂火爆，随后销量便一蹶不振，单个季度销量从未突破 10 万台，且三季度美国销量较二季度下降了 75%。

因此在去年 7 月份，IDC 就预计：苹果 Vision Pro 全年全球销量不会超过 50 万台。

面对 Vision Pro 糟糕的市场表现，苹果的应对策略也随之调整。据媒体报道，仅发售 2 个月后，苹果便迅速将 Vision Pro 的年度出货量预测减半，降至约 40 万台。甚至有消息称，Vision Pro 的供应商在 2024 年 5 月，也就是设备推出仅三个月后，就停止了生产相关组件。 

到了今年 1 月，由于需求持续低迷，苹果已经“暂时”停止了 Vision Pro 的生产。不过，据悉苹果并未完全放弃这块市场：有知情人士透露，苹果仍在积极研发两款新的 VR 头显，其中包括更轻、更便宜的 Vision Pro 2 继任者，试图挽回局面。 

那么，你又是否仍对苹果头显充满期待呢？
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        `
  },
  {
    id:2,
    title:'DeepSeek R1迎来小更新大升级，性能直逼OpenAI o3！',
    img: new URL('@/assets/images/article/img2.png',import.meta.url).href,
    content:`整理 | 苏宓

出品 | CSDN（ID：CSDNnews）

昨日，DeepSeek 悄然发布了其 R1 大模型的最新版本——DeepSeek-R1-0528，目前已开启公测。

一贯低调的 DeepSeek 在此番发布时，并未附带详细的技术说明，只是在官方微信社群中告知用户，“DeepSeek R1 模型已完成小版本试升级”，大家可以自行前往官方网页、APP、小程序进行测试。

Hugging Face 地址：https://huggingface.co/deepseek-ai/DeepSeek-R1-0528



但从用户体验反馈来看，本次名曰”小更新“也依然带来了不小的实质性改进，尤其是在推理和输出方面。具体来看，新版的 DeepSeek R1：

推理能力增强：模型在“思维链”（Chain-of-Thought）推理方面表现更为结构化，逻辑性更强。



文本输出质量提升：生成的文本更具条理，语言风格更为成熟，接近 Google 等领先模型的水平。

代码生成优化：在编程任务中，R1 的输出更为连贯，代码质量更高。

对此，Reddit 用户 B89983ikei 在使用后表示：“它在编程方面真的非常厉害！！只用一次对话，就能创建一个完整的游戏，包含多个选项，而且完全可玩！！

我注意到新版 R1 的一个显著变化是……它在编程方面更强了！！但它却在一些（未知的）演绎推理挑战上失败了……这些题它以前可是能答对的！！另一个明显的变化是，现在它在推理时会体现出差异性，而且会用用户的母语思考，不再像以前那样只用英文。”

不过，B89983ikei 也补充道：「对我来说，我很喜欢解决那种偏“抽象”的推理题……所以我觉得这个版本的 R1 反而变弱了。我猜这是因为它现在的思维方式发生了变化……它更专注于精确的问题，反而忽略了更抽象的部分。我不确定这是不是一件好事！！对我来说，这是个倒退……

当我们去掉那些更抽象的思维时，也许就等于在去掉更接近“真实思考”的东西！！如果你能明白我在说什么……有没有其他人也注意到了这一点！？

还有，这次更新的文本格式我也不太喜欢……更让人困惑！！没有以前看着舒服了……用了太多没必要的 emoji！！这些是一个喜欢并一直在用 DeepSeek 的用户的建设性批评！！」



与此同时，也有网友发现新版 DeepSeek R1 在响应时间上略有增加，但多数用户认为这是为了获得更准确结果而值得的权衡。

在进行测试后，还有用户给出了新款 Deepseek R1 的第一个基准测试！

新的 Deepseek R1-0528 在 LiveCodeBench 基准测试中的表现几乎与 o3（high）相当。



X 网友 Yuchen Jin 经过实测还发现，”我的氛围检查：它似乎是唯一能够始终正确回答’9.9 - 9.11 是多少？‘的模型。“



和旧版对比时，OpenRouter 透露，“新版本的 DeepSeek R1 目前已训练至 1 亿 tokens，且还在持续增长，其中还包括一个免费版本！”对比图如下所示：



整体来看，DeepSeek 自 2023 年成立以来，一直在专注打造高性能的通用人工智能模型。像 DeepSeek v3 和 R1 这样的模型，在多个评测中都拿到了很不错的成绩。特别是 R1，它是开源的，采用 MIT 协议，大家可以免费使用、修改，甚至拿来做商业项目，这对于推动 AI 技术的普及和创新有很大帮助。

那么你试用上最新的 R1 模型了吗？感觉怎么样？欢迎留言分享你的使用体验！
`
  },
  {
    id:3,
    title:'字节内部禁用Cursor等第三方AI开发工具；荣耀确认进军机器人业务；iOS 18.5更新引发设备发热和耗电问题 | 极客头条',
    img: new URL('@/assets/images/article/img3.png',import.meta.url).href,
    content:`整理 | 郑丽媛

出品 | CSDN（ID：CSDNnews）



一分钟速览新闻点！
字节发最新内部邮件：禁用 Cursor 等第三方 AI 开发软件

荣耀确认进军机器人业务，机器人跑步速度达 4m/s

大疆进军扫地机器人市场，预计 6 月发布首款高端产品：研发超 4 年

王腾回应 REDMI 何时用上玄戒芯片：我们真的急不来

Meta AI 月活用户破 10 亿，扎克伯格：将探索付费服务与订阅模式

Telegram 与马斯克旗下 xAI 达成合作：在其应用中集成 Grok

前Meta、谷歌员工组队，AI技术大佬融资1300万美元做AI建模，AI秒生3D模型

苹果计划打造独立游戏平台：取代 game center 服务

图片授权公司 Getty Images 拟起诉文生图 AI 公司 Stability AI

iOS 18.5 更新引发热议：部分 iPhone 用户遭遇发烫耗电问题

谷歌开源 LMEval 框架，面向 AI 大模型的评测工具

腾讯云推出云开发 AI Toolkit，国内首个面向智能编程的后端服务

Mistral AI 发布 Codestral Embed



国内要闻
字节发最新内部邮件：禁用 Cursor 等第三方 AI 开发软件

5月28日，字节跳动安全与风控部门发布邮件称，出于对防范数据泄露风险的考虑，自6月30日起，将在内部分批次禁用第三方AI开发软件，包括AI编程工具Cursor、Windsurf等，并将字节旗下的编程助手Trae作为替代方案。

据悉，今年3月3日，字节跳动发布AI编程工具Trae国内版，搭载基座大模型doubao-1.5-pro，支持切换满血版DeepSeek R1&V3，是国内首个AI原生 IDE（AI原生集成开发环境工具）。据介绍，相比IDE智能插件，Trae国内版具备更强的上下文感知，能理解整个项目代码。（鞭牛士）

荣耀确认进军机器人业务，机器人跑步速度达 4m/s

5 月 28 日消息，在正在举行的荣耀 400 系列新品发布会上，荣耀 CEO 李健确认该公司进军机器人业务。李健在发布会上讲述了其员工与机器人研发的故事，意外官宣了荣耀已经进军机器人的消息。据介绍，荣耀的这款机器人跑步速度已经达到 4m/s，打破了之前的机器人行业纪录。

大疆进军扫地机器人市场，预计 6 月发布首款高端产品：研发超 4 年

据报道，有知情人士表示，大疆扫地机器人产品已开始量产，预计将于6月发布。据了解，大疆研发扫地机器人已超过四年，即将上市的产品是扫拖一体机器人。作为全球无人机行业领头羊，大疆在无人机领域积累的路径规划、视觉/激光雷达识别避障能力、高性能电机等，与扫地机器人的技术需求高度契合。（中证金牛座）

王腾回应 REDMI 何时用上玄戒芯片：我们真的急不来

5月28日消息，小米中国区市场部总经理、REDMI品牌总经理王腾发布一段视频回应REDMI何时用玄戒芯片，把价格打下来，王腾称：“我们真的急不来”。他表示，玄戒O1初期研发成本135亿元，分摊到单台机型的成本上就更高了，希望玄戒芯片能够越来越好、越来越成熟，REDMI产品也会持续升档，到时候就有机会用上了。



国际要闻
Meta AI 月活用户破 10 亿，扎克伯格：将探索付费服务与订阅模式

在Meta公司年度股东大会上，首席执行官马克·扎克伯格透露了一个令人瞩目的数字：其人工智能助手现已在Meta应用系列中吸引了10亿月活跃用户。这一里程碑式的成就标志着Meta在AI领域的深入布局和广泛影响力。

扎克伯格在大会上强调，Meta今年的核心战略是深化用户体验，致力于将Meta AI打造为行业领先的个性化人工智能。在谈及商业模式时，扎克伯格表示，meta计划首先专注于产品的持续发展，待产品成熟后再围绕其开展业务。他透露，随着meta AI的不断优化和完善，未来有望推出付费推荐或订阅服务，让用户能够付费享受更多计算资源，从而进一步拓展meta的盈利渠道。

Telegram 与马斯克旗下 xAI 达成合作：在其应用中集成 Grok

近期，Telegram 首席执行官帕维尔·杜罗夫透露了一项令人瞩目的合作计划，该计划与埃隆·马斯克旗下的 xAI 公司携手，旨在提升 Telegram 平台的用户体验。根据双方达成的合作协议，xAI 将向 Telegram 支付高达 3 亿美元的费用，用于在其通讯平台上部署最新研发的人工智能聊天机器人 Grok。这一为期一年的合作，被杜罗夫视为改善 Telegram 财务状况的重要契机。

Grok 是 xAI 精心打造的人工智能产品，其目标是优化 Telegram 用户间的交流体验。通过引入 Grok，用户将享受到更为智能的对话服务，包括更加精准的回复和个性化的建议。这一创新举措预计会吸引更多新用户加入 Telegram，从而增强其在社交媒体市场中的竞争力。

前Meta、谷歌员工组队，AI技术大佬融资1300万美元做AI建模，AI秒生3D模型

5月28日消息，欧洲知名3D AI研究员、慕尼黑工业大学视觉计算与人工智能实验室的Matthias Niessner，已暂停学术工作，创办了一家初创公司SpAItial。Niessner曾是AI虚拟人创业公司Synthesia的联合创始人，他已为SpAItial筹集了1300万美元的种子轮融资——这个金额对欧洲初创公司来说极为罕见。此次融资由欧洲知名早期投资机构Earlybird Venture Capital领投（曾投资UiPath和Peak Games等），Speedinvest和多位重量级天使投资人也参与其中。SpAItial目前尚未展示出太多成果，只有一段预热视频演示了如何通过文本生成一个3D房间。Niessner的技术团队包括：Ricardo Martin-Brualla，曾参与谷歌3D远程会议平台（现称为Beam）的开发；David Novotny，曾在Meta工作六年，负责领导文本生成3D资产的项目等。（科创板日报）

苹果计划打造独立游戏平台：取代 game center 服务

据媒体报道，苹果公司正在开发一款全新的游戏应用程序，计划于今年晚些时候预装在所有苹果设备上，包括iPhone、iPad、Mac和Apple TV。该应用将作为游戏的启动器，并将集成游戏内的成绩、排行榜、通讯和其他活动。此举意在提升苹果设备上的游戏体验，目前玩家有很多选择，包括云服务和游戏机。

据悉，该应用将取代现有的Game Center，是苹果公司为提升其设备上游戏体验所做的努力之一。当前游戏业务已成为苹果服务收入的重要支柱，为App Store贡献约三分之二的营收。（快科技）

图片授权公司 Getty Images 拟起诉文生图 AI 公司 Stability AI

Getty Images 首席执行官克雷格·彼得斯表示，公司正投入数百万美元资金，起诉 Stability AI，指控其未经许可使用 1200 万张受版权保护的图片训练 AI 模型并牟利。Getty CEO 彼得斯称此为不正当竞争，尽管诉讼成本高昂仍坚持维权。Stability AI 辩称其行为符合「合理使用」原则。此案将于 6 月 9 日进行首次责任认定庭审，涉及版权与创新边界的重要法律争议。（新浪财经）



程序员专区
iOS 18.5 更新引发热议：部分 iPhone 用户遭遇发烫耗电问题

苹果近日发布了iOS18.5更新，修复了图像处理、通话记录、蓝牙、FaceTime、WebKit等31个漏洞。但是有用户发现在升级后，自己的设备出现了明显的发烫和耗电过快问题。

一位iPhone15Pro用户表示，更新到iOS18.5之前，他的手机使用一整个早上也仅掉电20%左右，就算玩游戏温度也不会太烫。但更新后，手机变得非常容易发烫，玩10分钟游戏后手机就像铁板”一样烫手，就算是待机一整个早上手机也会微温”，而且电量也会下降约35%。不仅如此，甚至在看视频时，手机直接过热到自动关机。然而也有部分使用iPhone12和13系列的用户表示，此次更新后他们的设备变得更加省电。（快科技）

谷歌开源 LMEval 框架，面向 AI 大模型的评测工具

近日，谷歌在人工智能领域迈出了重要一步，推出了名为LMeval的开源大模型评测框架。该框架的发布旨在提供一个标准化的环境，用于评估当前主流的大模型，如GPT-4o、Claude 3.7 Sonnet、Gemini 2.0 Flash以及Llama-3.1-405B等。

LMeval基于LiteLLM框架构建，这一基础框架使得开发者能够通过统一的API接口，轻松调用包括GPT、Claude、Llama等在内的上百款大模型，并支持流式响应、批量推理及成本监控等功能。通过LMeval，谷歌成功打通了与OpenAI、Anthropic、Ollama和Hugging Face等五大厂商的API接口，实现了跨平台的无缝对接。（ITBEAR）

腾讯云推出云开发 AI Toolkit，国内首个面向智能编程的后端服务

5月28日，腾讯云开发 CloudBase 宣布推出 AI Toolkit（CloudBase AI Toolkit），这是国内首个面向智能编程的后端服务，适配 Cursor 等主流 AI 编程工具。云开发 AI Toolkit旨在解决 AI 辅助编程的“最后一公里”问题，包括后端资源的创建、部署、管理与运维等问题。

开发者在 Cursor 与腾讯云代码助手 CodeBuddy等 AI 编程工具里写代码时，在云开发 AI Toolkit 的帮助下，AI 可自动帮用户生成可直接部署的前后端应用+小程序，并一键发布上线到腾讯云开发 CloudBase 平台，并辅助后期运维工作。

Mistral AI 发布 Codestral Embed

Mistral AI 最近发布了 Codestral Embed，这是一个专为代码优化的嵌入模型，擅长处理现实世界中的代码数据检索，可通过灵活的维度调整和高效的分块策略，适合大规模代码库的 AI 驱动开发工作流。据悉，Codestral Embed 在代码检索任务中表现超越现有主流模型（如 Voyage Code 3、Cohere Embed v4.0 和 OpenAI 大型嵌入模型）。
`
  }
])

const route = useRoute()
const articleDetail = ref({})
const isLoading = ref(false)
const iframe = ref(null)
let loading

function getArticleDetail(query){
  loading = ElLoading.service({
    lock: true,
    text: '正在加载中......',
    background: 'rgba(255, 255, 255, 0.6)'
  })
  isLoading.value = true
  if(query.url){
    iframe.value.onload = function(){
      loading.close()
      isLoading.value = false
    }
    return
  }
  const id = query.id

  setTimeout(()=>{
    articleDetail.value =  articleList.value.find(item => item.id == id)
    isLoading.value = false
    loading.close()
    loading = null
  },5000)
}

//进入时滚动条回到顶部
onMounted(()=>{
  getArticleDetail(route.query)
  window.scrollTo(0,0)
})
onBeforeUnmount(()=>{
  loading && loading.close()
})
</script>

<style lang="scss" scoped>
.article-detail-iframe{
  height: calc(100vh - $header-height);
  display: inline-block;
  vertical-align: bottom;
}
.article-detail {
  padding: 10px;
  .article-detail-title {
    height: fit-content;
    border-bottom: 2px solid #c6cfdc;
    h1{
      height: 100%;
      font-size: 28px;
      word-wrap: break-word;
      color: #222226;
      font-weight: 600;
      margin: 0;
      word-break: break-all;
      padding: 5px;
      
    }
  }
  .article-detail-content{
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    color: #222226;
    white-space: pre-wrap;
  }
}
.article-detail-empty{
  height: calc(100vh - $header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #999999;
}
</style>