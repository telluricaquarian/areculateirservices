import Image from "next/image"
import { IntroBlock } from "@/components/intro-block"
import { ServicesList } from "@/components/services-list"
import { BottomCTA } from "@/components/bottom-cta"
import { FooterMeta } from "@/components/footer-meta"
import { SparklesCore } from "@/components/ui/sparkles"
import { FlipWords } from "@/components/ui/flip-words"
import { MobileHeader } from "@/components/MobileHeader"
import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* ============================================================
          DESKTOP LAYOUT — sidebar + full-width content
          ============================================================ */}
      <div className="hidden md:flex min-h-screen">

        {/* === LEFT RAIL === */}
        <div className="flex flex-col justify-between w-[240px] flex-shrink-0 py-10 px-8 border-r border-white/[0.05]">
          {/* Top: logo + nav */}
          <div className="flex flex-col gap-6">
            <div className="img-protected-wrap">
              <Image src="/neworange.png" alt="Logo" width={28} height={28} className="img-protected" draggable={false} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-foreground/25 text-[9px] uppercase tracking-widest mb-1">Services</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-foreground/60 text-[10px]">The Big 5</span>
              </div>
              <div className="flex items-center gap-1.5 pl-[10px]">
                <span className="text-foreground/25 text-[10px]">Overview</span>
              </div>
            </div>
          </div>
          {/* Bottom: compliance footer */}
          <div className="relative flex flex-col gap-1.5 text-[10px] leading-tight">
            {/* Barely-there orange ambient — bottom-anchored */}
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none -z-10 bg-gradient-to-t from-orange-500/[0.04] to-transparent" />
            <ComplianceModal />
            <p className="text-foreground/30 whitespace-nowrap">
              Brought to you by{" "}
              <AreculateirHoverPreview popupPosition="right" />
            </p>
            <span className="text-foreground/20">©2026</span>
          </div>
        </div>

        {/* === MAIN CONTENT === */}
        <div className="relative flex flex-col flex-1 py-10 px-10 lg:px-14 overflow-y-auto">

          {/* Ambient particle field — fills main content column, behind all content */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.9}
              particleDensity={120}
              className="w-full h-full"
              particleColor="#f97316"
            />
            {/* Fade: transparent at top (glow lines take over), solid mask at sides/bottom */}
            <div className="absolute inset-0 bg-black [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_30%,black_90%)]" />
          </div>

          {/* Hero intro */}
          <div className="relative mb-2">
            <div className="relative z-10 flex flex-col gap-1">
              <p className="text-foreground/60 text-xs font-normal tracking-wide">
                A-La-Carte Automation Workflow Services
              </p>
              <h1 className="text-primary font-serif italic text-lg font-medium leading-snug">
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
              <p className="text-foreground/35 italic text-xs">( Backed by Research &amp; Studies )</p>
            </div>
            {/* Sparkle glow layer */}
            <div className="absolute inset-x-0 top-[-12px] flex justify-center pointer-events-none z-0">
              <div className="w-[520px] h-[100px] relative">
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
          <h2 className="font-serif italic text-primary text-4xl lg:text-5xl mb-5 tracking-tight">
            <span className="font-normal">The</span> Big 5
          </h2>

          {/* Service card grid */}
          <ServicesList />

          {/* Desktop CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <p className="text-foreground/65 text-sm leading-relaxed">
              Speak with Lara to find out how to get this set-up / implemented.
            </p>
            <button className="flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-5 py-2.5 rounded-full w-fit text-xs font-bold italic shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Inquire Now
            </button>
          </div>

        </div>

      </div>

      {/* ============================================================
          MOBILE LAYOUT — unchanged
          ============================================================ */}
      <MobileHeader />

      <div className="md:hidden px-6 pt-[52px] pb-20">

        {/* Atmospheric sparkle zone — spans hero + services, stops before Service Provider */}
        <div className="relative">

          {/* Sparkle atmosphere layer — mobile only, absolute behind all content */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Glow line anchor at top of zone */}
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <div className="relative w-[260px] h-[80px]">
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
              </div>
            </div>
            {/* Particles filling the full zone */}
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={180}
              className="w-full h-full"
              particleColor="#f97316"
            />
            {/* Fade mask — hides top edge, fades out at bottom before Service Provider */}
            <div className="absolute inset-0 bg-black [mask-image:linear-gradient(to_bottom,white_0%,transparent_4%,transparent_80%,white_100%)]" />
          </div>

          {/* Content — sits above sparkle layer */}
          <div className="relative z-10">
            <IntroBlock />
            <div className="mt-0">
              <ServicesList />
            </div>
          </div>

        </div>

        <BottomCTA />
      </div>

      {/* Sticky glass footer — mobile only, fixed at bottom */}
      <FooterMeta />

    </main>
  )
}
