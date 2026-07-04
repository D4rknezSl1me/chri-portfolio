'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { site } from '@/lib/site'
import { HeroCanvas } from './HeroCanvas'
import { Magnetic } from './Magnetic'

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  // As the hero scrolls away, the copy drifts up and fades — so it feels like
  // it's actively moving with the page, not just sitting until it's gone.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      {/* Only the background reacts to the cursor; the copy stays put under the
          pointer and drifts only with scroll. */}
      <HeroCanvas />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60rem 40rem at 70% -10%, rgb(var(--accent) / 0.16), transparent 60%)',
        }}
      />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="mx-auto max-w-content px-6 pb-24 pt-28 sm:pt-40"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          I build software that ships — and I&apos;m building toward something of my own.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg text-muted"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic className="inline-block">
            <a
              href="#work"
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg"
            >
              See my work
            </a>
          </Magnetic>
          <Magnetic className="inline-block">
            <a
              href="#contact"
              className="inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface"
            >
              Get in touch
            </a>
          </Magnetic>
          <a
            href="/resume"
            className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            View résumé →
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
