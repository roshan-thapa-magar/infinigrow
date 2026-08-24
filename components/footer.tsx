"use client"

import Link from "next/link"
import { ChevronDown, Infinity } from "lucide-react"
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
    const t = useTranslations("footer")

    const footerLinks = [
        {
            title: t("sections.company"),
            links: [
                {
                    name: t("links.about"),
                    href: "about",
                },
                {
                    name: t("links.services"),
                    href: "services",
                },
                {
                    name: t("links.projects"),
                    href: "projects",
                },
                {
                    name: t("links.contact"),
                    href: "contact",
                },
            ],
        },
        {
            title: t("sections.services"),
            links: [
                {
                    name: t("links.webDevelopment"),
                    href: "services/web-development",
                },
                {
                    name: t("links.aiSolutions"),
                    href: "services/ai-development",
                },
                {
                    name: t("links.mobileApps"),
                    href: "services/mobile-development",
                },
                {
                    name: t("links.cloudSolutions"),
                    href: "services/cloud-devops",
                },
            ],
        },
        {
            title: t("sections.resources"),
            links: [
                {
                    name: t("links.blog"),
                    href: "#blog",
                },
                {
                    name: t("links.documentation"),
                    href: "#documentation",
                },
                {
                    name: t("links.faqs"),
                    href: "#faq",
                },
                {
                    name: t("links.support"),
                    href: "#support",
                },
            ],
        },
    ]

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className="border-t bg-background"
        >
            <div className="container mx-auto px-4 md:px-8">

                {/* DESKTOP */}
                <div className="hidden gap-10 py-12 md:grid md:grid-cols-2 lg:grid-cols-5 lg:py-16">

                    {/* BRAND */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="lg:col-span-2"
                    >

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, -3, 3, 0],
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm"
                            >
                                <Image
                                    src="/images/logo5.png"
                                    alt="InfiniGrow Technologies"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-md object-contain"
                                    priority
                                    sizes="40px"
                                />
                            </motion.div>

                            <span className="text-[19px] font-extrabold tracking-[-0.04em]">
                                <span className="text-foreground">
                                    Infini
                                </span>

                                <span className="text-emerald-500">
                                    Grow
                                </span>
                            </span>
                        </Link>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground"
                        >
                            {t("description")}
                        </motion.p>

                        <SocialLinks t={t} />
                    </motion.div>

                    {/* LINKS */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            <h3 className="text-sm font-semibold">
                                {section.title}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.3 + index * 0.1 + linkIndex * 0.05,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE */}
                <div className="py-10 md:hidden">

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, -3, 3, 0],
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm"
                            >
                                <Infinity className="h-5 w-5 text-primary-foreground" />
                            </motion.div>

                            <span className="text-xl font-bold tracking-tight">
                                InfiniGrow
                            </span>
                        </Link>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: "easeOut",
                            }}
                            className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground"
                        >
                            {t("description")}
                        </motion.p>
                    </motion.div>

                    <SocialLinks t={t} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="mt-8"
                    >
                        {footerLinks.map((section) => (
                            <Collapsible
                                key={section.title}
                                className="border-b"
                            >
                                <CollapsibleTrigger className="group flex w-full items-center justify-between py-4 text-left text-sm font-semibold hover:no-underline">
                                    <span>{section.title}</span>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            rotate: 0,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                        className="group-data-[state=open]:rotate-180"
                                    >
                                        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
                                    </motion.div>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <AnimatePresence>
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="space-y-3 pb-5"
                                        >
                                            {section.links.map((link, index) => (
                                                <motion.li
                                                    key={link.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.2,
                                                        delay: index * 0.05,
                                                        ease: "easeOut",
                                                    }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </AnimatePresence>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </motion.div>
                </div>

                {/* BOTTOM */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
                >

                    <p>
                        © {new Date().getFullYear()}{" "}
                        {t("copyright")}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link
                            href="#privacy"
                            className="transition-colors hover:text-foreground"
                        >
                            {t("legal.privacy")}
                        </Link>

                        <Link
                            href="#terms"
                            className="transition-colors hover:text-foreground"
                        >
                            {t("legal.terms")}
                        </Link>
                    </div>
                </motion.div>

            </div>
        </motion.footer>
    )
}

function SocialLinks({
    t,
}: {
    t: ReturnType<typeof useTranslations<"footer">>
}) {
    const socialIcons = [
        {
            href: "#",
            label: "social.github",
            icon: FaGithub,
        },
        {
            href: "#",
            label: "social.x",
            icon: FaXTwitter,
        },
        {
            href: "#",
            label: "social.linkedin",
            icon: FaLinkedinIn,
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut",
            }}
            className="mt-6 flex items-center gap-2"
        >
            {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                    <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3 + index * 0.08,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.1,
                            y: -2,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        <Link
                            href={social.href}
                            aria-label={t(social.label)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                        >
                            <Icon className="h-4 w-4" />
                        </Link>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}