import { IntroBlock } from "@/components/intro-block"
import { ServicesList } from "@/components/services-list"
import { BottomCTA } from "@/components/bottom-cta"
import { FooterMeta } from "@/components/footer-meta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex">
          {/* Left Column - Content */}
          <div className="w-full max-w-2xl pl-12 lg:pl-20 pr-8 py-12">
            <IntroBlock />

            {/* The Big 5 - Desktop Only */}
            <h2 className="font-serif italic text-primary text-5xl lg:text-6xl mt-16 mb-8 tracking-tight">
              <span className="font-normal">The</span> Big 5
            </h2>

            <ServicesList />
            <BottomCTA />
            <FooterMeta />
          </div>

          {/* Right Column - Empty space (cinematic negative space) */}
          <div className="flex-1" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-8">
        <IntroBlock />
        
        <div className="mt-12">
          <ServicesList />
        </div>

        <BottomCTA />
        <FooterMeta />
      </div>
    </main>
  )
}
