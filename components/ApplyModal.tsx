'use client'

import { useState, ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { DialogOverlay, DialogPortal } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 'success'

// ── Sub-components ─────────────────────────────────────────────────────────

function Field({ label, required, error, id, children }: {
  label: string; required?: boolean; error?: string; id: string; children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.1em] text-foreground/35">
        {label}{required && <span className="text-[#FF7900]/60 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-400/80 mt-0.5">{error}</p>}
    </div>
  )
}

const inputClass = "bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-[#FF7900]/40 focus:bg-white/[0.05] transition-colors"
const textareaClass = cn(inputClass, "resize-none leading-relaxed")
const selectClass = cn(inputClass, "cursor-pointer")

function Input({ id, ...props }: { id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return <input id={id} className={inputClass} {...props} />
}

function Textarea({ id, rows = 3, ...props }: { id: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea id={id} rows={rows} className={textareaClass} {...props} />
}

function Select({ id, children, ...props }: { id: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select id={id} className={cn(selectClass, "bg-[#0c0c0c]")} {...props}>
      {children}
    </select>
  )
}

function StepIndicator({ step }: { step: Step }) {
  const steps = [1, 2, 3] as const
  return (
    <div className="flex items-center gap-2 px-6 pt-5 pb-1">
      {steps.map((s, i) => {
        const done = typeof step === 'number' && step > s
        const active = step === s
        return (
          <div key={s} className="flex items-center gap-2">
            <div className={cn(
              'w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold transition-colors',
              done ? 'bg-[#FF7900]/30 text-[#FF7900]/70' :
              active ? 'bg-[#FF7900] text-black' :
              'bg-white/[0.06] text-foreground/25'
            )}>{s}</div>
            {i < steps.length - 1 && (
              <div className={cn('h-px w-8 transition-colors', done ? 'bg-[#FF7900]/30' : 'bg-white/[0.06]')} />
            )}
          </div>
        )
      })}
      <span className="ml-1 text-[10px] uppercase tracking-[0.1em] text-foreground/20">
        {typeof step === 'number' ? `Step ${step} of 3` : ''}
      </span>
    </div>
  )
}

function NavButtons({ onBack, onNext, nextLabel, disabled, submitting }: {
  onBack?: () => void; onNext: () => void; nextLabel?: string; disabled?: boolean; submitting?: boolean
}) {
  return (
    <div className="flex items-center gap-3 pt-1">
      {onBack && (
        <button type="button" onClick={onBack} disabled={submitting}
          className="text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors disabled:opacity-30">
          ← Back
        </button>
      )}
      <button type="button" onClick={onNext} disabled={disabled || submitting}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold italic border transition-all',
          !disabled && !submitting
            ? 'bg-white text-[#111] border-[#FF7900] shadow-[0_0_24px_rgba(255,121,0,0.30)] hover:shadow-[0_0_36px_rgba(255,121,0,0.50)] hover:scale-[1.02]'
            : 'bg-white/[0.04] text-foreground/25 border-white/[0.07] cursor-not-allowed'
        )}>
        {submitting ? (
          <>
            <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            {nextLabel ?? 'Next'}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </div>
  )
}

// ── Step forms ─────────────────────────────────────────────────────────────

function Step1({ data, set, onNext }: {
  data: Step1Data; set: (d: Partial<Step1Data>) => void; onNext: () => void
}) {
  const ok = !!data.businessName.trim() && !!data.industry.trim() && !!data.location.trim()
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-white font-semibold text-base tracking-tight">About Your Business</h2>
        <p className="text-[#666] text-xs mt-1">Tell us what you do and where you're based.</p>
      </div>
      <div className="flex flex-col gap-3">
        <Field id="ap-biz" label="Business Name" required>
          <Input id="ap-biz" placeholder="Your business name" value={data.businessName}
            onChange={e => set({ businessName: e.target.value })} />
        </Field>
        <Field id="ap-ind" label="Industry / Niche" required>
          <Input id="ap-ind" placeholder="e.g. Med spa, HVAC, Legal" value={data.industry}
            onChange={e => set({ industry: e.target.value })} />
        </Field>
        <Field id="ap-loc" label="Business Location" required>
          <Input id="ap-loc" placeholder="City, State/Country" value={data.location}
            onChange={e => set({ location: e.target.value })} />
        </Field>
        <Field id="ap-url" label="Current Website URL">
          <Input id="ap-url" placeholder="or leave blank if none" value={data.website}
            onChange={e => set({ website: e.target.value })} />
        </Field>
      </div>
      <NavButtons onNext={onNext} disabled={!ok} />
    </div>
  )
}

function Step2({ data, set, onBack, onNext }: {
  data: Step2Data; set: (d: Partial<Step2Data>) => void; onBack: () => void; onNext: () => void
}) {
  const ok = !!data.revenue && !!data.problem.trim() && !!data.outcome.trim()
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-white font-semibold text-base tracking-tight">Where You&apos;re At</h2>
        <p className="text-[#666] text-xs mt-1">Help us understand your situation.</p>
      </div>
      <div className="flex flex-col gap-3">
        <Field id="ap-rev" label="Monthly Revenue Range" required>
          <Select id="ap-rev" value={data.revenue} onChange={e => set({ revenue: e.target.value })}>
            <option value="">Select range…</option>
            <option>Under $5k/mo</option>
            <option>$5k–$15k/mo</option>
            <option>$15k–$50k/mo</option>
            <option>$50k+/mo</option>
          </Select>
        </Field>
        <Field id="ap-prob" label="Biggest problem your current site causes" required>
          <Textarea id="ap-prob" placeholder="Be specific — what's it costing you?" value={data.problem}
            onChange={e => set({ problem: e.target.value })} />
        </Field>
        <Field id="ap-out" label="What outcome do you want from Areculateir" required>
          <Textarea id="ap-out" placeholder="What does success look like?" value={data.outcome}
            onChange={e => set({ outcome: e.target.value })} />
        </Field>
      </div>
      <NavButtons onBack={onBack} onNext={onNext} disabled={!ok} />
    </div>
  )
}

function Step3({ data, set, onBack, onSubmit, submitting }: {
  data: Step3Data; set: (d: Partial<Step3Data>) => void
  onBack: () => void; onSubmit: () => void; submitting: boolean
}) {
  const ok = !!data.name.trim() && !!data.email.trim() && !!data.source
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-white font-semibold text-base tracking-tight">Final Details</h2>
        <p className="text-[#666] text-xs mt-1">Almost there.</p>
      </div>
      <div className="flex flex-col gap-3">
        <Field id="ap-name" label="Full Name" required>
          <Input id="ap-name" placeholder="Your full name" value={data.name}
            onChange={e => set({ name: e.target.value })} />
        </Field>
        <Field id="ap-email" label="Email" required>
          <Input id="ap-email" type="email" placeholder="you@company.com" value={data.email}
            onChange={e => set({ email: e.target.value })} />
        </Field>
        <Field id="ap-src" label="How did you hear about us" required>
          <Select id="ap-src" value={data.source} onChange={e => set({ source: e.target.value })}>
            <option value="">Select…</option>
            <option>Instagram</option>
            <option>Referral</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Cold Outreach</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field id="ap-note" label="Anything else you want us to know">
          <Textarea id="ap-note" placeholder="Optional" value={data.notes}
            onChange={e => set({ notes: e.target.value })} />
        </Field>
      </div>
      <NavButtons onBack={onBack} onNext={onSubmit} nextLabel="Submit Application"
        disabled={!ok} submitting={submitting} />
    </div>
  )
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center py-4">
      <div className="w-12 h-12 rounded-full border border-[#FF7900]/30 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF7900" strokeWidth="1.5" className="w-6 h-6">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-white font-semibold text-base">Application received.</p>
        <p className="text-[#666] text-xs mt-1 max-w-[280px]">
          Llewellyn will review and be in touch within 24 hours.
        </p>
      </div>
      <button type="button" onClick={onClose}
        className="mt-2 text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors">
        Close
      </button>
    </div>
  )
}

// ── Data types ─────────────────────────────────────────────────────────────

interface Step1Data { businessName: string; industry: string; location: string; website: string }
interface Step2Data { revenue: string; problem: string; outcome: string }
interface Step3Data { name: string; email: string; source: string; notes: string }

// ── Modal ──────────────────────────────────────────────────────────────────

export function ApplyModal({ trigger, open: controlledOpen, onOpenChange: controlledOnOpenChange }: {
  trigger: ReactNode; open?: boolean; onOpenChange?: (v: boolean) => void
}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = controlledOpen ?? internalOpen
  const [step, setStep] = useState<Step>(1)
  const [submitting, setSubmitting] = useState(false)

  const [s1, setS1] = useState<Step1Data>({ businessName: '', industry: '', location: '', website: '' })
  const [s2, setS2] = useState<Step2Data>({ revenue: '', problem: '', outcome: '' })
  const [s3, setS3] = useState<Step3Data>({ name: '', email: '', source: '', notes: '' })

  function reset() {
    setStep(1); setSubmitting(false)
    setS1({ businessName: '', industry: '', location: '', website: '' })
    setS2({ revenue: '', problem: '', outcome: '' })
    setS3({ name: '', email: '', source: '', notes: '' })
  }

  function handleOpenChange(v: boolean) {
    setInternalOpen(v)
    controlledOnOpenChange?.(v)
    if (!v) setTimeout(reset, 250)
  }

  async function handleSubmit() {
    setSubmitting(true)
    try {
      const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL
      if (!url) throw new Error('Endpoint not configured')
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          type: 'premium-application',
          ...s1, ...s2, ...s3,
          submittedAt: new Date().toISOString(),
        }),
      })
      setStep('success')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <RadixDialog.Root open={open} onOpenChange={handleOpenChange}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <RadixDialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 w-full max-w-[min(480px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#FF7900]/20 bg-[#0c0c0c] shadow-[0_0_60px_rgba(255,121,0,0.12),0_8px_40px_rgba(0,0,0,0.85)] overflow-hidden focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          style={{ maxHeight: '90dvh', overflowY: 'auto' }}
        >
          {step !== 'success' && (
            <RadixDialog.Close disabled={submitting} aria-label="Close"
              className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors z-10 disabled:opacity-30">
              <X className="w-4 h-4" />
            </RadixDialog.Close>
          )}

          {step !== 'success' && <StepIndicator step={step} />}

          <div key={String(step)}
            className="animate-in fade-in-0 slide-in-from-bottom-1 duration-200 px-6 py-5">
            {step === 1 && <Step1 data={s1} set={d => setS1(p => ({ ...p, ...d }))} onNext={() => setStep(2)} />}
            {step === 2 && <Step2 data={s2} set={d => setS2(p => ({ ...p, ...d }))} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
            {step === 3 && <Step3 data={s3} set={d => setS3(p => ({ ...p, ...d }))} onBack={() => setStep(2)} onSubmit={handleSubmit} submitting={submitting} />}
            {step === 'success' && <SuccessState onClose={() => handleOpenChange(false)} />}
          </div>
        </RadixDialog.Content>
      </DialogPortal>
    </RadixDialog.Root>
  )
}

// ── Swipe trigger button ───────────────────────────────────────────────────

export function ApplySwipeTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-500 bg-white text-black hover:bg-[#FF7900] hover:text-white pl-6 pr-14 hover:pl-14 hover:pr-6 py-3 shadow-[0_0_24px_2px_rgba(249,115,22,0.30)]"
    >
      <span className="font-bold italic text-sm whitespace-nowrap">Apply for a site</span>
      <span className="absolute right-1 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF7900]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

// ── Wired export (trigger + modal together) ────────────────────────────────

export function ApplyButton() {
  const [open, setOpen] = useState(false)
  return (
    <ApplyModal open={open} onOpenChange={setOpen} trigger={<ApplySwipeTrigger onOpen={() => setOpen(true)} />} />
  )
}
