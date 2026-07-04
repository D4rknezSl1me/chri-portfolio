import type { Dictionary } from './en'

// High Valyrian — a full, best-effort fan translation. It is a constructed
// language with a limited vocabulary and no words for modern technology, so
// proper nouns and tech terms (Kubernetes, KinAI, React, GitHub, Serie A/B, …)
// are kept as loanwords, exactly as real languages absorb foreign terms. A
// fluent speaker could refine the grammar; the intent is that the whole page
// speaks Valyrian, not just the buttons. Valar morghulis.
export const hv: Dictionary = {
  brand: 'Valar morghulis',

  nav: { work: 'Gaomia', skills: 'Kostōbi', vision: 'Ōños', contact: 'Udir', resume: 'Bardugon' },

  hero: {
    role: 'Software-gaomion tubī · Mirroa tegot gaomion · Jenti kesir',
    headline: 'Software gaoman lī glaesas, se ñuhon aderī gaoman.',
    description:
      'Software gaoman lī glaesas. Mirroa tegot gaomiot azandan, se ñuha lenton gaoman. Kesīr issi udra, se ōños.',
    ctaWork: 'Gaomia ūndegon',
    ctaContact: 'Rytsas',
    ctaResume: 'Bardugon ūndegon',
  },

  stats: {
    items: [
      'Gaomȳ sikōn se glaesōn',
      'KinAI gaomȳ, mirȳ-stack',
      'Ñuho megīs, āī-hosted',
      'Ōdrȳ-header brōzi',
    ],
    trustBefore: 'Gaomiot, Italȳo ',
    trustEmphasis: 'Serie A se Serie B',
    trustAfter: ' klūboss’ mirȳ.',
  },

  work: {
    eyebrow: 'Jorrāelza gaomia',
    title: 'Ābrar lī gaoman',
    roleLabel: 'Gaomilaksir:',
    outcomeLabel: 'Jēda:',
    inProduction: 'Glaeso',
    live: 'Glaeso →',
    code: 'Kōdes →',
  },

  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        'AI-lenton lī professie-fĒotbol-klūbossa kostis sȳz, dāta-hen udra gaomagon. Gaomiot, Italȳo Serie A se Serie B klūbossa mirȳ. Ñuhys hare gaomȳt mirȳ-stack gaoman: web-portal, mȳn perzys-engine, se desktop-gaomia. Mērī se mērī ñuho jēdrot.',
      role: 'Mirȳ-stack gaomion',
      outcome: 'Serie A se Serie B klūbossa hae jemis, mērī se mērī ñuho jēdrot.',
    },
    'aperture-nas': {
      title: 'Aperture NAS: Ñuho AI-Vault',
      summary:
        'Āī-hosted NAS mȳn AI-prūmȳ: ēngoso hen aōha ābrar-imāgī se filossa semantie-rhaenagon (“kasta hobresk embōñot”), automatie-tāg se index, tolvie kesīr gaomiaks, daor cloud, daor āeksio-hen dāta.',
      role: 'Architektie se mirȳ-stack',
      outcome: 'Kesīr semantie-imāg-rhaen lī tolvie byte aōha hardware-ot jemis.',
    },
    'naked-glados': {
      title: 'Naked-GLaDOS: Āī-hosted Lenton',
      summary:
        'Gaomiot, GitOps-hen microservie-lenton ñuho k3s-cluster-ot: mērī auth/core-API (JWT + Passkeys), mȳn web-gaomȳ, se game-server-kontrolossa, tolvie mērot repo-hen Flux-ondoso ivestraks.',
      role: 'Mērī architekt se operator',
      outcome: 'Āī-rhaeno, reproducie-infrastruktie lī tolvie servie gaomiot glaesas.',
    },
    'cs2-manager': {
      title: 'CS2 Server-Kontrol',
      summary:
        'Web-kontrol lī Counter-Strike 2 game-server Kubernetes-API-ondoso gaomas se operas, se RCON-ondoso game-hen udra jikas. Infrastruktie mērī-tȳne gaomiaks.',
      role: 'Mirȳ-stack',
      outcome: 'Mirȳ game-server-glaeson se glaeso-admin, tolvie browser-hen.',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex: Minecraft-Hosting',
      summary:
        'Āī-servie Minecraft-hosting-lenton: game-server jaelot sikagon se tolvie browser-hen gaomagon, mȳn glaeso-console, automatie-backup, plugin, tegȳ, se whitelist-kontrol. Tolvie server mērot container-ot Kubernetes-ot glaesas.',
      role: 'Mirȳ-stack',
      outcome: 'Mērī-tȳne, mirȳ-gaomo Minecraft-server, āī-hosted, daor āeksio-host.',
    },
    'this-site': {
      title: 'Bisa Portfolio',
      summary:
        'Āī-hosted ñuho Kubernetes-cluster-ot se v*-tag-pipeline-hen jikaks, enterprie-ōdrȳ-hen kostōba. Sīr bisa lenton portfolio-gaomia issa.',
      role: 'Design, gaomia, infra se CI/CD',
      outcome: 'A+ ōdrȳ-header, Lighthouse 95+, daor-gald āī-hosting.',
    },
  },

  skills: {
    eyebrow: 'Kostōbi se gīmȳ',
    title: 'Mirȳ-stack tolvȳn',
    categories: {
      Languages: 'Ēngossa',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Databases & Storage': 'Dāta se Storage',
      'DevOps & Cloud': 'DevOps se Cloud',
      'Security & Auth': 'Ōdrȳ se Auth',
      'AI & Data': 'AI se Dāta',
      Web3: 'Web3',
      'Practices & Tools': 'Gaomȳ se Tȳni',
    },
  },

  process: {
    eyebrow: 'Skoro syt gaoman',
    title: 'Udrāzmot naejot gaomiot, tolvie ñuho',
    steps: [
      { title: 'Design', body: 'Kōdes ondos daor, sȳz gaomia-ōños: skoros issa, se skoros syt kostas.' },
      { title: 'Gaomia', body: 'Mirȳ-stack, typie se testie, UI-hen dāta-model naejot.' },
      { title: 'Jiko', body: 'CI/CD v*-tag-ot: image-scan, ōdrȳ-gate, daor-morghon-rollout, automatie.' },
      { title: 'Ñuho', body: 'Ñuho k3s-cluster-ot glaesas. Kōdes se hardware ñuho issi.' },
    ],
  },

  vision: {
    eyebrow: 'Skoriot jikan',
    title: 'Ōños',
    paraBefore:
      'Tubī software-gaomion iksan mȳn prūmȳ, ondos-kostōbi, se mirroa tegot gaomiot azandan hare jarȳn. Yn jēda daor mērī gaomia sȳz issa. Jēda ñuha lenton gaomagon issa: udra hen ',
    paraEmphasis: 'software lī jorrāelan glaesagon',
    paraAfter:
      ' gaomiā, azantȳ, se lentȳ tȳne. Bisa lenton mērī gaomilaksir ñuho: tolvie ñuho, kōdes-hen cluster-ot lī glaesas.',
    milestones: [
      { k: 'Tubī', v: 'Sȳz software glaeson, prūmȳ-gaomia azandan.' },
      { k: 'Hare jari', v: 'Mirroa tegot gaomion mȳn jēdrot.' },
      { k: 'Jael', v: 'Ñuha lenton sikagon se gaomagon.' },
    ],
  },

  github: {
    eyebrow: 'Tolvȳn',
    title: 'GitHub-ot jorrāelza',
    reposSuffix: 'tolvie-repossa',
    seeAll: 'GitHub-ot mirȳ ūndegon →',
    fallback: 'GitHub-ot nyke rhaenagon →',
  },

  contact: {
    eyebrow: 'Rytsas',
    title: 'Nyke ivestragon',
    blurb: 'Mirȳ gaomā, ābrar jaelā, jrūqiros-ot jorrāelā? Aōha udra jaelan ūndegon.',
    name: 'Aōha brōzi',
    email: 'Aōha email',
    message: 'Aōha udir',
    send: 'Ivestragon',
    sending: 'Ivestragon…',
    sent: 'Kirimvose! Aōha udir māzis. Sȳrī ivestran ao.',
    location: 'Valyria',
  },

  colophon: {
    lead: 'Skoro syt bisa lenton gaomiaks.',
    body: ' Nyke-hen design, gaomiaks, kostōba, se āī-hosted. Daor page-builder, daor āeksio-host.',
    readSource: 'Kōdes ūndegon →',
  },

  footer: { tagline: 'Āī-hosted k3s-ot, CI/CD-hen jikaks.', github: 'GitHub', linkedin: 'LinkedIn', email: 'Ēdrutas' },

  resume: {
    back: '← Lentot māzigon',
    print: 'Bardugon / PDF sikagon',
    summaryTitle: 'Udrāzma',
    summaryBody:
      'Mirȳ-stack software-gaomion lī gaomiot-systȳ tolvie gaomas, UI-hen dāta-model naejot, Kubernetes-cluster-ot lī glaesas. Tubī KinAI-ot mirȳ-stack, AI-lenton lī Italȳo Serie A se Serie B klūbossa hae gaomiot glaesas. Mirroa tegot gaomiot se, jēdǭ, ñuha lenton naejot azandan.',
    workTitle: 'Jorrāelza gaomia',
    inProduction: 'gaomiot',
    skillsTitle: 'Kostōbi',
    trajectoryTitle: 'Geron',
    now: 'Tubī:',
    nowBody: 'Sȳz software glaeson, prūmȳ-gaomia azandan.',
    threeYears: 'Hare jari:',
    threeYearsBody: 'Mirroa tegot gaomion mȳn jēdrot.',
    goal: 'Jael:',
    goalBody: 'Ñuha lenton sikagon se gaomagon.',
  },

  language: { change: 'Ēngos wȳrgmagon' },
}
