'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion'

const THUMB = 0.18 // thumb height as a fraction of the rail

// A custom, draggable scroll indicator: grab the glowing capsule to scrub the
// page, or click anywhere on the rail to jump. Replaces the native scrollbar.
export function ScrollProgress() {
  const railRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const { scrollYProgress } = useScroll()
  const progress = useMotionValue(0)
  const smooth = useSpring(progress, { stiffness: 260, damping: 34, mass: 0.2 })
  const top = useTransform(smooth, [0, 1], ['0%', `${(1 - THUMB) * 100}%`])

  // Follow the page while not actively dragging.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!dragging.current) progress.set(v)
  })

  const scrollToPointer = (clientY: number) => {
    const rail = railRef.current
    if (!rail) return
    const rect = rail.getBoundingClientRect()
    const thumbH = rect.height * THUMB
    const travel = rect.height - thumbH
    const offset = Math.max(0, Math.min(travel, clientY - rect.top - thumbH / 2))
    const p = travel > 0 ? offset / travel : 0
    progress.set(p)
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(0, p * max)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    scrollToPointer(e.clientY)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) scrollToPointer(e.clientY)
  }
  const endDrag = (e: React.PointerEvent) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-40 hidden h-[55vh] -translate-y-1/2 md:block">
      <div
        ref={railRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="pointer-events-auto relative flex h-full w-5 cursor-pointer touch-none justify-center"
      >
        {/* track */}
        <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-fg/10" />
        {/* draggable thumb */}
        <motion.div
          style={{ top }}
          className="absolute left-1/2 h-[18%] w-[9px] -translate-x-1/2 cursor-grab rounded-full bg-accent shadow-[0_0_16px_rgb(var(--accent)/0.9)] transition-[width] active:w-[11px] active:cursor-grabbing"
          initial={false}
        />
      </div>
    </div>
  )
}
