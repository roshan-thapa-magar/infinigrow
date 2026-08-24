"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"

const steps = ["01", "02", "03", "04"]

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

const leftVariants: Variants = {
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

const stepVariants: Variants = {
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
      damping: 20,
      duration: 0.6,
    },
  },
}

const stepNumberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1,
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
      delay: 0.15,
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
      delay: 0.2,
    },
  },
}

export default function HowWeHelp() {
  const t = useTranslations("HowWeHelp")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

      {/* Decorative floating dots */}
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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* LEFT */}
          <motion.div
            variants={leftVariants}
            className="relative"
          >
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
              >
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                {t("badge")}
              </Badge>
            </motion.div>

            <motion.h2
              variants={titleVariants}
              className="mt-5 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {t("title")}
            </motion.h2>

            <motion.p
              variants={descriptionVariants}
              className="mt-5 leading-8 text-muted-foreground"
            >
              {t("description")}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              variants={lineVariants}
              className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            />

            {/* Decorative animated arrow */}
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
                className="flex h-2 w-2 items-center justify-center rounded-full bg-emerald-500/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
              >
                <ArrowRight className="h-3 w-3 text-emerald-500" />
              </motion.div>
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT - Steps */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step}
                variants={stepVariants}
                custom={index}
                whileHover={{
                  x: 4,
                  borderColor: "rgba(16, 185, 129, 0.4)",
                  transition: { duration: 0.2 },
                }}
                className="group border-l-2 border-emerald-500 pl-5 transition-colors duration-300 hover:border-emerald-600 dark:hover:border-emerald-400"
              >
                <motion.p
                  variants={stepNumberVariants}
                  className="text-sm font-semibold text-emerald-600 transition-colors duration-300 group-hover:text-emerald-700 dark:text-emerald-400 dark:group-hover:text-emerald-300"
                >
                  {step}
                </motion.p>

                <motion.h3
                  variants={stepTitleVariants}
                  className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                >
                  {t(`steps.${step}.title`)}
                </motion.h3>

                <motion.p
                  variants={stepDescriptionVariants}
                  className="mt-2 text-sm leading-7 text-muted-foreground"
                >
                  {t(`steps.${step}.description`)}
                </motion.p>

                {/* Decorative line inside step */}
                <motion.div
                  className="mt-3 h-0.5 w-8 rounded-full bg-emerald-500/20 transition-all duration-300 group-hover:w-12 group-hover:bg-emerald-500/40"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}