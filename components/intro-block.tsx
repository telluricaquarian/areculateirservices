import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"
import { FlipWords } from "@/components/ui/flip-words"
import { AaParticleLogo } from "@/components/aa-particle-logo"

export function IntroBlock() {
  return (
    <div className="relative">
      {/* Text — z-10 keeps it above the sparkle layer */}
      <div className="relative z-10 flex flex-col gap-1 md:gap-2 items-center md:items-start text-center md:text-left">
        {/* Particle Aa logo — tweak width/height here for the mobile/desktop intro slot */}
        <AaParticleLogo width={64} height={40} className="mb-0.5" />

        {/* Company Name */}
        <h2 className="text-foreground text-sm md:text-lg font-normal tracking-tight">
          A-La-Carte Automation Workflow Services
        </h2>

        {/* Headline */}
        <h1 className="text-primary font-serif italic text-lg md:text-xl font-medium leading-snug max-w-md">
          5 Extremely{" "}
          <span className="inline-flex items-baseline">
            <FlipWords
              words={["boring", "useful", "functional", "convenient", "nifty", "fruitful"]}
              duration={3000}
              className="text-primary italic"
            />
          </span>
          {" "}Services Your Business Actually Needs.
        </h1>

        {/* Keyboard image — mobile only, floats between headline and research line */}
        <div className="md:hidden flex justify-center py-3 relative z-10">
          <div className="img-protected-wrap">
            <Image
              src="/keyboard.png"
              alt="Keyboard"
              width={200}
              height={120}
              className="animate-float object-contain img-protected"
              draggable={false}
            />
          </div>
        </div>

        {/* Subline */}
        <p className="text-muted-foreground italic text-xs md:text-sm">
          ( Backed by Research &amp; Studies )
        </p>
      </div>

      {/* Sparkle glow layer — desktop only; mobile atmosphere handled in page.tsx */}
      <div className="hidden md:flex absolute inset-x-0 top-[-10px] justify-center pointer-events-none z-0">
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
