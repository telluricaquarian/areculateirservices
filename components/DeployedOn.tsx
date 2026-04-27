'use client'

export function DeployedOn() {
  return (
    <>
    <div
      className='md:hidden fixed inset-x-0 z-[39] pointer-events-none'
      style={{
        bottom: 40,
        height: 140,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
      }}
    />
    <div
      className='md:hidden fixed bottom-10 inset-x-0 z-40 flex items-center justify-between px-5 py-2'
    >
      <span style={{ fontFamily: 'SaltyFeathers, cursive', fontSize: 28, color: 'rgba(212,165,80,0.85)' }}>
        Areculateir
      </span>
      <div className='flex items-center gap-2'>
        <span className='text-white/30 text-[9px] tracking-widest uppercase'>Deployed on</span>
        <img src='/sevallalogo.png' alt='Sevalla' style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'contain' }} />
        <div style={{ width: 28, height: 28, borderRadius: 6, background: '#111', border: '1px solid rgba(249,115,22,0.4)', boxShadow: '0 0 12px 2px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox='0 0 116 100' style={{ width: 14, height: 14, fill: 'white' }}><path d='M57.5 0L115 100H0L57.5 0z'/></svg>
        </div>
      </div>
    </div>
    </>
  )
}
