import { ReactNode } from "react"

// ── Icons ──────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ReactivateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M23 4v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 20v-6h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ContentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 17h7M17 14v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HiringIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="2" y="6" width="15" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 10l5-2v8l-5-2V10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Types ──────────────────────────────────────────────────────────────────

interface Meta {
  problem: string
  solution: string
  target: string
  tools: string
  pricing: string
}

interface StarterCTA {
  label: string
  /** Swap this for the real Stripe payment link when ready */
  href: string
}

interface Offer {
  icon: ReactNode
  title: string
  valueProps: string
  description: string
  meta: Meta
  /** If set, renders a secondary productized purchase CTA on the card */
  starterCTA?: StarterCTA
}

// ── Data ───────────────────────────────────────────────────────────────────

const offers: Offer[] = [
  {
    icon: <PhoneIcon />,
    title: "AI Inbound Receptionist",
    valueProps: "Never miss a call. Never lose a lead.",
    description:
      "A 24/7 AI voice agent that answers every inbound call, filters spam, handles common questions, and books appointments directly into the calendar — without a human picking up.",
    meta: {
      problem: "Calls go unanswered outside hours or when staff are tied up. Revenue walks.",
      solution: "AI voice agent covers every call, qualifies callers, and books directly to calendar.",
      target: "Med spas, salons, HVAC, roofers, dental clinics.",
      tools: "n8n · Retell AI · Twilio",
      pricing: "$2,000–$15,000 setup + 20% monthly retainer (~$400–$3,000/mo)",
    },
  },
  {
    icon: <ReactivateIcon />,
    title: "Lead Reactivation",
    valueProps: "Money is already in your list. Go get it.",
    description:
      "An AI outreach system that contacts dormant leads already sitting in your CRM — via phone, SMS, or email — re-engages them, and routes qualified conversations back into the active pipeline.",
    meta: {
      problem: "Old leads paid to acquire are sitting untouched, generating zero return.",
      solution: "Automated multi-channel outreach reactivates cold contacts and books them back in.",
      target: "Home services, med spas, real estate, agencies, high-ticket service businesses.",
      tools: "n8n · Retell AI (optional for phone)",
      pricing: "$3,000–$15,000 setup + performance fee per appointment booked",
    },
  },
  {
    icon: <LightningIcon />,
    title: "Speed to Lead",
    valueProps: "First to call wins. You'll always be first.",
    description:
      "An AI voice agent that calls back inbound leads within 5 minutes of a form fill or ad opt-in, qualifies them live, and books them — before they've had a chance to call your competitor.",
    meta: {
      problem: "Paid ad leads go cold in minutes. Most businesses take hours to follow up.",
      solution: "Sub-5-minute AI callback qualifies and books every new lead automatically.",
      target: "Agencies, dental clinics, real estate, med spas, home services running paid ads.",
      tools: "Retell AI · n8n · HubSpot / GoHighLevel / Sheets",
      pricing: "$3,000–$10,000 setup + 20% monthly retainer",
    },
  },
  {
    icon: <ContentIcon />,
    title: "Content Dashboards",
    valueProps: "One input. Five platforms. Published.",
    description:
      "A fully automated content machine. The owner enters a topic and a tone. The system generates and schedules a LinkedIn post, Instagram caption, Facebook post, blog article, and a matching image — without touching a single platform manually.",
    meta: {
      problem: "Consistent posting requires hours weekly. Most businesses go dark instead.",
      solution: "Single-input workflow generates and publishes across five platforms automatically.",
      target: "Marketing agencies, B2B businesses. Not healthcare (compliance risk).",
      tools: "n8n / Make.com · OpenAI / Claude · Google Sheets / Airtable · Buffer / Hootsuite",
      pricing: "$1,500–$5,000 setup",
    },
    starterCTA: {
      label: "Start with Fixed Scope",
      href: "https://buy.stripe.com/placeholder-content-dashboards", // TODO: replace with live Stripe link
    },
  },
  {
    icon: <HiringIcon />,
    title: "Hiring Systems",
    valueProps: "Screen, schedule, hire — without lifting a finger.",
    description:
      "An automated recruiting pipeline that processes incoming applications, sends follow-up emails, schedules interviews, and tracks every candidate in a clean dashboard — removing the manual admin from hiring entirely.",
    meta: {
      problem: "HR teams spend hours on screening, scheduling, and chasing applicants manually.",
      solution: "Automated pipeline handles application intake, emails, scheduling, and tracking.",
      target: "Staffing businesses, large agencies, businesses with an active HR function.",
      tools: "Make.com / n8n · ClickUp / Notion · Indeed / LinkedIn ATS",
      pricing: "$2,000–$5,000 setup",
    },
  },
  {
    icon: <VideoIcon />,
    title: "AI UGC Creatives",
    valueProps: "Dozens of ad creatives in minutes, not weeks.",
    description:
      "AI-generated UGC-style video ads that match the quality of human creators at a fraction of the cost and time. Produced in bulk, reviewed through a simple product dashboard, ready for Meta or TikTok.",
    meta: {
      problem: "Human UGC costs $200–$1,000 per video and takes weeks. Volume is impossible.",
      solution: "AI generates dozens of realistic, high-converting video ads on demand.",
      target: "E-commerce companies running paid ads on Meta or TikTok.",
      tools: "Sora · n8n · Product review tool",
      pricing: "$1,500–$4,000/mo retainer · or $100–$300 per creative",
    },
    starterCTA: {
      label: "Buy Starter Package",
      href: "https://buy.stripe.com/placeholder-ai-ugc-creatives", // TODO: replace with live Stripe link
    },
  },
]

// ── Card ───────────────────────────────────────────────────────────────────

function Agency6Card({ offer }: { offer: Offer }) {
  return (
    <div className="relative isolate flex flex-col rounded-xl border border-primary/20 bg-background/60 hover:outline hover:outline-1 hover:outline-[#FF7900]/25 transition-[outline] p-5 gap-4">

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl border border-primary/25 flex items-center justify-center text-foreground/75 flex-shrink-0">
        {offer.icon}
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground font-medium text-sm italic leading-snug">
          {offer.title}
        </h3>
        <p className="text-primary text-xs font-medium">
          {offer.valueProps}
        </p>
      </div>

      {/* Description */}
      <p className="text-foreground/65 text-xs leading-relaxed">
        {offer.description}
      </p>

      {/* Metadata */}
      <div className="flex flex-col gap-1.5 border-t border-white/[0.06] pt-3 mt-auto">
        <MetaRow label="Problem" value={offer.meta.problem} />
        <MetaRow label="Solution" value={offer.meta.solution} />
        <MetaRow label="Target" value={offer.meta.target} />
        <MetaRow label="Stack" value={offer.meta.tools} />
        <MetaRow label="Pricing" value={offer.meta.pricing} highlight />
      </div>

      {/* Productized CTA — only on eligible offers */}
      {offer.starterCTA && (
        <div className="border-t border-white/[0.06] pt-3">
          <a
            href={offer.starterCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-[#FF7900]/70 hover:text-[#FF7900] transition-colors group"
          >
            <span className="w-1 h-1 rounded-full bg-[#FF7900]/50 group-hover:bg-[#FF7900] transition-colors flex-shrink-0" />
            {offer.starterCTA.label}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}

function MetaRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex gap-2 text-[10px] leading-snug">
      <span className="text-[#FF7900]/60 uppercase tracking-[0.08em] flex-shrink-0 w-12">{label}</span>
      <span className={highlight ? "text-foreground/80" : "text-foreground/50"}>{value}</span>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────

export function Agency6Section() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {offers.map((offer) => (
        <Agency6Card key={offer.title} offer={offer} />
      ))}
    </div>
  )
}
