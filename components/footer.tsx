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
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-8">

                {/* DESKTOP */}
                <div className="hidden gap-10 py-12 md:grid md:grid-cols-2 lg:grid-cols-5 lg:py-16">

                    {/* BRAND */}
                    <div className="lg:col-span-2">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm">
                                <Image
                                    src="/images/logo5.png"
                                    alt="InfiniGrow Technologies"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-md object-contain"
                                    priority
                                    sizes="40px"
                                />
                            </div>

                            <span className="text-[19px] font-extrabold tracking-[-0.04em]">
                                <span className="text-foreground">
                                    Infini
                                </span>

                                <span className="text-emerald-500">
                                    Grow
                                </span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                            {t("description")}
                        </p>

                        <SocialLinks t={t} />
                    </div>

                    {/* LINKS */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold">
                                {section.title}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* MOBILE */}
                <div className="py-10 md:hidden">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm">
                            <Infinity className="h-5 w-5 text-primary-foreground" />
                        </div>

                        <span className="text-xl font-bold tracking-tight">
                            InfiniGrow
                        </span>
                    </Link>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                        {t("description")}
                    </p>

                    <SocialLinks t={t} />

                    <div className="mt-8">
                        {footerLinks.map((section) => (
                            <Collapsible
                                key={section.title}
                                className="border-b"
                            >
                                <CollapsibleTrigger className="group flex w-full items-center justify-between py-4 text-left text-sm font-semibold hover:no-underline">
                                    <span>{section.title}</span>

                                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <ul className="space-y-3 pb-5">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

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
                </div>

            </div>
        </footer>
    )
}

function SocialLinks({
    t,
}: {
    t: ReturnType<typeof useTranslations<"footer">>
}) {
    return (
        <div className="mt-6 flex items-center gap-2">

            <Link
                href="#"
                aria-label={t("social.github")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaGithub className="h-4 w-4" />
            </Link>

            <Link
                href="#"
                aria-label={t("social.x")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaXTwitter className="h-4 w-4" />
            </Link>

            <Link
                href="#"
                aria-label={t("social.linkedin")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaLinkedinIn className="h-4 w-4" />
            </Link>

        </div>
    )
}