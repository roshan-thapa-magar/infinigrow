"use client"

import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

import { HeroSection } from "@/components/hero-section"

export default function Hero() {
  const t = useTranslations("IndustriesHero")

  return (
    <HeroSection
      badge={t("badge")}
      title={t("title")}
      description={[
        t("description.0"),
        t("description.1"),
      ]}
      image="/images/industries/industries-hero.jpg"
      imageAlt="Technology solutions for different industries"
      primaryButton={{
        label: t("primaryButton"),
        href: "/contact",
        icon: <ArrowRight className="h-4 w-4" />,
      }}
      secondaryButton={{
        label: t("secondaryButton"),
        href: "/projects#projects",
      }}
    />
  )
}