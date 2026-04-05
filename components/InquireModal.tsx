'use client'

import { ReactNode, InputHTMLAttributes, useState } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DialogOverlay, DialogPortal } from '@/components/ui/dialog'

// ── Services ───────────────────────────────────────────────────────────────

const SERVICES = [
  "Speed to Lead",
  "Document Processing",
  "Follow Up & Nurture Sequence",
  "Database Reactivation",
  "Internal Reporting and Status Notification",
]

// ── Payload ────────────────────────────────────────────────────────────────

interface InquiryPayload {
  selectedServices: string[]
  name: string
  email: string
  socialMedia: string
  website: string
  submittedAt: string
  sourcePage: string
}

// ── Submission handler (placeholder) ──────────────────────────────────────
// TODO: Replace body of this function with your real endpoint:
//   - API route:      await fetch('/api/inquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
//   - Server action:  await submitInquiryAction(payload)
//   - Google Sheets:  await fetch(SHEETS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(payload) })
async function submitInquiry(payload: InquiryPayload): Promise<void> {
  console.log('[InquireModal] Inquiry payload:', payload)
  await new Promise((r) => setTimeout(r, 1200)) // simulated latency — remove when wired
}

// ── Types ──────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 'success'

// ── Sub-components ─────────────────────────────────────────────────────────

function StepDot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div
      className={cn(
        'w-1.5 h-1.5 rounded-full transition-colors duration-200',
        done ? 'bg-[#FF7900]/40' : active ? 'bg-[#FF7900]' : 'bg-white/15',
      )}
    />
  )
}

function ServiceTile({
  label,
  selected,
  onToggle,
}: {
  label: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      onClick={onToggle}
      className={cn(
        'w-full text-left px-3.5 py-2.5 rounded-lg border text-xs transition-all duration-150',
        selected
          ? 'border-[#FF7900]/50 bg-[#FF7900]/[0.06] text-foreground'
          : 'border-white/[0.07] bg-white/[0.02] text-foreground/50 hover:border-white/[0.14] hover:text-foreground/70',
      )}
    >
      <div className="flex items-center gap-2.5">
        {/* Custom checkbox box */}
        <div
          className={cn(
            'w-3.5 h-3.5 rounded-[3px] border flex-shrink-0 flex items-center justify-center transition-colors duration-150',
            selected ? 'border-[#FF7900] bg-[#FF7900]' : 'border-white/20',
          )}
        >
          {selected && (
            <svg viewBox="0 0 10 8" fill="none" className="w-[9px] h-[9px]">
              <path
                d="M1 4l2.5 2.5L9 1"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {label}
      </div>
    </button>
  )
}

function FormField({
  label,
  required,
  error,
  id,
  ...inputProps
}: {
  label: string
  required?: boolean
  error?: string
  id: string
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[10px] uppercase tracking-[0.1em] text-foreground/35"
      >
        {label}
        {required && <span className="text-[#FF7900]/60 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        {...inputProps}
        className={cn(
          'bg-white/[0.03] border rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors duration-150',
          error
            ? 'border-red-500/40 focus:border-red-500/60'
            : 'border-white/[0.08] focus:border-[#FF7900]/40 focus:bg-white/[0.05]',
        )}
      />
      {error && (
        <p className="text-[10px] text-red-400/80 mt-0.5">{error}</p>
      )}
    </div>
  )
}

// ── Step 1 ─────────────────────────────────────────────────────────────────

function Step1Content({
  selectedServices,
  toggleService,
  canProceed,
  onNext,
}: {
  selectedServices: string[]
  toggleService: (s: string) => void
  canProceed: boolean
  onNext: () => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-white font-semibold text-base tracking-tight">
          Which services are you after?
        </h2>
        <p className="text-[#666] text-xs mt-1">Select all that apply.</p>
      </div>

      <div className="flex flex-col gap-2" role="group" aria-label="Service selection">
        {SERVICES.map((s) => (
          <ServiceTile
            key={s}
            label={s}
            selected={selectedServices.includes(s)}
            onToggle={() => toggleService(s)}
          />
        ))}
      </div>

      <button
        type="button"
        disabled={!canProceed}
        onClick={onNext}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold italic border transition-all',
          canProceed
            ? 'bg-white text-[#111] border-[#FF7900] shadow-[0_0_24px_rgba(255,121,0,0.30)] hover:shadow-[0_0_36px_rgba(255,121,0,0.50)] hover:scale-[1.02]'
            : 'bg-white/[0.04] text-foreground/25 border-white/[0.07] cursor-not-allowed',
        )}
      >
        Next Step
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

// ── Step 2 ─────────────────────────────────────────────────────────────────

function Step2Content({
  name, setName,
  email, setEmail,
  socialMedia, setSocialMedia,
  website, setWebsite,
  emailError,
  isSubmitting,
  canSubmit,
  onBack,
  onSubmit,
}: {
  name: string; setName: (v: string) => void
  email: string; setEmail: (v: string) => void
  socialMedia: string; setSocialMedia: (v: string) => void
  website: string; setWebsite: (v: string) => void
  emailError: string
  isSubmitting: boolean
  canSubmit: boolean
  onBack: () => void
  onSubmit: () => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-white font-semibold text-base tracking-tight">
          Tell us about you
        </h2>
        <p className="text-[#666] text-xs mt-1">
          We&apos;ll reach out within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <FormField
          id="inq-name"
          label="Name"
          required
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <FormField
          id="inq-email"
          label="Email"
          required
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          autoComplete="email"
        />
        <FormField
          id="inq-social"
          label="Social Media"
          placeholder="Instagram, LinkedIn, X — any handle"
          value={socialMedia}
          onChange={(e) => setSocialMedia(e.target.value)}
        />
        <FormField
          id="inq-website"
          label="Website"
          type="url"
          placeholder="https://yoursite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="url"
        />
      </div>

      <div className="flex items-center gap-3 pt-1">
        {/* Back */}
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Back
        </button>

        {/* Submit */}
        <button
          type="button"
          disabled={!canSubmit}
          onClick={onSubmit}
          className={cn(
            'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold italic border transition-all',
            canSubmit
              ? 'bg-white text-[#111] border-[#FF7900] shadow-[0_0_24px_rgba(255,121,0,0.30)] hover:shadow-[0_0_36px_rgba(255,121,0,0.50)] hover:scale-[1.02]'
              : 'bg-white/[0.04] text-foreground/25 border-white/[0.07] cursor-not-allowed',
          )}
        >
          {isSubmitting ? (
            <>
              <svg
                className="w-3 h-3 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              Submit Enquiry
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#FF7900]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

// ── Success ────────────────────────────────────────────────────────────────

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center py-4">
      {/* Orange checkmark */}
      <div className="w-12 h-12 rounded-full border border-[#FF7900]/30 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF7900" strokeWidth="1.5" className="w-6 h-6">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-white font-semibold text-base">Enquiry received.</p>
        <p className="text-[#666] text-xs mt-1 max-w-[280px]">
          We&apos;ll review your submission and be in touch within 24 hours.
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="mt-2 text-[10px] uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        Close
      </button>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────

export function InquireModal({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(1)

  // Step 1 state
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  // Step 2 state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [socialMedia, setSocialMedia] = useState('')
  const [website, setWebsite] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function resetModal() {
    setStep(1)
    setSelectedServices([])
    setName('')
    setEmail('')
    setSocialMedia('')
    setWebsite('')
    setEmailError('')
    setIsSubmitting(false)
  }

  function handleOpenChange(val: boolean) {
    if (isSubmitting) return
    setOpen(val)
    if (!val) setTimeout(resetModal, 250) // wait for close animation
  }

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )
  }

  function validateEmail(val: string) {
    if (!val) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Enter a valid email address'
    return ''
  }

  async function handleSubmit() {
    const err = validateEmail(email)
    if (err) { setEmailError(err); return }
    if (!name.trim()) return

    setIsSubmitting(true)
    const payload: InquiryPayload = {
      selectedServices,
      name: name.trim(),
      email: email.trim(),
      socialMedia: socialMedia.trim(),
      website: website.trim(),
      submittedAt: new Date().toISOString(),
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
    }
    try {
      await submitInquiry(payload)
      setStep('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <RadixDialog.Root open={open} onOpenChange={handleOpenChange}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

      <DialogPortal>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />

        <RadixDialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 w-full max-w-[min(460px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#FF7900]/20 bg-[#0c0c0c] shadow-[0_0_60px_rgba(255,121,0,0.12),0_8px_40px_rgba(0,0,0,0.85)] overflow-hidden focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
        >
          {/* Close button */}
          {step !== 'success' && (
            <RadixDialog.Close
              disabled={isSubmitting}
              aria-label="Close"
              className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <X className="w-4 h-4" />
            </RadixDialog.Close>
          )}

          {/* Step indicator */}
          {(step === 1 || step === 2) && (
            <div className="flex items-center gap-2 px-6 pt-5">
              <StepDot active={step === 1} done={step === 2} />
              <div className="h-px flex-1 bg-white/[0.06]" />
              <StepDot active={step === 2} done={false} />
              <p className="text-[10px] uppercase tracking-[0.1em] text-foreground/20 ml-1.5">
                Step {step} of 2
              </p>
            </div>
          )}

          {/* Step content — key remount triggers fade+slide animation */}
          <div
            key={String(step)}
            className="animate-in fade-in-0 slide-in-from-bottom-1 duration-200 px-6 py-5"
          >
            {step === 1 && (
              <Step1Content
                selectedServices={selectedServices}
                toggleService={toggleService}
                canProceed={selectedServices.length > 0}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <Step2Content
                name={name}
                setName={setName}
                email={email}
                setEmail={(v) => {
                  setEmail(v)
                  if (emailError) setEmailError(validateEmail(v))
                }}
                socialMedia={socialMedia}
                setSocialMedia={setSocialMedia}
                website={website}
                setWebsite={setWebsite}
                emailError={emailError}
                isSubmitting={isSubmitting}
                canSubmit={!!(name.trim() && email.trim() && !isSubmitting)}
                onBack={() => setStep(1)}
                onSubmit={handleSubmit}
              />
            )}

            {step === 'success' && (
              <SuccessState onClose={() => handleOpenChange(false)} />
            )}
          </div>
        </RadixDialog.Content>
      </DialogPortal>
    </RadixDialog.Root>
  )
}
