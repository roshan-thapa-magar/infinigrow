"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Search,
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  CheckCircle2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/hero-section"

/* =========================================================
   GUIDE CATEGORIES
========================================================= */

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Backend & API",
  "Cloud & DevOps",
  "AI",
]

/* =========================================================
   GUIDE TYPE
========================================================= */

type Guide = {
  title: string
  slug: string
  category: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  readTime: string
  topics: string[]
  featured?: boolean
}

/* =========================================================
   GUIDE DATA
========================================================= */

const guides: Guide[] = [
  {
    title: "A Practical Guide to Building a Modern Web Application",
    slug: "building-a-modern-web-application",
    category: "Web Development",
    description:
      "Understand the key steps involved in planning, designing, developing, testing, and deploying a modern web application.",
    level: "Beginner",
    readTime: "10 min read",
    topics: [
      "Project Planning",
      "Frontend",
      "Backend",
      "Database",
      "Deployment",
    ],
    featured: true,
  },

  {
    title: "Choosing the Right Technology Stack",
    slug: "choosing-the-right-technology-stack",
    category: "Web Development",
    description:
      "Learn how to evaluate frontend, backend, database, hosting, and infrastructure technologies for your project.",
    level: "Beginner",
    readTime: "8 min read",
    topics: [
      "Frontend",
      "Backend",
      "Database",
      "Hosting",
    ],
  },

  {
    title: "Building REST APIs with FastAPI",
    slug: "building-rest-apis-with-fastapi",
    category: "Backend & API",
    description:
      "Learn the fundamentals of designing and building scalable REST APIs using Python and FastAPI.",
    level: "Intermediate",
    readTime: "12 min read",
    topics: [
      "Python",
      "FastAPI",
      "REST API",
      "Database",
    ],
  },

  {
    title: "Getting Started with Mobile App Development",
    slug: "getting-started-with-mobile-app-development",
    category: "Mobile Development",
    description:
      "A beginner-friendly guide to understanding mobile application architecture, development, APIs, and deployment.",
    level: "Beginner",
    readTime: "9 min read",
    topics: [
      "React Native",
      "TypeScript",
      "API",
      "Mobile UI",
    ],
  },

  {
    title: "Deploying Applications with Docker",
    slug: "deploying-applications-with-docker",
    category: "Cloud & DevOps",
    description:
      "Understand how Docker containers can make application development, deployment, and environments more consistent.",
    level: "Intermediate",
    readTime: "11 min read",
    topics: [
      "Docker",
      "Containers",
      "Deployment",
      "DevOps",
    ],
  },

  {
    title: "Introduction to Cloud Deployment",
    slug: "introduction-to-cloud-deployment",
    category: "Cloud & DevOps",
    description:
      "Learn the fundamentals of deploying modern applications to cloud platforms and managing production environments.",
    level: "Beginner",
    readTime: "10 min read",
    topics: [
      "Cloud",
      "Hosting",
      "Deployment",
      "Infrastructure",
    ],
  },

  {
    title: "Building an AI Knowledge Assistant with RAG",
    slug: "building-an-ai-knowledge-assistant-with-rag",
    category: "AI",
    description:
      "Understand the core concepts behind retrieval-augmented generation and how AI assistants can work with business knowledge.",
    level: "Advanced",
    readTime: "15 min read",
    topics: [
      "AI",
      "RAG",
      "Embeddings",
      "LLM",
    ],
  },

  {
    title: "Designing a Scalable Database Architecture",
    slug: "designing-a-scalable-database-architecture",
    category: "Backend & API",
    description:
      "Learn important database architecture concepts for applications that need reliability, performance, and scalability.",
    level: "Intermediate",
    readTime: "13 min read",
    topics: [
      "Database",
      "PostgreSQL",
      "MongoDB",
      "Architecture",
    ],
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
      return <Code2 className={className} />

    case "Mobile Development":
      return <Smartphone className={className} />

    case "Cloud & DevOps":
      return <Cloud className={className} />

    case "AI":
      return <BrainCircuit className={className} />

    case "Backend & API":
      return <Database className={className} />

    default:
      return <BookOpen className={className} />
  }
}

/* =========================================================
   LEVEL STYLE
========================================================= */

function levelStyle(
  level: Guide["level"]
) {
  switch (level) {
    case "Beginner":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"

    case "Intermediate":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400"

    case "Advanced":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  }
}

/* =========================================================
   PAGE
========================================================= */

export default function GuidesPage() {
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredGuides = useMemo(() => {
    const query = search.toLowerCase().trim()

    return guides.filter((guide) => {
      const categoryMatch =
        category === "All" ||
        guide.category === category

      const searchMatch =
        !query ||
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query) ||
        guide.category.toLowerCase().includes(query) ||
        guide.topics.some((topic) =>
          topic.toLowerCase().includes(query)
        )

      return categoryMatch && searchMatch
    })
  }, [category, search])

  /* =======================================================
     FEATURED
  ======================================================= */

  const featuredGuide = guides.find(
    (guide) => guide.featured
  )

  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Guides"
        title="Practical guides for building better digital products."
        description={[
          "Step-by-step resources covering web development, mobile applications, APIs, cloud infrastructure, databases, and AI.",
          "Whether you're starting a new project or improving an existing system, our guides help you understand the technology and make better decisions.",
        ]}
        image="/images/resources/guides/guides-hero.jpg"
        imageAlt="InfiniGrow technology guides"
        primaryButton={{
          label: "Explore Guides",
          href: "#guides",
          icon: (
            <ArrowRight className="h-4 w-4" />
          ),
        }}
        secondaryButton={{
          label: "Let's Talk",
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
              Practical Knowledge
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Learn how technology works.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Our guides focus on practical concepts that
              developers, businesses, and teams can use when
              planning and building digital products.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          FEATURED GUIDE
      =================================================== */}

      {featuredGuide && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Featured Guide
              </p>
            </div>

            <Link
              href={`/resources/guides/${featuredGuide.slug}`}
              className="group block rounded-2xl border bg-background p-7 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    >
                      <CategoryIcon
                        category={
                          featuredGuide.category
                        }
                      />

                      <span className="ml-2">
                        {featuredGuide.category}
                      </span>
                    </Badge>

                    <Badge
                      className={`border-0 ${levelStyle(
                        featuredGuide.level
                      )}`}
                    >
                      {featuredGuide.level}
                    </Badge>
                  </div>

                  <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
                    {featuredGuide.title}
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                    {featuredGuide.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    {featuredGuide.readTime}
                  </div>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-all group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ===================================================
          GUIDES
      =================================================== */}

      <section
        id="guides"
        className="bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* HEADER */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                All Guides
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Explore our guides.
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredGuides.length}
              </span>{" "}
              guides
            </p>
          </div>

          {/* FILTER BAR */}

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border bg-background p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORIES */}

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

            {/* SEARCH */}

            <div className="relative w-full lg:w-[280px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search guides..."
                className="pl-9"
              />
            </div>
          </div>

          {/* =================================================
              GUIDE GRID
          ================================================= */}

          {filteredGuides.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="group flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <CategoryIcon
                        category={guide.category}
                      />
                    </div>

                    <Badge
                      className={`border-0 ${levelStyle(
                        guide.level
                      )}`}
                    >
                      {guide.level}
                    </Badge>
                  </div>

                  {/* CATEGORY */}

                  <div className="mt-5 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    {guide.category}
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">
                    {guide.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {guide.description}
                  </p>

                  {/* TOPICS */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {guide.topics.slice(0, 3).map(
                      (topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="font-normal"
                        >
                          {topic}
                        </Badge>
                      )
                    )}

                    {guide.topics.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="font-normal"
                      >
                        +{guide.topics.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-6 flex items-center justify-between border-t pt-5">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" />
                      {guide.readTime}
                    </span>

                    <span className="flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* =================================================
               EMPTY
            ================================================= */

            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border bg-background px-6 py-24 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                No guides found
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Try another keyword or choose a different
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
          LEARNING PATH
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
                Learning Path
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Start with the fundamentals.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                New to a technology? Start with the
                fundamentals, understand the architecture,
                and then move toward more advanced topics.
              </p>
            </div>

            {/* RIGHT */}

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Understand the basics",
                  description:
                    "Learn the core concepts before choosing tools or frameworks.",
                },
                {
                  number: "02",
                  title: "Plan your architecture",
                  description:
                    "Understand how the frontend, backend, database, APIs, and infrastructure work together.",
                },
                {
                  number: "03",
                  title: "Build and test",
                  description:
                    "Turn concepts into a working product and validate your implementation.",
                },
                {
                  number: "04",
                  title: "Deploy and improve",
                  description:
                    "Move your application into production and continuously improve it.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 border-b pb-5 last:border-0"
                >
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <CheckCircle2 className="ml-auto mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                </div>
              ))}
            </div>
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
                Need Help?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                If you need help choosing the right
                technology or building your product, let's
                talk about your requirements.
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
                Let's Build
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}