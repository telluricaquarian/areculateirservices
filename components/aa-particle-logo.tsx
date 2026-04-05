'use client'

import { useEffect, useRef } from 'react'

// ── Tuning knobs ──────────────────────────────────────────────────────────
// particleDensity: base particle count at the reference canvas (64×40 px).
//   Scales with sqrt(area) so larger canvases fill evenly.
// logoScale:   fraction of canvas the SVG occupies — reduce for more inset.
// idleStrength: max ambient drift amplitude in logical px (keeps it subtle).
// idleSpeed:    drift rate in radians/ms — higher = faster breathing.
// SIZE_MIN/MAX: logical-pixel size range of each square particle.
// LIFE_MIN/MAX: lifespan of each particle in animation frames.
// ─────────────────────────────────────────────────────────────────────────

const IDLE_STRENGTH = 0.45      // max drift in logical px
const IDLE_SPEED    = 0.0009    // radians per ms
const SIZE_MIN      = 0.35      // smallest particle in logical px
const SIZE_MAX      = 0.85      // largest particle in logical px
const LIFE_MIN      = 60        // frames
const LIFE_MAX      = 140       // frames
const REF_AREA      = 64 * 40   // reference area for density scaling

type Particle = {
  x: number; y: number         // current logical position
  baseX: number; baseY: number // rest position (drifts toward this)
  size: number
  life: number
  phaseX: number; phaseY: number
}

export interface AaParticleLogoProps {
  /** Logical canvas width in px — default 64 */
  width?: number
  /** Logical canvas height in px — default 40 */
  height?: number
  /** Square particle color — default #FF7900 */
  particleColor?: string
  /**
   * Base particle count at the 64×40 reference canvas.
   * The component scales this with sqrt(area) for larger sizes.
   * Default 1500.
   */
  particleDensity?: number
  /**
   * Fraction of the canvas the SVG silhouette fills (0–1).
   * Lower values give a small inset; 1.0 = edge-to-edge. Default 0.85.
   */
  logoScale?: number
  /** Optional solid background fill. Omit for transparent. */
  backgroundColor?: string
  className?: string
}

export function AaParticleLogo({
  width          = 64,
  height         = 40,
  particleColor  = '#FF7900',
  particleDensity = 1500,
  logoScale      = 0.85,
  backgroundColor,
  className,
}: AaParticleLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    // Physical pixel dimensions — used for imageData indexing
    const pw = Math.round(width  * dpr)
    const ph = Math.round(height * dpr)

    canvas.width  = pw
    canvas.height = ph
    ctx.scale(dpr, dpr)   // all subsequent draws use logical px coords

    let particles: Particle[] = []
    let imageData: ImageData | null = null
    let raf = 0
    let startTime: number | null = null

    // Particle count, scaled with canvas area so larger canvases fill properly
    function targetCount() {
      return Math.max(1, Math.floor(particleDensity * Math.sqrt((width * height) / REF_AREA)))
    }

    function createParticle(): Particle | null {
      if (!imageData) return null
      const d = imageData.data
      for (let attempt = 0; attempt < 100; attempt++) {
        const lx = Math.random() * width
        const ly = Math.random() * height
        // Convert logical sample point to physical pixel, then read alpha
        const px  = Math.min(Math.floor(lx * dpr), pw - 1)
        const py  = Math.min(Math.floor(ly * dpr), ph - 1)
        const idx = (py * pw + px) * 4
        if (d[idx + 3] > 128) {
          return {
            x: lx, y: ly,
            baseX: lx, baseY: ly,
            size:   SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN),
            life:   LIFE_MIN + Math.floor(Math.random() * (LIFE_MAX - LIFE_MIN)),
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
          }
        }
      }
      return null
    }

    function animate(ts: number) {
      if (startTime === null) startTime = ts
      const elapsed = ts - startTime

      ctx.clearRect(0, 0, width, height)
      if (backgroundColor) {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
      }
      ctx.fillStyle = particleColor

      const tc = targetCount()

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Gentle independent drift — each particle breathes at its own phase
        const dx = Math.sin(elapsed * IDLE_SPEED + p.phaseX) * IDLE_STRENGTH
        const dy = Math.cos(elapsed * IDLE_SPEED + p.phaseY) * IDLE_STRENGTH
        p.x += (p.baseX + dx - p.x) * 0.1
        p.y += (p.baseY + dy - p.y) * 0.1

        ctx.fillRect(p.x, p.y, p.size, p.size)

        if (--p.life <= 0) {
          const np = createParticle()
          if (np) particles[i] = np
          else { particles.splice(i, 1); i-- }
        }
      }

      // Top up to target count each frame
      while (particles.length < tc) {
        const p = createParticle()
        if (p) particles.push(p)
        else break
      }

      raf = requestAnimationFrame(animate)
    }

    function init() {
      const img = new window.Image()
      img.onload = () => {
        // Fit the SVG within the canvas, respecting logoScale
        const aspect = img.naturalWidth / img.naturalHeight
        let drawW = width  * logoScale
        let drawH = drawW  / aspect
        if (drawH > height * logoScale) {
          drawH = height * logoScale
          drawW = drawH  * aspect
        }
        const drawX = (width  - drawW) / 2
        const drawY = (height - drawH) / 2

        // Draw into the canvas, capture alpha mask, then clear for animation
        ctx.clearRect(0, 0, width, height)
        ctx.drawImage(img, drawX, drawY, drawW, drawH)
        imageData = ctx.getImageData(0, 0, pw, ph)   // physical-res snapshot
        ctx.clearRect(0, 0, width, height)

        // Seed initial particle cloud
        particles = []
        const tc = targetCount()
        for (let i = 0; i < tc; i++) {
          const p = createParticle()
          if (p) particles.push(p)
        }
        startTime = null
        raf = requestAnimationFrame(animate)
      }
      img.src = '/correctaalogo.svg'
    }

    init()
    return () => { cancelAnimationFrame(raf) }
  }, [width, height, particleColor, particleDensity, logoScale, backgroundColor])

  return (
    <canvas
      ref={canvasRef}
      aria-label="Areculateir"
      className={className}
      // CSS size = logical px; canvas.width/height = physical px (set in effect)
      style={{ width, height, display: 'block' }}
    />
  )
}
