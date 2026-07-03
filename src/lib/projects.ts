export type Project = {
  slug: string
  title: string
  summary: string
  role: string
  stack: string[]
  outcome: string
  href?: string
  repo?: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'kinai',
    title: 'KinAI',
    summary:
      'An AI platform that helps professional football clubs make smarter, data-driven decisions — in production with teams across Italy’s Serie A and Serie B. I work full-stack across its three products: a web portal, a core engine, and a desktop application. First and only of its kind in its category.',
    role: 'Full-stack developer',
    stack: ['Web portal', 'Desktop app', 'AI engine', 'Pro football'],
    outcome: 'Adopted by Serie A & Serie B clubs — first and only in its category.',
    href: 'https://wedica.it/it/',
    year: 'Present',
  },
  {
    slug: 'aperture-nas',
    title: 'Aperture NAS — Private AI Vault',
    summary:
      'A self-hosted NAS with a built-in AI brain: natural-language semantic search over your own photos and files (“blue car on the beach”), automatic tagging and indexing — all processed locally, with no cloud and no third-party data exposure.',
    role: 'Architecture & full-stack',
    stack: ['React', 'FastAPI', 'CLIP', 'pgvector', 'MinIO', 'Redis/BullMQ', 'Kubernetes'],
    outcome: 'On-prem semantic image search that keeps every byte on your own hardware.',
    year: '2026',
  },
  {
    slug: 'naked-glados',
    title: 'Naked-GLaDOS — Self-Hosted Platform',
    summary:
      'A production, GitOps-driven microservice platform on my own k3s cluster: a shared auth/core API (JWT + Passkeys), multiple web apps, and game-server control panels — all reconciled from a single source-of-truth repo via Flux.',
    role: 'Solo architect & operator',
    stack: ['k3s', 'FluxCD', 'Next.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Cloudflare', 'Docker'],
    outcome: 'Self-healing, reproducible infrastructure running a full suite of services in production.',
    year: '2026',
  },
  {
    slug: 'cs2-manager',
    title: 'CS2 Server Manager',
    summary:
      'A web control panel that provisions and operates a Counter-Strike 2 game server through the Kubernetes API and sends live in-game commands over RCON — infrastructure turned into a clean, one-click product.',
    role: 'Full-stack',
    stack: ['React', 'Fastify', 'Kubernetes API', 'RCON', 'JWT', 'Zod'],
    outcome: 'Full game-server lifecycle and live admin, all from the browser.',
    year: '2026',
  },
  {
    slug: 'voxel-vortex',
    title: 'Voxel Vortex — Minecraft Hosting',
    summary:
      'A self-service Minecraft hosting platform: spin up game servers on demand and manage them entirely from the browser — live console, automated backups, plugins, worlds, and whitelist/access control. Each server runs isolated as its own container on Kubernetes.',
    role: 'Full-stack',
    stack: ['React', 'Fastify', 'Kubernetes API', 'RCON', 'WebSocket', 'JWT'],
    outcome: 'One-click, fully-managed Minecraft servers — self-hosted, no third-party host.',
    year: '2026',
  },
  {
    slug: 'this-site',
    title: 'This Portfolio',
    summary:
      'Self-hosted on my own Kubernetes cluster and shipped through a v*-tag release pipeline, hardened to enterprise security standards — the site itself is a portfolio piece.',
    role: 'Design, build, infra & CI/CD',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'k3s', 'Cloudflare', 'GitHub Actions'],
    outcome: 'A+ security headers, Lighthouse 95+, zero-cost self-hosting.',
    repo: 'https://github.com/D4rknezSl1me/chri-portfolio',
    year: '2026',
  },
]
