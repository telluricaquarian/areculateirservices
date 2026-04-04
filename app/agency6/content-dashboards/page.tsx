import {
  BackLink,
  BulletItem,
  Divider,
  PricingCard,
  PrimaryButton,
  ProductPageShell,
  SecondaryButton,
  SectionLabel,
} from "@/components/agency6-product-layout"

// Stripe link — swap this for the live payment URL when ready
const STRIPE_STARTER = "https://buy.stripe.com/placeholder-content-dashboards"
const BOOK_A_CALL    = "https://calendly.com/placeholder-lara" // TODO: replace with real booking link

export const metadata = {
  title: "Content Dashboards — Areculateir",
  description:
    "One input. Five platforms. Published. A fully automated content machine for agencies and B2B businesses.",
}

export default function ContentDashboardsPage() {
  return (
    <ProductPageShell>

      {/* Back */}
      <BackLink />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <div className="mt-10 mb-12">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#FF7900]/50 mb-4">
          Agency 6 · Content Dashboards
        </p>
        <h1 className="font-serif italic text-primary text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
          One Input.<br />Five Platforms.<br />Published.
        </h1>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[520px] mb-8">
          A fully automated content pipeline. You enter a topic and a tone. The system generates,
          formats, and schedules a LinkedIn post, Instagram caption, Facebook post, blog article,
          and a matching image — across every platform, without you touching any of them.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton href={STRIPE_STARTER}>Start with Fixed Scope</PrimaryButton>
          <SecondaryButton href={BOOK_A_CALL}>Book a Call</SecondaryButton>
        </div>
      </div>

      <Divider />

      {/* ── Problem ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Consistency kills most content strategies before they start.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          Posting consistently across five platforms requires dedicated hours every single week.
          Most businesses start strong and go dark within six weeks — not because they lack ideas,
          but because the operational cost of execution is too high to sustain. Sporadically
          posting hurts more than not posting at all.
        </p>
      </section>

      <Divider />

      {/* ── Solution ────────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>The System</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Remove the execution entirely.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          The dashboard is a single form. You enter a topic — e.g. "3 reasons cold outreach
          fails in 2025" — and select a tone. The workflow calls an LLM to generate platform-native
          content for each channel, creates a matching image, and queues everything directly into
          your scheduling tool. Your only job is submitting the form. Everything after that
          is automated.
        </p>
      </section>

      <Divider />

      {/* ── Deliverables ─────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>What You Get</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-5">
          One input. Five outputs. Zero manual publishing.
        </h2>
        <ul className="flex flex-col gap-3">
          <BulletItem>LinkedIn post — professional tone, formatted for reach</BulletItem>
          <BulletItem>Instagram caption — short-form, hook-led, with hashtag set</BulletItem>
          <BulletItem>Facebook post — community tone, slightly longer form</BulletItem>
          <BulletItem>Blog article — 400–600 words, SEO-friendly structure</BulletItem>
          <BulletItem>Matching image — AI-generated, platform-ready dimensions</BulletItem>
          <BulletItem>Auto-scheduled publishing via Buffer or Hootsuite</BulletItem>
          <BulletItem>Google Sheets or Airtable content log for review and edits</BulletItem>
          <BulletItem>Setup documentation and handover</BulletItem>
        </ul>
      </section>

      <Divider />

      {/* ── Why It Works ─────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>Why It Works</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Consistency compounds. Volume is the strategy.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px] mb-4">
          Businesses that post four times per week consistently outperform those posting
          once a week with higher-quality content — across every platform, in every industry.
          Algorithms reward recency and frequency. Audiences reward familiarity.
        </p>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          The reason most businesses can&apos;t maintain this isn&apos;t strategy — it&apos;s
          execution cost. This system removes the execution cost entirely, so consistency
          becomes the default rather than the exception.
        </p>
      </section>

      <Divider />

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-6">
          Fixed scope. No surprises.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PricingCard
            tier="Starter — Fixed Scope"
            price="$1,500"
            description="One-time setup. Fully built, handed over, and documented. Ideal for businesses ready to start now."
            items={[
              "Single-topic input dashboard",
              "LinkedIn, Instagram, Facebook, blog + image",
              "Buffer or Hootsuite scheduling integration",
              "Google Sheets content log",
              "1 revision round",
              "Setup documentation",
            ]}
            ctaLabel="Start with Fixed Scope"
            ctaHref={STRIPE_STARTER}
            isHighlighted
          />
          <PricingCard
            tier="Custom Build"
            price="$3,000–$5,000"
            description="Tailored pipeline with additional platforms, tone profiles, approval workflows, or custom integrations."
            items={[
              "Everything in Starter",
              "Additional platform channels",
              "Multi-tone profile support",
              "Approval step before publishing",
              "Custom integrations on request",
              "Priority build turnaround",
            ]}
            ctaLabel="Inquire about Custom Build"
            ctaHref={BOOK_A_CALL}
          />
        </div>
      </section>

      <Divider />

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="text-center py-4">
        <p className="font-serif italic text-primary text-2xl md:text-3xl mb-2">
          Stop going dark. Start publishing consistently.
        </p>
        <p className="text-foreground/40 text-xs mb-8">
          Fixed scope. No retainer required to start.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <PrimaryButton href={STRIPE_STARTER}>Start with Fixed Scope</PrimaryButton>
          <SecondaryButton href={BOOK_A_CALL}>Book a Call First</SecondaryButton>
        </div>
      </section>

    </ProductPageShell>
  )
}
