"use client"

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  badge: string;
  title: string;
  description: string[];
  image: string;
  imageAlt?: string;

  primaryButton?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };

  secondaryButton?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
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
};

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
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

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
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const imageContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 50,
    rotateY: -8,
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
      duration: 1,
    },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
    },
  },
};

const backgroundOrbVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      opacity: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      },
      scale: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export function HeroSection({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-muted py-16 overflow-hidden">
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

      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative lg:min-h-[700px]"
        >
          {/* Background Content */}
          <motion.div
            variants={containerVariants}
            className="relative overflow-hidden rounded-md lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[85%]"
          >
            {/* Background glow */}
            <motion.div
              variants={backgroundOrbVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            />

            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute inset-0 bg-gradient-to-t from-transparent via-background/0 to-background/95 backdrop-blur-sm"
            />

            {/* Content */}
            <div className="relative z-10 px-6 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-16 lg:pr-[30rem]">
              {/* Badge */}
              {/* <motion.div variants={badgeVariants}>
                <Badge
                  variant="outline"
                  className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 px-4 py-1.5 text-sm font-medium"
                >
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  {badge}
                </Badge>
              </motion.div> */}

              {/* Title */}
              <motion.h1
                variants={titleVariants}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl"
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.div
                variants={containerVariants}
                className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-justify text-muted-foreground sm:text-lg"
              >
                {description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={descriptionVariants}
                    custom={index}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Buttons */}
              {(primaryButton || secondaryButton) && (
                <motion.div
                  variants={buttonVariants}
                  className="mt-6 flex flex-wrap gap-4"
                >
                  {primaryButton && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
                      >
                        <Link
                          href={primaryButton.href}
                          className="flex items-center gap-2"
                        >
                          {primaryButton.icon && (
                            <motion.span
                              animate={{ rotate: [0, -10, 10, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                              }}
                            >
                              {primaryButton.icon}
                            </motion.span>
                          )}
                          {primaryButton.label}
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
                      </Button>
                    </motion.div>
                  )}

                  {secondaryButton && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Link
                          href={secondaryButton.href}
                          className="flex items-center gap-2"
                        >
                          {secondaryButton.icon && (
                            <motion.span
                              className="transition-transform duration-300 group-hover:scale-110"
                              whileHover={{ rotate: 15 }}
                            >
                              {secondaryButton.icon}
                            </motion.span>
                          )}
                          <span className="font-medium">{secondaryButton.label}</span>
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Floating Image */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative mt-10 lg:absolute lg:-bottom-6 lg:right-0 lg:z-10 lg:mt-0"
          >
            <motion.div
              className="relative mx-auto h-[260px] w-full overflow-hidden rounded-md shadow-2xl sm:h-[320px] md:h-[420px] lg:h-[460px] lg:w-[580px]"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.2)",
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width:640px) 100vw,
                       (max-width:1024px) 90vw,
                       580px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Gradient overlay */}
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />

              {/* Decorative corner accent */}
              <motion.div
                className="absolute -bottom-3 -right-3 h-12 w-12 border-2 border-emerald-500/30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                }}
              />

              {/* Decorative top-left accent */}
              <motion.div
                className="absolute -left-3 -top-3 h-8 w-8 border-2 border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              />
            </motion.div>

            {/* Floating label */}
            <motion.div
              className="absolute -bottom-4 -left-4 rounded-lg bg-background/90 px-4 py-2 shadow-lg backdrop-blur-sm border border-emerald-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-xs font-medium text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                {badge}
              </p>
            </motion.div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden h-[700px] lg:block" />
        </motion.div>
      </div>
    </section>
  );
}