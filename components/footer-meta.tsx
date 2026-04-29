import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"

export function FooterMeta() {
  return (
    <footer className="flex flex-row items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4 md:fixed md:bottom-0 md:inset-x-0 md:z-50 bg-black/60 backdrop-blur-md border-t border-white/[0.06] text-[10px] text-foreground/40">
      <div className="flex items-center gap-3">
        <ComplianceModal />
        <span className="text-foreground/20">·</span>
        <p>
          <AreculateirHoverPreview />
        </p>
      </div>
      <p className="flex-shrink-0">&copy;2026</p>
    </footer>
  )
}
