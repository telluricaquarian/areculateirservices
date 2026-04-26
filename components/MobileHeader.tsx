'use client'

import { useEffect, useState, useRef } from 'react'

function useSydneyTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const tick = () => setTime(fmt.format(new Date()))

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

function useAnimatedDots() {
  const [dots, setDots] = useState('...')

  useEffect(() => {
    const frames = ['.', '..', '...']
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % frames.length
      setDots(frames[i])
    }, 500)
    return () => clearInterval(id)
  }, [])

  return dots
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Web as a Service', href: '#waas' },
  { label: 'AI & Automation', href: '#ai' },
  { label: 'Inquire', href: '#inquire' },
]

export function MobileHeader() {
  const sydneyTime = useSydneyTime()
  const dots = useAnimatedDots()
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on outside tap
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Fixed top bar ── */}
      <div
        ref={drawerRef}
        className="md:hidden fixed top-0 inset-x-0 z-50 bg-background/50 border-b border-primary/10 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between px-5 h-10">
          {/* Left — animated status text */}
          <span className="text-primary text-xs font-normal tracking-tight leading-none">
            Currently Designing &amp; Building
            <span className="inline-block w-[14px] text-left">{dots}</span>
          </span>

          <div className="flex items-center gap-3">
            {/* Right — live Sydney clock */}
            <span className="text-foreground/50 text-xs font-normal tracking-tight tabular-nums leading-none">
              {sydneyTime ? `Syd. AEST: ${sydneyTime}` : ''}
            </span>

            {/* Hamburger / close button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex flex-col justify-center items-center w-7 h-7 gap-[5px] shrink-0 focus:outline-none"
            >
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 origin-center ${
                  open ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 origin-center ${
                  open ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── Dropdown drawer (slides down from bar) ── */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col border-t border-primary/10 bg-background/95 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 text-sm text-foreground/80 tracking-tight border-b border-primary/5 hover:text-primary hover:bg-primary/5 transition-colors active:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Backdrop dimmer ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
