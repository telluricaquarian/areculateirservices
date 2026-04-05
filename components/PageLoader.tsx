'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// ── Tweak these ─────────────────────────────────────────────────────────────
const LOADER_DURATION_MS   = 1500  // ms the loader stays visible before fade-out begins
const FADE_OUT_MS          = 380   // ms for the overlay to fade to transparent
const LOGO_WIDTH           = 88    // px — width of the Aa logo (height auto from aspect ratio)
const BAR_WIDTH            = 160   // px — total width of the loading bar track
const BAR_HEIGHT           = 2     // px — thickness of the loading bar
const RUN_ONCE_PER_SESSION = true  // false → shows on every hard refresh
const SESSION_KEY          = 'areculateir_preloaded'
// ────────────────────────────────────────────────────────────────────────────

// SVG natural dimensions — used to preserve aspect ratio
const SVG_W = 1107
const SVG_H = 693

export function PageLoader() {
  // Default to 'done' — prevents server/client mismatch (no flash on hydration)
  const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('done')

  useEffect(() => {
    if (RUN_ONCE_PER_SESSION && sessionStorage.getItem(SESSION_KEY)) {
      return // already shown this session — skip entirely
    }

    setPhase('loading')

    const fadeTimer = setTimeout(() => setPhase('fading'), LOADER_DURATION_MS)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      if (RUN_ONCE_PER_SESSION) sessionStorage.setItem(SESSION_KEY, '1')
    }, LOADER_DURATION_MS + FADE_OUT_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        // Fade-out transition triggers when phase switches to 'fading'
        opacity: phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? `opacity ${FADE_OUT_MS}ms ease` : 'none',
        pointerEvents: phase === 'fading' ? 'none' : 'all',
      }}
    >
      {/* ── Logo ── fade in + subtle rise */}
      <div style={{ animation: 'loader-logo-in 0.6s ease forwards', opacity: 0 }}>
        <Image
          src="/correctaalogo.svg"
          alt="Areculateir"
          width={LOGO_WIDTH}
          height={Math.round(LOGO_WIDTH * (SVG_H / SVG_W))}
          priority
          draggable={false}
          style={{ display: 'block', userSelect: 'none' }}
        />
      </div>

      {/* ── Loading bar ── track + animated fill */}
      <div
        style={{
          width: BAR_WIDTH,
          height: BAR_HEIGHT,
          backgroundColor: 'rgba(255,255,255,0.07)',
          position: 'relative',
          overflow: 'hidden',
          // Same fade-in as logo so they appear together
          animation: 'loader-logo-in 0.6s ease forwards',
          opacity: 0,
        }}
      >
        {/* Fill — width animates 0 → 100% over LOADER_DURATION_MS */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '0%',
            height: '100%',
            backgroundColor: '#FF7900',
            boxShadow: '0 0 7px rgba(255,121,0,0.50)',
            animation: `loader-bar ${LOADER_DURATION_MS}ms cubic-bezier(0.4, 0, 0.25, 1) forwards`,
          }}
        />
      </div>
    </div>
  )
}
