import { ReactNode } from "react"

interface ServiceRowProps {
  icon: ReactNode
  title: string
  subtitle: string
  description: string
  showDivider?: boolean
}

export function ServiceRow({ icon, title, subtitle, description, showDivider = true }: ServiceRowProps) {
  return (
    <div className="flex flex-col">
      {/* Mobile: icon above text, centered | Desktop: icon left, row */}
      <div className="flex flex-col items-center gap-2.5 py-4 md:flex-row md:items-start md:gap-5 md:py-2.5">

        {/* Icon — rounded stroke box on mobile, plain column on desktop */}
        <div className="w-11 h-11 rounded-xl border border-primary/25 flex items-center justify-center text-foreground/80 flex-shrink-0 md:w-7 md:h-auto md:rounded-none md:border-0 md:justify-start">
          {icon}
        </div>

        {/* Content — centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col gap-0.5 items-center text-center md:items-start md:text-left">
          <h3 className="text-foreground font-medium text-sm italic leading-snug">
            {title}
          </h3>
          <p className="text-primary text-xs">
            {subtitle}
          </p>
          <p className="text-foreground/70 text-xs leading-snug max-w-[272px] md:max-w-lg md:leading-relaxed md:line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {showDivider && (
        <div className="flex items-center justify-center gap-2 py-1">
          <div className="h-px w-6 bg-orange-500/40" />
          <div className="h-px w-16 bg-orange-500/70" />
          <div className="h-px w-6 bg-orange-500/40" />
        </div>
      )}
    </div>
  )
}
