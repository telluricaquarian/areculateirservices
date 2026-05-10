interface Props {
  /**
   * "absolute" (default) — positions relative to nearest `relative` ancestor.
   *   Use inside SPA tab content (Agency 6 grid, WaaS card).
   * "fixed" — covers the entire viewport.
   *   Use on standalone page routes (/agency6/*).
   */
  variant?: 'absolute' | 'fixed'
  /** Extra classes forwarded to the overlay div — e.g. "rounded-xl" */
  className?: string
}

export function LockedComingSoonOverlay({ variant = 'absolute', className }: Props) {
  const base =
    variant === 'fixed'
      ? 'fixed inset-0 z-50 backdrop-blur-sm bg-black/55 flex items-center justify-center'
      : 'absolute inset-0 z-10 backdrop-blur-sm bg-black/55 flex items-center justify-center'

  return (
    <div
      className={[base, className].filter(Boolean).join(' ')}
    >
      <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-white/40"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p className="text-white/30 text-[10px] uppercase tracking-[0.18em]">Coming Soon</p>
      </div>
    </div>
  )
}
