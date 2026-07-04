// English — the canonical dictionary. Every other locale is typed against the
// shape of this object, so a missing key is a compile error.
export const en = {
  nav: { work: 'Work', skills: 'Skills', vision: 'Vision', contact: 'Contact', resume: 'Résumé' },

  hero: {
    role: 'Software developer today · World-class engineer by design · Founder by intent',
    headline: "I build software that ships, and I'm building toward something of my own.",
    description:
      'I build software that ships. Sharpening into a world-class engineer and building toward a company of my own. Here is the evidence, and the vision.',
    ctaWork: 'See my work',
    ctaContact: 'Get in touch',
    ctaResume: 'View résumé →',
  },

  stats: {
    items: [
      'Products designed & shipped',
      'KinAI products, full-stack',
      'Owned end-to-end, self-hosted',
      'Security-header rating',
    ],
    trustBefore: "In production with clubs across Italy's ",
    trustEmphasis: 'Serie A & Serie B',
    trustAfter: '.',
  },

  work: {
    eyebrow: 'Selected work',
    title: "Things I've built",
    roleLabel: 'Role:',
    outcomeLabel: 'Outcome:',
    inProduction: 'In production',
    live: 'Live →',
    code: 'Code →',
  },

  // Per-project copy. `stack` tokens stay in English everywhere (industry terms).
  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        'An AI platform that helps professional football clubs make smarter, data-driven decisions. In production with teams across Italy’s Serie A and Serie B. I work full-stack across its three products: a web portal, a core engine, and a desktop application. First and only of its kind in its category.',
      role: 'Full-stack developer',
      outcome: 'Adopted by Serie A & Serie B clubs, first and only in its category.',
    },
    'aperture-nas': {
      title: 'Aperture NAS: Private AI Vault',
      summary:
        'A self-hosted NAS with a built-in AI brain: natural-language semantic search over your own photos and files (“blue car on the beach”), automatic tagging and indexing, all processed locally, with no cloud and no third-party data exposure.',
      role: 'Architecture & full-stack',
      outcome: 'On-prem semantic image search that keeps every byte on your own hardware.',
    },
    'naked-glados': {
      title: 'Naked-GLaDOS: Self-Hosted Platform',
      summary:
        'A production, GitOps-driven microservice platform on my own k3s cluster: a shared auth/core API (JWT + Passkeys), multiple web apps, and game-server control panels, all reconciled from a single source-of-truth repo via Flux.',
      role: 'Solo architect & operator',
      outcome:
        'Self-healing, reproducible infrastructure running a full suite of services in production.',
    },
    'cs2-manager': {
      title: 'CS2 Server Manager',
      summary:
        'A web control panel that provisions and operates a Counter-Strike 2 game server through the Kubernetes API and sends live in-game commands over RCON. Infrastructure turned into a clean, one-click product.',
      role: 'Full-stack',
      outcome: 'Full game-server lifecycle and live admin, all from the browser.',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex: Minecraft Hosting',
      summary:
        'A self-service Minecraft hosting platform: spin up game servers on demand and manage them entirely from the browser, with a live console, automated backups, plugins, worlds, and whitelist/access control. Each server runs isolated as its own container on Kubernetes.',
      role: 'Full-stack',
      outcome: 'One-click, fully-managed Minecraft servers, self-hosted, no third-party host.',
    },
    'this-site': {
      title: 'This Portfolio',
      summary:
        'Self-hosted on my own Kubernetes cluster and shipped through a v*-tag release pipeline, hardened to enterprise security standards. The site itself is a portfolio piece.',
      role: 'Design, build, infra & CI/CD',
      outcome: 'A+ security headers, Lighthouse 95+, zero-cost self-hosting.',
    },
  } as Record<string, { title: string; summary: string; role: string; outcome: string }>,

  skills: {
    eyebrow: 'Skills & expertise',
    title: 'Across the whole stack',
    categories: {
      Languages: 'Languages',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Databases & Storage': 'Databases & Storage',
      'DevOps & Cloud': 'DevOps & Cloud',
      'Security & Auth': 'Security & Auth',
      'AI & Data': 'AI & Data',
      Web3: 'Web3',
      'Practices & Tools': 'Practices & Tools',
    } as Record<string, string>,
  },

  process: {
    eyebrow: 'How I work',
    title: 'Idea to production, owned end to end',
    steps: [
      { title: 'Design', body: 'Sharp product thinking before a line of code: what should exist, and why it wins.' },
      { title: 'Build', body: 'Full-stack, strongly typed, and tested, from the UI down to the data model.' },
      { title: 'Ship', body: 'CI/CD on v* tags: image scan, security gates, zero-downtime rollout, automatically.' },
      { title: 'Own', body: 'It runs on my own k3s cluster. I own the code and the metal it lives on.' },
    ],
  },

  vision: {
    eyebrow: "Where I'm headed",
    title: 'The vision',
    paraBefore:
      "I'm a software developer today with deep, hands-on skills, and I'm deliberately building into a world-class engineer over the next few years. But the goal isn't just to be great at the craft. It's to build a company of my own: to turn a concrete thesis about ",
    paraEmphasis: 'the software I believe should exist',
    paraAfter:
      ' into a product, a team, and a business. This site is the first proof of how I work: owned end to end, from the code to the cluster it runs on.',
    milestones: [
      { k: 'Now', v: 'Shipping real software, sharpening fundamentals.' },
      { k: '3 years', v: 'A world-class engineer with a track record.' },
      { k: 'The goal', v: 'Founding and building my own company.' },
    ],
  },

  github: {
    eyebrow: 'In the open',
    title: 'Recently shipped on GitHub',
    reposSuffix: 'public repositories',
    seeAll: 'See all on GitHub →',
    fallback: 'Find me on GitHub →',
  },

  contact: {
    eyebrow: "Let's talk",
    title: 'Get in touch',
    blurb:
      "Building something, hiring, or investing in people early? I'd love to hear from you.",
    name: 'Your name',
    email: 'Your email',
    message: 'Your message',
    send: 'Send message',
    sending: 'Sending…',
    sent: "Thanks! Your message is on its way. I'll get back to you soon.",
    location: 'Italy',
  },

  colophon: {
    lead: 'How this site is built.',
    body: ' Designed, developed, hardened, and self-hosted by me. No page builder, no third-party host.',
    readSource: 'Read the source →',
  },

  footer: { tagline: 'Self-hosted on k3s, shipped via CI/CD.', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },

  resume: {
    back: '← Back to site',
    print: 'Print / Save as PDF',
    summaryTitle: 'Summary',
    summaryBody:
      'Full-stack software developer building production systems end to end, from UI to data model to the Kubernetes cluster they run on. Currently full-stack on KinAI, an AI platform in production with clubs across Italy’s Serie A and Serie B. Deliberately building toward world-class engineering and, ultimately, a company of my own.',
    workTitle: 'Selected work',
    inProduction: 'in production',
    skillsTitle: 'Skills',
    trajectoryTitle: 'Trajectory',
    now: 'Now:',
    nowBody: 'Shipping real software, sharpening fundamentals.',
    threeYears: '3 years:',
    threeYearsBody: 'A world-class engineer with a track record.',
    goal: 'The goal:',
    goalBody: 'Founding and building my own company.',
  },

  language: { change: 'Change language' },
}

export type Dictionary = typeof en
