"use client"

import { useRef } from "react"
import {
    ArrowRight,
    Briefcase,
    GraduationCap,
    Phone,
    Sparkles,
} from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
}

const imageVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.8,
        },
    },
}

const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
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

const titleVariants: Variants = {
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

const subtitleVariants: Variants = {
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

const contentVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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

const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.25,
        },
    },
}

const separatorVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
        },
    },
}

export default function ContactSidebar() {
    const t = useTranslations("contactSidebar")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const sections = [
        {
            key: "phone",
            icon: Phone,
            title: t("phone.title"),
            subtitle: t("phone.subtitle"),
            content: (
                <>
                    <a
                        href="tel:8008152044"
                        className="text-2xl font-semibold tracking-tight transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                        (800) 815-2044
                    </a>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {t("phone.availability")}
                    </p>
                </>
            ),
        },
        {
            key: "job",
            icon: Briefcase,
            title: t("job.title"),
            subtitle: t("job.subtitle"),
            content: (
                <>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        {t("job.description")}
                    </p>
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-5 rounded-xl group"
                    >
                        {t("job.button")}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </>
            ),
        },
        {
            key: "fellowship",
            icon: GraduationCap,
            title: t("fellowship.title"),
            subtitle: t("fellowship.subtitle"),
            content: (
                <>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        {t("fellowship.description")}
                    </p>
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-5 rounded-xl group"
                    >
                        {t("fellowship.button")}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </>
            ),
        },
    ]

    return (
        <motion.aside
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1 lg:sticky lg:top-24"
        >
            <div className="space-y-10">
                {/* IMAGE */}
                <motion.div
                    variants={imageVariants}
                    className="w-full"
                >
                    <div className="relative aspect-[420/517] w-full overflow-hidden rounded-3xl rounded-br-[42%] bg-muted">
                        <Image
                            src="/images/contact.png"
                            alt={t("imageAlt")}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* SECTIONS */}
                {sections.map((section, index) => (
                    <motion.div
                        key={section.key}
                        variants={containerVariants}
                        className="space-y-5"
                    >
                        {/* Header with Icon */}
                        <motion.div
                            variants={containerVariants}
                            className="flex items-center gap-4"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <section.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            </motion.div>

                            <div>
                                <motion.h2
                                    variants={titleVariants}
                                    className="font-semibold"
                                >
                                    {section.title}
                                </motion.h2>

                                <motion.p
                                    variants={subtitleVariants}
                                    className="text-sm text-muted-foreground"
                                >
                                    {section.subtitle}
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div variants={contentVariants}>
                            {section.content}
                        </motion.div>

                        {/* Separator (except for last item) */}
                        {index < sections.length - 1 && (
                            <motion.div variants={separatorVariants}>
                                <Separator />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.aside>
    )
}