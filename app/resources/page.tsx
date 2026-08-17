"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FileText,
  HelpCircle,
  Lightbulb,
  Search,
  Code2,
  Cloud,
  Smartphone,
  BrainCircuit,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"

/* =========================================================
   RESOURCE TYPES
========================================================= */

const resources = [
  {
    title: "Blog",
    description:
      "Explore practical insights, technology trends, development ideas, and lessons from building digital products.",
    icon: BookOpen,
    href: "/resources/blog",
  },
  {
    title: "Guides",
    description:
      "Simple and practical guides covering web development, mobile applications, APIs, cloud, AI, and software development.",
    icon: Lightbulb,
    href: "/resources/guides",
  },
  {
    title: "Case Studies",
    description:
      "See how we approach real projects, solve business problems, and turn ideas into reliable digital products.",
    icon: FileText,
    href: "/resources/case-studies",
  },
  {
    title: "FAQs",
    description:
      "Find answers to common questions about software development, project planning, technologies, and working with us.",
    icon: HelpCircle,
    href: "/resources/faqs",
  },
]

/* =========================================================
   TOPICS
========================================================= */

const topics = [
  {
    title: "Web Development",
    description:
      "Learn about modern websites, web applications, architecture, performance, and development technologies.",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description:
      "Explore mobile application development, user experiences, APIs, and cross-platform technologies.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Understand cloud infrastructure, deployment, containers, CI/CD, monitoring, and scalable systems.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description:
      "Discover practical applications of AI, automation, APIs, RAG, and intelligent business solutions.",
    icon: BrainCircuit,
  },
]

/* =========================================================
   FEATURED ARTICLES
========================================================= */

const articles = [
  {
    category: "Web Development",
    title: "How to choose the right technology for your web project",
    description:
      "A practical overview of the factors businesses should consider before choosing a technology stack.",
    href: "/resources/blog",
  },
  {
    category: "Software Development",
    title: "What should you consider before building custom software?",
    description:
      "Understand the important questions to answer before starting a custom software development project.",
    href: "/resources/guides",
  },
  {
    category: "AI",
    title: "How businesses can use AI to improve everyday workflows",
    description:
      "Explore practical ways organizations can use AI and automation to reduce repetitive work.",
    href: "/resources/blog",
  },
]

/* =========================================================
   PAGE
========================================================= */

export default function ResourcesPage() {
  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Resources"
        title="Insights and resources for building better technology."
        description={[
          "Explore practical guides, technology insights, case studies, and answers to common questions about building digital products.",
          "Whether you are planning a new project or looking to improve an existing system, our resources are designed to help you make better technology decisions.",
        ]}
        image="/images/resources/resources-hero.jpg"
        imageAlt="InfiniGrow resources"
        primaryButton={{
          label: "Explore Guides",
          href: "/resources/guides",
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
              Knowledge Hub
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Learn. Explore. Build better.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Technology decisions can be difficult.
              Our resources break down complex topics
              into practical information that businesses
              and teams can understand and use.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          RESOURCE TYPES
      =================================================== */}

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Explore Resources
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Find the information you need.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Explore our resources to learn more about
              technology, software development, and
              building digital products.
            </p>
          </div>

          {/* RESOURCE GRID */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => {
              const Icon = resource.icon

              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group relative overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  {/* ICON */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-7 text-xl font-bold tracking-tight">
                    {resource.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {resource.description}
                  </p>

                  {/* LINK */}

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                    Explore

                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          FEATURED CONTENT
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Latest insights
              </h2>
            </div>

            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:gap-3 dark:text-emerald-400"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* ARTICLES */}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg"
              >
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                >
                  {article.category}
                </Badge>

                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          TOPICS
      =================================================== */}

      <section className="border-y bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Topics
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Explore technology topics.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Learn more about the technologies and
              practices behind modern digital products.
            </p>
          </div>

          {/* TOPIC LIST */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon

              return (
                <div
                  key={topic.title}
                  className="flex gap-5 rounded-2xl border bg-background p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {topic.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          FAQ CTA
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Search className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
            Can't find what you're looking for?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Have a specific question about your project,
            technology, or development process? Talk to our
            team and we'll help you find the right approach.
          </p>

          <Button
            
            size="lg"
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
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
                Ready to turn an idea into a product?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Tell us what you're building and let's
                explore the right technology solution for
                your business.
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