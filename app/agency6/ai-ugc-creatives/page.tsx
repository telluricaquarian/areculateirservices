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
const STRIPE_STARTER = "https://buy.stripe.com/placeholder-ai-ugc-creatives"
const BOOK_A_CALL    = "https://calendly.com/placeholder-lara" // TODO: replace with real booking link

export const metadata = {
  title: "AI UGC Creatives — Areculateir",
  description:
    "Dozens of ad creatives in minutes, not weeks. AI-generated UGC-style video ads for Meta and TikTok.",
}

export default function AiUgcCreativesPage() {
  return (
    <>
    {/* Locked overlay — fixed so it covers the full viewport regardless of parent CSS */}
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/55 flex items-center justify-center pointer-events-none select-none">
      <div className="flex flex-col items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white/40">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p className="text-white/30 text-[10px] uppercase tracking-[0.18em]">Coming Soon</p>
      </div>
    </div>
    <ProductPageShell>

      {/* Back */}
      <BackLink />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <div className="mt-10 mb-12">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#FF7900]/50 mb-4">
          Agency 6 · AI UGC Creatives
        </p>
        <h1 className="font-serif italic text-primary text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
          Dozens of Ad Creatives.<br />Minutes, Not Weeks.
        </h1>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[520px] mb-8">
          AI-generated UGC-style video ads that match the quality of human creators — at a
          fraction of the cost and in a fraction of the time. Produced in bulk, reviewed
          through a simple dashboard, delivered ready for Meta or TikTok.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton href={STRIPE_STARTER}>Buy Starter Package</PrimaryButton>
          <SecondaryButton href={BOOK_A_CALL}>Book a Call</SecondaryButton>
        </div>
      </div>

      <Divider />

      {/* ── Problem ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Human UGC doesn&apos;t scale. Paid ads die without volume.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          A single human UGC creator costs $200–$1,000 per video and takes one to three weeks
          to deliver. At that price and pace, running 20 creative tests per month — the minimum
          required to find a winning angle — is operationally impossible. Most e-commerce brands
          are running three to five creatives at a time and wondering why their cost-per-acquisition
          won&apos;t come down.
        </p>
      </section>

      <Divider />

      {/* ── Solution ────────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>The System</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Volume on demand. No casting. No waiting.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          The pipeline generates realistic UGC-style video ads using AI — matching real-creator
          aesthetics, authentic delivery styles, and native platform formats. Each batch is
          submitted through a simple review dashboard where you approve, reject, or request
          variations. Approved creatives are exported in spec for Meta or TikTok Ads Manager,
          ready to upload and test immediately.
        </p>
      </section>

      <Divider />

      {/* ── Deliverables ─────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>What You Get</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-5">
          High-volume creative output. Minimal input required.
        </h2>
        <ul className="flex flex-col gap-3">
          <BulletItem>AI-generated UGC-style video ads (volume depends on package)</BulletItem>
          <BulletItem>Authentic delivery aesthetics — not obviously AI-generated</BulletItem>
          <BulletItem>Multiple angles tested per brief: hook, problem, proof, offer</BulletItem>
          <BulletItem>Review dashboard — approve or request variations per creative</BulletItem>
          <BulletItem>Platform-spec exports: Meta (1:1, 4:5, 9:16) and TikTok (9:16)</BulletItem>
          <BulletItem>Naming conventions and tagging for structured creative testing</BulletItem>
          <BulletItem>Creative brief template for repeatable reorders</BulletItem>
        </ul>
      </section>

      <Divider />

      {/* ── Why It Works ─────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>Why It Works</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-3">
          Volume of tests is the competitive advantage in paid ads.
        </h2>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px] mb-4">
          The brands winning on Meta and TikTok today are not winning because their creatives
          look more polished. They are winning because they test more angles, more hooks, and
          more offers per week than their competitors can afford to. The business with the best
          creative testing velocity wins the auction.
        </p>
        <p className="text-foreground/55 text-sm leading-relaxed max-w-[560px]">
          UGC-style content outperforms produced studio ads because platforms and audiences
          reward authenticity. AI-generated UGC captures that aesthetic without the cost,
          the scheduling, or the three-week lead time. The only remaining variable is how
          many you can test.
        </p>
      </section>

      <Divider />

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-serif italic text-foreground text-2xl mb-6">
          Per creative or monthly volume. Both work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PricingCard
            tier="Starter Package"
            price="$1,500/mo"
            description="A fixed monthly retainer for consistent creative output. Ideal for brands actively running paid ads."
            items={[
              "15 AI UGC video creatives per month",
              "3–4 creative angles per batch",
              "Review dashboard access",
              "Meta and TikTok spec exports",
              "Creative brief template included",
              "One revision round per creative",
            ]}
            ctaLabel="Buy Starter Package"
            ctaHref={STRIPE_STARTER}
            isHighlighted
          />
          <PricingCard
            tier="Per Creative"
            price="$100–$300 / video"
            description="Order on demand. No retainer. Suited for brands testing the format before committing to volume."
            items={[
              "Individual creative orders",
              "Platform-spec exports included",
              "Delivered via review dashboard",
              "Minimum order: 5 creatives",
              "Turnaround: 48–72 hours",
            ]}
            ctaLabel="Inquire about Per-Creative Pricing"
            ctaHref={BOOK_A_CALL}
          />
        </div>
      </section>

      <Divider />

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="text-center py-4">
        <p className="font-serif italic text-primary text-2xl md:text-3xl mb-2">
          Test more. Spend less per acquisition.
        </p>
        <p className="text-foreground/40 text-xs mb-8">
          Volume testing is the only durable edge in paid social.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <PrimaryButton href={STRIPE_STARTER}>Buy Starter Package</PrimaryButton>
          <SecondaryButton href={BOOK_A_CALL}>Book a Call First</SecondaryButton>
        </div>
      </section>

    </ProductPageShell>
    </>
  )
}
