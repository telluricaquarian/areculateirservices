import { IntroBlock } from "@/components/intro-block"
import { ServicesList } from "@/components/services-list"
import { BottomCTA } from "@/components/bottom-cta"
import { FooterMeta } from "@/components/footer-meta"
import { SparklesCore } from "@/components/ui/sparkles"
import { MobileHeader } from "@/components/MobileHeader"
import { DesktopMain } from "@/components/DesktopMain"
import { DesktopHeader } from "@/components/DesktopHeader"
import { FloatingCTA } from "@/components/FloatingCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background lg:h-screen lg:overflow-hidden">

      {/* Desktop sticky header — lg+ only */}
      <DesktopHeader />

      {/* ============================================================
          DESKTOP LAYOUT — sidebar + full-width content
          ============================================================ */}
      <DesktopMain />

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

      {/* Floating inquiry CTA — mobile only, hides when BottomCTA is in view */}
      <FloatingCTA />

      {/* Sticky glass footer — mobile only, fixed at bottom */}
      <FooterMeta />

    </main>
  )
}
