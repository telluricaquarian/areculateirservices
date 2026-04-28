'use client'

import { useEffect } from 'react'

export function AssetProtection() {
  useEffect(() => {
    function blockContextMenu(e: MouseEvent) {
      const t = e.target as HTMLElement
      if (t.tagName === 'IMG' || t.tagName === 'VIDEO') e.preventDefault()
    }

    function blockDragStart(e: DragEvent) {
      if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault()
    }

    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('dragstart', blockDragStart)

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('dragstart', blockDragStart)
    }
  }, [])

  return null
}
