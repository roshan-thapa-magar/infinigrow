"use client"

import { useRef } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    key: "discover",
    number: "01",
    icon: Search,
  },
  {
    key: "plan",
    number: "02",
    icon: Lightbulb,
  },
  {
    key: "design",
    number: "03",
    icon: Sparkles,
  },
  {
    key: "develop",
    number: "04",
    icon: Code2,
  },
  {
    key: "testRefine",
    number: "05",
    icon: Settings2,
  },
  {
    key: "launchSupport",
    number: "06",
    icon: Rocket,
  },
]

const highlights = [
  {
    key: "communication",
  },
  {
    key: "collaboration",
  },
  {
    key: "support",
  },
]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const stepIconVariants: Variants = {
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

const stepNumberVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.15,
    },
  },
}

const stepTitleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2,
    },
  },
}

const stepDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.25,
    },
  },
}

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
}

const buttonVariants: Variants = {
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

export default function ProcessSection() {
  const t = useTranslations("ProcessSection")
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
          className="mx-auto max-w-3xl text-center"
        >
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
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t("title")}{" "}
            <span className="text-emerald-500">
              {t("titleHighlight")}
            </span>
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* DESKTOP PROCESS */}
        <motion.div
          variants={containerVariants}
          className="relative mt-20 hidden lg:block"
        >
          <motion.div
            className="absolute left-0 right-0 top-7 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="relative grid grid-cols-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.key}
                  variants={containerVariants}
                  className="group relative px-4"
                >
                  <motion.div
                    variants={stepIconVariants}
                    whileHover={{
                      scale: 1.15,
                      borderColor: "rgb(16, 185, 129)",
                      backgroundColor: "rgb(16, 185, 129)",
                      color: "white",
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                    className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <motion.p
                    variants={stepNumberVariants}
                    className="mt-7 text-center text-xs font-semibold tracking-[0.2em] text-emerald-500"
                  >
                    {step.number}
                  </motion.p>

                  <motion.h3
                    variants={stepTitleVariants}
                    className="mt-2 text-center text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  >
                    {t(`steps.${step.key}.title`)}
                  </motion.h3>

                  <motion.p
                    variants={stepDescriptionVariants}
                    className="mt-3 text-center text-sm leading-6 text-muted-foreground"
                  >
                    {t(`steps.${step.key}.description`)}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* MOBILE PROCESS */}
        <motion.div
          variants={containerVariants}
          className="relative mt-14 lg:hidden"
        >
          <motion.div
            className="absolute bottom-5 left-[27px] top-5 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.key}
                  variants={containerVariants}
                  className="relative flex gap-5"
                >
                  <motion.div
                    variants={stepIconVariants}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgb(16, 185, 129)",
                      backgroundColor: "rgb(16, 185, 129)",
                      color: "white",
                      transition: { duration: 0.2 },
                    }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    className="pt-1"
                  >
                    <motion.p
                      variants={stepNumberVariants}
                      className="text-xs font-semibold tracking-[0.2em] text-emerald-500"
                    >
                      {step.number}
                    </motion.p>

                    <motion.h3
                      variants={stepTitleVariants}
                      className="mt-1 text-lg font-semibold tracking-tight"
                    >
                      {t(`steps.${step.key}.title`)}
                    </motion.h3>

                    <motion.p
                      variants={stepDescriptionVariants}
                      className="mt-2 text-sm leading-6 text-muted-foreground"
                    >
                      {t(`steps.${step.key}.description`)}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.key}
              variants={highlightVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="border-t pt-5 transition-colors duration-300 hover:border-emerald-500/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.4,
                }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </motion.div>

              <motion.h3
                variants={stepTitleVariants}
                className="mt-4 font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
              >
                {t(`highlights.${highlight.key}.title`)}
              </motion.h3>

              <motion.p
                variants={stepDescriptionVariants}
                className="mt-2 text-sm leading-6 text-muted-foreground"
              >
                {t(`highlights.${highlight.key}.description`)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={buttonVariants}
          className="mt-14 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="group bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/30 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all duration-300">
              <Link
                href="/contact"
                className="flex items-center gap-2"
              >
                {t("button")}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}