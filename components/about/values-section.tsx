"use client"

import { useRef } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const values = [
  {
    number: "01",
    key: "innovation",
    icon: Lightbulb,
  },
  {
    number: "02",
    key: "quality",
    icon: CheckCircle2,
  },
  {
    number: "03",
    key: "transparency",
    icon: ShieldCheck,
  },
  {
    number: "04",
    key: "customerFocus",
    icon: HeartHandshake,
  },
  {
    number: "05",
    key: "collaboration",
    icon: Users,
  },
  {
    number: "06",
    key: "continuousGrowth",
    icon: Sparkles,
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

const valueItemVariants: Variants = {
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
      delay: 0.1,
    },
  },
}

const valueTitleVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const valueDescriptionVariants: Variants = {
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

const commitmentVariants: Variants = {
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

const commitmentButtonVariants: Variants = {
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

export default function ValuesSection() {
  const t = useTranslations("ValuesSection")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
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
          className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end"
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

          <motion.p
            variants={descriptionVariants}
            className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg lg:ml-auto"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* VALUES */}
        <motion.div
          variants={containerVariants}
          className="mt-16 border-t"
        >
          {values.map((value) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.number}
                variants={valueItemVariants}
                whileHover={{
                  x: 8,
                  backgroundColor: "rgba(16, 185, 129, 0.03)",
                  transition: { duration: 0.2 },
                }}
                className="group grid gap-6 border-b py-7 transition-colors hover:bg-muted/30 md:grid-cols-[80px_70px_1fr] md:items-center md:px-5"
              >
                {/* NUMBER */}
                <motion.div variants={numberVariants}>
                  <span className="text-sm font-semibold tracking-widest text-emerald-500">
                    {value.number}
                  </span>
                </motion.div>

                {/* ICON */}
                <motion.div
                  variants={iconVariants}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                {/* CONTENT */}
                <div className="grid gap-3 md:grid-cols-[220px_1fr] md:items-center">
                  <motion.h3
                    variants={valueTitleVariants}
                    className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  >
                    {t(`values.${value.key}.title`)}
                  </motion.h3>

                  <motion.p
                    variants={valueDescriptionVariants}
                    className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base"
                  >
                    {t(`values.${value.key}.description`)}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          variants={commitmentVariants}
          className="mt-14 grid gap-6 rounded-2xl border bg-muted/30 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10"
        >
          <div>
            <motion.p
              variants={badgeVariants}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500"
            >
              {t("commitment.eyebrow")}
            </motion.p>

            <motion.h3
              variants={titleVariants}
              className="mt-3 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl"
            >
              {t("commitment.title")}
            </motion.h3>

            <motion.p
              variants={descriptionVariants}
              className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base"
            >
              {t("commitment.description")}
            </motion.p>
          </div>

          <motion.div
            variants={commitmentButtonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="group w-fit bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/30 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all duration-300"
            >
              <Link
                href="/services"
                className="flex items-center gap-2"
              >
                {t("commitment.button")}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}