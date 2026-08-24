"use client"

import { useRef } from "react"
import {
  ArrowRight,
  Check,
  Code2,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    key: "businessFocused",
    icon: Lightbulb,
  },
  {
    key: "modernTechnology",
    icon: Code2,
  },
  {
    key: "collaborativeApproach",
    icon: Users,
  },
  {
    key: "reliableScalable",
    icon: ShieldCheck,
  },
  {
    key: "transparentPartnership",
    icon: Handshake,
  },
  {
    key: "builtForGrowth",
    icon: Rocket,
  },
]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const leftCardVariants: Variants = {
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

const rightContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const reasonItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      duration: 0.5,
    },
  },
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.05,
    },
  },
}

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
}

const reasonTitleVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.05,
    },
  },
}

const reasonDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const checklistItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2,
    },
  },
}

const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
}

export default function WhyInfiniGrow() {
  const t = useTranslations("WhyInfiniGrow")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-muted/30 py-20 md:py-28 overflow-hidden">
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
        {/* HEADER */}
        <motion.div
          variants={headerVariants}
          className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end"
        >
          <div>
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
              >
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                {t("badge")}
              </Badge>
            </motion.div>

            <motion.h2
              variants={titleVariants}
              className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {t("title")}{" "}
              <span className="text-emerald-500">
                {t("titleHighlight")}
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={descriptionVariants}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <motion.div
            variants={leftCardVariants}
            className="relative overflow-hidden rounded-2xl border bg-background p-7 md:p-10"
          >
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/5"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500"
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Rocket className="h-7 w-7" />
              </motion.div>

              <motion.p
                variants={badgeVariants}
                className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500"
              >
                {t("approach.eyebrow")}
              </motion.p>

              <motion.h3
                variants={titleVariants}
                className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
              >
                {t("approach.title")}
              </motion.h3>

              <motion.p
                variants={descriptionVariants}
                className="mt-5 leading-7 text-muted-foreground"
              >
                {t("approach.description.first")}
              </motion.p>

              <motion.p
                variants={descriptionVariants}
                className="mt-4 leading-7 text-muted-foreground"
              >
                {t("approach.description.second")}
              </motion.p>

              {/* CHECKLIST */}
              <motion.div
                variants={containerVariants}
                className="mt-8 space-y-3 border-t pt-7"
              >
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    variants={checklistItemVariants}
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="h-3 w-3" />
                    </motion.div>

                    <span className="text-sm font-medium">
                      {t(`approach.checklist.${index}`)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={rightContentVariants}
            className="divide-y border-y"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <motion.div
                  key={reason.key}
                  variants={reasonItemVariants}
                  whileHover={{
                    x: 6,
                    backgroundColor: "rgba(16, 185, 129, 0.02)",
                    transition: { duration: 0.2 },
                  }}
                  className="group grid gap-5 py-7 transition-colors hover:bg-background/60 md:grid-cols-[55px_1fr] md:px-5"
                >
                  {/* ICON */}
                  <motion.div
                    variants={iconVariants}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-3">
                      <motion.span
                        variants={numberVariants}
                        className="text-xs font-semibold tracking-widest text-emerald-500"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      <motion.h3
                        variants={reasonTitleVariants}
                        className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      >
                        {t(`reasons.${reason.key}.title`)}
                      </motion.h3>
                    </div>

                    <motion.p
                      variants={reasonDescriptionVariants}
                      className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground md:text-base"
                    >
                      {t(`reasons.${reason.key}.description`)}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={ctaVariants}
          className="mt-14 flex flex-col gap-5 rounded-2xl border bg-background p-7 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div>
            <motion.p
              variants={badgeVariants}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500"
            >
              {t("cta.eyebrow")}
            </motion.p>

            <motion.h3
              variants={titleVariants}
              className="mt-2 text-2xl font-bold tracking-tight md:text-3xl"
            >
              {t("cta.title")}
            </motion.h3>

            <motion.p
              variants={descriptionVariants}
              className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground"
            >
              {t("cta.description")}
            </motion.p>
          </div>

          <motion.div
            variants={ctaButtonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="group w-fit bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/30 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all duration-300"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2"
              >
                {t("cta.button")}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}