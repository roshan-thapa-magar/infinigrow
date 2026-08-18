"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Search,
  Smartphone,
  Users,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/hero-section"

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Web Development",
  "Software Development",
  "Mobile Development",
  "Business Solutions",
]

/* =========================================================
   CASE STUDY TYPE
========================================================= */

type CaseStudy = {
  title: string
  slug: string
  category: string
  client: string
  description: string
  challenge: string
  solution: string
  technologies: string[]
  results: string[]
  image: string
  featured?: boolean
  url?: string
}

/* =========================================================
   CASE STUDIES
========================================================= */

const caseStudies: CaseStudy[] = [
  {
    title: "Cafe Management System",
    slug: "cafe-management-system",
    category: "Software Development",
    client: "Cafe Business",
    description:
      "A centralized management platform designed to simplify cafe operations, organize workflows, and improve day-to-day business management.",
    challenge:
      "The business needed a centralized system to manage daily operations more efficiently instead of relying on disconnected processes.",
    solution:
      "We developed a modern management platform with a structured interface, business workflows, database integration, and a scalable application architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
    ],
    results: [
      "Centralized business management",
      "Simplified daily workflows",
      "Modern responsive interface",
      "Scalable application architecture",
    ],
    image: "/images/projects/cloud-by-kyirmu.jpg",
    featured: true,
    url: "https://cloud-by-kyirmu.vercel.app/",
  },

  {
    title: "Barber Management System",
    slug: "barber-management-system",
    category: "Software Development",
    client: "Barber Business",
    description:
      "A digital management platform designed to help barber businesses organize services, customers, and daily operations.",
    challenge:
      "Managing customers, services, and daily business activities manually can become difficult as the business grows.",
    solution:
      "We built a centralized platform that brings essential business operations into a single digital environment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
    ],
    results: [
      "Centralized customer information",
      "Organized service management",
      "Simplified business workflows",
      "Accessible from modern devices",
    ],
    image: "/images/projects/barber-management.jpg",
    url: "https://rojan-three.onrender.com/",
  },

  {
    title: "GrabTheFund",
    slug: "grab-the-fund",
    category: "Web Development",
    client: "GrabTheFund",
    description:
      "A funding discovery platform created to bring grant opportunities together and make the funding discovery process easier.",
    challenge:
      "Finding relevant funding opportunities across different sources can take significant time and effort.",
    solution:
      "We developed a modern platform that organizes funding opportunities and provides a structured experience for discovering relevant grants.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
      "Apify",
      "Arcjet",
    ],
    results: [
      "Centralized funding discovery",
      "Automated data collection",
      "Structured search experience",
      "Scalable web architecture",
    ],
    image: "/images/projects/grab-the-fund.jpg",
    url: "https://grabthe.fund/",
  },

  {
    title: "Course Management System",
    slug: "course-management-system",
    category: "Software Development",
    client: "Education Platform",
    description:
      "A comprehensive education management platform supporting course creation, enrollment, content management, and learner progress.",
    challenge:
      "Educational content and learner management required a structured platform capable of supporting multiple workflows.",
    solution:
      "We created a centralized education platform with course management, content handling, enrollment, and progress-related functionality.",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "MongoDB",
      "Prisma",
      "UploadThing",
    ],
    results: [
      "Centralized course management",
      "Structured learning workflows",
      "Scalable database architecture",
      "Modern responsive experience",
    ],
    image: "/images/projects/course-management.jpg",
    url: "https://cms.mohammedsamrose.com.np/",
  },

  {
    title: "Dining Management System",
    slug: "dining-management-system",
    category: "Business Solutions",
    client: "Dining Business",
    description:
      "A digital dining management platform designed to organize dining-related operations and business workflows.",
    challenge:
      "Dining operations require organized workflows that can be difficult to manage efficiently using disconnected tools.",
    solution:
      "We developed a centralized platform focused on simplifying dining-related management and creating a consistent digital workflow.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    results: [
      "Centralized operations",
      "Simplified workflows",
      "Responsive user experience",
      "Modern application architecture",
    ],
    image: "/images/projects/dinx.jpg",
    url: "https://dinex.vercel.app/",
  },

  {
    title: "Customer Mobile App",
    slug: "customer-mobile-app",
    category: "Mobile Development",
    client: "Customer Platform",
    description:
      "A mobile application focused on creating a simple and convenient digital experience for customers.",
    challenge:
      "Customers needed a more accessible mobile-first experience for interacting with digital services.",
    solution:
      "We are developing a cross-platform mobile application focused on usability, performance, and API-driven functionality.",
    technologies: [
      "React Native",
      "TypeScript",
      "REST API",
    ],
    results: [
      "Mobile-first experience",
      "Cross-platform development",
      "API-driven architecture",
      "Scalable foundation",
    ],
    image: "/images/projects/mobile-app.jpg",
  },
]

/* =========================================================
   CATEGORY ICON
========================================================= */

function CategoryIcon({
  category,
}: {
  category: string
}) {
  const className = "h-4 w-4"

  switch (category) {
    case "Web Development":
      return <Globe2 className={className} />

    case "Mobile Development":
      return <Smartphone className={className} />

    case "Software Development":
      return <Code2 className={className} />

    case "Business Solutions":
      return <BarChart3 className={className} />

    default:
      return <Database className={className} />
  }
}

/* =========================================================
   PAGE
========================================================= */

export default function CaseStudiesPage() {
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredCaseStudies = useMemo(() => {
    const query = search.toLowerCase().trim()

    return caseStudies.filter((study) => {
      const categoryMatch =
        category === "All" ||
        study.category === category

      const searchMatch =
        !query ||
        study.title.toLowerCase().includes(query) ||
        study.description
          .toLowerCase()
          .includes(query) ||
        study.client
          .toLowerCase()
          .includes(query) ||
        study.technologies.some((technology) =>
          technology
            .toLowerCase()
            .includes(query)
        )

      return categoryMatch && searchMatch
    })
  }, [category, search])

  /* =======================================================
     FEATURED
  ======================================================= */

  const featuredStudy = caseStudies.find(
    (study) => study.featured
  )

  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Case Studies"
        title="Real projects. Real challenges. Practical solutions."
        description={[
          "Explore how we approach real-world digital problems through thoughtful design, modern technology, and scalable engineering.",
          "Each case study highlights the challenge, solution, technology, and value delivered through the project.",
        ]}
        image="/images/resources/case-studies/case-studies-hero.jpg"
        imageAlt="InfiniGrow case studies"
        primaryButton={{
          label: "Explore Case Studies",
          href: "#case-studies",
          icon: (
            <ArrowRight className="h-4 w-4" />
          ),
        }}
        secondaryButton={{
          label: "Start a Project",
          href: "/contact",
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
              Our Approach
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Technology built around business needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Every project starts with understanding the
              problem. We then design the right solution,
              choose appropriate technology, and build a
              product that can grow with the business.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          FEATURED CASE STUDY
      =================================================== */}

      {featuredStudy && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Featured Case Study
            </p>

            <div className="overflow-hidden rounded-2xl border bg-background">
              {/* IMAGE */}

              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                  <Badge className="border-0 bg-background/90 text-foreground backdrop-blur">
                    {featuredStudy.category}
                  </Badge>

                  <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                    {featuredStudy.title}
                  </h2>
                </div>
              </div>

              {/* CONTENT */}

              <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    The Challenge
                  </p>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {featuredStudy.challenge}
                  </p>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    The Solution
                  </p>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {featuredStudy.solution}
                  </p>

                  {featuredStudy.url && (
                    <Button
                      
                      className="mt-8 gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      <Link
                        href={featuredStudy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Outcomes
                  </p>

                  <div className="mt-5 space-y-4">
                    {featuredStudy.results.map(
                      (result) => (
                        <div
                          key={result}
                          className="flex gap-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                          <span className="text-sm leading-6">
                            {result}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-8 border-t pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technology
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {featuredStudy.technologies.map(
                        (technology) => (
                          <Badge
                            key={technology}
                            variant="secondary"
                            className="font-normal"
                          >
                            {technology}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          CASE STUDIES GRID
      =================================================== */}

      <section
        id="case-studies"
        className="bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* HEADER */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our Work
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Explore our case studies.
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredCaseStudies.length}
              </span>{" "}
              case studies
            </p>
          </div>

          {/* FILTER BAR */}

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border bg-background p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => {
                const active = category === item

                return (
                  <Button
                    key={item}
                    type="button"
                    size="sm"
                    variant={
                      active
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setCategory(item)
                    }
                    className={
                      active
                        ? "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                        : ""
                    }
                  >
                    {item}
                  </Button>
                )
              })}
            </div>

            <div className="relative w-full lg:w-[280px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search case studies..."
                className="pl-9"
              />
            </div>
          </div>

          {/* GRID */}

          {filteredCaseStudies.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/resources/case-studies/${study.slug}`}
                  className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4">
                      <Badge className="border-0 bg-background/90 text-foreground backdrop-blur">
                        {study.category}
                      </Badge>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <CategoryIcon
                        category={study.category}
                      />

                      {study.client}
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">
                      {study.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {study.description}
                    </p>

                    {/* RESULTS */}

                    <div className="mt-5 space-y-2">
                      {study.results
                        .slice(0, 2)
                        .map((result) => (
                          <div
                            key={result}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                            <span>{result}</span>
                          </div>
                        ))}
                    </div>

                    {/* TECHNOLOGIES */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.technologies
                        .slice(0, 3)
                        .map((technology) => (
                          <Badge
                            key={technology}
                            variant="secondary"
                            className="font-normal"
                          >
                            {technology}
                          </Badge>
                        ))}

                      {study.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="font-normal"
                        >
                          +{study.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* ACTION */}

                    <div className="mt-6 flex items-center justify-between border-t pt-5">
                      <span className="text-xs text-muted-foreground">
                        Case study
                      </span>

                      <span className="flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border bg-background px-6 py-24 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                No case studies found
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Try another keyword or select a different
                category.
              </p>

              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setCategory("All")
                  setSearch("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          PROCESS
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              How We Work
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              From problem to product.
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              Our development process keeps business
              requirements at the center of every technical
              decision.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We learn about your business, users, goals, and technical requirements.",
                icon: Users,
              },
              {
                number: "02",
                title: "Design",
                description:
                  "We design the product experience and architecture around your requirements.",
                icon: Code2,
              },
              {
                number: "03",
                title: "Build",
                description:
                  "Our team develops, integrates, tests, and refines the product.",
                icon: Zap,
              },
              {
                number: "04",
                title: "Grow",
                description:
                  "We help improve, scale, and maintain the product as your business grows.",
                icon: BarChart3,
              },
            ].map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="border-t pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {step.number}
                    </span>

                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              )
            })}
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
                Your Project
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Let's create your next success story.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Tell us about your business challenge and
                we'll help you find the right digital
                solution.
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
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}