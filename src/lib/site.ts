export const site = {
  name: 'Christian Cangelli',
  role: 'Software developer today · World-class engineer by design · Founder by intent',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://christiancangelli.com',
  description:
    'I build software that ships. Sharpening into a world-class engineer and building toward a company of my own. Here is the evidence, and the vision.',
  titleTagline: 'Software Developer & Future Founder',
  email: 'christiancangelli2007@gmail.com',
  location: 'Italy',
  repo: 'https://github.com/D4rknezSl1me/chri-portfolio',
  socials: {
    github: 'https://github.com/D4rknezSl1me',
    linkedin: 'https://www.linkedin.com/in/christian-cangelli-48976a254/',
  },
} as const

export type Site = typeof site
