'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { useI18n } from './i18n/LanguageProvider'

function Timeline({ milestones }: { milestones: { k: string; v: string }[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // The connecting line "draws itself" as the timeline scrolls through view.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <div ref={ref} className="relative">
      {/* rail (vertical on mobile, horizontal on desktop) */}
      <div className="absolute left-[7px] bottom-2 top-2 w-px bg-border md:inset-x-0 md:bottom-auto md:top-[7px] md:h-px md:w-auto" />
      {/* animated accent fill that draws with scroll */}
      <motion.div
        aria-hidden
        style={reduce ? { transform: 'scaleY(1)' } : { scaleY: grow, scaleX: grow }}
        className="absolute left-[7px] bottom-2 top-2 w-px origin-top bg-accent shadow-[0_0_12px_rgb(var(--accent)/0.8)] md:inset-x-0 md:bottom-auto md:top-[7px] md:h-px md:w-auto md:origin-left"
      />

      <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
        {milestones.map((m, i) => (
          <motion.li
            key={m.k}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pl-8 md:pl-0 md:pt-8"
          >
            <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_10px_rgb(var(--accent)/0.7)] md:top-0" />
            <p className="font-semibold text-accent">{m.k}</p>
            <p className="mt-1 text-muted">{m.v}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export function Vision() {
  const { t } = useI18n()
  return (
    <Section id="vision" eyebrow={t.vision.eyebrow} title={t.vision.title}>
      <div className="grid gap-12">
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {t.vision.paraBefore}
          <span className="text-fg">{t.vision.paraEmphasis}</span>
          {t.vision.paraAfter}
        </p>
        <Timeline milestones={t.vision.milestones} />
      </div>
    </Section>
  )
}
