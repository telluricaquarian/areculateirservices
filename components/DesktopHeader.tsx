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
      className="hidden lg:flex fixed top-0 inset-x-0 z-50 items-center justify-center gap-3"
      style={{
        height: '36px',
        background: '#0a0a0a',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
      }}
    >
      <span>📍 Sydney, Australia</span>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
      <span>🕐 {time}</span>
    </header>
  )
}
