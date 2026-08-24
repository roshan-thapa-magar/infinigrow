"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Cloud,
  Code2,
  Globe,
  Menu,
  Server,
  Smartphone,
} from "lucide-react"

import {
  Link,
  usePathname,
} from "@/i18n/navigation"

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
   SERVICES
========================================================= */

const serviceItems = [
  {
    key: "webDevelopment",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    key: "mobileDevelopment",
    href: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    key: "aiDevelopment",
    href: "/services/ai-development",
    icon: BrainCircuit,
  },
  {
    key: "softwareDevelopment",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    key: "apiDevelopment",
    href: "/services/api-development",
    icon: Server,
  },
  {
    key: "cloudDevops",
    href: "/services/cloud-devops",
    icon: Cloud,
  },
]

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const t = useTranslations("Header")
  const pathname = usePathname()

  /* =========================================================
     STATES
  ========================================================= */

  const [showHeader, setShowHeader] = useState(true)

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

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: showHeader ? 0 : "-100%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
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
          supports-[backdrop-filter]:bg-background/75
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
                    aria-label={t("openMenu")}
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
                            {t("services")}
                          </span>

                          <motion.div
                            animate={{
                              rotate: mobileServicesOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.2,
                              ease: "easeInOut",
                            }}
                          >
                            <ChevronDown
                              className="h-4 w-4"
                            />
                          </motion.div>
                        </button>

                        {/* MOBILE SERVICES */}

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                              }}
                              className="overflow-hidden"
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
                                            service.key
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
                                          {t(
                                            `servicesItems.${service.key}.name`
                                          )}
                                        </Link>
                                      )
                                    }
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                        {t("projects")}
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
                        {t("industries")}
                      </Link>

                      {/* =======================================
                          ABOUT
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
                        {t("about")}
                      </Link>

                      {/* =======================================
                          CONTACT
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
                        {t("contact")}
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
                  className="relative h-16"
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
                    {t("services")}

                    <motion.div
                      animate={{
                        rotate: desktopServicesOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronDown
                        className="h-3.5 w-3.5"
                      />
                    </motion.div>

                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: servicesActive ? 64 : 0,
                        opacity: servicesActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[3px]
                        -translate-x-1/2
                        rounded-t-full
                        bg-emerald-500
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
                  {t("projects")}

                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isActive("/projects") ? 64 : 0,
                      opacity: isActive("/projects") ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
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
                  {t("industries")}

                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isActive("/industries") ? 64 : 0,
                      opacity: isActive("/industries") ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                    `}
                  />
                </Link>

                {/* =================================================
                    ABOUT
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
                  {t("about")}

                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isActive("/about") ? 64 : 0,
                      opacity: isActive("/about") ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
                    `}
                  />
                </Link>

                {/* =================================================
                    CONTACT
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
                  {t("contact")}

                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isActive("/contact") ? 64 : 0,
                      opacity: isActive("/contact") ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      -translate-x-1/2
                      rounded-t-full
                      bg-emerald-500
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

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          DESKTOP SERVICES MEGA MENU
      ===================================================== */}

      <AnimatePresence>
        {desktopServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className={`
              fixed
              left-0
              right-0
              top-16
              z-[9998]
              hidden
              w-full
              md:block
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
                    (service, index) => {
                      const Icon =
                        service.icon

                      const active =
                        isActive(
                          service.href
                        )

                      return (
                        <motion.div
                          key={service.key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          <Link
                            href={service.href}
                            onClick={() =>
                              setDesktopServicesOpen(
                                false
                              )
                            }
                            className={`
                              group
                              block
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
                              <motion.div
                                whileHover={{
                                  scale: 1.05,
                                  rotate: [0, -5, 5, 0],
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
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
                              </motion.div>

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
                                    {t(
                                      `servicesItems.${service.key}.name`
                                    )}
                                  </h3>

                                  <motion.div
                                    initial={{ x: -4, opacity: 0 }}
                                    whileHover={{ x: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: "easeOut",
                                    }}
                                  >
                                    <ArrowRight
                                      className="
                                        h-4
                                        w-4
                                        shrink-0
                                        text-emerald-500
                                      "
                                    />
                                  </motion.div>
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
                                  {t(
                                    `servicesItems.${service.key}.description`
                                  )}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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