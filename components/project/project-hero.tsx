import { ArrowRight, Briefcase } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { useTranslations } from "next-intl"

export default function ProjectHero() {
  const t = useTranslations("ProjectHero")

  return (
    <div>
      <HeroSection
        badge={t("badge")}
        title={t("title")}
        description={[
          t("description.0"),
          t("description.1"),
        ]}
        image="/images/projects/image.png"
        imageAlt={t("imageAlt")}
        primaryButton={{
          label: t("primaryButton"),
          href: "/projects#projects",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: t("secondaryButton"),
          href: "/contact",
          icon: <Briefcase className="h-4 w-4" />,
        }}
      />
    </div>
  )
}