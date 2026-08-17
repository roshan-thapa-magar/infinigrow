"use client"

import Link from "next/link"
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingCart,
  BriefcaseBusiness,
  Rocket,
  Check,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    title: "Education",
    slug: "education",
    icon: GraduationCap,
    description:
      "Digital platforms and management systems that help schools, colleges, training centers, and education businesses operate more efficiently.",
    solutions: [
      "School Management Systems",
      "Learning Platforms",
      "Course Management",
      "Student Portals",
      "Online Admission Systems",
    ],
  },

  {
    title: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    description:
      "Reliable digital solutions designed to improve healthcare operations, patient experiences, and administrative workflows.",
    solutions: [
      "Healthcare Management",
      "Appointment Systems",
      "Patient Portals",
      "Healthcare Websites",
      "Business Automation",
    ],
  },

  {
    title: "Retail & E-commerce",
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    description:
      "Modern e-commerce and retail solutions that help businesses sell online, manage operations, and provide better customer experiences.",
    solutions: [
      "E-commerce Platforms",
      "Online Stores",
      "Inventory Systems",
      "Order Management",
      "Customer Platforms",
    ],
  },

  {
    title: "Hospitality",
    slug: "hospitality",
    icon: Hotel,
    description:
      "Technology solutions for hotels, restaurants, cafes, and hospitality businesses to simplify daily operations and improve customer service.",
    solutions: [
      "Restaurant Management",
      "Cafe Management",
      "Hotel Websites",
      "Booking Systems",
      "Customer Management",
    ],
  },

  {
    title: "Finance & Business",
    slug: "finance-business",
    icon: BriefcaseBusiness,
    description:
      "Secure and scalable software solutions that help businesses manage information, automate workflows, and improve operational efficiency.",
    solutions: [
      "Business Management",
      "Internal Platforms",
      "Data Management",
      "Workflow Automation",
      "Business Dashboards",
    ],
  },

  {
    title: "Professional Services",
    slug: "professional-services",
    icon: Building2,
    description:
      "Digital products for consulting firms, agencies, service providers, and professional organizations that want to improve their digital presence.",
    solutions: [
      "Corporate Websites",
      "Client Portals",
      "Business Applications",
      "CRM Solutions",
      "Workflow Automation",
    ],
  },

  {
    title: "Startups & Small Businesses",
    slug: "startups-small-businesses",
    icon: Rocket,
    description:
      "Flexible technology solutions that help startups and growing businesses turn ideas into reliable digital products.",
    solutions: [
      "MVP Development",
      "Web Applications",
      "Mobile Applications",
      "API Development",
      "Cloud Solutions",
    ],
  },
]

/* =========================================================
   PAGE
========================================================= */

export default function IndustriesPage() {
  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Industries"
        title="Technology solutions built for your industry."
        description={[
          "We build digital products and software solutions around the unique challenges of different industries.",
          "From business websites and management systems to mobile applications, cloud platforms, APIs, and AI solutions, we help organizations build technology that creates real value.",
        ]}
        image="/images/industries/industries-hero.jpg"
        imageAlt="Technology solutions for different industries"
        primaryButton={{
          label: "Start Your Project",
          href: "/contact",
          icon: (
            <ArrowRight className="h-4 w-4" />
          ),
        }}
        secondaryButton={{
          label: "View Our Projects",
          href: "/projects#projects",
        }}
      />

      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              Industry Expertise
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Technology that understands your business.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Every industry has different workflows,
              customers, challenges, and requirements.
              We create technology solutions around those
              specific needs instead of taking a
              one-size-fits-all approach.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          INDUSTRIES
      =================================================== */}

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* SECTION HEADER */}

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Solutions for different business needs.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Explore how we help organizations across
              different industries use technology to
              improve their products, services, and
              operations.
            </p>
          </div>

          {/* =================================================
              INDUSTRY GRID

              MOBILE  → 1
              TABLET  → 2
              LARGE   → 3
          ================================================= */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon

              return (
                <article
                  key={industry.slug}
                  className="group relative overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-xs font-medium text-muted-foreground">
                      {String(
                        industries.indexOf(
                          industry
                        ) + 1
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {industry.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {industry.description}
                  </p>

                  {/* SOLUTIONS */}

                  <div className="mt-6 space-y-3">
                    {industry.solutions.map(
                      (solution) => (
                        <div
                          key={solution}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />

                          <span>
                            {solution}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* LINK */}

                  <div className="mt-7 border-t pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400"
                    >
                      Discuss your project

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          HOW WE HELP
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* LEFT */}

            <div>
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                Our Approach
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                We start with your business, not the technology.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Before choosing a technology or building a
                product, we first understand your business,
                users, workflows, and goals.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  01
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Understand
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  We understand your business goals,
                  users, workflows, and challenges.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  02
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Design
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  We design a practical digital solution
                  around your requirements.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  03
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Build
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Our team develops reliable, scalable,
                  and maintainable software.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  04
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Grow
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  We help you improve and scale your
                  digital product as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES
      =================================================== */}

      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              What We Build
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Technology services for your industry
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              From your first idea to a production-ready
              platform, we provide the technology expertise
              needed to build and grow your product.
            </p>
          </div>

          {/* SERVICES */}

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Web Development",
              "Mobile Development",
              "Software Development",
              "API Development",
              "Cloud & DevOps",
              "AI Development",
              "UI/UX Design",
              "Technology Consulting",
            ].map((service) => (
              <Link
                key={service}
                href="/services"
                className="group flex items-center justify-between rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
              >
                <span className="text-sm font-medium">
                  {service}
                </span>

                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="bg-emerald-600 text-white dark:bg-emerald-500">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Build With Us
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Let's build something valuable for your industry.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Tell us about your business, challenge, or
                idea and let's explore how technology can
                help.
              </p>
            </div>

            <Button
              
              size="lg"
              variant="secondary"
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}