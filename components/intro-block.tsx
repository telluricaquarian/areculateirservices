import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"

export function IntroBlock() {
  return (
    <div className="relative">
      {/* Text — z-10 keeps it above the sparkle layer */}
      <div className="relative z-10 flex flex-col gap-1 md:gap-2">
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

      {/* Sparkle glow layer — absolute, does not affect layout */}
      <div className="absolute inset-x-0 top-[-24px] flex justify-center pointer-events-none z-0">
        <div className="w-[260px] md:w-[420px] h-[80px] md:h-[120px] relative">

          {/* Glow lines — orange theme */}
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-[4px] w-1/4 blur-sm" />
          <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-px w-1/4" />

          {/* Particles */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={700}
            className="w-full h-full"
            particleColor="#f97316"
          />

          {/* Radial fade mask — keeps effect tight and centered */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_120px_at_top,transparent_20%,white)]" />

        </div>
      </div>
    </div>
  )
}
