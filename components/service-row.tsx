import { ReactNode } from "react"

interface ServiceRowProps {
  icon: ReactNode
  price?: string
  title: string
  subtitle: string
  description: string
  showDivider?: boolean
}

export function ServiceRow({ icon, price, title, subtitle, description, showDivider = true }: ServiceRowProps) {
  return (
    <div className="relative isolate flex flex-col md:rounded-xl md:border md:border-primary/20 md:bg-background/60 md:hover:outline md:hover:outline-1 md:hover:outline-[#FF7900]/25 transition-[outline]">
      {/* Mobile: icon above text, centered | Desktop: card column layout */}
      <div className="flex flex-col items-center gap-2.5 py-4 md:flex-col md:items-start md:gap-3 md:p-5">

        {/* Icon — rounded stroke box on both mobile and desktop */}
        <div className="w-11 h-11 rounded-xl border border-primary/25 flex items-center justify-center text-foreground/80 flex-shrink-0">
          {icon}
        </div>

        {/* Pricing pill — below icon, above title */}
        {price && (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#FF7900]/40 bg-white/95 shadow-[0_0_8px_rgba(255,121,0,0.08)] cursor-default select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] flex-shrink-0" />
            <span className="text-[#111] text-[10px] font-medium tracking-wide leading-none">{price}</span>
          </div>
        )}

        {/* Content — centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col gap-0.5 items-center text-center md:items-start md:text-left">
          <h3 className="text-foreground font-medium text-sm italic leading-snug">
            {title}
          </h3>
          <p className="text-primary text-xs">
            {subtitle}
          </p>
          <p className="text-foreground/70 text-xs leading-snug max-w-[272px] md:max-w-none md:leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Micro-divider — mobile only */}
      {showDivider && (
        <div className="md:hidden flex items-center justify-center gap-2 py-1">
          <div className="h-px w-6 bg-orange-500/40" />
          <div className="h-px w-16 bg-orange-500/70" />
          <div className="h-px w-6 bg-orange-500/40" />
        </div>
      )}
    </div>
  )
}
