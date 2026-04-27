import { SparklesCore } from '@/components/ui/sparkles'

interface Props {
  className?: string
  particleDensity?: number
}

export function SidebarAtmosphereBackground({ className, particleDensity = 60 }: Props) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className ?? ''}`}>
      {/* Base: dark charcoal gradient, slightly lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#080808] to-[#050505]" />
      {/* Warm orange radial — bottom-left anchor, very faint */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.07)_0%,transparent_70%)]" />
      {/* Subtle upper warm whisper */}
      <div className="absolute top-0 right-0 w-[80%] h-[30%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,122,0,0.04)_0%,transparent_70%)]" />
      {/* Low-density particles — very sparse, atmospheric only */}
      <SparklesCore
        background="transparent"
        minSize={0.2}
        maxSize={0.6}
        particleDensity={particleDensity}
        className="w-full h-full opacity-50"
        particleColor="#f97316"
      />
    </div>
  )
}
