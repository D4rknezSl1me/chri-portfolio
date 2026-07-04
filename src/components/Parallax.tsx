'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// Wraps content so it drifts continuously as the element travels through the
// viewport — driven by scroll position, not a one-shot reveal. `from`/`to` are
// vertical offsets (px) at entry/exit; stagger them across siblings for depth.
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
  // A gentle spring keeps the motion from feeling pixel-locked to the wheel.
  const eased = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const y = useTransform(eased, [0, 1], [from, to])

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  )
}
