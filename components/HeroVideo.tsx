export function HeroVideo() {
  return (
    <div className="relative w-full h-[62vh] min-h-[300px] overflow-hidden bg-black">

      {/* Video */}
      <video
        src="/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark scrim — keeps quote legible over any footage */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Quote block — bottom-left */}
      <div
        className="absolute bottom-6 left-6 md:bottom-8 md:left-8 max-w-xs md:max-w-sm p-4 md:p-5"
        style={{ background: 'rgba(0,0,0,0.58)', backdropFilter: 'blur(6px)' }}
      >
        <blockquote className="text-white text-xs md:text-sm leading-relaxed font-light italic mb-2">
          &ldquo;We don&rsquo;t pitch websites. We identify exactly which businesses are losing revenue right now — and we fix it.&rdquo;
        </blockquote>
        <p
          className="text-white/50 text-[10px] uppercase not-italic"
          style={{ letterSpacing: '0.12em' }}
        >
          Llewellyn Y. Fisher — Founder, Areculateir
        </p>
      </div>

    </div>
  )
}
