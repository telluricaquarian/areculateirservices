'use client'

import { useState } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { DialogOverlay, DialogPortal } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

// ── File tree data ─────────────────────────────────────────────────────────

type FileNode =
  | { kind: 'file'; name: string; id: string }
  | { kind: 'dir'; name: string; children: FileNode[] }

const TREE: FileNode[] = [
  {
    kind: 'dir', name: 'areculateir-leadgen', children: [
      {
        kind: 'dir', name: 'data', children: [
          {
            kind: 'dir', name: 'input', children: [
              { kind: 'file', name: 'seen.txt', id: 'seen' },
              { kind: 'file', name: 'urls.txt', id: 'urls' },
            ],
          },
          {
            kind: 'dir', name: 'output', children: [
              { kind: 'file', name: 'leads.csv', id: 'leads' },
              { kind: 'file', name: 'outreach-queue.csv', id: 'outreach' },
            ],
          },
        ],
      },
      {
        kind: 'dir', name: 'src', children: [
          {
            kind: 'dir', name: 'config', children: [
              { kind: 'file', name: 'areculateir-context.md', id: 'context' },
            ],
          },
          { kind: 'dir', name: 'prompts', children: [] },
          {
            kind: 'dir', name: 'schemas', children: [
              { kind: 'file', name: 'lead.ts', id: 'lead' },
            ],
          },
          { kind: 'dir', name: 'scripts', children: [] },
          { kind: 'dir', name: 'services', children: [] },
          { kind: 'dir', name: 'utils', children: [] },
        ],
      },
      { kind: 'file', name: '.env', id: 'env' },
      { kind: 'file', name: '.env.example', id: 'envex' },
      { kind: 'file', name: 'package.json', id: 'pkg' },
      { kind: 'file', name: 'tsconfig.json', id: 'tsconfig' },
    ],
  },
]

const FILE_CONTENT: Record<string, string> = {
  context: `# Areculateir — Agent System Context

## Who We Are
Areculateir is a Sydney-based premium digital agency. We build high-trust,
high-converting web presences for local Australian businesses. Every engagement
is positioned as a brand elevation and revenue conversion tool, not just a website.

## Our Core Promise
Premium site builds that increase perceived value, trust, and engagement —
and in the right businesses, directly increase booking and conversion rates.`,
  lead: `import { z } from 'zod'

export const LeadSchema = z.object({
  id:          z.string().uuid(),
  url:         z.string().url(),
  name:        z.string().optional(),
  email:       z.string().email().optional(),
  phone:       z.string().optional(),
  business:    z.string().optional(),
  score:       z.number().min(0).max(100),
  scrapedAt:   z.string().datetime(),
  outreached:  z.boolean().default(false),
})

export type Lead = z.infer<typeof LeadSchema>`,
  pkg: `{
  "name": "areculateir-leadgen",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "scrape":   "tsx src/scripts/scrape.ts",
    "enrich":   "tsx src/scripts/enrich.ts",
    "outreach": "tsx src/scripts/outreach.ts"
  },
  "dependencies": {
    "openai": "^4.0.0",
    "playwright": "^1.44.0",
    "zod": "^3.22.0"
  }
}`,
  envex: `OPENAI_API_KEY=
GOOGLE_MAPS_API_KEY=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
TARGET_CITY=Sydney
TARGET_INDUSTRIES=dental,medispa,hvac,roofers`,
  env: `# .env — not committed
# copy .env.example and fill in values`,
  seen: `# URLs already processed — one per line
https://example.com/business-1
https://example.com/business-2`,
  urls: `# Seed URLs for scraping
https://maps.google.com/?q=dental+clinics+sydney
https://maps.google.com/?q=med+spa+sydney`,
  leads: `id,name,email,phone,business,score,scrapedAt,outreached
...`,
  outreach: `id,leadId,sequence,step,scheduledAt,sentAt,status
...`,
  tsconfig: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "outDir": "dist"
  }
}`,
}

// ── File tree renderer ─────────────────────────────────────────────────────

function FileIcon({ name }: { name: string }) {
  const ext = name.split('.').pop() ?? ''
  const color =
    ext === 'ts' ? 'text-blue-400' :
    ext === 'md' ? 'text-green-400' :
    ext === 'json' ? 'text-yellow-400' :
    ext === 'csv' ? 'text-emerald-400' :
    ext === 'txt' ? 'text-foreground/50' :
    name.startsWith('.env') ? 'text-orange-400' :
    'text-foreground/40'
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`w-3.5 h-3.5 flex-shrink-0 ${color}`}>
      <path d="M4 0h5.5L13 3.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z" opacity="0.3"/>
      <path d="M9 0l4 4H9V0z"/>
    </svg>
  )
}

function FolderIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0 text-[#FF7900]/60">
      {open
        ? <path d="M1 3a1 1 0 011-1h4l1.5 2H14a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V3z"/>
        : <path d="M1 3a1 1 0 011-1h4l1.5 2H14a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V3z" opacity="0.6"/>
      }
    </svg>
  )
}

function TreeNode({
  node, depth, selected, onSelect, openDirs, toggleDir,
}: {
  node: FileNode
  depth: number
  selected: string | null
  onSelect: (id: string) => void
  openDirs: Set<string>
  toggleDir: (name: string) => void
}) {
  const indent = depth * 12

  if (node.kind === 'file') {
    const isSelected = selected === node.id
    return (
      <button
        onClick={() => node.id in FILE_CONTENT ? onSelect(node.id) : undefined}
        className={cn(
          'w-full text-left flex items-center gap-1.5 py-0.5 pr-2 rounded text-[11px] font-mono transition-colors',
          isSelected
            ? 'bg-[#FF7900]/10 text-foreground/90'
            : 'text-foreground/50 hover:text-foreground/80 hover:bg-white/[0.03]',
          !(node.id in FILE_CONTENT) && 'cursor-default opacity-50',
        )}
        style={{ paddingLeft: `${indent + 6}px` }}
      >
        <FileIcon name={node.name} />
        {node.name}
      </button>
    )
  }

  const isOpen = openDirs.has(node.name)
  return (
    <div>
      <button
        onClick={() => toggleDir(node.name)}
        className="w-full text-left flex items-center gap-1.5 py-0.5 pr-2 rounded text-[11px] font-mono text-foreground/60 hover:text-foreground/80 transition-colors"
        style={{ paddingLeft: `${indent + 6}px` }}
      >
        <FolderIcon open={isOpen} />
        {node.name}
      </button>
      {isOpen && node.children.map((child, i) => (
        <TreeNode
          key={i}
          node={child}
          depth={depth + 1}
          selected={selected}
          onSelect={onSelect}
          openDirs={openDirs}
          toggleDir={toggleDir}
        />
      ))}
    </div>
  )
}

// ── Waitlist modal ─────────────────────────────────────────────────────────

function WaitlistModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function reset() {
    setName(''); setEmail(''); setBusiness('')
    setSubmitting(false); setSuccess(false); setError('')
  }

  async function handleSubmit() {
    if (!name.trim() || !email.trim()) return
    setSubmitting(true)
    setError('')
    try {
      const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL
      if (!url) throw new Error('Endpoint not configured')
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          type: 'leadgen-waitlist',
          name: name.trim(),
          email: email.trim(),
          business: business.trim(),
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <RadixDialog.Root open={open} onOpenChange={(v) => { setOpen(v); if (!v) setTimeout(reset, 250) }}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <RadixDialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 w-full max-w-[min(420px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#FF7900]/20 bg-[#0c0c0c] shadow-[0_0_60px_rgba(255,121,0,0.12)] overflow-hidden focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
        >
          {!success && (
            <RadixDialog.Close className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors z-10">
              <X className="w-4 h-4" />
            </RadixDialog.Close>
          )}
          <div className="px-6 py-6">
            {success ? (
              <div className="flex flex-col items-center gap-4 text-center py-4">
                <div className="w-12 h-12 rounded-full border border-[#FF7900]/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF7900" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-base">You&apos;re on the list.</p>
                  <p className="text-[#666] text-xs mt-1 max-w-[280px]">We&apos;ll be in touch when Lead Gen System access opens.</p>
                </div>
                <button onClick={() => setOpen(false)} className="text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors mt-2">
                  Close
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-white font-semibold text-base tracking-tight">Join the Waitlist</h2>
                  <p className="text-[#666] text-xs mt-1">Early access to the Areculateir Lead Gen System.</p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { id: 'wl-name', label: 'Name', value: name, set: setName, placeholder: 'Your full name', required: true },
                    { id: 'wl-email', label: 'Email', value: email, set: setEmail, placeholder: 'you@company.com', required: true },
                    { id: 'wl-biz', label: 'Business Name', value: business, set: setBusiness, placeholder: 'Your business', required: false },
                  ].map(({ id, label, value, set, placeholder, required }) => (
                    <div key={id} className="flex flex-col gap-1">
                      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.1em] text-foreground/35">
                        {label}{required && <span className="text-[#FF7900]/60 ml-0.5">*</span>}
                      </label>
                      <input
                        id={id}
                        value={value}
                        onChange={(e) => set(e.target.value)}
                        placeholder={placeholder}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-[#FF7900]/40 transition-colors"
                      />
                    </div>
                  ))}
                  {error && <p className="text-red-400/80 text-xs">{error}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !name.trim() || !email.trim()}
                  className={cn(
                    'flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold italic border transition-all',
                    !submitting && name.trim() && email.trim()
                      ? 'bg-white text-[#111] border-[#FF7900] shadow-[0_0_24px_rgba(255,121,0,0.30)] hover:shadow-[0_0_36px_rgba(255,121,0,0.50)] hover:scale-[1.02]'
                      : 'bg-white/[0.04] text-foreground/25 border-white/[0.07] cursor-not-allowed',
                  )}
                >
                  {submitting ? 'Submitting…' : 'Join Waitlist'}
                </button>
              </div>
            )}
          </div>
        </RadixDialog.Content>
      </DialogPortal>
    </RadixDialog.Root>
  )
}

// ── Main section ───────────────────────────────────────────────────────────

export function LeadGenSection() {
  const [selected, setSelected] = useState<string | null>('context')
  const [openDirs, setOpenDirs] = useState<Set<string>>(
    new Set(['areculateir-leadgen', 'src', 'config', 'data', 'input', 'output', 'schemas'])
  )

  function toggleDir(name: string) {
    setOpenDirs((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const content = selected ? FILE_CONTENT[selected] : null

  return (
    <div className="flex flex-col gap-8 w-full">

      {/* Header */}
      <div className="text-center">
        <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Proprietary System</p>
        <h2 className="font-serif italic text-primary text-4xl lg:text-5xl tracking-tight">
          <span className="font-normal">Lead Gen</span> System
        </h2>
      </div>

      {/* File viewer */}
      <div className="flex rounded-xl border border-white/[0.07] overflow-hidden bg-[#0d0d0d]" style={{ minHeight: '340px' }}>

        {/* Left: file tree */}
        <div className="w-52 flex-shrink-0 border-r border-white/[0.05] py-3 overflow-y-auto">
          <p className="px-3 mb-2 text-[9px] uppercase tracking-widest text-foreground/20 font-mono">Explorer</p>
          {TREE.map((node, i) => (
            <TreeNode
              key={i}
              node={node}
              depth={0}
              selected={selected}
              onSelect={setSelected}
              openDirs={openDirs}
              toggleDir={toggleDir}
            />
          ))}
        </div>

        {/* Right: preview */}
        <div className="flex-1 overflow-auto">
          {selected && content ? (
            <>
              {/* Tab bar */}
              <div className="flex items-center border-b border-white/[0.05] px-4 py-2 gap-2">
                <span className="text-[10px] font-mono text-foreground/50 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                  {TREE[0].kind === 'dir' && findFileName(TREE[0], selected)}
                </span>
              </div>
              <pre className="p-4 text-[11px] font-mono text-foreground/70 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {content}
              </pre>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-foreground/20 text-xs font-mono">
              Select a file to preview
            </div>
          )}
        </div>
      </div>

      {/* Demo video */}
      <div>
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-wider text-white/50 mb-2">5-minute walkthrough</p>
          <h3 className="text-xl text-white/80">Watch the system in action</h3>
        </div>
        <div
          className="relative rounded-xl overflow-hidden border border-white/[0.07] hover:border-orange-500/40 transition-colors"
          style={{ paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            src="https://cap.so/embed/850mc9cr3x11jk2"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; encrypted-media"
            title="Areculateir Lead Gen System Demo"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>

      {/* Waitlist */}
      <div className="flex flex-col items-center gap-4 text-center border-t border-white/[0.06] pt-8">
        <h3 className="font-serif italic text-primary text-2xl tracking-tight">
          <span className="font-normal">Join the</span> Waitlist
        </h3>
        <p className="text-foreground/50 text-sm leading-relaxed max-w-sm">
          The Lead Gen System is in private beta. Get early access when it opens.
        </p>
        <WaitlistModal
          trigger={
            <button className="flex items-center gap-2 bg-white text-[#111] border border-[#FF7900] px-5 py-2.5 rounded-full w-fit text-xs font-bold italic shadow-[0_0_30px_rgba(255,121,0,0.35)] hover:shadow-[0_0_44px_rgba(255,121,0,0.55)] hover:scale-[1.02] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Request Access
            </button>
          }
        />
      </div>

    </div>
  )
}

function findFileName(dir: Extract<FileNode, { kind: 'dir' }>, id: string): string {
  for (const node of dir.children) {
    if (node.kind === 'file' && node.id === id) return node.name
    if (node.kind === 'dir') {
      const found = findFileName(node, id)
      if (found) return found
    }
  }
  return ''
}
