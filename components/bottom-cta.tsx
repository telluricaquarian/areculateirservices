import Image from "next/image"

export function BottomCTA() {
  return (
    <section className="relative mt-12 md:mt-20">
      {/* Mobile: Spartan as background */}
      <div className="md:hidden relative">
        {/* Spartan Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/spartan.png"
            alt="Armored figure"
            fill
            className="object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-12 flex flex-col gap-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <Image
              src="/displaytypebeats.png"
              alt="Llewellyn Y. Fisher"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-foreground font-medium">Llewellyn Y. Fisher</p>
              <p className="text-primary italic text-sm">Service Provider</p>
            </div>
          </div>

          {/* CTA Text */}
          <p className="text-foreground/90 text-base leading-relaxed">
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

      {/* Desktop: Side by side layout */}
      <div className="hidden md:flex items-end gap-8">
        {/* Left Content */}
        <div className="flex flex-col gap-6 pb-8">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <Image
              src="/displaytypebeats.png"
              alt="Llewellyn Y. Fisher"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-foreground font-medium">Llewellyn Y. Fisher</p>
              <p className="text-primary italic text-sm">Service Provider</p>
            </div>
          </div>

          {/* CTA Text */}
          <p className="text-foreground/90 text-base leading-relaxed max-w-sm">
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

        {/* Spartan Image - positioned to the right */}
        <div className="relative w-64 h-80 flex-shrink-0">
          <Image
            src="/spartan.png"
            alt="Armored figure"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
