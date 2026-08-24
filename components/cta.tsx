"use client"

import Link from "next/link"
import { useRef } from "react"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"

import { Button } from "@/components/ui/button"

interface CTAProps {
  eyebrow?: string
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

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

export default function CTA({
  eyebrow = "Let's Work Together",
  title = "Have a project in mind?",
  description = "Tell us about your idea, and let's build a digital solution that helps your business grow.",
  buttonText = "Start a Project",
  buttonHref = "/contact",
}: CTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative border-t bg-emerald-600 text-white dark:bg-emerald-500 overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
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
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
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
        className="absolute top-10 right-20 hidden h-2 w-2 rounded-full bg-white/20 lg:block"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 hidden h-3 w-3 rounded-full bg-white/10 lg:block"
        animate={{
          y: [0, 15, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 4,
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
        className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.p
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80"
            >
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={titleVariants}
              className="mt-3 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={descriptionVariants}
              className="mt-4 max-w-xl leading-7 text-white/80 md:text-lg"
            >
              {description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-6 h-1 w-16 rounded-full bg-white/30"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Button */}
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Button
              size="lg"
              variant="secondary"
              className="group relative overflow-hidden bg-white text-emerald-600 shadow-lg shadow-white/20 hover:bg-white/90 hover:shadow-xl hover:shadow-white/30 transition-all duration-300"
            >
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <Link href={buttonHref} className="relative flex items-center">
                <span className="font-semibold">{buttonText}</span>
                <motion.span
                  className="ml-2 flex"
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
            </Button>
          </motion.div>
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-px w-16 bg-gradient-to-r from-transparent to-white/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          <motion.div
            className="flex h-2 w-2 items-center justify-center rounded-full bg-white/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <Rocket className="h-3 w-3 text-white/50" />
          </motion.div>
          <motion.div
            className="h-px w-16 bg-gradient-to-l from-transparent to-white/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}