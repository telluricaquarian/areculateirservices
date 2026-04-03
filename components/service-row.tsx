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
      <div className="flex gap-5 md:gap-5 py-4 md:py-2.5">
        {/* Icon */}
        <div className="flex-shrink-0 w-7 md:w-7 text-foreground/90">
          {icon}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 md:gap-0.5">
          <h3 className="text-foreground font-medium text-base md:text-sm italic">
            {title}
          </h3>
          <p className="text-primary text-sm md:text-xs">
            {subtitle}
          </p>
          <p className="text-foreground/70 text-xs leading-relaxed max-w-lg md:line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Divider */}
      {showDivider && (
        <div className="h-px bg-primary/30" />
      )}
    </div>
  )
}
