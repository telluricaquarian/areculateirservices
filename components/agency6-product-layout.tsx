import Link from "next/link"
import { ReactNode } from "react"

// ── Shared primitives ──────────────────────────────────────────────────────

export function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors"
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
        <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Agency 6
    </Link>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.12em] text-[#FF7900]/50 mb-3">
      {children}
    </p>
  )
}

export function Divider() {
  return (
    <div className="flex items-center gap-2 my-10">
      <div className="h-px flex-1 bg-white/[0.05]" />
      <div className="w-1 h-1 rounded-full bg-[#FF7900]/20" />
      <div className="h-px flex-1 bg-white/[0.05]" />
    </div>
  )
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-5 py-2.5 rounded-full text-xs font-bold italic shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
      {children}
    </a>
  )
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground/80 border border-white/[0.08] hover:border-white/20 px-5 py-2.5 rounded-full transition-all"
    >
      {children}
    </a>
  )
}

export function BulletItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-foreground/65 leading-relaxed">
      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#FF7900]/50 flex-shrink-0" />
      {children}
    </li>
  )
}

export function PricingCard({
  tier,
  price,
  description,
  items,
  ctaLabel,
  ctaHref,
  isHighlighted,
}: {
  tier: string
  price: string
  description: string
  items: string[]
  ctaLabel: string
  ctaHref: string
  isHighlighted?: boolean
}) {
  return (
    <div
      className={[
        "flex flex-col gap-4 rounded-xl border p-6",
        isHighlighted
          ? "border-[#FF7900]/30 bg-[#FF7900]/[0.04]"
          : "border-white/[0.08] bg-background/60",
      ].join(" ")}
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#FF7900]/60 mb-1">{tier}</p>
        <p className="text-foreground font-serif italic text-2xl">{price}</p>
        <p className="text-foreground/45 text-xs mt-1 leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <BulletItem key={item}>{item}</BulletItem>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        {isHighlighted ? (
          <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
        ) : (
          <SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
        )}
      </div>
    </div>
  )
}

// ── Page shell ─────────────────────────────────────────────────────────────

export function ProductPageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-[760px] mx-auto px-6 py-12 md:px-10 md:py-16">
        {children}
      </div>
    </main>
  )
}
