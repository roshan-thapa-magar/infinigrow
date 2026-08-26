"use client"

import { useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

const services = [
  {
    key: "web-development",
    slug: "web-development",
  },
  {
    key: "mobile-development",
    slug: "mobile-development",
  },
  {
    key: "software-development",
    slug: "software-development",
  },
  {
    key: "api-development",
    slug: "api-development",
  },
  {
    key: "cloud-and-devops",
    slug: "cloud-and-devops",
  },
  {
    key: "ai-development",
    slug: "ai-development",
  },
  {
    key: "ui-ux-design",
    slug: "#",
  },
  {
    key: "technology-consulting",
    slug: "#",
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

const serviceItemVariants: Variants = {
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
      stiffness: 150,
      damping: 20,
      duration: 0.5,
    },
  },
}

export default function Services() {
  const t = useTranslations("IndustriesServices")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative border-y bg-muted/30 py-20 md:py-28 overflow-hidden">
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
          className="text-center"
        >
          <motion.p
            variants={eyebrowVariants}
            className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
          >
            <Sparkles className="h-4 w-4" />
            {t("eyebrow")}
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground"
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

        {/* SERVICES */}
        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={serviceItemVariants}
              custom={index}
              whileHover={{
                y: -4,
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
              >
                <motion.span
                  className="text-sm font-medium transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  whileHover={{ x: 2 }}
                >
                  {t(`services.${service.key}`)}
                </motion.span>

                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            >
              <span>View All Services</span>
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
          </motion.div>

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