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
      <div className="flex gap-6 md:gap-8 py-6 md:py-8">
        {/* Icon */}
        <div className="flex-shrink-0 w-8 md:w-10 text-foreground/90">
          {icon}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-medium text-base md:text-lg italic">
            {title}
          </h3>
          <p className="text-primary text-sm">
            {subtitle}
          </p>
          <p className="text-foreground/70 text-xs md:text-sm leading-relaxed max-w-lg">
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
