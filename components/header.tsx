"use client"

import Link from "next/link"
import { ArrowRight, Menu, TrendingUp } from "lucide-react"

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
    return (
        <header className="sticky top-0 z-50 h-16 w-full border-b bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto h-full px-4 md:px-8">
                <div className="flex h-full items-center justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-3">

                        {/* Mobile Menu */}
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
                                        <SheetTitle className="flex items-center gap-2 text-left">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                                                <TrendingUp className="h-5 w-5 text-primary-foreground" />
                                            </div>

                                            <span>InfiniGrow</span>
                                        </SheetTitle>
                                    </SheetHeader>

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

                                    <div className="mt-8 border-t pt-6">
                                        <Button className="w-full">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
                                <TrendingUp className="h-5 w-5 text-primary-foreground" />
                            </div>

                            <span className="text-lg font-bold tracking-tight">
                                InfiniGrow
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-1 md:flex">
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

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

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