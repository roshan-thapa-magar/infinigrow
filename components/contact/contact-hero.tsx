// app/[locale]/contact/page.tsx
"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ArrowRight, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import ProjectRequestForm from "@/components/project-request-form"

export default function ContactPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const t = useTranslations("ContactHero")

  const description = t.raw("description") as string[]

  return (
    <main className="relative overflow-hidden bg-background">
      <HeroSection
        badge={t("badge")}
        title={t("title")}
        description={description}
        image="/images/contact/image.png"
        imageAlt={t("imageAlt")}
        primaryButton={{
          label: t("primaryButton"),
          href: "#",
          icon: <ArrowRight className="h-4 w-4" />,
          onClick: () => setIsDialogOpen(true), // Open dialog on click
        }}
        secondaryButton={{
          label: t("secondaryButton"),
          href: "tel:9742531161",
          icon: <Phone className="h-4 w-4" />,
        }}
      />

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!max-w-3xl max-h-[95vh] overflow-y-auto p-0 ">
          <ProjectRequestForm  />
        </DialogContent>
      </Dialog>
    </main>
  )
}