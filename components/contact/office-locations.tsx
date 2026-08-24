"use client"

import { useRef } from "react"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function OfficeLocations() {
  const t = useTranslations("OfficeLocations")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const offices = [
    {
      id: "kathmandu",
      image: "/images/contact.png",
    },
    {
      id: "tokyo",
      image: "/images/contact.png",
    },
  ]

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

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const locationVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  }

  const descriptionTextVariants: Variants = {
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

  const buttonVariants: Variants = {
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

  return (
    <section className="relative border-t bg-muted/20 py-24 overflow-hidden">
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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={badgeVariants}>
            <Badge
              className="mb-5 inline-flex items-center gap-2 border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400"
            >
              <MapPin className="h-3.5 w-3.5" />
              {t("badge")}
            </Badge>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
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

        {/* OFFICE GRID */}
        <motion.div
          variants={containerVariants}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              variants={cardVariants}
              custom={index}
            >
              <Card
                className="
                  group overflow-hidden rounded-2xl border
                  bg-background shadow-none
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300
                  hover:shadow-lg
                  dark:hover:border-emerald-800
                "
              >
                {/* IMAGE */}
                <motion.div
                  variants={imageVariants}
                  className="relative aspect-[16/10] overflow-hidden"
                >
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={office.image}
                      alt={t(`offices.${office.id}.alt`)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute left-4 top-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                      {t(`offices.${office.id}.country`)}
                    </span>
                  </motion.div>
                </motion.div>

                <CardContent className="p-6">
                  {/* LOCATION */}
                  <motion.div
                    variants={locationVariants}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100 dark:bg-emerald-950/40 dark:group-hover:bg-emerald-950/60"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {t(`offices.${office.id}.city`)}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {t(`offices.${office.id}.location`)}
                      </p>
                    </div>
                  </motion.div>

                  {/* DESCRIPTION */}
                  <motion.p
                    variants={descriptionTextVariants}
                    className="mt-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {t(`offices.${office.id}.description`)}
                  </motion.p>

                  {/* VIEW LOCATION */}
                  <motion.button
                    variants={buttonVariants}
                    type="button"
                    className="mt-6 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 group/btn"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {t(`offices.${office.id}.viewLocation`)}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative divider */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
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
              delay: 0.8,
            }}
          />
          <motion.div
            className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}