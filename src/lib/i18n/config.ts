export const locales = ['en', 'it', 'de', 'fr', 'zh', 'hv'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// `html lang` values. High Valyrian has no ISO code, so it falls back to a
// private-use tag while still being selectable in the UI.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  it: 'it',
  de: 'de',
  fr: 'fr',
  zh: 'zh',
  hv: 'art-x-valyrian',
}

export const localeMeta: Record<Locale, { label: string; english: string; flag: string }> = {
  en: { label: 'English', english: 'English', flag: '🇬🇧' },
  it: { label: 'Italiano', english: 'Italian', flag: '🇮🇹' },
  de: { label: 'Deutsch', english: 'German', flag: '🇩🇪' },
  fr: { label: 'Français', english: 'French', flag: '🇫🇷' },
  zh: { label: '中文', english: 'Chinese', flag: '🇨🇳' },
  hv: { label: 'Valyrio Ēngos', english: 'High Valyrian', flag: '🐉' },
}
