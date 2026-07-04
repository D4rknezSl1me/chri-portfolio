import { en, type Dictionary } from './en'

// High Valyrian — a playful easter egg. It's a constructed language with a
// small (if real) vocabulary, so there are no words for "Kubernetes" or
// "microservice". We render the iconic chrome in attested High Valyrian and let
// the long technical prose fall back to English. Fan-level; a fluent speaker
// could refine it. Valar morghulis. 🐉
export const hv: Dictionary = {
  ...en,

  nav: { work: 'Gaomia', skills: 'Kostōbi', vision: 'Ōños', contact: 'Rytsas', resume: 'Bardugon' },

  hero: {
    ...en.hero,
    ctaWork: 'Ūndegon', // "to see"
    ctaContact: 'Rytsas', // "hello"
    ctaResume: 'Bardugon ūndegon', // "see the writing"
  },

  work: { ...en.work, eyebrow: 'Jorrāelza gaomia', inProduction: 'Glaeso' /* "living" */ },

  contact: {
    ...en.contact,
    eyebrow: 'Rytsas',
    title: 'Ivestragī nyke',
    send: 'Ivestragon', // "to tell / send"
    sending: 'Ivestragon…',
    sent: 'Kirimvose! Your message is on its way. I’ll get back to you soon.',
    location: 'Valyria',
  },

  footer: { ...en.footer, email: 'Ēdrutas' },

  language: { change: 'Valyrio Ēngos' },
}
