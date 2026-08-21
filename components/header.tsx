"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  ChevronDown,
  Cloud,
  Code2,
  FileText,
  Globe,
  HelpCircle,
  Lightbulb,
  Menu,
  Server,
  Smartphone,
  Languages,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageSwitcher } from "./LanguageSwitcher"

/* =========================================================
   MAIN NAVIGATION

   Home is intentionally removed because the logo links
   to the home page.

   About Us is placed at the end.
========================================================= */

const navItems = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Industries",
    href: "/industries",
  },
  {
    name: "About Us",
    href: "/about",
  },
]

/* =========================================================
   SERVICES
========================================================= */

const serviceItems = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description:
      "Modern websites and scalable web applications built for performance.",
    icon: Globe,
  },
  {
    name: "Mobile Development",
    href: "/services/mobile-development",
    description:
      "Native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
  },
  {
    name: "AI & Machine Learning",
    href: "/services/ai-development",
    description:
      "AI-powered projects, automation, intelligent apps, and integrations.",
    icon: BrainCircuit,
  },
  {
    name: "Software Development",
    href: "/services/software-development",
    description:
      "Custom software designed around your business and operational needs.",
    icon: Code2,
  },
  {
    name: "API & Backend Development",
    href: "/services/api-development",
    description:
      "Secure REST APIs, backend systems, integrations, and data services.",
    icon: Server,
  },
  {
    name: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description:
      "Reliable cloud infrastructure, deployment, scalability, and automation.",
    icon: Cloud,
  },
]

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const pathname = usePathname()

  /* =========================================================
     STATES
  ========================================================= */

  const [showHeader, setShowHeader] = useState(true)
  const [language, setLanguage] = useState<"en" | "ja">("en")

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false)

  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState(false)

  /* =========================================================
     REFS
  ========================================================= */

  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const servicesCloseTimer = useRef<
    ReturnType<typeof setTimeout> | undefined
  >(undefined)

  /* =========================================================
     HEADER SCROLL BEHAVIOR
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return

      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentScrollY =
          window.scrollY ||
          document.documentElement.scrollTop ||
          0

        /* -----------------------------------------------
           Always show header at top
        ------------------------------------------------ */

        if (currentScrollY <= 20) {
          setShowHeader(true)

          lastScrollY.current = currentScrollY

          ticking.current = false

          return
        }

        /* -----------------------------------------------
           Scrolling down
        ------------------------------------------------ */

        if (
          currentScrollY >
          lastScrollY.current + 5
        ) {
          setShowHeader(false)

          setDesktopServicesOpen(false)
        }

        /* -----------------------------------------------
           Scrolling up
        ------------------------------------------------ */

        if (
          currentScrollY <
          lastScrollY.current - 5
        ) {
          setShowHeader(true)
        }

        lastScrollY.current = currentScrollY

        ticking.current = false
      })
    }

    lastScrollY.current =
      window.scrollY ||
      document.documentElement.scrollTop ||
      0

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }
  }, [])

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) {
        clearTimeout(
          servicesCloseTimer.current
        )
      }
    }
  }, [])

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    )
  }

  const servicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/")

  /* =========================================================
     LANGUAGE TOGGLE
  ========================================================= */

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ja" : "en"))
  }

  /* =========================================================
     DESKTOP SERVICES MENU
  ========================================================= */

  const openServicesMenu = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(
        servicesCloseTimer.current
      )
    }

    setDesktopServicesOpen(true)
  }

  const closeServicesMenu = () => {
    servicesCloseTimer.current =
      setTimeout(() => {
        setDesktopServicesOpen(false)
      }, 120)
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)

    setMobileServicesOpen(false)
  }

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[9999]
          h-16
          w-full
          border-b
          bg-background/95
          backdrop-blur-xl
          transition-transform
          duration-300
          ease-out
          supports-[backdrop-filter]:bg-background/75
          ${
            showHeader
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div className="mx-auto h-full max-w-7xl px-4 md:px-8">
          <div className="flex h-full items-center justify-between">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="flex min-w-0 items-center">

              {/* =================================================
                  MOBILE MENU
              ================================================= */}

              <div className="mr-2 md:hidden">
                <Sheet
                  open={mobileMenuOpen}
                  onOpenChange={(open) => {
                    setMobileMenuOpen(open)

                    if (!open) {
                      setMobileServicesOpen(false)
                    }
                  }}
                >
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
                    className="
                      w-[290px]
                      sm:w-[330px]
                    "
                  >

                    {/* =========================================
                        MOBILE LOGO
                    ========================================= */}

                    <SheetHeader>
                      <SheetTitle
                        className="
                          flex
                          items-center
                          gap-3
                          text-left
                        "
                      >
                        <div
                          className="
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                          "
                        >
                          <Image
                            src="/images/logo3.png"
                            alt="InfiniGrow Technologies"
                            width={40}
                            height={40}
                            className="
                              h-10
                              w-10
                              object-contain
                            "
                          />
                        </div>

                        <span
                          className="
                            text-[19px]
                            font-extrabold
                            tracking-[-0.04em]
                          "
                        >
                          <span className="text-foreground">
                            Infini
                          </span>

                          <span className="text-emerald-500">
                            Grow
                          </span>
                        </span>
                      </SheetTitle>
                    </SheetHeader>

                    {/* =========================================
                        MOBILE NAVIGATION
                    ========================================= */}

                    <nav className="mt-8 flex flex-col gap-1">

                      {/* =======================================
                          SERVICES
                      ======================================= */}

                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(
                              (value) => !value
                            )
                          }
                          className={`
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                            font-medium
                            transition-colors
                            ${
                              servicesActive
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }
                          `}
                        >
                          <span>
                            Services
                          </span>

                          <ChevronDown
                            className={`
                              h-4
                              w-4
                              transition-transform
                              duration-200
                              ${
                                mobileServicesOpen
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* MOBILE SERVICES */}

                        <div
                          className={`
                            grid
                            overflow-hidden
                            transition-all
                            duration-200
                            ${
                              mobileServicesOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >
                          <div className="min-h-0">
                            <div
                              className="
                                ml-3
                                mt-1
                                border-l
                                pl-2
                              "
                            >
                              {serviceItems.map(
                                (service) => {
                                  const active =
                                    isActive(
                                      service.href
                                    )

                                  return (
                                    <Link
                                      key={
                                        service.name
                                      }
                                      href={
                                        service.href
                                      }
                                      onClick={
                                        closeMobileMenu
                                      }
                                      className={`
                                        flex
                                        items-center
                                        rounded-md
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        transition-colors
                                        ${
                                          active
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }
                                      `}
                                    >
                                      {
                                        service.name
                                      }
                                    </Link>
                                  )
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* =======================================
                          PROJECTS
                      ======================================= */}

                      <Link
                        href="/projects"
                        onClick={closeMobileMenu}
                        className={`
                          flex
                          items-center
                          rounded-lg
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-colors
                          ${
                            isActive("/projects")
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }
                        `}
                      >
                        Projects
                      </Link>

                      {/* =======================================
                          INDUSTRIES
                      ======================================= */}

                      <Link
                        href="/industries"
                        onClick={closeMobileMenu}
                        className={`
                          flex
                          items-center
                          rounded-lg
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-colors
                          ${
                            isActive("/industries")
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }
                        `}
                      >
                        Industries
                      </Link>

                      {/* =======================================
                          ABOUT US
                      ======================================= */}

                      <Link
                        href="/about"
                        onClick={closeMobileMenu}
                        className={`
                          flex
                          items-center
                          rounded-lg
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-colors
                          ${
                            isActive("/about")
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }
                        `}
                      >
                        About Us
                      </Link>

                      {/* =======================================
                          CONTACT US (Mobile)
                      ======================================= */}

                      <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className={`
                          flex
                          items-center
                          rounded-lg
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-colors
                          ${
                            isActive("/contact")
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }
                        `}
                      >
                        Contact Us
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>

              {/* =================================================
                  LOGO
              ================================================= */}

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
                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <Image
                    src="/images/logo3.png"
                    alt="InfiniGrow Technologies"
                    width={40}
                    height={40}
                    className="
                      h-10
                      w-10
                      object-contain
                    "
                    priority
                    sizes="40px"
                  />
                </div>

                <span
                  className="
                    text-[19px]
                    font-extrabold
                    tracking-[-0.04em]
                  "
                >
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

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <nav
                className="
                  ml-4
                  hidden
                  h-16
                  items-center
                  gap-0
                  md:flex
                "
              >

                {/* =================================================
                    SERVICES
                ================================================= */}

                <div
                  className="
                    relative
                    h-16
                  "
                  onMouseEnter={
                    openServicesMenu
                  }
                  onMouseLeave={
                    closeServicesMenu
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      desktopServicesOpen
                        ? setDesktopServicesOpen(
                            false
                          )
                        : openServicesMenu()
                    }
                    className={`
                      relative
                      flex
                      h-16
                      items-center
                      gap-1.5
                      rounded-none
                      px-4
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        servicesActive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    Services

                    <ChevronDown
                      className={`
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-200
                        ${
                          desktopServicesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[3px]
                        -translate-x-1/2
                        rounded-t-full
                        bg-emerald-500
                        transition-all
                        duration-300
                        ${
                          servicesActive
                            ? "w-16 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </button>
                </div>

                {/* =================================================
                    PROJECTS
                ================================================= */}

                <Link
                  href="/projects"
                  className={`
                    relative
                    flex
                    h-16
                    items-center
                    rounded-none
                    px-4
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive("/projects")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  Projects

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                      transition-all
                      duration-300
                      ${
                        isActive("/projects")
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>

                {/* =================================================
                    INDUSTRIES
                ================================================= */}

                <Link
                  href="/industries"
                  className={`
                    relative
                    flex
                    h-16
                    items-center
                    rounded-none
                    px-4
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive("/industries")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  Industries

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                      transition-all
                      duration-300
                      ${
                        isActive("/industries")
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>

                {/* =================================================
                    ABOUT US
                ================================================= */}

                <Link
                  href="/about"
                  className={`
                    relative
                    flex
                    h-16
                    items-center
                    rounded-none
                    px-4
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive("/about")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  About Us

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                      transition-all
                      duration-300
                      ${
                        isActive("/about")
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>

                {/* =================================================
                    CONTACT US (Desktop Nav)
                ================================================= */}

                <Link
                  href="/contact"
                  className={`
                    relative
                    flex
                    h-16
                    items-center
                    rounded-none
                    px-4
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive("/contact")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  Contact Us

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                      transition-all
                      duration-300
                      ${
                        isActive("/contact")
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>
              </nav>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
              "
            >
              <ThemeToggle />
              <LanguageSwitcher/>
              

            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          FULL WIDTH DESKTOP SERVICES MEGA MENU
      ===================================================== */}

      <div
        className={`
          fixed
          left-0
          right-0
          top-16
          z-[9998]
          hidden
          w-full
          transition-all
          duration-200
          md:block
          ${
            desktopServicesOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
        onMouseEnter={
          openServicesMenu
        }
        onMouseLeave={
          closeServicesMenu
        }
      >
        <div
          className="
            w-full
            border-b
            bg-background
            shadow-xl
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-4
              py-7
              md:px-8
            "
          >
            <div
              className="
                grid
                grid-cols-3
                gap-x-8
                gap-y-3
              "
            >
              {serviceItems.map(
                (service) => {
                  const Icon =
                    service.icon

                  const active =
                    isActive(
                      service.href
                    )

                  return (
                    <Link
                      key={
                        service.name
                      }
                      href={
                        service.href
                      }
                      onClick={() =>
                        setDesktopServicesOpen(
                          false
                        )
                      }
                      className={`
                        group
                        rounded-xl
                        px-4
                        py-5
                        transition-all
                        duration-200
                        ${
                          active
                            ? "bg-emerald-500/5"
                            : "hover:bg-muted/70"
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >
                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            transition-all
                            duration-200
                            ${
                              active
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : "bg-muted text-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                            }
                          `}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <div
                            className="
                              flex
                              items-center
                              gap-2
                            "
                          >
                            <h3
                              className={`
                                text-sm
                                font-semibold
                                tracking-tight
                                ${
                                  active
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : "text-foreground"
                                }
                              `}
                            >
                              {
                                service.name
                              }
                            </h3>

                            <ArrowRight
                              className="
                                h-4
                                w-4
                                shrink-0
                                -translate-x-1
                                text-emerald-500
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:translate-x-0
                                group-hover:opacity-100
                              "
                            />
                          </div>

                          <p
                            className="
                              mt-2
                              max-w-md
                              text-sm
                              leading-5
                              text-muted-foreground
                            "
                          >
                            {
                              service.description
                            }
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HEADER SPACE
      ===================================================== */}

      <div
        className="h-16 w-full"
        aria-hidden="true"
      />
    </>
  )
}