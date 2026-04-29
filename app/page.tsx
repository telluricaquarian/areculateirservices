import { MobileHeader } from "@/components/MobileHeader"
import { DesktopMain } from "@/components/DesktopMain"
import { DesktopHeader } from "@/components/DesktopHeader"
import { FloatingCTA } from "@/components/FloatingCTA"
import { TabProvider } from "@/components/TabProvider"
import { MobileContent } from "@/components/MobileContent"
import { DeployedOn } from "@/components/DeployedOn"


export default function Home() {
  return (
    <main className="min-h-screen bg-background lg:h-screen lg:overflow-hidden md:pb-16">
      <TabProvider>

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

      <MobileContent />

      {/* Floating inquiry CTA — mobile only, hides when BottomCTA is in view */}
      <FloatingCTA />

      {/* Single-row glass footer — portfolio link + deployed-on logos */}
      <DeployedOn />

      </TabProvider>
    </main>
  )
}
