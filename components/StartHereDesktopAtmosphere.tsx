'use client'

import { SparklesCore } from '@/components/ui/sparkles'

export function StartHereDesktopAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Dark base — deep near-black with warm undertone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(12,6,0,0.97) 0%, #000000 100%)',
        }}
      />

      {/* Orb 1 — top-left amber drift */}
      <div
        className="sh-orb-tl absolute"
        style={{
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(249,115,22,0.20) 0%, rgba(234,88,12,0.08) 45%, transparent 70%)',
          filter: 'blur(48px)',
          top: '-120px',
          left: '-100px',
        }}
      />

      {/* Orb 2 — center-right warm drift */}
      <div
        className="sh-orb-cr absolute"
        style={{
          width: '640px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(245,158,11,0.13) 0%, rgba(217,119,6,0.05) 50%, transparent 70%)',
          filter: 'blur(64px)',
          top: '28%',
          right: '-140px',
        }}
      />

      {/* Orb 3 — bottom-center subtle lift */}
      <div
        className="sh-orb-bc absolute"
        style={{
          width: '480px',
          height: '300px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 65%)',
          filter: 'blur(56px)',
          bottom: '-60px',
          left: '20%',
        }}
      />

      {/* Center radial lift glow */}
      <div
        className="absolute inset-x-0"
        style={{
          top: '15%',
          height: '340px',
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,122,0,0.09) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* SVG turbulence grain */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="sh-desk-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sh-desk-grain)" />
      </svg>

      {/* Vignette — darkens edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 38%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* Particles — reuses existing SparklesCore */}
      <SparklesCore
        background="transparent"
        minSize={0.25}
        maxSize={0.9}
        particleDensity={90}
        className="w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,white_25%,white_80%,transparent_100%)]"
        particleColor="#f97316"
      />
    </div>
  )
}
