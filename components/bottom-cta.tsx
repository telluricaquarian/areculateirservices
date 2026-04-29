'use client'

import Image from "next/image"
import { ApplyButton } from "@/components/ApplyModal"

export function BottomCTA() {
  return (
    <section id="bottom-cta-section" className="relative mt-7 md:mt-20">
      <div className="relative">
        {/* Content */}
        <div className="relative z-10 px-6 py-8 flex flex-col items-center gap-3 text-center">
          {/* Profile image */}
          <div className="relative inline-flex img-protected-wrap">
            <Image
              src="/lewfish.png"
              alt="Llewellyn Y. Fisher"
              width={56}
              height={56}
              className="rounded-full object-cover img-protected"
              draggable={false}
            />
            {/* Status dot — top-right edge */}
            <span className="absolute top-0.5 right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7900] opacity-35" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF7900]" />
            </span>
          </div>

          {/* Name + role */}
          <div className="flex flex-col gap-0.5">
            <p className="text-foreground font-medium">Llewellyn Y. Fisher</p>
            <p className="text-primary italic text-sm">Service Provider</p>
          </div>

          {/* CTA Text */}
          <p className="text-foreground/90 text-sm leading-snug max-w-[260px]">
            Speak with Llewellyn to find out how to get this set-up / implemented.
          </p>

          {/* CTA Button */}
          <ApplyButton />

          <div className='flex justify-center mt-8 mb-6'>
            <span style={{ fontFamily: 'SaltyFeathers, cursive', fontSize: 28, color: 'rgba(212,165,80,0.85)' }}>
              Areculateir
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}
