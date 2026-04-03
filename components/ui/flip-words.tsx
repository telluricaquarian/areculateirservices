'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({ words, duration = 3000, className }: FlipWordsProps) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length)
        setAnimating(false)
      }, 300)
    }, duration)
    return () => clearInterval(id)
  }, [words, duration])

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300 ease-in-out',
        animating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0',
        className,
      )}
    >
      {words[index]}
    </span>
  )
}
