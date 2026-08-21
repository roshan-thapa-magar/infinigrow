import { ArrowRight, Briefcase } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import ServicesCards from "@/components/services/ServicesCards"
import ServicesCTA from "@/components/services/ServicesCTA"

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <HeroSection
        badge="Our Services"
        title="Digital Solutions Built to Help Your Business Grow"
        description={[
          "InfiniGrow Technologies provides modern digital solutions designed around your business goals, users, and technical requirements.",
          "From web and mobile development to APIs, cloud solutions, and cybersecurity, we build reliable technology that supports long-term growth.",
        ]}
        image="/images/services/servicespage.jpg"
        imageAlt="InfiniGrow Technologies digital services"
        primaryButton={{
          label: "Our Services",
          href: "/services#services",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: "Contact Us",
          href: "/contact",
          icon: <Briefcase className="h-4 w-4" />,
        }}
      />

      <ServicesCards />

      <ServicesCTA />
    </main>
  )
}