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

const footerLinks = {
    Company: [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ],
    Services: [
        { name: "Web Development", href: "#web-development" },
        { name: "AI Solutions", href: "#ai-solutions" },
        { name: "Mobile Apps", href: "#mobile-apps" },
        { name: "Cloud Solutions", href: "#cloud-solutions" },
    ],
    Resources: [
        { name: "Blog", href: "#blog" },
        { name: "Documentation", href: "#documentation" },
        { name: "FAQs", href: "#faq" },
        { name: "Support", href: "#support" },
    ],
}

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-8">

                {/* ========================================
                    DESKTOP FOOTER
                ========================================= */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 lg:py-16">

                    {/* Brand */}
                    <div className="lg:col-span-2">
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
                            We build modern software, AI-powered solutions,
                            and digital products that help businesses
                            innovate, automate, and grow.
                        </p>

                        <SocialLinks />
                    </div>

                    {/* Desktop Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold">
                                {title}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {links.map((link) => (
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

                {/* ========================================
                    MOBILE FOOTER
                ========================================= */}
                <div className="py-10 md:hidden">

                    {/* Brand */}
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
                        We build modern software, AI-powered solutions,
                        and digital products that help businesses
                        innovate, automate, and grow.
                    </p>

                    {/* Social Links */}
                    <SocialLinks />

                    {/* Mobile Navigation */}
                    <div className="mt-8">

                        {Object.entries(footerLinks).map(
                            ([title, links]) => (
                                <Collapsible
                                    key={title}
                                    className="border-b"
                                >

                                    {/* Section Heading */}
                                    <CollapsibleTrigger
                                        className="group flex w-full items-center justify-between py-4 text-left text-sm font-semibold hover:no-underline"
                                    >
                                        <span>{title}</span>

                                        <ChevronDown
                                            className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                                        />
                                    </CollapsibleTrigger>

                                    {/* Section Content */}
                                    <CollapsibleContent>
                                        <ul className="space-y-3 pb-5">
                                            {links.map((link) => (
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
                            )
                        )}

                    </div>
                </div>

                {/* ========================================
                    BOTTOM FOOTER
                ========================================= */}
                <div className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

                    {/* Copyright */}
                    <p>
                        © {new Date().getFullYear()} InfiniGrow. All rights reserved.
                    </p>

                    {/* Legal */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link
                            href="#privacy"
                            className="transition-colors hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#terms"
                            className="transition-colors hover:text-foreground"
                        >
                            Terms of Service
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    )
}

/* ========================================
   SOCIAL LINKS
========================================= */

function SocialLinks() {
    return (
        <div className="mt-6 flex items-center gap-2">

            {/* GitHub */}
            <Link
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaGithub className="h-4 w-4" />
            </Link>

            {/* X / Twitter */}
            <Link
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaXTwitter className="h-4 w-4" />
            </Link>

            {/* LinkedIn */}
            <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
                <FaLinkedinIn className="h-4 w-4" />
            </Link>

        </div>
    )
}