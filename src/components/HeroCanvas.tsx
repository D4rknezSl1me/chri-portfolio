'use client'

import { useEffect, useRef } from 'react'

type Pt = { x: number; y: number; z: number }
type Proj = { sx: number; sy: number; depth: number }

// A lightweight interactive 3D point-cloud rendered on a 2D canvas:
// real rotation + perspective projection, driven by the cursor and scroll.
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const N = 90
    const points: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
    }))

    let width = 0
    let height = 0
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    let scrollFade = 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const project = (p: Pt, angX: number, angY: number): Proj => {
      const cosY = Math.cos(angY)
      const sinY = Math.sin(angY)
      const x1 = p.x * cosY - p.z * sinY
      const z1 = p.x * sinY + p.z * cosY
      const cosX = Math.cos(angX)
      const sinX = Math.sin(angX)
      const y1 = p.y * cosX - z1 * sinX
      const z2 = p.y * sinX + z1 * cosX
      const fov = 3
      const depth = fov / (fov + z2)
      const s = Math.min(width, height) * 0.42
      return { sx: width / 2 + x1 * s * depth, sy: height / 2 + y1 * s * depth, depth }
    }

    const render = (angX: number, angY: number) => {
      ctx.clearRect(0, 0, width, height)
      const proj = points.map((p) => project(p, angX, angY))

      for (let i = 0; i < N; i++) {
        const a = proj[i]
        if (!a) continue
        for (let j = i + 1; j < N; j++) {
          const b = proj[j]
          if (!b) continue
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy)
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.28 * scrollFade * Math.min(a.depth, b.depth)
            ctx.strokeStyle = `rgba(56,224,210,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.sx, a.sy)
            ctx.lineTo(b.sx, b.sy)
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < N; i++) {
        const a = proj[i]
        if (!a) continue
        ctx.fillStyle = `rgba(56,224,210,${0.55 * scrollFade * a.depth})`
        ctx.beginPath()
        ctx.arc(a.sx, a.sy, 1.7 * a.depth, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    const onScroll = () => {
      scrollFade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.8))
    }

    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    if (reduce) {
      render(0.2, 0.5)
    } else {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('scroll', onScroll, { passive: true })
      let t = 0
      const loop = () => {
        t += 0.0016
        cur.x += (target.x - cur.x) * 0.05
        cur.y += (target.y - cur.y) * 0.05
        render(cur.y * 0.5, t + cur.x * 0.9)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
