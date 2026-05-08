'use client'

import { InquireModal } from '@/components/InquireModal'

const ENTRY_POINTS = [
  {
    index: '①',
    label: 'Starting from scratch',
    description: 'Full premium site build + Klarna integration',
    investment: 'Investment from $800/month',
  },
  {
    index: '②',
    label: 'You have a site, need Klarna',
    description: 'Klarna merchant setup, payment flow integration, and ongoing support — no full rebuild needed',
    investment: 'Investment from $500/month',
  },
  {
    index: '③',
    label: 'You have Klarna, need the site',
    description: 'Premium site build that showcases and maximises your existing Klarna or Afterpay setup',
    investment: 'Investment from $500/month',
  },
]

export function WaasKlarnaSection() {
  return (
    <div className="relative">

      {/* Locked overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/55 flex items-center justify-center rounded-xl">
        <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-white/40"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.18em]">Coming Soon</p>
        </div>
      </div>

      <section className="flex flex-col items-start text-left pt-8 pb-12 px-6">
        <div className="flex items-center justify-start gap-6 mb-8">
          <img
            src="/aaklarnapair.png"
            alt="Areculateir"
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-[0_0_30px_rgba(255,121,0,0.4)]"
          />
          <span className="text-3xl md:text-4xl text-white/80 font-light">+</span>
          <img
            src="/klarna.jpeg"
            alt="Klarna"
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-[0_0_30px_rgba(254,179,199,0.5)]"
          />
        </div>
        <h2 className="text-2xl md:text-4xl italic text-white mb-2">
          The Duo you didn&apos;t know you needed&hellip;
        </h2>
        <p className="text-base italic text-white/50">(Until Now)</p>
      </section>

    <div className="relative isolate flex flex-col rounded-xl border border-primary/20 bg-background/60 p-6 gap-6">

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground/90 text-sm font-medium leading-snug">WaaS + Klarna</h3>
        <p className="text-foreground/40 text-xs leading-relaxed">
          Premium Sites That Convert at the Payment Screen
        </p>
      </div>

      {/* Entry points */}
      <div className="flex flex-col divide-y divide-primary/10">
        {ENTRY_POINTS.map((ep) => (
          <div key={ep.index} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            <span className="text-[#FF7900]/50 text-xs leading-none mt-0.5 flex-shrink-0 w-4">{ep.index}</span>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-foreground/80 text-xs font-medium leading-snug">{ep.label}</p>
              <p className="text-foreground/40 text-[11px] leading-relaxed">{ep.description}</p>
              <p className="text-[#FF7900] text-[10px] uppercase tracking-widest font-medium mt-0.5">{ep.investment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discrete note */}
      <p className="text-foreground/25 text-[10px] leading-relaxed italic border-t border-primary/10 pt-4">
        Not sure which applies to you? Book a free 15-minute call and we&apos;ll tell you exactly what you need — and what you don&apos;t.
      </p>

      {/* CTA */}
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
