"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import {
  ArrowRight,
  Check,
  Sparkles,
  Rocket,
} from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

type ServiceFeature = {
  icon: React.ElementType
  title: string
  description: string
}

type ServiceBenefit = {
  icon: React.ElementType
  title: string
  description: string
}

type ProcessItem = {
  number: string
  title: string
  description: string
}

type MiddleItem = {
  icon: React.ElementType
  title: string
  description: string
}

type ServicePageProps = {
  hero: {
    badge: string
    title: React.ReactNode
    description: string
    primaryButton: string
    image?: {
      src: string
      alt: string
    }
    features: ServiceFeature[]
  }
  capabilities: string[]
  middleSection: {
    badge: string
    title: React.ReactNode
    description: string
    items: MiddleItem[]
  }
  technologies: string[]
  benefits: ServiceBenefit[]
  process: ProcessItem[]
  cta: {
    eyebrow: string
    title: string
    description: string
  }
}

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

const fadeInUpVariants: Variants = {
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

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.2,
      duration: 0.8,
    },
  },
}

const featureCardVariants: Variants = {
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

const capabilityItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const technologyVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
}

const processItemVariants: Variants = {
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

export default function ServicePage({
  hero,
  capabilities,
  middleSection,
  technologies,
  benefits,
  process,
  cta,
}: ServicePageProps) {
  const t = useTranslations("servicePage")
  const heroRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const middleRef = useRef(null)
  const techRef = useRef(null)
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" })
  const middleInView = useInView(middleRef, { once: true, margin: "-100px" })
  const techInView = useInView(techRef, { once: true, margin: "-100px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" })

  return (
    <main className="bg-background overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <motion.section
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="relative overflow-hidden border-b"
      >
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT */}
            <motion.div variants={containerVariants} className="max-w-4xl">
              <motion.div variants={badgeVariants}>
                <Badge
                  variant="outline"
                  className="mb-6 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
                >
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  {hero.badge}
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeInUpVariants} className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {hero.title}
              </motion.h1>

              <motion.p variants={fadeInUpVariants} className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {hero.description}
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
                  >
                    <Link href="/contact" className="flex items-center">
                      {hero.primaryButton}
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
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2">
                    <Link href="/services">{t("exploreServices")}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            {hero.image && (
              <motion.div
                variants={imageVariants}
                className="relative mx-auto w-full max-w-xl lg:mx-0"
              >
                <div className="absolute -inset-6 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
                <motion.div
                  className="relative overflow-hidden rounded-2xl border bg-muted/20 shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={900}
                    height={700}
                    priority
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* HERO FEATURES */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid border-y sm:grid-cols-3"
          >
            {hero.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={featureCardVariants}
                  custom={index}
                  whileHover={{ y: -4 }}
                  className={`
                    px-6 py-7 transition-colors hover:bg-emerald-500/5
                    ${index < 2 ? "border-b sm:border-b-0 sm:border-r" : ""}
                  `}
                >
                  <Icon className="h-6 w-6 text-emerald-500" />
                  <p className="mt-3 text-lg font-semibold">{feature.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          WHAT WE BUILD (CAPABILITIES)
      ===================================================== */}

      <motion.section
        ref={capabilitiesRef}
        variants={containerVariants}
        initial="hidden"
        animate={capabilitiesInView ? "visible" : "hidden"}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <motion.div variants={badgeVariants}>
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
                >
                  What We Build
                </Badge>
              </motion.div>

              <motion.h2 variants={fadeInUpVariants} className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                {middleSection.badge === "API Development Capabilities"
                  ? t("apiDigitalProducts")
                  : t("digitalProducts")}
              </motion.h2>

              <motion.p variants={fadeInUpVariants} className="mt-5 max-w-lg leading-7 text-muted-foreground">
                {capabilities.length > 0 ? t("capabilitiesDescription") : ""}
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {capabilities.map((item) => (
                <motion.div
                  key={item}
                  variants={capabilityItemVariants}
                  className="flex items-center gap-3 border-b py-4"
                >
                  <motion.div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  </motion.div>
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          DEVELOPMENT CAPABILITIES (MIDDLE SECTION)
      ===================================================== */}

      <motion.section
        ref={middleRef}
        variants={containerVariants}
        initial="hidden"
        animate={middleInView ? "visible" : "hidden"}
        className="border-y bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
              >
                {middleSection.badge}
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUpVariants} className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              {middleSection.title}
            </motion.h2>

            <motion.p variants={fadeInUpVariants} className="mt-5 leading-7 text-muted-foreground">
              {middleSection.description}
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="mt-14 grid gap-x-12 md:grid-cols-2">
            {middleSection.items.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={featureCardVariants}
                  whileHover={{ y: -4 }}
                  className="border-t py-8"
                >
                  <Icon className="h-7 w-7 text-emerald-500" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <motion.section
        ref={techRef}
        variants={containerVariants}
        initial="hidden"
        animate={techInView ? "visible" : "hidden"}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
              >
                {t("technologyStack")}
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUpVariants} className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              {t("technologiesTitle")}
            </motion.h2>

            <motion.p variants={fadeInUpVariants} className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              {t("technologiesDescription")}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
          >
            {technologies.map((technology) => (
              <motion.div
                key={technology}
                variants={technologyVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(16, 185, 129, 0.4)",
                  backgroundColor: "rgba(16, 185, 129, 0.05)",
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)",
                }}
                className="rounded-lg border bg-background px-5 py-3 text-sm font-medium transition-all duration-300"
              >
                {technology}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          WHY INFINIGROW (BENEFITS)
      ===================================================== */}

      <motion.section
        ref={benefitsRef}
        variants={containerVariants}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        className="border-y bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <motion.div variants={badgeVariants}>
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
                >
                  {t("whyInfiniGrow")}
                </Badge>
              </motion.div>

              <motion.h2 variants={fadeInUpVariants} className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                {t("whyTitle")}
              </motion.h2>
            </div>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    variants={featureCardVariants}
                    whileHover={{ y: -4 }}
                    className="border-t px-0 py-8 sm:px-6 sm:even:border-l"
                  >
                    <Icon className="h-6 w-6 text-emerald-500" />
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <motion.section
        ref={processRef}
        variants={containerVariants}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div variants={badgeVariants}>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
              >
                {t("process")}
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUpVariants} className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              {t("processTitle")}
            </motion.h2>

            <motion.p variants={fadeInUpVariants} className="mt-5 text-muted-foreground">
              {t("processDescription")}
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="mt-14 grid md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <motion.div
                key={item.number}
                variants={processItemVariants}
                whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.3)" }}
                className="border-t p-6 first:pl-0 transition-colors md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3)]:border-r-0"
              >
                <span className="text-sm font-bold text-emerald-500">{item.number}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.section
        ref={ctaRef}
        variants={containerVariants}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        className="relative border-t bg-emerald-600 text-white dark:bg-emerald-500 overflow-hidden"
      >
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <motion.p variants={eyebrowVariants} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                <Sparkles className="h-4 w-4" />
                {cta.eyebrow}
              </motion.p>

              <motion.h2 variants={titleVariants} className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                {cta.title}
              </motion.h2>

              <motion.p variants={descriptionVariants} className="mt-4 max-w-xl text-white/80">
                {cta.description}
              </motion.p>
            </div>

            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="group relative overflow-hidden bg-white text-emerald-600 shadow-lg shadow-white/20 hover:bg-white/90 hover:shadow-xl hover:shadow-white/30 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Link href="/contact" className="relative flex items-center">
                  <span className="font-semibold">{t("ctaButton")}</span>
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
        </div>
      </motion.section>

    </main>
  )
}

// Additional variants for the CTA section
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