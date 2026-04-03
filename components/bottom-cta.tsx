import Image from "next/image"

export function BottomCTA() {
  return (
    <section className="relative mt-7 md:mt-20">
      {/* Mobile: Spartan as background */}
      <div className="md:hidden relative">
        {/* Content */}
        <div className="relative z-10 px-6 py-8 flex flex-col items-center gap-3 text-center">
          {/* Profile image */}
          <Image
            src="/displaytypebeats.png"
            alt="Llewellyn Y. Fisher"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />

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
          <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full w-fit shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transition-shadow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="font-medium text-sm">Inquire Now</span>
          </button>
        </div>
      </div>

    </section>
  )
}
