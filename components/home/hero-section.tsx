"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

// Animation variants
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const highlightVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
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

const statsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
}

const statItemVariants: Variants = {
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

// Enhanced image variants for smooth reveal
const imageContainerVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.92,
    x: 80,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.4,
      duration: 1.2,
    },
  },
}

const imageGlowVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      opacity: {
        duration: 1,
        delay: 0.6,
        ease: "easeOut",
      },
      scale: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
}

const imageOverlayVariants: Variants = {
  hidden: { 
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 0.7,
      ease: "easeOut",
    },
  },
}

const imageClipPathVariants: Variants = {
  hidden: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 50%)",
  },
  visible: {
    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 18% 100%, 0% 50%)",
    transition: {
      duration: 1.4,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function HeroSection() {
  const t = useTranslations("Hero")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
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
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
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
        className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 md:min-h-[calc(100dvh-4rem)] md:grid-cols-2 md:px-8 lg:gap-16"
      >
        {/* ================= LEFT COLUMN ================= */}
        <motion.div variants={containerVariants} className="flex flex-col justify-center space-y-8 py-12 md:py-16 lg:py-0">
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <Badge
              className="
                w-fit
                inline-flex
                items-center
                gap-2
                border-emerald-200
                bg-emerald-50
                text-emerald-700
                hover:bg-emerald-100
                dark:border-emerald-800
                dark:bg-emerald-950/30
                dark:text-emerald-400
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-emerald-500/20
              "
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
              </motion.span>
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={headingVariants} className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title")}
            <motion.span
              variants={highlightVariants}
              className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              {t("titleHighlight")}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={descriptionVariants}
            className="max-w-xl text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            {t("description")}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={ctaVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground shadow-lg shadow-emerald-500/20 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                <Link href="/contact">
                  {t("startProject")}
                </Link>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted transition-all duration-300"
              >
                <Link href="/services">
                  {t("exploreServices")}
                </Link>
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            className="grid max-w-xl grid-cols-3 gap-3 border-t pt-8 sm:gap-6"
          >
            {[
              { value: "50+", label: t("projectsDelivered") },
              { value: "20+", label: t("technologies") },
              { value: "99%", label: t("clientSatisfaction") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statItemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.p
                  className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN - ENHANCED SMOOTH REVEAL ================= */}
        <motion.div
          variants={imageContainerVariants}
          className="relative hidden h-[calc(100svh-4rem)] min-h-[600px] md:block md:h-[calc(100dvh-4rem)]"
        >
          {/* Emerald Glow - Animated */}
          <motion.div
            variants={imageGlowVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute inset-y-20 right-0 -z-10 w-3/4 rounded-full bg-emerald-500/10 blur-3xl"
          />

          {/* Image Container with smooth clip-path reveal */}
          <motion.div
            variants={imageClipPathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-full w-full overflow-hidden bg-black"
            whileHover={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/hero.png"
                alt={t("imageAlt")}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </motion.div>

            {/* Smooth overlay reveal */}
            <motion.div
              variants={imageOverlayVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </motion.div>

          {/* Decorative corner accent */}
          <motion.div
            className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-emerald-500/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}