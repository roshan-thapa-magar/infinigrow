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
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return

      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentScrollY =
          window.scrollY ||
          document.documentElement.scrollTop ||
          0

        // Always show header at the top
        if (currentScrollY <= 20) {
          setShowHeader(true)
          lastScrollY.current = currentScrollY
          ticking.current = false
          return
        }

        // Scrolling down
        if (currentScrollY > lastScrollY.current + 5) {
          setShowHeader(false)
        }

        // Scrolling up
        if (currentScrollY < lastScrollY.current - 5) {
          setShowHeader(true)
        }

        lastScrollY.current = currentScrollY
        ticking.current = false
      })
    }

    // Set initial position
    lastScrollY.current =
      window.scrollY ||
      document.documentElement.scrollTop ||
      0

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[9999]
          h-16
          w-full
          border-b
          bg-background/90
          backdrop-blur-xl
          transition-transform
          duration-300
          ease-out
          supports-[backdrop-filter]:bg-background/75
          ${showHeader
            ? "translate-y-0"
            : "-translate-y-full"
          }
        `}
      >
        <div className="mx-auto h-full max-w-7xl px-4 md:px-8">
          <div className="flex h-full items-center justify-between">

            {/* ================= LEFT ================= */}
            <div className="flex min-w-0 items-center">

              {/* MOBILE MENU */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger
                    aria-label="Open menu"
                    className="
                      inline-flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-md
                      transition-colors
                      hover:bg-muted
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                    "
                  >
                    <Menu className="h-5 w-5" />
                  </SheetTrigger>

                  <SheetContent
                    side="left"
                    className="w-[280px] sm:w-[320px]"
                  >
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-3 text-left">

                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                          <Image
                            src="/images/logo3.png"
                            alt="InfiniGrow Technologies"
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
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

                      </SheetTitle>
                    </SheetHeader>

                    <nav className="mt-8 flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-muted-foreground
                            transition-colors
                            hover:bg-muted
                            hover:text-foreground
                          "
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

              {/* LOGO */}
              <Link
                href="/"
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-0
                  transition-opacity
                  hover:opacity-90
                "
              >
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                  <Image
                    src="/images/logo3.png"
                    alt="InfiniGrow Technologies"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    priority
                    sizes="40px"
                  />
                </div>

                <span className="text-[19px] font-extrabold tracking-[-0.04em]">
                  <span className="text-foreground">
                    Infini
                  </span>

                  <span
                    className="
                      text-emerald-500
                      transition-colors
                      group-hover:text-emerald-600
                      dark:group-hover:text-emerald-400
                    "
                  >
                    Grow
                  </span>
                </span>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="ml-4 hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                      rounded-lg
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-muted-foreground
                      transition-colors
                      hover:bg-muted
                      hover:text-foreground
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />

              <Button
                size="lg"
                className="hidden sm:inline-flex"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= HEADER SPACE ================= */}
      <div className="h-16 w-full" aria-hidden="true" />
    </>
  )
}