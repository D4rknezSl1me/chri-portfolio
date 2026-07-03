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

// Replace these placeholders with your real case studies.
export const projects: Project[] = [
  {
    slug: 'this-site',
    title: 'This Portfolio',
    summary:
      'A self-hosted portfolio deployed to my own Kubernetes cluster through a v*-tag release pipeline, hardened to enterprise security standards.',
    role: 'Design, build, infra & CI/CD',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'k3s', 'Cloudflare', 'GitHub Actions'],
    outcome: 'A+ security headers, Lighthouse 95+, zero-cost self-hosting.',
    repo: 'https://github.com/D4rknezSl1me/chri-portfolio',
    year: '2026',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'Short, punchy description of the problem you solved and why it mattered.',
    role: 'Your role',
    stack: ['Tech', 'Stack', 'Here'],
    outcome: 'The measurable result — numbers beat adjectives.',
    year: '2025',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'Short, punchy description of the problem you solved and why it mattered.',
    role: 'Your role',
    stack: ['Tech', 'Stack', 'Here'],
    outcome: 'The measurable result — numbers beat adjectives.',
    year: '2025',
  },
]
