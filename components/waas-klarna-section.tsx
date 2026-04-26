'use client'

import { InquireModal } from '@/components/InquireModal'

type ServiceCard = {
  title: string
  investment: string
  description: string
}

const CARDS: ServiceCard[] = [
  {
    title: 'Premium Site Build',
    investment: 'Investment from $500/month',
    description:
      'Turn your web presence into your strongest trust signal. Custom built, brand-elevated, mobile-optimised.',
  },
  {
    title: 'WaaS + Klarna Integration',
    investment: 'Investment from $800/month',
    description:
      'Add Klarna to your booking flow and turn your $1,200 treatment into $100/month at the point of decision. We build the site and wire the integration together.',
  },
]

function WaasCard({ card }: { card: ServiceCard }) {
  return (
    <div className="relative isolate flex flex-col rounded-xl border border-primary/20 bg-background/60 hover:outline hover:outline-1 hover:outline-[#FF7900]/25 p-5 gap-3 transition-all">
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground/90 text-sm font-medium leading-snug">{card.title}</h3>
        <p className="text-[#FF7900] text-[10px] uppercase tracking-widest font-medium">{card.investment}</p>
      </div>
      <p className="text-foreground/50 text-xs leading-relaxed">{card.description}</p>
      <InquireModal
        trigger={
          <button className="mt-auto flex items-center gap-1.5 text-[10px] font-bold italic text-[#FF7900] hover:text-[#FF7900]/80 transition-colors w-fit">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Inquire Now
          </button>
        }
      />
    </div>
  )
}

export function WaasKlarnaSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-foreground/90 text-base font-medium">Premium Sites That Convert</h2>
        <p className="text-foreground/40 text-xs leading-relaxed max-w-md mx-auto">
          Built for high-ticket service businesses that lose bookings at the payment screen.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {CARDS.map((card) => (
          <WaasCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  )
}
