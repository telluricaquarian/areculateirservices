'use client'

import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"
import { FlipWords } from "@/components/ui/flip-words"
import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"
import { ServicesList } from "@/components/services-list"
import { Agency6Section } from "@/components/agency-6-section"
import { WaasKlarnaSection } from "@/components/waas-klarna-section"
import { StartHereSection } from "@/components/start-here-section"
import { LeadGenSection } from "@/components/LeadGenSection"
import { HermesSection } from "@/components/HermesSection"
import { SidebarAtmosphereBackground } from "@/components/SidebarAtmosphereBackground"
import { InquireModal } from "@/components/InquireModal"
import { AaParticleLogo } from "@/components/aa-particle-logo"
import { useTab } from "@/components/TabProvider"
import { BottomCTA } from "@/components/bottom-cta"
import { StartHereDesktopAtmosphere } from "@/components/StartHereDesktopAtmosphere"

export function DesktopMain() {
  const { activeTab, setActiveTab } = useTab()

  return (
    <div className="hidden md:flex h-screen overflow-hidden">

      {/* === LEFT RAIL === */}
      <div className="relative flex flex-col justify-between w-[270px] flex-shrink-0 py-10 px-8 border-r border-primary/20 shadow-[1px_0_6px_rgba(255,122,0,0.06)] z-[60]">

        {/* Sidebar atmosphere — overflow-hidden scoped to this layer only so popup can escape */}
        <SidebarAtmosphereBackground />

        {/* Top: logo + nav */}
        <div className="relative z-10 flex flex-col gap-6">
          {/* Particle Aa logo — tweak width/height here for the sidebar slot */}
          <AaParticleLogo width={64} height={40} />

          {/* HOME section */}
          <div className="flex flex-col gap-2">
            <p className="text-foreground/25 text-[9px] uppercase tracking-widest mb-0.5">Home</p>
            <button
              onClick={() => setActiveTab('home')}
              className={[
                "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                activeTab === 'home'
                  ? "border-[#FF7900]/55"
                  : "border-foreground/15 hover:border-foreground/30",
              ].join(' ')}
            >
              <span className={[
                "text-[10px] leading-none whitespace-nowrap",
                activeTab === 'home' ? "text-foreground/80" : "text-foreground/30",
              ].join(' ')}>Start Here</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-foreground/25 text-[9px] uppercase tracking-widest mb-0.5">Services</p>

            {/* Pills — Big 5 + Agency 6 inline, WaaS + Klarna on its own row */}
            <div className="flex flex-col gap-2">
              {/* Row 1: The Big 5 + Agency 6 side by side */}
              <div className="flex items-center gap-2">
              {/* The Big 5 pill */}
              <button
                onClick={() => setActiveTab('big5')}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                  activeTab === 'big5'
                    ? "border-[#FF7900]/55"
                    : "border-foreground/15 hover:border-foreground/30",
                ].join(' ')}
              >
                {activeTab === 'big5' && (
                  <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                )}
                <span className={[
                  "text-[10px] leading-none whitespace-nowrap",
                  activeTab === 'big5' ? "text-foreground/80" : "text-foreground/30",
                ].join(' ')}>The Big 5</span>
              </button>

              {/* Agency 6 pill */}
              <button
                onClick={() => setActiveTab('agency6')}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                  activeTab === 'agency6'
                    ? "border-[#FF7900]/55"
                    : "border-foreground/15 hover:border-foreground/30",
                ].join(' ')}
              >
                {activeTab === 'agency6' && (
                  <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                )}
                <span className={[
                  "text-[10px] leading-none whitespace-nowrap",
                  activeTab === 'agency6' ? "text-foreground/80" : "text-foreground/30",
                ].join(' ')}>Agency 6</span>
              </button>
              </div>

              {/* Row 2: WaaS + Klarna pill */}
              <button
                onClick={() => setActiveTab('waas')}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                  activeTab === 'waas'
                    ? "border-[#FF7900]/55"
                    : "border-foreground/15 hover:border-foreground/30",
                ].join(' ')}
              >
                {activeTab === 'waas' && (
                  <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                )}
                <span className={[
                  "text-[10px] leading-none whitespace-nowrap",
                  activeTab === 'waas' ? "text-foreground/80" : "text-foreground/30",
                ].join(' ')}>WaaS + Klarna</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-foreground/25 text-[9px] uppercase tracking-widest mb-0.5">Proprietary</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('leadgen')}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                  activeTab === 'leadgen'
                    ? "border-[#FF7900]/55"
                    : "border-foreground/15 hover:border-foreground/30",
                ].join(' ')}
              >
                {activeTab === 'leadgen' && (
                  <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                )}
                <span className={[
                  "text-[10px] leading-none whitespace-nowrap",
                  activeTab === 'leadgen' ? "text-foreground/80" : "text-foreground/30",
                ].join(' ')}>Lead Gen System</span>
              </button>
              <button
                onClick={() => setActiveTab('hermes')}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit transition-colors",
                  activeTab === 'hermes'
                    ? "border-[#FF7900]/55"
                    : "border-foreground/15 hover:border-foreground/30",
                ].join(' ')}
              >
                {activeTab === 'hermes' && (
                  <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                )}
                <span className={[
                  "text-[10px] leading-none whitespace-nowrap",
                  activeTab === 'hermes' ? "text-foreground/80" : "text-foreground/30",
                ].join(' ')}>Hermes Agent</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: compliance footer */}
        <div className="relative z-10 flex flex-col gap-1.5 text-[10px] leading-tight">
          <ComplianceModal />
          <p className="text-foreground/30 whitespace-nowrap">
            Brought to you by{" "}
            <AreculateirHoverPreview popupPosition="right" />
          </p>
          <span className="text-foreground/20">©2026</span>
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative flex flex-col flex-1 pt-10 px-10 lg:px-14 overflow-y-auto">

        {/* Background layer — atmosphere for home tab, ambient particles otherwise */}
        {activeTab === 'home' ? (
          <StartHereDesktopAtmosphere />
        ) : (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.9}
              particleDensity={120}
              className="w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_40%,white_60%,white_82%,transparent_100%)]"
              particleColor="#f97316"
            />
          </div>
        )}

        {/* Inner content wrapper — relative z-10 keeps content above background layer */}
        <div className="relative z-10 pb-10">
        {activeTab === 'home' ? (
          <>
            <StartHereSection />
            <BottomCTA />
          </>
        ) : activeTab === 'leadgen' ? (
          <LeadGenSection />
        ) : activeTab === 'hermes' ? (
          <HermesSection />
        ) : (
          <>
            {/* Hero intro — hidden on waas tab (WaasKlarnaSection has its own pairing hero) */}
            {activeTab !== 'waas' && <div className="relative mb-2">
              <div className="relative z-10 flex flex-col gap-1 items-center text-center">
                <p className="text-foreground/60 text-xs font-normal tracking-wide">
                  A-La-Carte Automation Workflow Services
                </p>
                <h1 className="text-primary font-serif italic text-lg font-medium leading-snug">
                  {activeTab === 'big5' ? (
                    <>
                      5 Extremely{" "}
                      <span className="inline-flex items-baseline">
                        <FlipWords
                          words={["boring", "useful", "functional", "convenient", "nifty", "fruitful"]}
                          duration={3000}
                          className="text-primary italic"
                        />
                      </span>
                      {" "}Services Your Business Actually Needs.
                    </>
                  ) : activeTab === 'agency6' ? (
                    <>6 AI Systems Built for Agencies That Sell Automation.</>
                  ) : (
                    <>Premium Sites That Convert at the Payment Screen.</>
                  )}
                </h1>
                <p className="text-foreground/35 italic text-xs mt-0.5">( Backed by Research &amp; Studies )</p>
                {/* Keyboard image — desktop hero centerpiece */}
                <div className="img-protected-wrap mt-5">
                  <Image
                    src="/keyboard.png"
                    alt="Keyboard"
                    width={340}
                    height={200}
                    className="object-contain img-protected animate-float"
                    draggable={false}
                  />
                </div>
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
            </div>}

            {/* Section heading — hidden on waas tab (WaasKlarnaSection has its own heading) */}
            {activeTab !== 'waas' && (
              <h2 className="font-serif italic text-primary text-4xl lg:text-5xl mb-10 lg:mb-14 tracking-tight text-center">
                {activeTab === 'big5' ? (
                  <><span className="font-normal">The</span> Big 5</>
                ) : (
                  <><span className="font-normal">Agency</span> 6</>
                )}
              </h2>
            )}

            {/* Service card grid */}
            {activeTab === 'big5' ? (
              <ServicesList />
            ) : activeTab === 'agency6' ? (
              <Agency6Section />
            ) : (
              <WaasKlarnaSection />
            )}

            {/* Desktop CTA */}
            {activeTab !== 'waas' && <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <p className="text-foreground/65 text-sm leading-relaxed">
                Speak with Llewellyn to find out how to get this set-up / implemented.
              </p>
              <InquireModal
                trigger={
                  <button className="flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-5 py-2.5 rounded-full w-fit text-xs font-bold italic shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Inquire Now
                  </button>
                }
              />
            </div>}
          </>
        )}
        </div>{/* end inner content wrapper */}

        {/* Desktop footer strip — sticky wrapper holds both rows */}
        <div className="hidden md:flex md:flex-col md:sticky md:bottom-0 md:z-40 -mx-10 lg:-mx-14 mt-8 bg-black/40 backdrop-blur-md border-t border-white/10">
          {/* Row 1: View Site Portfolio + Deployed On */}
          <div className="flex items-center justify-between px-6 py-4">
            <a href='#' className='inline-flex items-center gap-1.5 text-foreground/50 text-[10px] tracking-wide hover:text-foreground/80 transition-colors'>
              <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#FF7900' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0' aria-hidden='true'>
                <rect x='3' y='3' width='7' height='7'/>
                <rect x='14' y='3' width='7' height='7'/>
                <rect x='3' y='14' width='7' height='7'/>
                <rect x='14' y='14' width='7' height='7'/>
              </svg>
              View Site Portfolio
            </a>
            <div className='flex items-center gap-2'>
              <span className='text-white/30 text-[9px] tracking-widest uppercase'>Deployed on</span>
              <img src='/sevallalogo.png' alt='Sevalla' style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'contain' }} />
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#111', border: '1px solid rgba(249,115,22,0.4)', boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox='0 0 116 100' style={{ width: 14, height: 14, fill: 'white' }}><path d='M57.5 0L115 100H0L57.5 0z'/></svg>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#111', border: '1px solid rgba(249,115,22,0.4)', boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src='/coolifylogo.jpg' alt='Coolify' style={{ width: 20, height: 20, objectFit: 'contain' }} />
              </div>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#111', border: '1px solid rgba(249,115,22,0.4)', boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src='/nousresearch.jpg' alt='Nous Research' style={{ width: 20, height: 20, objectFit: 'contain' }} />
              </div>
            </div>
          </div>
          {/* Row 2: All Rights Reserved + Privacy Policy */}
          <div className="flex items-center justify-between px-6 py-2 border-t border-white/5">
            <span className="text-xs text-[#FF7900]/80">All Rights Reserved</span>
            <a href='#' className="text-xs text-white/50 hover:text-white/80 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>

    </div>
  )
}
