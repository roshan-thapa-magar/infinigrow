"use client"

import { ArrowRight, Briefcase } from "lucide-react"
import { useTranslations } from "next-intl"

import { HeroSection } from "@/components/hero-section"

export default function AboutPage() {
  const t = useTranslations("AboutHero")

  return (
    <main className="relative overflow-hidden bg-background">
      <HeroSection
        badge={t("badge")}
        title={t("title")}
        description={[
          t("description.0"),
          t("description.1"),
        ]}
        image="/images/about/aboutpage.jpg"
        imageAlt={t("imageAlt")}
        primaryButton={{
          label: t("primaryButton"),
          href: "/services",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: t("secondaryButton"),
          href: "/contact",
          icon: <Briefcase className="h-4 w-4" />,
        }}
      />

      {/* Other About sections will go here */}
    </main>
  )
}