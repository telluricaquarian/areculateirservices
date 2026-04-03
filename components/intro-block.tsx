import Image from "next/image"

export function IntroBlock() {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      {/* Logo */}
      <Image
        src="/neworange.png"
        alt="Logo"
        width={28}
        height={28}
        className="mb-0.5"
      />

      {/* Company Name */}
      <h2 className="text-foreground text-sm md:text-lg font-normal tracking-tight">
        A-La-Carte Automation Workflow Services
      </h2>

      {/* Headline */}
      <h1 className="text-primary font-serif italic text-lg md:text-xl font-medium leading-snug max-w-md">
        5 Extremely Boring Services Your Business Actually Needs.
      </h1>

      {/* Subline */}
      <p className="text-muted-foreground italic text-xs md:text-sm">
        ( Backed by Research &amp; Studies )
      </p>
    </div>
  )
}
