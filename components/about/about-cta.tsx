"use client"

import { useRef } from "react"
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutCTA() {
  const t = useTranslations("AboutCTA")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const services = [
    t("services.web"),
    t("services.mobile"),
    t("services.ai"),
    t("services.digital"),
  ]

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
  }

  const serviceTagVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.05,
      },
    },
  }

  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      },
    },
  }

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
        <motion.div
          variants={containerVariants}
          className="relative overflow-hidden rounded-3xl border bg-foreground px-6 py-16 text-background shadow-sm dark:bg-card dark:text-foreground sm:px-10 md:px-16 md:py-20"
        >
          {/* DECORATIVE BACKGROUND */}
          <motion.div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
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

          <motion.div
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* BADGE */}
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-400/30 bg-emerald-500/10 text-emerald-400 px-4 py-1.5"
              >
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                {t("badge")}
              </Badge>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              variants={titleVariants}
              className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {t("title")}
              <br />
              <span className="text-emerald-400">
                {t("titleHighlight")}
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={descriptionVariants}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-background/70 dark:text-muted-foreground md:text-lg"
            >
              {t("description")}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={containerVariants}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="group w-full bg-emerald-500 px-6 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 sm:w-auto"
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2"
                  >
                    {t("primaryButton")}
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

              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background sm:w-auto dark:border-border dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground transition-all duration-300"
                >
                  <Link
                    href="/services"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("secondaryButton")}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* SERVICES */}
            <motion.div
              variants={containerVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-background/50 dark:text-muted-foreground"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  variants={serviceTagVariants}
                  className="flex items-center gap-x-6"
                  whileHover={{
                    scale: 1.05,
                    color: "rgb(16, 185, 129)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span>{service}</span>

                  {index < services.length - 1 && (
                    <motion.span
                      variants={dotVariants}
                      className="h-1 w-1 rounded-full bg-emerald-400"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative divider at bottom */}
            <motion.div
              className="mt-10 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-emerald-400/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}