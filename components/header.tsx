"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    { name: "Product", href: "#product" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
]

export function Header() {
    const [isHidden, setIsHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Always show header near the top
            if (currentScrollY < 80) {
                setIsHidden(false)
                lastScrollY.current = currentScrollY
                return
            }

            const scrolledDown = currentScrollY > lastScrollY.current

            setIsHidden(scrolledDown)
            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 h-16 w-full border-b bg-background/80 backdrop-blur-xl transition-transform duration-300 ${
                isHidden
                    ? "-translate-y-full"
                    : "translate-y-0"
            }`}
        >
            <div className="container mx-auto h-full max-w-7xl px-4 md:px-8">
                <div className="flex h-full items-center justify-between">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="flex items-center">

                        {/* ================= MOBILE MENU ================= */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger
                                    aria-label="Open menu"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <Menu className="h-5 w-5" />
                                </SheetTrigger>

                                <SheetContent
                                    side="left"
                                    className="w-[280px] sm:w-[320px]"
                                >
                                    <SheetHeader>
                                        <SheetTitle className="flex items-center gap-3 text-left">

                                            {/* Mobile Logo */}
                                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                                                <Image
                                                    src="/images/logo3.png"
                                                    alt="InfiniGrow Technologies"
                                                    width={48}
                                                    height={48}
                                                    className="h-10 w-10 object-contain"
                                                    quality={100}
                                                    sizes="40px"
                                                />
                                            </div>

                                            {/* Mobile Brand */}
                                            <span className="text-[19px] font-extrabold tracking-[-0.04em]">
                                                <span className="text-foreground">
                                                    Infini
                                                </span>
                                                <span className="text-emerald-500">
                                                    Grow
                                                </span>
                                            </span>

                                        </SheetTitle>
                                    </SheetHeader>

                                    {/* Mobile Navigation */}
                                    <nav className="mt-8 flex flex-col gap-2">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Mobile CTA */}
                                    <div className="mt-8 border-t pt-6">
                                        <Button className="w-full">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* ================= MAIN LOGO ================= */}
                        <Link
                            href="/"
                            className="group flex items-center gap-0 transition-opacity hover:opacity-90"
                        >
                            {/* Logo Image */}
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                                <Image
                                    src="/images/logo3.png"
                                    alt="InfiniGrow Technologies"
                                    width={48}
                                    height={48}
                                    className="h-10 w-10 object-contain"
                                    quality={100}
                                    priority
                                    sizes="40px"
                                />
                            </div>

                            {/* Brand Name */}
                            <span className="text-[19px] font-extrabold tracking-[-0.04em]">
                                <span className="text-foreground">
                                    Infini
                                </span>
                                <span className="text-emerald-500 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                    Grow
                                </span>
                            </span>
                        </Link>

                        {/* ================= DESKTOP NAVIGATION ================= */}
                        <nav className="hidden items-center gap-1 md:flex pl-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="flex items-center gap-2">

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Get Started */}
                        <Button
                            size="sm"
                            className="hidden sm:inline-flex"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                    </div>
                </div>
            </div>
        </header>
    )
}