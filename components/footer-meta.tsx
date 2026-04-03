import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"

export function FooterMeta() {
  return (
    <footer className="mt-12 md:mt-16 pb-8 flex flex-col gap-1 text-xs text-foreground/50 items-center md:items-start text-center md:text-left">
      <ComplianceModal />
      <p>
        Brought to you by{" "}
        <AreculateirHoverPreview />
      </p>
      <p>&copy;2026</p>
    </footer>
  )
}
