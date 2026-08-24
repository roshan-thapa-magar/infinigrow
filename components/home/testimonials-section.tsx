"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/lib/site-data"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { Star, Sparkles, Quote } from "lucide-react"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const headerVariants: Variants = {
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
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, scale: 0.9 },
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
  hidden: { opacity: 0, y: 20 },
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

const ratingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.2,
    },
  },
}

const quoteVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const clientVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
}

const bottomVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
}

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-background py-20 overflow-hidden">
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
        {/* ================= HEADER ================= */}
        <motion.div
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
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
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
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
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* ================= TESTIMONIALS ================= */}
        <motion.div
          variants={containerVariants}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              custom={index}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
            >
              {/* Hover gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Decorative quote mark */}
              <motion.div
                className="absolute -right-4 -top-4 text-7xl font-serif text-emerald-500/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Quote className="h-16 w-16" />
              </motion.div>

              <div className="relative z-10">
                {/* Rating */}
                <motion.div
                  variants={ratingVariants}
                  className="flex gap-1 text-emerald-500"
                  aria-label="5 star rating"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.3 + i * 0.05 + index * 0.05,
                      }}
                    >
                      <Star className="h-4 w-4 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Review */}
                <motion.p
                  variants={quoteVariants}
                  className="mt-6 leading-relaxed text-muted-foreground"
                >
                  “{t(`items.${testimonial.id}.quote`)}”
                </motion.p>

                {/* Client */}
                <motion.div
                  variants={clientVariants}
                  className="mt-7 flex items-center gap-4 border-t pt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar className="h-11 w-11 border-2 border-emerald-500/20 transition-colors duration-300 group-hover:border-emerald-500/40">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={t(`items.${testimonial.id}.name`)}
                      />

                      <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <div>
                    <motion.p
                      className="font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      whileHover={{ x: 2 }}
                    >
                      {t(`items.${testimonial.id}.name`)}
                    </motion.p>

                    <p className="text-sm text-muted-foreground">
                      {t(`items.${testimonial.id}.role`)}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM TRUST ================= */}
        <motion.div
          variants={bottomVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-emerald-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="text-sm text-muted-foreground">
              {t("bottomDescription")}
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-emerald-500">●</span>
            {t("trusted")}
          </motion.div>

          {/* Animated trust indicator */}
          <motion.div
            className="mt-4 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 w-8 rounded-full bg-emerald-500/20"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9 + i * 0.1,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}