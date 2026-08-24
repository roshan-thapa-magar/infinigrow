"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Sparkles, Zap, Rocket } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export type Service = {
  id: string
  image: string
}

export const services: Service[] = [
  {
    id: "generativeAi",
    image: "/images/generative.png",
  },
  {
    id: "webDevelopment",
    image: "/images/web-development.png",
  },
  {
    id: "softwareDevelopment",
    image: "/images/software-development.png",
  },
  {
    id: "mobileDevelopment",
    image: "/images/mobile-development.png",
  },
  {
    id: "devopsCloud",
    image: "/images/devops-cloud.png",
  },
  {
    id: "aiData",
    image: "/images/ai-data.png",
  },
]

// Enhanced animation variants with proper typing
const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -10,
  },
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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.1,
    },
  },
}

const titleHighlightVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2,
    },
  },
}

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.15,
    },
  },
}

const tabsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const tabVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
}

const imageContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
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

const imageLabelVariants: Variants = {
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
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3,
    },
  },
}

export default function ServicesSection() {
  const t = useTranslations("Services")

  const [activeService, setActiveService] = useState(services[0])

  const features = t.raw(
    `items.${activeService.id}.features`
  ) as string[]

  return (
    <section className="relative bg-muted/30 py-20 overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {/* <motion.div variants={badgeVariants}>
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {t("badge")}
            </Badge>
          </motion.div> */}

          <motion.h2
            variants={titleVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {t("title")}

            <motion.span
              variants={titleHighlightVariants}
              className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
            >
              {t("titleHighlight")}
            </motion.span>
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
              }}
            />
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* SERVICE TABS */}
        <motion.div
          className="mt-14 overflow-x-auto pb-3 scrollbar-thin"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={tabsContainerVariants}
        >
          <div className="mx-auto flex w-max min-w-full justify-center gap-2 rounded-2xl border-b p-2 md:border md:bg-background/80 md:backdrop-blur-sm">
            {services.map((service) => {
              const isActive = activeService.id === service.id

              return (
                <motion.div
                  key={service.id}
                  variants={tabVariants}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => setActiveService(service)}
                    className={`
                      relative
                      shrink-0
                      rounded-xl
                      px-5
                      py-6
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 hover:text-white"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isActive && <Zap className="h-3.5 w-3.5" />}
                      {t(`items.${service.id}.name`)}
                    </span>

                    {/* Active Indicator with spring animation */}
                    {isActive && (
                      <motion.span
                        layoutId="active-service-indicator"
                        className="absolute inset-0 rounded-xl bg-emerald-600 shadow-lg shadow-emerald-500/30"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-6 overflow-hidden rounded-3xl border bg-background/80 backdrop-blur-sm shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="grid lg:grid-cols-2"
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.25,
                },
              }}
              variants={contentVariants}
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="w-fit bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 border-emerald-500/20"
                  >
                    <Rocket className="mr-2 h-3 w-3" />
                    {t(`items.${activeService.id}.name`)}
                  </Badge>
                </motion.div>

                <motion.h3
                  className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                >
                  {t(`items.${activeService.id}.title`)}
                </motion.h3>

                <motion.p
                  className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  {t(`items.${activeService.id}.description`)}
                </motion.p>

                {/* FEATURES */}
                <motion.div
                  className="mt-7 grid gap-3 sm:grid-cols-2"
                  variants={tabsContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      variants={featureVariants}
                      custom={index}
                      className="flex items-center gap-3 text-sm group"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: 0.3 + index * 0.05,
                        }}
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                      </motion.div>

                      <span className="transition-colors group-hover:text-foreground">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  variants={ctaVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button
                    size="lg"
                    className="group bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 mt-6"
                  >
                    {t("explore")} {t(`items.${activeService.id}.name`)}

                    <motion.span
                      className="ml-2 flex"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>

              {/* RIGHT IMAGE */}
              <motion.div
                variants={imageContainerVariants}
                initial="hidden"
                animate="visible"
                className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[520px] overflow-hidden"
              >
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={activeService.image}
                    alt={t(`items.${activeService.id}.name`)}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* OVERLAY with gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* IMAGE LABEL */}
                <motion.div
                  variants={imageLabelVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-6 left-6 right-6"
                >
                  <motion.div
                    className="rounded-2xl border border-white/20 bg-black/40 p-4 backdrop-blur-xl shadow-xl"
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(255,255,255,0.4)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <p className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      {t(`items.${activeService.id}.name`)}
                    </p>

                    <p className="mt-1 text-xs text-white/70">
                      {t("imageDescription")}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -top-4 -right-4 h-16 w-16 border-2 border-emerald-500/20"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}