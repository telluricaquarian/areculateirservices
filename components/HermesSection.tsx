'use client'

import { useEffect, useRef, useState } from 'react'

// ── Terminal sequence ──────────────────────────────────────────────────────

type LineStyle = 'command' | 'output' | 'blank'

interface TerminalLine {
  text: string
  style: LineStyle
  pauseAfter: number
}

const SEQUENCE: TerminalLine[] = [
  { text: '$ zeratul init',                              style: 'command', pauseAfter: 800  },
  { text: '> Scanning prospect database...',                       style: 'output',  pauseAfter: 600  },
  { text: '> Found 47 qualified leads in Sydney',                  style: 'output',  pauseAfter: 600  },
  { text: '> Generating personalised outreach sequences...',       style: 'output',  pauseAfter: 1000 },
  { text: '',                                                       style: 'blank',   pauseAfter: 200  },
  { text: '$ zeratul content --generate --platform instagram', style: 'command', pauseAfter: 800 },
  { text: '> Analysing brand voice...',                            style: 'output',  pauseAfter: 600  },
  { text: '> Drafting 3 posts for Instagram...',                   style: 'output',  pauseAfter: 600  },
  { text: '> Generating captions + hashtags...',                   style: 'output',  pauseAfter: 600  },
  { text: '> Scheduling posts... done',                            style: 'output',  pauseAfter: 1000 },
  { text: '',                                                       style: 'blank',   pauseAfter: 200  },
  { text: '$ zeratul inbox --auto-respond',              style: 'command', pauseAfter: 800  },
  { text: '> 2 new inquiries detected',                            style: 'output',  pauseAfter: 600  },
  { text: '> Drafting responses...',                               style: 'output',  pauseAfter: 600  },
  { text: '> Ready for review',                                    style: 'output',  pauseAfter: 2000 },
]

// ── Blinking cursor ────────────────────────────────────────────────────────

function Cursor() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [])
  return <span className="inline-block w-[7px] h-[13px] bg-[#FF7900] ml-0.5 align-middle" style={{ opacity: on ? 1 : 0, transition: 'opacity 80ms' }} />
}

// ── Terminal component ─────────────────────────────────────────────────────

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])
  const indexRef = useRef(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    function scheduleNext() {
      if (cancelled) return
      const idx = indexRef.current

      if (idx >= SEQUENCE.length) {
        // Pause then restart
        setTimeout(() => {
          if (cancelled) return
          setVisibleLines([])
          indexRef.current = 0
          scheduleNext()
        }, 2000)
        return
      }

      const line = SEQUENCE[idx]
      setVisibleLines((prev) => [...prev, line])
      indexRef.current = idx + 1
      setTimeout(scheduleNext, line.pauseAfter)
    }

    scheduleNext()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleLines])

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_0_40px_rgba(0,0,0,0.6)]" style={{ background: '#1a1a1a' }}>

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#242424' }}>
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="flex-1 text-center text-[11px] text-foreground/30 font-mono -ml-16">
          zeratul — zsh
        </span>
      </div>

      {/* Output */}
      <div className="p-5 font-mono text-[12px] leading-relaxed overflow-y-auto" style={{ minHeight: '260px', maxHeight: '340px' }}>
        {visibleLines.map((line, i) => {
          if (line.style === 'blank') return <div key={i} className="h-3" />
          return (
            <div key={i} className={line.style === 'command' ? 'text-[#FF7900]' : 'text-foreground/60'}>
              {line.text}
            </div>
          )
        })}
        <div className="flex items-center">
          <span className="text-[#FF7900]">$ </span>
          <Cursor />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────

export function HermesSection() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">

      {/* Header */}
      <div className="text-center">
        <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Custom Agent</p>
        <h2 className="font-serif italic text-primary text-4xl lg:text-5xl tracking-tight">
          Zeratul
        </h2>
      </div>

      {/* Terminal */}
      <Terminal />

      {/* Description */}
      <p className="text-foreground/50 text-sm leading-relaxed text-center max-w-md mx-auto">
        Zeratul is Areculateir&apos;s custom AI agent, built on Nous Research&apos;s Hermes. It sources leads, generates content,
        and handles inbox responses — autonomously.
      </p>

    </div>
  )
}
