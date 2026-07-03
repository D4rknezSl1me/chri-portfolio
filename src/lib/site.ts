export const site = {
  name: 'Christian Cangelli',
  role: 'Software Developer · Engineer in the making · Future founder',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://christiancangelli.com',
  description:
    'I build software that ships. Sharpening into a world-class engineer and building toward a company of my own — here is the evidence, and the vision.',
  email: 'you@christiancangelli.com',
  socials: {
    github: 'https://github.com/D4rknezSl1me',
    linkedin: 'https://www.linkedin.com/',
  },
} as const

export type Site = typeof site
