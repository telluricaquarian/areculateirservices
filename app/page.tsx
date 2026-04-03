import Image from "next/image"
import { IntroBlock } from "@/components/intro-block"
import { ServicesList } from "@/components/services-list"
import { BottomCTA } from "@/components/bottom-cta"
import { FooterMeta } from "@/components/footer-meta"
import { SparklesCore } from "@/components/ui/sparkles"
import { MobileHeader } from "@/components/MobileHeader"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* ============================================================
          DESKTOP LAYOUT — 3-zone cinematic composition
          ============================================================ */}
      <div className="hidden md:flex relative h-screen overflow-hidden">

        {/* === ZONE 3: Bottom-right Spartan visual anchor === */}
        <div className="absolute bottom-0 right-0 w-[44%] h-[88%] pointer-events-none select-none">
          <Image
            src="/aalogoholdingspartan.png"
            alt="Armored figure"
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Left-edge fade so center text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          {/* Top fade — blends figure into dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
        </div>

        {/* === ZONE 1: Left rail — logo + compliance footer === */}
        <div className="relative z-10 flex flex-col justify-between w-[140px] flex-shrink-0 py-10 px-7 border-r border-white/[0.05]">
          <Image src="/neworange.png" alt="Logo" width={28} height={28} />
          <div className="flex flex-col gap-0.5 text-[10px] text-foreground/30 leading-tight">
            <span>Compliance</span>
            <span>Infrastructure</span>
            <a
              href="https://areculateir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-primary/50 underline underline-offset-2 hover:text-primary/70 transition-colors"
            >
              Areculateir.com
            </a>
            <span className="mt-0.5">©2026</span>
          </div>
        </div>

        {/* === ZONE 2: Center editorial column === */}
        <div className="relative z-10 flex flex-col py-6 px-6 lg:px-8 w-full max-w-[520px]">

          {/* Intro text */}
          <div className="relative mb-5">
            <div className="relative z-10 flex flex-col gap-1">
              <p className="text-foreground/60 text-xs font-normal tracking-wide">
                A-La-Carte Automation Workflow Services
              </p>
              <h1 className="text-primary font-serif italic text-lg font-medium leading-snug">
                5 Extremely Boring Services Your Business Actually Needs.
              </h1>
              <p className="text-foreground/35 italic text-xs">( Backed by Research &amp; Studies )</p>
            </div>

            {/* Sparkle glow layer */}
            <div className="absolute inset-x-0 top-[-12px] flex justify-center pointer-events-none z-0">
              <div className="w-[420px] h-[100px] relative">
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-[4px] w-1/4 blur-sm" />
                <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-px w-1/4" />
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={700}
                  className="w-full h-full"
                  particleColor="#f97316"
                />
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_100px_at_top,transparent_20%,white)]" />
              </div>
            </div>
          </div>

          {/* The Big 5 heading */}
          <h2 className="font-serif italic text-primary text-4xl lg:text-5xl mb-4 tracking-tight">
            <span className="font-normal">The</span> Big 5
          </h2>

          <ServicesList />
        </div>

        {/* === ZONE 4: Bottom-right floating glass card === */}
        <div className="absolute bottom-10 right-10 z-20 w-[288px] rounded-2xl border border-primary/20 bg-background/55 backdrop-blur-md shadow-[0_0_48px_rgba(255,122,0,0.10),inset_0_0_0_1px_rgba(255,122,0,0.08)] p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/displaytypebeats.png"
              alt="Llewellyn Y. Fisher"
              width={48}
              height={48}
              className="rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-foreground font-medium text-sm">Llewellyn Y. Fisher</p>
              <p className="text-primary italic text-xs">Service Provider</p>
            </div>
          </div>
          <p className="text-foreground/65 text-xs leading-relaxed">
            Speak with Llewellyn to find out how to get this set-up / implemented.
          </p>
          <button className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full w-fit text-xs font-medium shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transition-shadow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Inquire Now
          </button>
        </div>

      </div>

      {/* ============================================================
          MOBILE LAYOUT — unchanged
          ============================================================ */}
      <MobileHeader />

      <div className="md:hidden px-6 pt-[52px] pb-5">
        <IntroBlock />

        {/* Orange gradient divider — header / service grid break */}
        <div
          className="mt-4 mb-2 h-px w-full"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,121,0,0.55), transparent)",
            boxShadow: "0 0 6px 0 rgba(255,121,0,0.2)",
          }}
        />

        <div className="mt-0">
          <ServicesList />
        </div>

        <BottomCTA />
        <FooterMeta />
      </div>

    </main>
  )
}
