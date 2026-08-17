import { ArrowRight, Briefcase } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <HeroSection
        badge="About InfiniGrow"
        title="Building Digital Solutions That Help Businesses Grow"
        description={[
          "InfiniGrow Technologies is a technology company focused on creating modern, reliable, and scalable digital solutions for businesses.",
          "We combine thoughtful design, modern technologies, and practical business thinking to turn ideas into digital products that create real value.",
        ]}
        image="/images/about/aboutpage.jpg"
        imageAlt="InfiniGrow Technologies team working together"
        primaryButton={{
          label: "Our Services",
          href: "/services",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: "Contact Us",
          href: "/contact",
          icon: <Briefcase className="h-4 w-4" />,
        }}
      />

      {/* Other About sections will go here */}
    </main>
  )
}