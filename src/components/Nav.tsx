'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { site } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './i18n/LanguageSwitcher'
import { useI18n } from './i18n/LanguageProvider'

const sectionIds = ['work', 'skills', 'vision', 'contact'] as const

export function Nav() {
  const { t } = useI18n()
  const [active, setActive] = useState<string>('')

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#skills', label: t.nav.skills },
    { href: '#vision', label: t.nav.vision },
    { href: '#contact', label: t.nav.contact },
  ]

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative transition-colors hover:text-fg ${
                  active === l.href ? 'text-fg' : ''
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume" className="transition-colors hover:text-fg">
              {t.nav.resume}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/resume" className="text-sm text-muted transition-colors hover:text-fg sm:hidden">
            {t.nav.resume}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
