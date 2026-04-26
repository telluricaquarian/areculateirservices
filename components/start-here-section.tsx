'use client'

import { InquireModal } from '@/components/InquireModal'

export function StartHereSection() {
  return (
    <div className="flex flex-col">

      {/* Video hero — negative margins bleed past content-area padding */}
      <div className="relative -mx-10 lg:-mx-14 -mt-10 overflow-hidden" style={{ height: '70vh' }}>
        <video
          src="/herovideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />

        {/* Quote block — bottom-left */}
        <div
          className="absolute bottom-6 left-6 max-w-[480px]"
          style={{
            background: 'rgba(0,0,0,0.62)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            padding: '1.5rem',
          }}
        >
          <blockquote className="text-white text-sm leading-relaxed font-light italic mb-3">
            &ldquo;We don&rsquo;t pitch websites. We identify exactly which businesses are losing revenue right now — and we fix it.&rdquo;
          </blockquote>
          <p
            className="text-white/50 text-[10px] not-italic"
            style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            — Llewellyn Y. Fisher, Founder, Areculateir
          </p>
        </div>
      </div>

      {/* Below-video content */}
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
