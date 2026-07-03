export type SkillGroup = { category: string; skills: string[] }

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Solidity', 'SQL', 'HTML5', 'CSS3', 'Bash'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'shadcn/ui', 'Zod', 'Accessibility (a11y)'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Fastify', 'Express', 'REST APIs', 'GraphQL', 'WebSockets', 'Prisma'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'MinIO / S3'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes (k3s)', 'GitHub Actions', 'FluxCD (GitOps)', 'AWS', 'Vercel', 'Cloudflare', 'Linux'],
  },
  {
    category: 'Security & Auth',
    skills: ['JWT', 'OAuth 2.0', 'Passkeys / WebAuthn', 'TLS / cert-manager', 'CSP hardening'],
  },
  {
    category: 'AI & Data',
    skills: ['CLIP embeddings', 'Semantic search', 'FastAPI', 'BullMQ', 'OpenAI API'],
  },
  {
    category: 'Web3',
    skills: ['Solidity', 'Smart contracts', 'EVM', 'ethers.js'],
  },
  {
    category: 'Practices & Tools',
    skills: ['Git', 'Figma', 'Vitest', 'Playwright', 'CI/CD', 'System design', 'Agile'],
  },
]
