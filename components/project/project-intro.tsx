"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { Badge } from "../ui/badge"
import { useTranslations } from "next-intl"
import { Sparkles } from "lucide-react"

// Animation variants
const containerVariants: Variants = {
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

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
}

export default function ProjectIntro() {
  const t = useTranslations("ProjectIntro")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
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

      {/* Decorative floating dot */}
      <motion.div
        className="absolute top-20 right-20 hidden h-2 w-2 rounded-full bg-emerald-500/20 lg:block"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 hidden h-3 w-3 rounded-full bg-emerald-500/10 lg:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-7xl px-4 md:px-8"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={titleVariants}
            className="mt-5 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={descriptionVariants}
            className="mt-5 text-base leading-8 text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            variants={lineVariants}
            className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
          />

          {/* Decorative animated line with dots */}
          <motion.div
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                delay: 0.7,
              }}
            />
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}