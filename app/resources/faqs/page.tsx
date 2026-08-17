"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Cloud,
  HelpCircle,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { HeroSection } from "@/components/hero-section"

/* =========================================================
   FAQ CATEGORIES
========================================================= */

const categories = [
  "All",
  "General",
  "Web Development",
  "Mobile Development",
  "Software Development",
  "Cloud & DevOps",
  "AI",
  "Support",
]

/* =========================================================
   FAQ TYPE
========================================================= */

type FAQ = {
  question: string
  answer: string
  category: string
}

/* =========================================================
   FAQ DATA
========================================================= */

const faqs: FAQ[] = [
  {
    question: "What services does InfiniGrow provide?",
    answer:
      "InfiniGrow provides web development, mobile application development, custom software development, API development, cloud and DevOps solutions, and AI development services. We work with businesses to design, build, launch, and improve digital products.",
    category: "General",
  },
  {
    question: "What type of businesses do you work with?",
    answer:
      "We work with startups, small and medium-sized businesses, organizations, and teams that need custom digital solutions. Projects can range from business websites and mobile applications to complete software platforms.",
    category: "General",
  },
  {
    question: "Can you build a website for my business?",
    answer:
      "Yes. We can design and develop modern business websites, corporate websites, landing pages, portfolio websites, and more advanced web applications based on your requirements.",
    category: "Web Development",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "Depending on the project, we commonly work with Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, databases, APIs, and modern cloud platforms.",
    category: "Web Development",
  },
  {
    question: "Can you build a custom web application?",
    answer:
      "Yes. We build custom web applications for business management, education, customer platforms, internal tools, SaaS products, dashboards, and other specialized requirements.",
    category: "Web Development",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We develop mobile applications with a focus on usability, performance, scalability, and maintainability. Depending on the requirements, we can use cross-platform technologies such as React Native.",
    category: "Mobile Development",
  },
  {
    question: "Can you build both Android and iOS applications?",
    answer:
      "Yes. Cross-platform development can support both Android and iOS from a shared codebase. The best approach depends on your application's features, performance requirements, and long-term goals.",
    category: "Mobile Development",
  },
  {
    question: "Can you develop custom software for my business?",
    answer:
      "Yes. We can develop custom software around your business workflows, users, requirements, and operational needs. This can include management systems, dashboards, internal platforms, and SaaS products.",
    category: "Software Development",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate third-party APIs and services into web applications, mobile applications, and business systems. Integrations can include payment services, authentication providers, communication platforms, external data sources, and other APIs.",
    category: "Software Development",
  },
  {
    question: "Do you provide backend and API development?",
    answer:
      "Yes. We can design and develop backend systems and REST APIs using technologies appropriate for the project, including Python, FastAPI, Node.js, databases, authentication, and external service integrations.",
    category: "Software Development",
  },
  {
    question: "Do you provide cloud deployment?",
    answer:
      "Yes. We can help deploy applications to cloud environments and configure production infrastructure. Depending on the project, this may include containers, automated deployments, databases, monitoring, and other infrastructure services.",
    category: "Cloud & DevOps",
  },
  {
    question: "Can you migrate an existing application to the cloud?",
    answer:
      "Yes. We can assess an existing application's architecture and help plan or implement a cloud migration. The migration approach depends on the existing technology stack, infrastructure, database, traffic, and business requirements.",
    category: "Cloud & DevOps",
  },
  {
    question: "Do you build AI-powered applications?",
    answer:
      "Yes. We can develop AI-powered applications such as knowledge assistants, intelligent search experiences, automation tools, and systems that connect AI capabilities with business data.",
    category: "AI",
  },
  {
    question: "What is RAG and can you build a RAG application?",
    answer:
      "RAG stands for Retrieval-Augmented Generation. It allows an AI system to retrieve relevant information from a knowledge source before generating a response. We can build RAG-based applications when they are appropriate for the business use case.",
    category: "AI",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Project cost depends on the scope, features, design requirements, integrations, technology, complexity, and timeline. After understanding your requirements, we can provide a more appropriate project estimate.",
    category: "General",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of the website. A simple business website can take significantly less time than a custom web application with authentication, dashboards, databases, and integrations.",
    category: "General",
  },
  {
    question: "Do you provide UI/UX design?",
    answer:
      "Yes. We can design user interfaces around your business goals and target users. We focus on clear information architecture, responsive layouts, usability, and consistent visual design.",
    category: "General",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Depending on the project and agreement, we can provide ongoing maintenance, updates, bug fixes, performance improvements, infrastructure support, and further development.",
    category: "Support",
  },
  {
    question: "Can you improve an existing application?",
    answer:
      "Yes. We can review an existing application, identify technical or usability issues, and help improve its performance, architecture, features, user experience, or scalability.",
    category: "Support",
  },
  {
    question: "How do I start a project with InfiniGrow?",
    answer:
      "The easiest way is to contact us with information about your business, project idea, goals, required features, and preferred timeline. We can then discuss the requirements and determine the best approach.",
    category: "General",
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

    case "Software Development":
      return (
        <BriefcaseBusiness className={className} />
      )

    case "Cloud & DevOps":
      return <Cloud className={className} />

    case "AI":
      return <BrainCircuit className={className} />

    case "Support":
      return <ShieldCheck className={className} />

    default:
      return <HelpCircle className={className} />
  }
}

/* =========================================================
   PAGE
========================================================= */

export default function FAQsPage() {
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")

  /*
   * Store the currently opened FAQ.
   * null = all closed.
   */
  const [openFAQ, setOpenFAQ] = useState<string | null>(
    null
  )

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredFAQs = useMemo(() => {
    const query = search.toLowerCase().trim()

    return faqs.filter((faq) => {
      const categoryMatch =
        category === "All" ||
        faq.category === category

      const searchMatch =
        !query ||
        faq.question
          .toLowerCase()
          .includes(query) ||
        faq.answer
          .toLowerCase()
          .includes(query) ||
        faq.category
          .toLowerCase()
          .includes(query)

      return categoryMatch && searchMatch
    })
  }, [category, search])

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const clearFilters = () => {
    setCategory("All")
    setSearch("")
    setOpenFAQ(null)
  }

  /* =======================================================
     TOGGLE FAQ
  ======================================================= */

  const toggleFAQ = (question: string) => {
    setOpenFAQ((current) =>
      current === question ? null : question
    )
  }

  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="FAQs"
        title="Answers to common questions."
        description={[
          "Find answers about our services, development process, technologies, pricing, timelines, and ongoing support.",
          "Can't find what you're looking for? Contact our team and we'll be happy to discuss your requirements.",
        ]}
        image="/images/resources/faqs/faqs-hero.jpg"
        imageAlt="InfiniGrow frequently asked questions"
        primaryButton={{
          label: "Ask a Question",
          href: "/contact",
          icon: (
            <ArrowRight className="h-4 w-4" />
          ),
        }}
        secondaryButton={{
          label: "Our Services",
          href: "/services",
        }}
      />

      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* LEFT */}

            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                Frequently Asked Questions
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Everything you need to know.
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                We've answered some of the most common
                questions businesses ask before starting a
                digital project.
              </p>
            </div>

            {/* STATS */}

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-3xl font-bold">
                  {faqs.length}+
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Questions answered
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-3xl font-bold">
                  {categories.length - 1}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Topics covered
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-5">
                <p className="text-3xl font-bold">
                  24/7
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Online access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FAQ SECTION
      =================================================== */}

      <section
        id="faqs"
        className="bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          {/* HEADER */}

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Knowledge Base
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              How can we help?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Search for an answer or browse questions by
              category.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setOpenFAQ(null)
              }}
              placeholder="Search frequently asked questions..."
              className="h-12 pl-11"
            />
          </div>

          {/* CATEGORIES */}

          <div className="mt-6 flex flex-wrap justify-center gap-2">
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
                  onClick={() => {
                    setCategory(item)
                    setOpenFAQ(null)
                  }}
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

          {/* RESULTS */}

          <div className="mt-10 flex items-center justify-between border-b pb-4">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredFAQs.length}
              </span>{" "}
              questions
            </p>

            {(category !== "All" || search) && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            )}
          </div>

          {/* =================================================
              FAQ LIST
          ================================================= */}

          {filteredFAQs.length > 0 ? (
            <div className="mt-4 divide-y border-b">
              {filteredFAQs.map((faq, index) => {
                const isOpen =
                  openFAQ === faq.question

                return (
                  <div
                    key={`${faq.question}-${index}`}
                    className="group"
                  >
                    {/* QUESTION */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleFAQ(faq.question)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 py-6 text-left"
                    >
                      {/* ICON */}

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isOpen
                            ? "bg-emerald-600 text-white dark:bg-emerald-500"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        }`}
                      >
                        <CategoryIcon
                          category={faq.category}
                        />
                      </span>

                      {/* QUESTION */}

                      <span
                        className={`flex-1 text-sm font-semibold transition-colors md:text-base ${
                          isOpen
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-foreground"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* CHEVRON */}

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                            : ""
                        }`}
                      />
                    </button>

                    {/* ANSWER */}

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6 pl-13 pr-8">
                          <p className="text-sm leading-7 text-muted-foreground md:text-base">
                            {faq.answer}
                          </p>

                          <div className="mt-4">
                            <Badge
                              variant="secondary"
                              className="font-normal"
                            >
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="mt-8 rounded-2xl border bg-background px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                No questions found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                We couldn't find an answer matching your
                search. Try another keyword or category.
              </p>

              <Button
                variant="outline"
                className="mt-6"
                onClick={clearFilters}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          SERVICE LINKS
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              Explore More
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Looking for a specific solution?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Explore our services to learn more about how
              we can help with your next digital project.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* WEB */}

            <Link
              href="/services/web-development"
              className="group border-t pt-6"
            >
              <div className="flex items-center justify-between">
                <Code2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />

                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Web Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Modern websites and web applications
                designed around your business.
              </p>
            </Link>

            {/* MOBILE */}

            <Link
              href="/services/mobile-development"
              className="group border-t pt-6"
            >
              <div className="flex items-center justify-between">
                <Smartphone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />

                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mobile Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Cross-platform mobile applications
                built for modern users.
              </p>
            </Link>

            {/* SOFTWARE */}

            <Link
              href="/services/software-development"
              className="group border-t pt-6"
            >
              <div className="flex items-center justify-between">
                <BriefcaseBusiness className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />

                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Software Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Custom software built around your
                business workflows.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT CTA
      =================================================== */}

      <section className="bg-emerald-600 text-white dark:bg-emerald-500">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Need More Information?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Let's talk about your project.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Every project is different. Tell us what
                you're trying to build and we'll help you
                find the right digital solution.
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
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}