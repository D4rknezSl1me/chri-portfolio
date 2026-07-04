import type { Dictionary } from './en'

export const zh: Dictionary = {
  nav: { work: '作品', skills: '技能', vision: '愿景', contact: '联系', resume: '简历' },

  hero: {
    role: '今天是软件开发者 · 立志成为世界级工程师 · 意在创立自己的公司',
    headline: '我构建能真正上线的软件，也在打造属于自己的事业。',
    description:
      '我构建能真正上线的软件。我正精进为世界级工程师，并着手创立自己的公司。这里是证据，也是愿景。',
    ctaWork: '查看我的作品',
    ctaContact: '取得联系',
    ctaResume: '查看简历 →',
  },

  stats: {
    items: ['设计并交付的产品', 'KinAI 产品，全栈', '端到端自主掌控，自托管', '安全响应头评级'],
    trustBefore: '已在意大利 ',
    trustEmphasis: '意甲和意乙',
    trustAfter: ' 的俱乐部投入生产。',
  },

  work: {
    eyebrow: '精选作品',
    title: '我构建过的东西',
    roleLabel: '角色：',
    outcomeLabel: '成果：',
    inProduction: '已上线运行',
    live: '在线 →',
    code: '代码 →',
  },

  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        '一个帮助职业足球俱乐部做出更聪明、以数据为驱动的决策的 AI 平台。已在意大利意甲和意乙的球队投入生产。我在其三款产品上进行全栈开发：一个网页门户、一个核心引擎和一个桌面应用。在其品类中首创且唯一。',
      role: '全栈开发者',
      outcome: '被意甲和意乙俱乐部采用，在其品类中首创且唯一。',
    },
    'aperture-nas': {
      title: 'Aperture NAS：私有 AI 保险库',
      summary:
        '一个内置 AI 大脑的自托管 NAS：用自然语言对你自己的照片和文件进行语义搜索（“沙滩上的蓝色汽车”），自动打标签与建立索引，全部在本地处理，无云端、不向第三方暴露数据。',
      role: '架构与全栈',
      outcome: '本地部署的语义图像搜索，让每一个字节都留在你自己的硬件上。',
    },
    'naked-glados': {
      title: 'Naked-GLaDOS：自托管平台',
      summary:
        '运行在我自己的 k3s 集群上、由 GitOps 驱动的生产级微服务平台：一个共享的认证/核心 API（JWT + Passkeys）、多个网页应用以及游戏服务器控制面板，全部通过 Flux 从单一事实来源仓库进行协调。',
      role: '独立架构师与运维',
      outcome: '自愈、可复现的基础设施，在生产环境中运行一整套服务。',
    },
    'cs2-manager': {
      title: 'CS2 服务器管理器',
      summary:
        '一个网页控制面板，通过 Kubernetes API 部署并运营《反恐精英 2》游戏服务器，并通过 RCON 发送实时游戏内命令。把基础设施变成一个干净、一键式的产品。',
      role: '全栈',
      outcome: '完整的游戏服务器生命周期与实时管理，全部在浏览器中完成。',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex：我的世界托管',
      summary:
        '一个自助式《我的世界》托管平台：按需启动游戏服务器，并完全在浏览器中管理，包含实时控制台、自动备份、插件、世界以及白名单/访问控制。每个服务器都作为独立容器隔离运行在 Kubernetes 上。',
      role: '全栈',
      outcome: '一键式、全托管的《我的世界》服务器，自托管，无第三方主机。',
    },
    'this-site': {
      title: '本作品集',
      summary:
        '自托管在我自己的 Kubernetes 集群上，通过 v* 标签发布流水线交付，并按企业级安全标准加固。网站本身就是一件作品集展品。',
      role: '设计、开发、基础设施与 CI/CD',
      outcome: 'A+ 安全响应头，Lighthouse 95+，零成本自托管。',
    },
  },

  skills: {
    eyebrow: '技能与专长',
    title: '贯穿整个技术栈',
    categories: {
      Languages: '编程语言',
      Frontend: '前端',
      Backend: '后端',
      'Databases & Storage': '数据库与存储',
      'DevOps & Cloud': 'DevOps 与云',
      'Security & Auth': '安全与认证',
      'AI & Data': 'AI 与数据',
      Web3: 'Web3',
      'Practices & Tools': '实践与工具',
    },
  },

  process: {
    eyebrow: '我的工作方式',
    title: '从想法到生产，端到端自主掌控',
    steps: [
      { title: '设计', body: '在写下第一行代码之前进行清晰的产品思考：什么应该存在，以及为什么它能胜出。' },
      { title: '构建', body: '全栈、强类型且经过测试，从界面一直到数据模型。' },
      { title: '发布', body: '在 v* 标签上的 CI/CD：镜像扫描、安全门禁、零停机发布，全部自动完成。' },
      { title: '掌控', body: '它运行在我自己的 k3s 集群上。代码和它所依托的硬件都归我所有。' },
    ],
  },

  vision: {
    eyebrow: '我的方向',
    title: '愿景',
    paraBefore:
      '今天我是一名拥有深厚实战技能的软件开发者，并在未来几年里刻意精进为世界级工程师。但目标不只是精于这门手艺，而是要创立属于自己的公司：把一个关于 ',
    paraEmphasis: '我相信应该存在的软件',
    paraAfter:
      ' 的具体主张，转化为一款产品、一支团队和一门生意。这个网站就是我工作方式的第一份证明：端到端自主掌控，从代码到它所运行的集群。',
    milestones: [
      { k: '现在', v: '交付真实的软件，打磨基本功。' },
      { k: '3 年', v: '一名有实绩的世界级工程师。' },
      { k: '目标', v: '创立并壮大属于自己的公司。' },
    ],
  },

  github: {
    eyebrow: '公开',
    title: 'GitHub 精选项目',
    reposSuffix: '个公开仓库',
    seeAll: '在 GitHub 上查看全部 →',
    fallback: '在 GitHub 上找到我 →',
  },

  contact: {
    eyebrow: '聊聊吧',
    title: '取得联系',
    blurb: '在做产品、在招人，或愿意早期投资于人？我很期待收到你的消息。',
    name: '你的名字',
    email: '你的邮箱',
    message: '你的留言',
    send: '发送消息',
    sending: '发送中…',
    sent: '谢谢！你的消息正在送达。我会尽快回复你。',
    location: '意大利',
  },

  colophon: {
    lead: '这个网站是如何构建的。',
    body: ' 由我亲手设计、开发、加固并自托管。没有页面搭建器，没有第三方主机。',
    readSource: '阅读源代码 →',
  },

  footer: { tagline: '自托管于 k3s，通过 CI/CD 交付。', github: 'GitHub', linkedin: 'LinkedIn', email: '邮箱' },

  resume: {
    back: '← 返回网站',
    print: '打印 / 保存为 PDF',
    summaryTitle: '简介',
    summaryBody:
      '全栈软件开发者，端到端构建生产系统，从界面到数据模型，再到它们运行的 Kubernetes 集群。目前在 KinAI 做全栈开发，这是一个已在意大利意甲和意乙俱乐部投入生产的 AI 平台。我在刻意迈向世界级工程能力，并最终走向属于自己的公司。',
    workTitle: '精选作品',
    inProduction: '已上线运行',
    skillsTitle: '技能',
    trajectoryTitle: '成长轨迹',
    now: '现在：',
    nowBody: '交付真实的软件，打磨基本功。',
    threeYears: '3 年：',
    threeYearsBody: '一名有实绩的世界级工程师。',
    goal: '目标：',
    goalBody: '创立并壮大属于自己的公司。',
  },

  language: { change: '切换语言' },
}
