"use client"

import { useRef } from "react"
import {
  Eye,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
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

const labelVariants: Variants = {
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

const cardTitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.15,
    },
  },
}

const cardDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
}

const bottomTextVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.3,
    },
  },
}

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.4,
    },
  },
}

export default function MissionVision() {
  const t = useTranslations("MissionVision")
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
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
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

        {/* MISSION + VISION */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {/* MISSION */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
              transition: { duration: 0.2 },
            }}
            className="group relative overflow-hidden rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
          >
            <motion.div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-125"
              animate={{
                scale: [1, 1.2, 1],
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
                <Target className="h-7 w-7" />
              </motion.div>

              <motion.p
                variants={labelVariants}
                className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500"
              >
                {t("mission.label")}
              </motion.p>

              <motion.h3
                variants={cardTitleVariants}
                className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
              >
                {t("mission.title")}
              </motion.h3>

              <motion.p
                variants={cardDescriptionVariants}
                className="mt-5 text-base leading-7 text-muted-foreground"
              >
                {t("mission.description.first")}
              </motion.p>

              <motion.p
                variants={cardDescriptionVariants}
                className="mt-4 text-base leading-7 text-muted-foreground"
              >
                {t("mission.description.second")}
              </motion.p>

              <motion.div
                variants={bottomTextVariants}
                className="mt-8 flex items-center gap-3 border-t pt-6"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {t("mission.bottom")}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.2)",
              transition: { duration: 0.2 },
            }}
            className="group relative overflow-hidden rounded-2xl border bg-foreground p-7 text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-card dark:text-foreground md:p-10"
          >
            <motion.div
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 transition-transform duration-500 group-hover:scale-125"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white"
                whileHover={{
                  rotate: -10,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Eye className="h-7 w-7" />
              </motion.div>

              <motion.p
                variants={labelVariants}
                className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400"
              >
                {t("vision.label")}
              </motion.p>

              <motion.h3
                variants={cardTitleVariants}
                className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
              >
                {t("vision.title")}
              </motion.h3>

              <motion.p
                variants={cardDescriptionVariants}
                className="mt-5 text-base leading-7 text-background/70 dark:text-muted-foreground"
              >
                {t("vision.description.first")}
              </motion.p>

              <motion.p
                variants={cardDescriptionVariants}
                className="mt-4 text-base leading-7 text-background/70 dark:text-muted-foreground"
              >
                {t("vision.description.second")}
              </motion.p>

              <motion.div
                variants={bottomTextVariants}
                className="mt-8 flex items-center gap-3 border-t border-background/10 pt-6 dark:border-border"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <span className="text-sm font-medium text-background/70 dark:text-muted-foreground">
                  {t("vision.bottom")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={ctaVariants}
          className="mt-14 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="group border-2 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
            >
              <Link
                href="/about#how-we-work"
                className="flex items-center gap-2"
              >
                {t("cta")}
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