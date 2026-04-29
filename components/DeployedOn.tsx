'use client'

export function DeployedOn() {
  return (
    <div
      className='flex items-center justify-between px-4 py-2 md:px-6 md:py-3 bg-black/40 backdrop-blur-md border-t border-white/10 md:fixed md:bottom-0 md:inset-x-0 md:z-50'
    >
      <a href='#' className='inline-flex items-center gap-1.5 text-foreground/50 text-[10px] tracking-wide hover:text-foreground/80 transition-colors'>
        <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#FF7900' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0' aria-hidden='true'>
          <rect x='3' y='3' width='7' height='7'/>
          <rect x='14' y='3' width='7' height='7'/>
          <rect x='3' y='14' width='7' height='7'/>
          <rect x='14' y='14' width='7' height='7'/>
        </svg>
        View Site Portfolio
      </a>
      <div className='flex items-center gap-2'>
        <span className='text-white/30 text-[9px] tracking-widest uppercase'>Deployed on</span>
        <img src='/sevallalogo.png' alt='Sevalla' style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'contain' }} />
        <div style={{ width: 28, height: 28, borderRadius: 6, background: '#111', border: '1px solid rgba(249,115,22,0.4)', boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox='0 0 116 100' style={{ width: 14, height: 14, fill: 'white' }}><path d='M57.5 0L115 100H0L57.5 0z'/></svg>
        </div>
        <div style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: '#111',
          border: '1px solid rgba(249,115,22,0.4)',
          boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <img src='/coolifylogo.jpg' alt='Coolify' style={{ width: 20, height: 20, objectFit: 'contain' }} />
        </div>
        <div style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: '#111',
          border: '1px solid rgba(249,115,22,0.4)',
          boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <img src='/nousresearch.jpg' alt='Nous Research' style={{ width: 20, height: 20, objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  )
}
