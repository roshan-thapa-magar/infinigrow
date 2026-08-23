"use client"

import {
  FormEvent,
  useState,
} from "react"

import { Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

import ContactSidebar from "./ContactSidebar"
import ContactFormFields, {
  ContactFormData,
} from "./ContactFormFields"

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000"

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  workType: "",
  service: "",
  project: "",
  budget: "",
}

export default function ContactForm() {
  const t = useTranslations("contact")

  const [formData, setFormData] =
    useState<ContactFormData>(
      initialFormData
    )

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (!formData.firstName.trim()) {
      toast.error(
        t("validation.firstNameRequired")
      )
      return
    }

    if (!formData.lastName.trim()) {
      toast.error(
        t("validation.lastNameRequired")
      )
      return
    }

    if (!formData.email.trim()) {
      toast.error(
        t("validation.emailRequired")
      )
      return
    }

    if (!formData.workType) {
      toast.error(
        t("validation.workTypeRequired")
      )
      return
    }

    if (!formData.service) {
      toast.error(
        t("validation.serviceRequired")
      )
      return
    }

    if (!formData.project.trim()) {
      toast.error(
        t("validation.projectRequired")
      )
      return
    }

    if (!formData.budget) {
      toast.error(
        t("validation.budgetRequired")
      )
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        `${API_URL}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data =
        await response.json()

      if (!response.ok) {
        let errorMessage =
          t("toast.submitError")

        if (
          typeof data?.detail ===
          "string"
        ) {
          errorMessage =
            data.detail
        }

        throw new Error(
          errorMessage
        )
      }

      toast.success(
        t("toast.success"),
        {
          description:
            t("toast.successDescription"),
          duration: 5000,
        }
      )

      setFormData(
        initialFormData
      )

    } catch (error) {
      console.error(
        "Contact form error:",
        error
      )

      toast.error(
        t("toast.error"),
        {
          description:
            error instanceof Error
              ? error.message
              : t(
                  "toast.errorDescription"
                ),
          duration: 5000,
        }
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* PAGE HEADER */}
        <div className="mb-14 max-w-3xl sm:mb-16">

          <Badge
            variant="outline"
            className="
              mb-5
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border-emerald-200
              bg-emerald-50
              px-3
              py-1
              text-emerald-700
              dark:border-emerald-800
              dark:bg-emerald-950/30
              dark:text-emerald-400
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {t("title")}
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-muted-foreground
              sm:text-lg
            "
          >
            {t("description")}
          </p>

        </div>

        {/* FORM */}
        <div
          className="
            grid
            items-start
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
            xl:gap-24
          "
        >
          <ContactSidebar />

          <ContactFormFields
            formData={formData}
            setFormData={setFormData}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </div>

      </div>
    </section>
  )
}