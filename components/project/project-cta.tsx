import CTA from "@/components/cta"
import { useTranslations } from "next-intl"

export default function ProjectCTA() {
  const t = useTranslations("ProjectCTA")

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