export function DesktopFooter() {
  return (
    <footer
      className="hidden lg:flex fixed bottom-0 inset-x-0 z-50 items-center justify-between"
      style={{
        height: '44px',
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '0 2rem',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.4)',
      }}
    >
      <span>© 2026 Areculateir. All rights reserved.</span>
      <a
        href="https://areculateir.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
        className="hover:text-white/70 transition-colors"
      >
        Brought to you by Areculateir.com
      </a>
    </footer>
  )
}
