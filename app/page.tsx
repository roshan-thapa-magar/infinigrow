import HeroSection from "@/components/home/hero-section"
import TrustedBySection from "@/components/home/trusted-by-section"
import TeamSection from "@/components/home/team-section"
import ServicesSection from "@/components/home/services-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CompanyInfoSection from "@/components/home/company-info-section"

export default function HeroPage() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      <HeroSection />
      <TrustedBySection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <CompanyInfoSection />
    </main>
  )
}