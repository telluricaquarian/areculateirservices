'use client'

import { useState, useEffect } from 'react'

export function DesktopHeader() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-AU', {
          timeZone: 'Australia/Sydney',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header
      className="hidden lg:flex fixed top-0 inset-x-0 z-50 items-center"
      style={{
        height: '36px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
        borderBottom: '1px solid transparent',
        backgroundImage:
          'linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(90deg, transparent, #f97316, #ea580c, transparent)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', width: '100%' }}
      >
      <span className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0" style={{ color: '#f97316' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        Sydney, Australia
      </span>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
      <span className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0" style={{ color: '#f97316' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
        </svg>
        {time}
      </span>
      </div>
    </header>
  )
}
