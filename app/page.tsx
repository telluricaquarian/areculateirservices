import { FooterMeta } from "@/components/footer-meta"
import { MobileHeader } from "@/components/MobileHeader"
import { DesktopMain } from "@/components/DesktopMain"
import { DesktopHeader } from "@/components/DesktopHeader"
import { TabProvider } from "@/components/TabProvider"
import { MobileContent } from "@/components/MobileContent"
import { DeployedOn } from "@/components/DeployedOn"

export default function Home() {
  return (
    <main className="min-h-screen bg-background lg:h-screen lg:overflow-hidden">
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

{/* Deployed on badge — mobile only, sits above footer */}
      <DeployedOn />

      {/* Sticky glass footer — mobile only, fixed at bottom */}
      <FooterMeta />

      </TabProvider>
    </main>
  )
}
