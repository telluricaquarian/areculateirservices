'use client'

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTab } from '@/components/TabProvider'
import { IntroBlock } from '@/components/intro-block'
import { ServicesList } from '@/components/services-list'
import { BottomCTA } from '@/components/bottom-cta'
import { SparklesCore } from '@/components/ui/sparkles'
import { Agency6Section } from '@/components/agency-6-section'
import { WaasKlarnaSection } from '@/components/waas-klarna-section'
import { StartHereSection } from '@/components/start-here-section'
import { LeadGenSection } from '@/components/LeadGenSection'
import { HermesSection } from '@/components/HermesSection'
import { SidebarAtmosphereBackground } from '@/components/SidebarAtmosphereBackground'
import { StartHereDesktopAtmosphereBackground } from '@/components/StartHereDesktopAtmosphereBackground'

export function MobileContent() {
  const { activeTab } = useTab()
  const [bgMode, setBgMode] = useState<'dark' | 'atmosphere'>('dark')

  const isAtmosphere = activeTab === 'home' && bgMode === 'atmosphere'

  return (
    <>
      {/* Full-bleed mobile atmosphere — fixed behind all mobile content */}
      <div className="md:hidden fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {isAtmosphere ? (
          <>
            {/* Hermes base gradient — sibling to enhancement layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#242424] via-[#171717] to-[#111111]" />
            {/* Hermes enhancement: stars, orbs, grain, vignette */}
            <StartHereDesktopAtmosphereBackground />
          </>
        ) : (
          <SidebarAtmosphereBackground particleDensity={40} />
        )}
      </div>

      <div className="md:hidden relative z-[2] px-6 pt-[52px] pb-52">

        {/* Background mode toggle — home tab only, floats top-right */}
        {activeTab === 'home' && (
          <div className="absolute top-12 right-4 z-30">
            <button
              onClick={() => setBgMode(m => m === 'dark' ? 'atmosphere' : 'dark')}
              aria-label={bgMode === 'dark' ? 'Switch to atmosphere mode' : 'Switch to dark mode'}
              className="relative flex items-center rounded-full border border-white/15 bg-black/60 backdrop-blur-md p-1 transition-shadow duration-300"
              style={{
                boxShadow: bgMode === 'atmosphere'
                  ? '0 0 10px rgba(255,122,0,0.30), inset 0 0 0 1px rgba(255,122,0,0.20)'
                  : undefined,
              }}
            >
              {/* Sliding thumb */}
              <div
                className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ease-in-out ${
                  bgMode === 'dark'
                    ? 'left-1 bg-white/10'
                    : 'left-[28px] bg-[#FF7900]/25'
                }`}
                style={{
                  boxShadow: bgMode === 'atmosphere' ? '0 0 6px rgba(255,122,0,0.45)' : undefined,
                }}
              />
              {/* Moon icon */}
              <span
                className={`relative z-10 w-6 h-6 flex items-center justify-center transition-opacity duration-200 ${
                  bgMode === 'dark' ? 'opacity-80' : 'opacity-25'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-white" />
              </span>
              {/* Sun icon */}
              <span
                className={`relative z-10 w-6 h-6 flex items-center justify-center transition-opacity duration-200 ${
                  bgMode === 'atmosphere' ? 'opacity-90' : 'opacity-25'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-orange-400" />
              </span>
            </button>
          </div>
        )}

        {activeTab === 'leadgen' ? (
          <LeadGenSection />
        ) : activeTab === 'hermes' ? (
          <HermesSection />
        ) : activeTab === 'agency6' ? (
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
    </>
  )
}
