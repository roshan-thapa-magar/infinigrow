"use client"

import { useRef } from "react"
import {
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
  Wrench,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const technologyGroups = [
  {
    key: "frontend",
    icon: Code2,
    number: "01",
  },
  {
    key: "backend",
    icon: Server,
    number: "02",
  },
  {
    key: "api",
    icon: Braces,
    number: "03",
  },
  {
    key: "mobile",
    icon: Smartphone,
    number: "04",
  },
  {
    key: "ai",
    icon: BrainCircuit,
    number: "05",
  },
  {
    key: "cms",
    icon: Globe,
    number: "06",
  },
  {
    key: "database",
    icon: Database,
    number: "07",
  },
  {
    key: "cloud",
    icon: Cloud,
    number: "08",
  },
  {
    key: "tools",
    icon: Wrench,
    number: "09",
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

const techCardVariants: Variants = {
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

const techTitleVariants: Variants = {
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

const techDescriptionVariants: Variants = {
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

const techTagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.05,
    },
  },
}

const bottomVariants: Variants = {
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

const bottomButtonVariants: Variants = {
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

export default function TechnologySection() {
  const t = useTranslations("TechnologySection")
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
          className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-end"
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

        {/* TECHNOLOGY GRID */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {technologyGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.key}
                variants={techCardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(16, 185, 129, 0.3)",
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg md:p-8"
              >
                {/* DECORATION */}
                <motion.div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-125"
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
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      variants={iconVariants}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <motion.span
                      variants={numberVariants}
                      className="text-xs font-semibold tracking-widest text-muted-foreground"
                    >
                      {group.number}
                    </motion.span>
                  </div>

                  {/* TITLE */}
                  <motion.h3
                    variants={techTitleVariants}
                    className="mt-7 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  >
                    {t(`groups.${group.key}.title`)}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    variants={techDescriptionVariants}
                    className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground"
                  >
                    {t(`groups.${group.key}.description`)}
                  </motion.p>

                  {/* TECHNOLOGIES */}
                  <motion.div
                    variants={containerVariants}
                    className="mt-6 flex flex-wrap gap-2 border-t pt-6"
                  >
                    {t.raw(`groups.${group.key}.technologies`).map(
                      (technology: string) => (
                        <motion.span
                          key={technology}
                          variants={techTagVariants}
                          whileHover={{
                            scale: 1.05,
                            borderColor: "rgba(16, 185, 129, 0.3)",
                            backgroundColor: "rgba(16, 185, 129, 0.05)",
                            color: "rgb(16, 185, 129)",
                            transition: { duration: 0.2 },
                          }}
                          className="rounded-md border bg-muted/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-emerald-500/20 group-hover:text-foreground"
                        >
                          {technology}
                        </motion.span>
                      )
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          variants={bottomVariants}
          className="mt-14 overflow-hidden rounded-2xl border bg-muted/30 p-7 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-5">
              <motion.div
                variants={iconVariants}
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 md:flex"
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Layers3 className="h-5 w-5" />
              </motion.div>

              <div>
                <motion.p
                  variants={badgeVariants}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500"
                >
                  {t("bottom.eyebrow")}
                </motion.p>

                <motion.h3
                  variants={titleVariants}
                  className="mt-2 text-2xl font-bold tracking-tight md:text-3xl"
                >
                  {t("bottom.title")}
                </motion.h3>

                <motion.p
                  variants={descriptionVariants}
                  className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base"
                >
                  {t("bottom.description")}
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={bottomButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="group w-fit border-2 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2"
                >
                  {t("bottom.button")}
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}