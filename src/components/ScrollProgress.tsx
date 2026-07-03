'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// A custom scroll indicator: a glowing capsule that glides down a slim rail,
// spring-smoothed so it feels alive. Replaces the native scrollbar.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const top = useTransform(smooth, [0, 1], ['0%', '82%'])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden h-[55vh] -translate-y-1/2 md:block"
    >
      <div className="relative h-full w-[3px] rounded-full bg-fg/10">
        <motion.div
          style={{ top }}
          className="absolute left-1/2 h-[18%] w-[9px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_16px_rgb(var(--accent)/0.9)]"
        />
      </div>
    </div>
  )
}
