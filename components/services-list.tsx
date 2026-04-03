import { ServiceRow } from "./service-row"
import { 
  SpeedToLeadIcon, 
  DocumentIcon, 
  NurtureIcon, 
  DatabaseIcon, 
  NotificationIcon 
} from "./service-icons"

const services = [
  {
    icon: <SpeedToLeadIcon />,
    price: "Investment from $5,000",
    title: "Speed to Lead",
    subtitle: "Instantly Capture and Route New Leads",
    description: "A system that immediately responds to, qualifies, and routes new leads the moment they fill out a form or send an inquiry. Because businesses are up to 10 times more likely to convert a lead if they respond within 5 minutes, this removes the average 47-hour delay that costs businesses money"
  },
  {
    icon: <DocumentIcon />,
    price: "From $3,000",
    title: "Document processing",
    subtitle: "Extract and Structure Data Automatically",
    description: "An often deterministic, rule-based automation that extracts data from documents (like pulling vendor names and amounts from invoices) and pushes it into the correct software"
  },
  {
    icon: <NurtureIcon />,
    price: "From $5,000",
    title: "Follow up & Nurture Sequence",
    subtitle: "Automate Consistent Multi-Touch Follow Ups",
    description: "An automated sequence that continues to nurture warm leads who have already shown interest but need more touchpoints to convert. This solves the issue of salespeople giving up after one or two tries, even though 80% of sales require at least five follow-ups"
  },
  {
    icon: <DatabaseIcon />,
    price: "From $5,000",
    title: "Database Reactivation",
    subtitle: "Re-engage and Monetise Existing Contacts",
    description: "A system that segments and sends personalized outreach to forgotten contacts sitting in a CRM—such as past customers, former trial users, or cold inquiries—to restart the conversation without any new ad spend"
  },
  {
    icon: <NotificationIcon />,
    price: "From $2,000",
    title: "Internal Reporting and Status Notifications",
    subtitle: "Deliver Real-Time Operational Visibility",
    description: "A background automation that pulls real-time data from various systems and delivers it directly to the team (e.g., a daily Slack message with sales numbers), eliminating the hours spent manually compiling reports"
  }
]

export function ServicesList() {
  return (
    <>
      {/* Mobile: stacked list */}
      <div className="md:hidden flex flex-col">
        {services.map((service, index) => (
          <ServiceRow
            key={service.title}
            icon={service.icon}
            price={index === 0 ? service.price : undefined}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            showDivider={index < services.length - 1}
          />
        ))}
      </div>

      {/* Desktop: 3-2 card grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <ServiceRow
            key={service.title}
            icon={service.icon}
            price={index === 0 ? service.price : undefined}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            showDivider={false}
          />
        ))}
      </div>
    </>
  )
}
