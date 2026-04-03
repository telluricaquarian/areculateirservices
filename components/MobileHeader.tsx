'use client'

import { useEffect, useState } from 'react'

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

export function MobileHeader() {
  const sydneyTime = useSydneyTime()
  const dots = useAnimatedDots()

  return (
    <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 h-10 bg-background/50 border-b border-primary/10">
      {/* Left — animated status text */}
      <span className="text-primary text-xs font-normal tracking-tight leading-none">
        Currently Designing &amp; Building
        <span className="inline-block w-[14px] text-left">{dots}</span>
      </span>

      {/* Right — live Sydney clock */}
      <span className="text-foreground/50 text-xs font-normal tracking-tight tabular-nums leading-none">
        {sydneyTime ? `Syd. AEST: ${sydneyTime}` : ''}
      </span>
    </div>
  )
}
