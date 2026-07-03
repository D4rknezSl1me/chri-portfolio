'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  const reduce = useReducedMotion()

  // Reveal on scroll (once). Reduced-motion users get the content immediately.
  const wrapper = reduce
    ? {}
    : { initial: 'hidden' as const, whileInView: 'show' as const, viewport: { once: true, margin: '-80px' } }

  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60">
      <motion.div
        {...wrapper}
        variants={reduce ? undefined : container}
        className="mx-auto max-w-content px-6 py-20 sm:py-28"
      >
        <motion.p
          variants={reduce ? undefined : item}
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          variants={reduce ? undefined : item}
          className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div variants={reduce ? undefined : item}>{children}</motion.div>
      </motion.div>
    </section>
  )
}
