'use client'

import { StarsBackground } from '@/components/backgrounds/StarsBackground'

export function StartHereDesktopAtmosphereBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">

      {/* Base gradient — lifted charcoal matching Hermes <main> */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #2e2e2e 0%, #1c1c1c 45%, #141414 100%)' }} />

      {/* Stars — animate-ui StarsBackground (self-contained overflow-hidden) */}
      <StarsBackground
        starColor="rgba(255,255,255,0.90)"
        speed={60}
        factor={0.04}
        className="absolute inset-0"
        pointerEvents={false}
      />

      {/* Orb 1 — warm orange, top-right */}
      <div
        className="orb-drift-1 absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,100,0,0.35) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      {/* Orb 2 — soft warm white, left-mid */}
      <div
        className="orb-drift-2 absolute top-[30%] -left-28 w-[380px] h-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,230,200,0.18) 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      {/* Orb 3 — subtle amber, bottom */}
      <div
        className="orb-drift-3 absolute -bottom-16 left-[15%] w-[560px] h-[240px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(180,65,0,0.28) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      {/* Center radial lift — brightens the middle viewing area */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px]"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 30%, rgba(255,255,255,0.05) 0%, transparent 100%)" }}
      />
      {/* Grain — SVG feTurbulence noise tile, sits above gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "280px 280px",
          opacity: 0.14,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Vignette — very light, just softens edges without crushing the charcoal */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.10) 100%)" }}
      />

    </div>
  )
}
