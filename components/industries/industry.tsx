"use client"

import { useRef } from "react"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  ShoppingCart,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

const industries = [
  {
    slug: "education",
    icon: GraduationCap,
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
  },
  {
    slug: "hospitality",
    icon: Hotel,
  },
  {
    slug: "finance-business",
    icon: BriefcaseBusiness,
  },
  {
    slug: "professional-services",
    icon: Building2,
  },
  {
    slug: "startups-small-businesses",
    icon: Rocket,
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

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
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

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.15,
    },
  },
}

const solutionVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2,
    },
  },
}

export default function Industry() {
  const t = useTranslations("Industries")
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
        {/* SECTION HEADER */}
        <motion.div
          variants={headerVariants}
          className="max-w-2xl"
        >
          <motion.p
            variants={eyebrowVariants}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
          >
            <Sparkles className="h-4 w-4" />
            {t("section.eyebrow")}
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            {t("section.title")}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mt-4 leading-7 text-muted-foreground"
          >
            {t("section.description")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* INDUSTRY GRID */}
        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.article
                key={industry.slug}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl"
              >
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
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
                      <Icon className="h-6 w-6" />
                    </motion.div>

                    <motion.span
                      variants={numberVariants}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                  </div>

                  {/* TITLE */}
                  <motion.h3
                    className="mt-7 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                    whileHover={{ x: 2 }}
                  >
                    {t(`items.${industry.slug}.title`)}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {t(`items.${industry.slug}.description`)}
                  </motion.p>

                  {/* SOLUTIONS */}
                  <motion.div
                    variants={containerVariants}
                    className="mt-6 space-y-3"
                  >
                    {t
                      .raw(`items.${industry.slug}.solutions`)
                      .map((solution: string, idx: number) => (
                        <motion.div
                          key={solution}
                          variants={solutionVariants}
                          custom={idx}
                          className="flex items-center gap-2 text-sm group/solution"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                              delay: 0.2 + idx * 0.05,
                            }}
                          >
                            <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          </motion.div>
                          <span className="transition-colors group-hover/solution:text-foreground">
                            {solution}
                          </span>
                        </motion.div>
                      ))}
                  </motion.div>

                  {/* LINK */}
                  <motion.div
                    variants={linkVariants}
                    className="mt-7 border-t pt-5"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400"
                    >
                      {t("link")}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-emerald-500/0 transition-colors duration-300 group-hover:bg-emerald-500/10"
                  whileHover={{ scale: 1.5 }}
                />
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          {/* <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            >
              <span>Explore All Industries</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.div> */}

          {/* Animated divider */}
          <motion.div
            className="mt-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-emerald-500/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}