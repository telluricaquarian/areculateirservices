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
          <button className="flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-6 py-3 rounded-full w-fit shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FF7900]">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="font-bold italic text-sm">Inquire Now</span>
          </button>
        </div>
      </div>

    </section>
  )
}
