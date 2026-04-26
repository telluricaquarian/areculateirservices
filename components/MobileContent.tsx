'use client'

import { useTab } from '@/components/TabProvider'
import { IntroBlock } from '@/components/intro-block'
import { ServicesList } from '@/components/services-list'
import { BottomCTA } from '@/components/bottom-cta'
import { SparklesCore } from '@/components/ui/sparkles'
import { Agency6Section } from '@/components/agency-6-section'
import { WaasKlarnaSection } from '@/components/waas-klarna-section'

export function MobileContent() {
  const { activeTab } = useTab()

  return (
    <div className="md:hidden px-6 pt-[52px] pb-20">
      {activeTab === 'agency6' ? (
        <Agency6Section />
      ) : activeTab === 'waas' ? (
        <WaasKlarnaSection />
      ) : activeTab === 'big5' ? (
        <ServicesList />
      ) : (
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <div className="relative w-[260px] h-[80px]">
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
              </div>
            </div>
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={180}
              className="w-full h-full"
              particleColor="#f97316"
            />
            <div className="absolute inset-0 bg-black [mask-image:linear-gradient(to_bottom,white_0%,transparent_4%,transparent_80%,white_100%)]" />
          </div>
          <div className="relative z-10">
            <IntroBlock />
            <div className="mt-0">
              <ServicesList />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'home' && <BottomCTA />}
    </div>
  )
}
