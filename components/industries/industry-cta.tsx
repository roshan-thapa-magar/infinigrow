"use client"

import { useTranslations } from "next-intl"

import CTA from "@/components/cta"

export default function IndustryCTA() {
  const t = useTranslations("IndustryCTA")

  return (
    <CTA
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      buttonText={t("button")}
      buttonHref="/contact"
    />
  )
}