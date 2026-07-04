'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Wraps content so it drifts continuously as the element travels through the
// viewport, driven by scroll position rather than a one-shot reveal. `from`/`to`
// are vertical offsets (px) at entry/exit; stagger them across siblings for depth.
// Maps scroll straight to transform (no per-element spring) so dozens of these
// stay cheap: translateY is compositor-only and updates just on scroll.
export function Parallax({
  children,
  from = 56,
  to = -56,
  className,
}: {
  children: React.ReactNode
  from?: number
  to?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [from, to])

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  )
}
