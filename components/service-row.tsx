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
      <div className="flex gap-0 md:gap-5 py-2 md:py-2.5">
        {/* Icon — with vertical right divider on mobile */}
        <div className="flex-shrink-0 w-9 md:w-7 text-foreground/90 pr-3 md:pr-0 border-r border-primary/20 md:border-r-0">
          {icon}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-0.5 pl-3 md:pl-0">
          <h3 className="text-foreground font-medium text-sm md:text-sm italic leading-snug">
            {title}
          </h3>
          <p className="text-primary text-xs md:text-xs">
            {subtitle}
          </p>
          <p className="text-foreground/70 text-xs leading-snug md:leading-relaxed max-w-lg md:line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Horizontal divider — always shown between rows, full width */}
      {showDivider && (
        <div className="h-px bg-primary/20" />
      )}
    </div>
  )
}
