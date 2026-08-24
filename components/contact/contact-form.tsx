"use client"

import {
  FormEvent,
  useState,
  useRef,
} from "react"

import { Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

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

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const sidebarVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      duration: 0.8,
    },
  },
}

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      duration: 0.8,
      delay: 0.1,
    },
  },
}

export default function ContactForm() {
  const t = useTranslations("contact")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-7xl px-4 md:px-8"
      >
        {/* PAGE HEADER */}
        <motion.div
          variants={headerVariants}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <motion.div variants={badgeVariants}>
            <Badge
              variant="outline"
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t("badge")}
            </Badge>
          </motion.div>

          <motion.h1
            variants={titleVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            variants={descriptionVariants}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          variants={gridVariants}
          className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-24"
        >
          <motion.div variants={sidebarVariants}>
            <ContactSidebar />
          </motion.div>

          <motion.div variants={formVariants}>
            <ContactFormFields
              formData={formData}
              setFormData={setFormData}
              loading={loading}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}