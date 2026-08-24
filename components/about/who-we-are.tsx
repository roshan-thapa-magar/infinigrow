"use client"

import { useRef } from "react"
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
  Users,
  Sparkles,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    key: "ideasFirst",
    icon: Lightbulb,
  },
  {
    key: "modernTechnology",
    icon: Code2,
  },
  {
    key: "peopleFocused",
    icon: Users,
  },
  {
    key: "resultsDriven",
    icon: Target,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.2,
      duration: 0.8,
    },
  },
}

const rightContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const drivesUsVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const solutionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const solutionDescriptionVariants: Variants = {
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

const highlightItemVariants: Variants = {
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

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre")
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
          className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end"
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
            variants={containerVariants}
            className="max-w-2xl lg:ml-auto"
          >
            <motion.p
              variants={descriptionVariants}
              className="text-base leading-7 text-muted-foreground md:text-lg"
            >
              {t("description.first")}
            </motion.p>

            <motion.p
              variants={descriptionVariants}
              className="mt-4 text-base leading-7 text-muted-foreground"
            >
              {t("description.second")}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            className="relative min-h-[420px] overflow-hidden rounded-2xl border bg-muted"
          >
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/about/who-we-are.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.div
              className="absolute bottom-0 left-0 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm font-medium text-white/70">
                {t("imageLabel")}
              </p>
              <p className="mt-1 max-w-md text-xl font-semibold text-white md:text-2xl">
                {t("imageTitle")}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={rightContentVariants}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.p
                variants={drivesUsVariants}
                className="text-sm font-semibold uppercase tracking-widest text-emerald-500"
              >
                {t("drivesUs")}
              </motion.p>

              <motion.h3
                variants={solutionTitleVariants}
                className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
              >
                {t("solutionTitle")}
                <br />
                {t("solutionTitleSecond")}
              </motion.h3>

              <motion.p
                variants={solutionDescriptionVariants}
                className="mt-5 leading-7 text-muted-foreground"
              >
                {t("solutionDescription")}
              </motion.p>
            </div>

            {/* HIGHLIGHTS */}
            <motion.div
              variants={containerVariants}
              className="mt-10 divide-y border-y"
            >
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.key}
                    variants={highlightItemVariants}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                    className="flex gap-5 py-5"
                  >
                    <motion.div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <div>
                      <motion.h4
                        className="font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                        whileHover={{ x: 2 }}
                      >
                        {t(`highlights.${item.key}.title`)}
                      </motion.h4>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {t(`highlights.${item.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={ctaVariants}
              className="mt-8"
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
                    href="/services"
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
        </div>

        {/* BOTTOM STATS */}
        <motion.div
          variants={containerVariants}
          className="mt-16 border-y"
        >
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { key: "digital" },
              { key: "modern" },
              { key: "longTerm" },
            ].map((stat, index) => (
              <motion.div
                key={stat.key}
                variants={statVariants}
                custom={index}
                whileHover={{
                  y: -4,
                  backgroundColor: "rgba(16, 185, 129, 0.02)",
                  transition: { duration: 0.2 },
                }}
                className="px-6 py-7 text-center transition-colors duration-300 sm:text-left"
              >
                <motion.p
                  className="text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  {t(`stats.${stat.key}.title`)}
                </motion.p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`stats.${stat.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}