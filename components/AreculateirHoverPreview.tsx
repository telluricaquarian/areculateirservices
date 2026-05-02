'use client'

import { useEffect, useRef, useState } from 'react'

const HREF = 'https://www.areculateir.com'

/**
 * Desktop: preview card opens after a 100ms mouseenter delay on the link itself.
 *          Moving into the card cancels the close timer — card stays open.
 *          Leaving the card or the link closes immediately.
 *          The outer container div carries NO mouse handlers (tight hit-box).
 *
 * Mobile:  first tap opens preview (via onClick), second tap navigates.
 *          Tapping outside closes preview.
 *          onClick is used (not onTouchEnd) so stopPropagation on child
 *          buttons works correctly.
 *
 * popupPosition:
 *   'above' (default) — card appears above the link, centered. Use in footer rows.
 *   'right'           — card appears to the right of the link. Use in left-rail sidebars.
 */
interface Props {
  popupPosition?: 'above' | 'right'
}

export default function AreculateirHoverPreview({ popupPosition = 'above' }: Props) {
  const [visible, setVisible]     = useState(false)
  const tapCount                  = useRef(0)
  const videoRef                  = useRef<HTMLVideoElement>(null)
  const containerRef              = useRef<HTMLDivElement>(null)
  const openTimerRef              = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimerRef             = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Cleanup timers on unmount ───────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (openTimerRef.current)  clearTimeout(openTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  // ── Play / pause video with visibility ─────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (visible) {
      video.currentTime = 0
      video.play().catch(() => {/* muted autoplay blocked */})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [visible])

  // ── Close on outside tap (mobile) ──────────────────────────────────────
  useEffect(() => {
    if (!visible) return
    function onOutside(e: TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('touchstart', onOutside)
    return () => document.removeEventListener('touchstart', onOutside)
  }, [visible])

  // ── Escape key (desktop) ───────────────────────────────────────────────
  useEffect(() => {
    if (!visible) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [visible])

  function close() {
    if (openTimerRef.current)  clearTimeout(openTimerRef.current)
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setVisible(false)
    tapCount.current = 0
  }

  // ── Desktop: link mouseenter → open after 100ms delay ──────────────────
  function onLinkMouseEnter() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    openTimerRef.current = setTimeout(() => setVisible(true), 100)
  }

  // ── Desktop: link mouseleave → give 150ms grace to reach the card ──────
  function onLinkMouseLeave() {
    if (openTimerRef.current) clearTimeout(openTimerRef.current)
    closeTimerRef.current = setTimeout(() => close(), 150)
  }

  // ── Desktop: entering card cancels the pending close ───────────────────
  function onCardMouseEnter() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
  }

  // ── Desktop: leaving card closes immediately ───────────────────────────
  function onCardMouseLeave() {
    close()
  }

  // ── Mobile tap on link ─────────────────────────────────────────────────
  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Only intercept on touch devices (pointer: coarse).
    // On desktop the hover already handled open; let the click navigate normally.
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (!isTouch) return

    tapCount.current += 1
    if (tapCount.current === 1) {
      e.preventDefault()
      setVisible(true)
    }
    // second tap falls through — href navigates naturally
  }

  return (
    // Outer container: NO mouse handlers — tight hit-box is on child elements
    <div
      ref={containerRef}
      className="relative inline-block"
    >
      {/* The footer link — carries all mouse + tap triggers */}
      <a
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onLinkMouseEnter}
        onMouseLeave={onLinkMouseLeave}
        onClick={onLinkClick}
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded-sm"
      >
        Areculateir.com
      </a>

      {/* ── Preview card ───────────────────────────────────────────────── */}
      <div
        onMouseEnter={onCardMouseEnter}
        onMouseLeave={onCardMouseLeave}
        className={[
          // Positioning — above+centered (default) or to the right of the link (sidebar)
          popupPosition === 'right'
            ? 'absolute left-[calc(100%+14px)] bottom-0'
            : 'absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2',
          // Sizing
          'w-[min(320px,calc(100vw-2rem))]',
          // Chrome
          'rounded-2xl border border-white/10 bg-[#080808]',
          'shadow-[0_0_40px_rgba(255,121,0,0.10),0_8px_40px_rgba(0,0,0,0.90)]',
          // Visibility transition
          'transition-all duration-200 ease-in-out',
          visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none',
          'z-50',
        ].join(' ')}
      >
        {/* Tail / pointer — points left toward link when sidebar, down when above */}
        {popupPosition === 'right'
          ? <div className="absolute top-4 -left-[7px] w-3 h-3 rotate-45 border-l border-b border-white/10 bg-[#080808]" />
          : <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b border-white/10 bg-[#080808]" />
        }

        {/* Orange-framed video */}
        <div className="p-2">
          <div className="rounded-lg overflow-hidden border border-[#FF7900]/30 aspect-video bg-black">
            <video
              ref={videoRef}
              src="/areculateirscreenrecord.mp4"
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
            />
          </div>
        </div>

        {/* Caption */}
        <div className="flex flex-col items-center gap-1 px-4 pb-4 text-center">
          <span className="text-white text-xs font-semibold tracking-tight">
            View Areculateir
          </span>
          <div className="flex items-center gap-2">
            <span className="block w-6 h-px bg-[#FF7900]/30" />
            <span className="text-[#555] text-[10px] tracking-wide uppercase">
              Presented by Llewellyn Fisher
            </span>
            <span className="block w-6 h-px bg-[#FF7900]/30" />
          </div>
          {/* Mobile CTA — navigates immediately */}
          <a
            href={HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:hidden text-[#e86c2c] text-[11px] tracking-wide hover:text-[#FF7900] transition-colors"
          >
            Visit site →
          </a>
        </div>
      </div>
    </div>
  )
}
