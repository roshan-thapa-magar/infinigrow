import { HeroSection } from "@/components/hero-section"
import { ArrowRight, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("ContactHero")

  // Get the description array
  const description = t.raw("description") as string[]

  return (
    <main className="relative overflow-hidden bg-background">
      <HeroSection
        badge={t("badge")}
        title={t("title")}
        description={description} // Pass as array
        image="/images/contact/image.png" 
        imageAlt={t("imageAlt")}
        primaryButton={{
          label: t("primaryButton"),
          href: "/start-project",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: t("secondaryButton"),
          href: "tel:9742531161",
          icon: <Phone className="h-4 w-4" />,
        }}
      />
    </main>
  )
}