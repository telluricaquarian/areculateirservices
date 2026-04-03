import ComplianceModal from "@/components/ComplianceModal"

export function FooterMeta() {
  return (
    <footer className="mt-12 md:mt-16 pb-8 flex flex-col gap-1 text-xs text-foreground/50 items-center md:items-start text-center md:text-left">
      <ComplianceModal />
      <p>
        Brought to you by{" "}
        <a 
          href="https://areculateir.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        >
          Areculateir.com
        </a>
      </p>
      <p>&copy;2026</p>
    </footer>
  )
}
