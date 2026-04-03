'use client'

import { useEffect, useRef } from 'react'

interface SparklesCoreProps {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export function SparklesCore({
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 900,
  className,
  particleColor = '#ffffff',
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    type Particle = {
      x: number
      y: number
      size: number
      opacity: number
      fadeSpeed: number
      dx: number
      dy: number
    }

    const buildParticles = (): Particle[] => {
      const area = canvas.width * canvas.height
      const count = Math.max(40, Math.floor(Math.sqrt(area) * (particleDensity / 500)))
      return Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: Math.random(),
        fadeSpeed: 0.004 + Math.random() * 0.008,
        dx: (Math.random() - 0.5) * 0.08,
        dy: (Math.random() - 0.5) * 0.08,
      }))
    }

    let particles = buildParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (background !== 'transparent') {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      for (const p of particles) {
        p.opacity += p.fadeSpeed
        if (p.opacity >= 1 || p.opacity <= 0) p.fadeSpeed *= -1
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.save()
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity))
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    const ro = new ResizeObserver(() => {
      resize()
      particles = buildParticles()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [background, minSize, maxSize, particleDensity, particleColor])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
