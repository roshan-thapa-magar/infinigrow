"use client"

import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

export const trustedCompanies: string[] = [
  "TechNova",
  "CloudWorks",
  "DigitalEdge",
  "NextGen",
  "InnovateX",
  "SmartCore",
]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
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
      delay: 0.2,
    },
  },
}

const companyCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
}

const trustItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function TrustedBySection() {
  const t = useTranslations("TrustedBy")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative border-y bg-muted/20 py-16 overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl"
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
        className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl"
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
        {/* Header */}
        <motion.div variants={containerVariants} className="text-center">
          <motion.p
            variants={badgeVariants}
            className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t("badge")}
          </motion.p>

          <motion.h2
            variants={titleVariants}
            className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Company Logos Grid */}
        <motion.div
          variants={containerVariants}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company}
              variants={companyCardVariants}
              custom={index}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                relative
                flex
                h-24
                items-center
                justify-center
                rounded-2xl
                border
                bg-background
                px-4
                transition-all
                duration-300
                hover:border-emerald-500/40
                hover:shadow-lg
                hover:shadow-emerald-500/5
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Hover background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative flex items-center gap-2">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110"
                  whileHover={{ rotate: 5 }}
                >
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.div>

                <motion.span
                  className="text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  whileHover={{ x: 2 }}
                >
                  {company}
                </motion.span>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute -right-8 -top-8 h-12 w-12 rounded-full bg-emerald-500/0 transition-colors duration-300 group-hover:bg-emerald-500/10"
                whileHover={{ scale: 1.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={containerVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          {[
            { key: "reliable", icon: CheckCircle2 },
            { key: "modern", icon: CheckCircle2 },
            { key: "support", icon: CheckCircle2 },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              variants={trustItemVariants}
              custom={index}
              className="flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                color: "rgb(16, 185, 129)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.8 + index * 0.1,
                }}
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </motion.div>
              {t(`trustItems.${item.key}`)}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
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
              delay: 1.4,
            }}
          />
          <motion.div
            className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}