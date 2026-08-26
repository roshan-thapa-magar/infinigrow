"use client"

import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

/**
 * Services / capabilities shown in the cards.
 *
 * These replace fake company names such as:
 * TechNova, CloudWorks, DigitalEdge, etc.
 *
 * This is better for a new company because
 * we are not claiming that these are existing clients.
 */
const trustedServices = [
  {
    key: "web",
  },
  {
    key: "ai",
  },
  {
    key: "software",
  },
  {
    key: "mobile",
  },
  {
    key: "automation",
  },
  {
    key: "scalable",
  },
]

/* ---------------------------------------------
 * Main container animation
 * --------------------------------------------- */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/* ---------------------------------------------
 * Badge animation
 * --------------------------------------------- */

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
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

/* ---------------------------------------------
 * Title animation
 * --------------------------------------------- */

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
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
    },
  },
}

/* ---------------------------------------------
 * Description animation
 * --------------------------------------------- */

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
      delay: 0.2,
    },
  },
}

/* ---------------------------------------------
 * Service card animation
 * --------------------------------------------- */

const serviceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },

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

/* ---------------------------------------------
 * Trust item animation
 * --------------------------------------------- */

const trustItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
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

export default function TrustedBySection() {
  const t = useTranslations("TrustedBy")

  const ref = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  })

  return (
    <section className="relative overflow-hidden border-y bg-muted/20 py-16 md:py-20 lg:py-24">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <motion.div
        className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl"
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

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-7xl px-4 md:px-8"
      >
        {/* =======================================
            HEADER
        ======================================= */}

        <motion.div
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.p
            variants={badgeVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm"
          >
            {t("badge")}
          </motion.p>

          {/* Title */}

          <motion.h2
            variants={titleVariants}
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={descriptionVariants}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* =======================================
            SERVICES / CAPABILITIES GRID
        ======================================= */}

        <motion.div
          variants={containerVariants}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
        >
          {trustedServices.map((service, index) => (
            <motion.div
              key={service.key}
              variants={serviceCardVariants}
              custom={index}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow:
                  "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                transition: {
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                flex
                min-h-24
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                bg-background
                px-3
                py-5
                transition-all
                duration-300
                hover:border-emerald-500/40
                hover:shadow-lg
                hover:shadow-emerald-500/5
                sm:px-4
              "
            >
              {/* Hover gradient */}

              <motion.div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-emerald-500/0
                  via-emerald-500/5
                  to-emerald-500/0
                "
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

              {/* Card content */}

              <div className="relative flex items-center gap-2">
                {/* Icon */}

                <motion.div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-emerald-500/10
                    text-emerald-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-emerald-500/20
                    dark:text-emerald-400
                  "
                  whileHover={{
                    rotate: 5,
                  }}
                >
                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </motion.div>

                {/* Service name */}

                <motion.span
                  className="
                    text-center
                    text-xs
                    font-semibold
                    leading-tight
                    text-muted-foreground
                    transition-colors
                    duration-300
                    group-hover:text-foreground
                    sm:text-sm
                  "
                  whileHover={{
                    x: 2,
                  }}
                >
                  {t(`services.${service.key}`)}
                </motion.span>
              </div>

              {/* Decorative corner */}

              <motion.div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-12
                  w-12
                  rounded-full
                  bg-emerald-500/0
                  transition-colors
                  duration-300
                  group-hover:bg-emerald-500/10
                "
                whileHover={{
                  scale: 1.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* =======================================
            TRUST ITEMS
        ======================================= */}

        <motion.div
          variants={containerVariants}
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
            text-sm
            text-muted-foreground
            sm:mt-12
          "
        >
          {[
            {
              key: "reliable",
            },
            {
              key: "modern",
            },
            {
              key: "support",
            },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              variants={trustItemVariants}
              custom={index}
              className="flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                color: "rgb(16, 185, 129)",
                transition: {
                  duration: 0.2,
                },
              }}
            >
              {/* Animated check */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={
                  isInView
                    ? {
                        scale: 1,
                      }
                    : {
                        scale: 0,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.8 + index * 0.1,
                }}
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </motion.div>

              {/* Text */}

              <span>{t(`trustItems.${item.key}`)}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* =======================================
            ANIMATED DIVIDER
        ======================================= */}

        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            delay: 1.2,
          }}
        >
          {/* Left line */}

          <motion.div
            className="
              h-px
              w-12
              bg-gradient-to-r
              from-transparent
              to-emerald-500/30
              sm:w-16
            "
            initial={{
              scaleX: 0,
            }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                  }
                : {
                    scaleX: 0,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
          />

          {/* Center dot */}

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

          {/* Right line */}

          <motion.div
            className="
              h-px
              w-12
              bg-gradient-to-l
              from-transparent
              to-emerald-500/30
              sm:w-16
            "
            initial={{
              scaleX: 0,
            }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                  }
                : {
                    scaleX: 0,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}