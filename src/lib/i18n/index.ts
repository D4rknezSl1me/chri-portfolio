import type { Locale } from './config'
import { en, type Dictionary } from './dictionaries/en'
import { it } from './dictionaries/it'
import { de } from './dictionaries/de'
import { fr } from './dictionaries/fr'
import { zh } from './dictionaries/zh'
import { hv } from './dictionaries/hv'

export const dictionaries: Record<Locale, Dictionary> = { en, it, de, fr, zh, hv }

export type { Dictionary }
export { defaultLocale, locales, localeMeta, htmlLang } from './config'
export type { Locale } from './config'
