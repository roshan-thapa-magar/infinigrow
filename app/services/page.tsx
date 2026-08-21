import ServicesHero from "@/components/services/ServicesHero"
import ServicesCards from "@/components/services/ServicesCards"
import ServicesCTA from "@/components/services/ServicesCTA"

export default function Page() {
  return (
    <main>
      <ServicesHero />
      <ServicesCards />
      <ServicesCTA />
    </main>
  )
}