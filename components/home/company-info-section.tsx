"use client"

import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

// Variants for animations with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Use array for custom easing
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const highlightVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
}

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function CompanyInfoSection() {
  const t = useTranslations("CompanyInfo")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-muted/30 py-20 overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
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
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
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

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            {/* <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5 text-sm font-medium tracking-wider uppercase"
              >
                <span className="relative">
                  <span className="absolute -inset-1 animate-pulse rounded-full bg-emerald-500/20 blur-sm" />
                  {t("badge")}
                </span>
              </Badge>
            </motion.div> */}

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {t("title")}
              <motion.span
                variants={highlightVariants}
                className="relative block text-emerald-600 dark:text-emerald-400"
              >
                <span className="relative inline-block">
                  {t("titleHighlight")}
                  {/* Underline animation */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 w-full bg-emerald-500/30 dark:bg-emerald-400/30"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                  />
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Company Description */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 text-justify text-base leading-8 text-muted-foreground md:text-lg lg:text-xl lg:leading-9"
          >
            <motion.p variants={paragraphVariants}>
              <span className="font-semibold text-foreground relative">
                InfiniGrow Technology
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-500"
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </span>{" "}
              {t("paragraph1").replace("InfiniGrow Technology ", "")}
            </motion.p>

            {[2, 3, 4, 5].map((num, index) => (
              <motion.p
                key={num}
                variants={paragraphVariants}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                {t(`paragraph${num}`)}
              </motion.p>
            ))}
          </motion.div>

          {/* Decorative divider with animation */}
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-0.5 flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.div
              className="h-2 w-2 rounded-full bg-emerald-500/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="h-0.5 flex-1 bg-gradient-to-l from-emerald-500/20 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}