"use client"

import Link from "next/link"
import { useRef } from "react"
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

const services = [
  {
    id: "webDevelopment",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    id: "mobileDevelopment",
    icon: Smartphone,
    href: "/services/mobile-development",
  },
  {
    id: "uiUxDesign",
    icon: Globe,
    href: "",
  },
  {
    id: "apiDevelopment",
    icon: Database,
    href: "/services/api-development",
  },
  {
    id: "cloudSolutions",
    icon: Cloud,
    href: "/services/cloud-devops",
  },
  {
    id: "cyberSecurity",
    icon: ShieldCheck,
    href: "",
  },
]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function ServicesCards() {
  const t = useTranslations("ServicesCards")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative border-t py-20 md:py-28 overflow-hidden">
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
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="max-w-3xl"
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
            className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            {t("description")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <Card className="relative h-full border-border/60 bg-background transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden">
                    {/* Hover gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    <CardContent className="relative z-10 flex h-full flex-col p-7">
                      {/* Icon */}
                      <motion.div
                        variants={iconVariants}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110"
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="h-5 w-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                      </motion.div>

                      {/* Content */}
                      <motion.h3
                        className="mt-6 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                        whileHover={{ x: 2 }}
                      >
                        {t(`items.${service.id}.title`)}
                      </motion.h3>

                      <motion.p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {t(`items.${service.id}.description`)}
                      </motion.p>

                      {/* Link */}
                      {service.href && (
                        <motion.div
                          variants={linkVariants}
                          className="mt-6 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                        >
                          {t("explore")}

                          <motion.div
                            className="ml-2"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </motion.div>
                      )}


                      {/* Decorative corner accent */}
                      <motion.div
                        className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-emerald-500/0 transition-colors duration-300 group-hover:bg-emerald-500/10"
                        whileHover={{ scale: 1.5 }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}