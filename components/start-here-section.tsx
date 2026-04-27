'use client'

import { useState, useEffect } from 'react'
import { InquireModal } from '@/components/InquireModal'

const QUOTES = [
  {
    text: 'We build premium sites for businesses that deserve to look as good as they actually are.',
    attribution: '— Llewellyn Y. Fisher, Founder, Areculateir',
  },
  {
    text: 'Your website should be your best salesperson. Most aren\'t even trying.',
    attribution: '— Llewellyn Y. Fisher, Founder, Areculateir',
  },
  {
    text: 'We don\'t build websites. We build first impressions that convert.',
    attribution: '— Llewellyn Y. Fisher, Founder, Areculateir',
  },
]

export function StartHereSection() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % QUOTES.length)
        setVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes borderRotate {
          to { --angle: 360deg; }
        }
        .video-gradient-border {
          background: linear-gradient(var(--angle), #f97316, #ea580c, #000000, #f97316);
          animation: borderRotate 3s linear infinite;
        }
      `}</style>

      {/* 1. Mobile-only: h1 */}
      <div className="block md:hidden text-center px-6 pt-6 pb-4">
        <h1
          style={{
            fontFamily: 'visitor1, monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'linear-gradient(180deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          className="text-white text-3xl font-normal mb-6"
        >
          BUILD PREMIUM SITES
        </h1>
      </div>

      {/* 2. Video wrapper — shared mobile + desktop */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', width: '100%', marginTop: '1.5rem' }}>
        <div
          className="video-gradient-border"
          style={{
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            borderRadius: '14px',
            padding: '2px',
          }}
        >
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#000',
              width: '100%',
              aspectRatio: '16/9',
              position: 'relative',
            }}
          >
            <video
              src="/herovideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />

            {/* Overlay */}
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />

            {/* Quote carousel — bottom-left, desktop only */}
            <div className="hidden md:block">
              <div
                className="absolute bottom-6 left-6 max-w-[480px]"
                style={{
                  background: 'rgba(0,0,0,0.62)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 500ms ease',
                  }}
                >
                  <blockquote className="text-white text-sm leading-relaxed font-light italic mb-3">
                    &ldquo;{QUOTES[index].text}&rdquo;
                  </blockquote>
                  <p
                    className="text-white/50 text-[10px] not-italic"
                    style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {QUOTES[index].attribution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 & 4. Mobile-only: orange subtext + Win the Game of Business */}
      <div className="block md:hidden text-center px-6 pt-6 pb-4">
        <p className="text-primary text-base leading-relaxed mb-6">
          It&apos;s one thing to have a nice site, it&apos;s another to have one that is serving a functional purpose.
        </p>
        <p className="text-white text-base">
          Win the Game of Business
        </p>
      </div>

      {/* 5. Mobile-only: quote block */}
      <div className="block md:hidden px-8 mb-4">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 500ms ease',
            padding: '0 1rem',
          }}
        >
          <blockquote className="text-white text-sm leading-relaxed font-light italic mb-2">
            &ldquo;{QUOTES[index].text}&rdquo;
          </blockquote>
          <p
            className="text-white/50 text-[10px] not-italic"
            style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {QUOTES[index].attribution}
          </p>
        </div>
      </div>

      {/* 6. Below-video content */}
      <div className="flex flex-col items-center gap-4 text-center mt-12">
        <h2 className="font-serif italic text-primary text-4xl lg:text-5xl tracking-tight">
          <span className="font-normal">Where to</span> Start
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-md">
          Areculateir builds premium sites and automation systems for local businesses that are
          losing revenue to slower, better-looking competitors. Start with a free 15-minute call.
        </p>
        <InquireModal
          trigger={
            <button className="flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-5 py-2.5 rounded-full w-fit text-xs font-bold italic shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Inquire Now
            </button>
          }
        />
      </div>

    </div>
  )
}
