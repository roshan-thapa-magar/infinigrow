import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import MissionVision from "@/components/about/mission-vision"
import ValuesSection from "@/components/about/values-section"
import WhyInfiniGrow from "@/components/about/why-infini-grow"
import TechnologySection from "@/components/about/technology-section"
import ProcessSection from "@/components/about/process-section"
import AboutCTA from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-background">

      <AboutHero />

      <WhoWeAre />

      <MissionVision />

      <ValuesSection />

      <WhyInfiniGrow />

      <TechnologySection />

      <ProcessSection />

      <AboutCTA /> 

    </main>
  )
}