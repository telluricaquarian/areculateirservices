'use client'

import { useState, useEffect } from 'react'
import { InquireModal } from '@/components/InquireModal'

/**
 * FloatingCTA — mobile-only sticky inquiry button.
 *
 * Floats above FooterMeta while the user browses services.
 * Hides automatically (opacity + slide) when the BottomCTA section
 * enters the viewport, so the two CTAs never compete.
 *
 * Observes: #bottom-cta-section (IntersectionObserver, no scroll events)
 */
export function FloatingCTA() {
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById('bottom-cta-section')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setCtaVisible(entry.isIntersecting),
      { threshold: 0 }   // trigger as soon as any pixel enters/leaves
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    /*
     * md:hidden  → desktop never sees this
     * bottom-14  → 56px — clears FooterMeta (~44px tall) with breathing room
     * z-50       → above FooterMeta (z-40)
     */
    <div
      className="hidden md:hidden fixed bottom-14 inset-x-0 z-50 flex justify-center pointer-events-none"
      aria-hidden={ctaVisible}
    >
      <div
        style={{
          opacity:        ctaVisible ? 0 : 1,
          transform:      ctaVisible ? 'translateY(20px)' : 'translateY(0)',
          transition:     'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents:  ctaVisible ? 'none' : 'auto',
        }}
      >
        <InquireModal
          trigger={
            <button className="flex items-center gap-2 bg-[#FF7900] text-black px-5 py-2.5 rounded-full text-xs font-bold italic shadow-[0_4px_24px_rgba(255,121,0,0.45)] hover:shadow-[0_4px_36px_rgba(255,121,0,0.65)] hover:scale-[1.02] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
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
