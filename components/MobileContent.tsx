'use client'

import { useTab } from '@/components/TabProvider'
import { IntroBlock } from '@/components/intro-block'
import { ServicesList } from '@/components/services-list'
import { BottomCTA } from '@/components/bottom-cta'
import { SparklesCore } from '@/components/ui/sparkles'
import { Agency6Section } from '@/components/agency-6-section'
import { WaasKlarnaSection } from '@/components/waas-klarna-section'
import { StartHereSection } from '@/components/start-here-section'

export function MobileContent() {
  const { activeTab } = useTab()

  return (
    <div className="md:hidden px-6 pt-[52px] pb-20">
      {activeTab === 'agency6' ? (
        <Agency6Section />
      ) : activeTab === 'waas' ? (
        <WaasKlarnaSection />
      ) : activeTab === 'big5' ? (
        <>
          <IntroBlock />
          <ServicesList />
        </>
      ) : (
        <StartHereSection />
      )}

      {activeTab === 'home' && <BottomCTA />}
    </div>
  )
}
