"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/hero-section"
import { BlogImage } from "./blog-image"

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Software Development",
  "Cloud & DevOps",
  "AI",
  "Business",
]

/* =========================================================
   BLOG TYPE
========================================================= */

type BlogPost = {
  title: string
  slug: string
  category: string
  description: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

/* =========================================================
   BLOG POSTS
========================================================= */

const posts: BlogPost[] = [
  {
    title:
      "How to Choose the Right Technology for Your Web Project",
    slug: "how-to-choose-the-right-technology-for-your-web-project",
    category: "Web Development",
    description:
      "A practical guide to choosing the right frontend, backend, database, and infrastructure for a modern web application.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    image: "/images/resources/blog/web-development.jpg",
    featured: true,
  },

  {
    title:
      "What Should You Consider Before Building Custom Software?",
    slug: "what-to-consider-before-building-custom-software",
    category: "Software Development",
    description:
      "Important questions businesses should answer before starting a custom software development project.",
    date: "Aug 08, 2026",
    readTime: "7 min read",
    image: "/images/resources/blog/software-development.jpg",
  },

  {
    title:
      "Web Application vs Website: What Does Your Business Need?",
    slug: "web-application-vs-website",
    category: "Web Development",
    description:
      "Understand the difference between a traditional website and a web application and when to choose each.",
    date: "Aug 04, 2026",
    readTime: "5 min read",
    image: "/images/resources/blog/web-application.jpg",
  },

  {
    title:
      "Why Businesses Are Moving Their Applications to the Cloud",
    slug: "why-businesses-are-moving-to-the-cloud",
    category: "Cloud & DevOps",
    description:
      "Explore how cloud infrastructure can improve scalability, reliability, deployment, and business operations.",
    date: "Jul 29, 2026",
    readTime: "6 min read",
    image: "/images/resources/blog/cloud.jpg",
  },

  {
    title: "React Native vs Native App Development",
    slug: "react-native-vs-native-app-development",
    category: "Mobile Development",
    description:
      "A practical comparison of cross-platform and native mobile application development.",
    date: "Jul 24, 2026",
    readTime: "7 min read",
    image: "/images/resources/blog/mobile-development.jpg",
  },

  {
    title: "How AI Can Automate Repetitive Business Workflows",
    slug: "how-ai-can-automate-business-workflows",
    category: "AI",
    description:
      "Discover practical ways organizations can use AI to automate repetitive tasks and improve productivity.",
    date: "Jul 19, 2026",
    readTime: "6 min read",
    image: "/images/resources/blog/ai.jpg",
  },

  {
    title: "How Much Does It Cost to Build Custom Software?",
    slug: "how-much-does-custom-software-cost",
    category: "Business",
    description:
      "Understand the major factors that influence software development costs and project timelines.",
    date: "Jul 14, 2026",
    readTime: "8 min read",
    image: "/images/resources/blog/software-cost.jpg",
  },

  {
    title: "API Development: Why Modern Applications Need APIs",
    slug: "why-modern-applications-need-apis",
    category: "Software Development",
    description:
      "Learn how APIs connect applications, services, databases, and external platforms.",
    date: "Jul 09, 2026",
    readTime: "5 min read",
    image: "/images/resources/blog/api.jpg",
  },
]

/* =========================================================
   CATEGORY ICON
========================================================= */

function CategoryIcon({ category }: { category: string }) {
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

    case "Business":
      return <BriefcaseBusiness className={className} />

    default:
      return <Code2 className={className} />
  }
}

/* =========================================================
   PAGE
========================================================= */

export default function BlogPage() {
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")

  /* =======================================================
     FILTER POSTS
  ======================================================= */

  const filteredPosts = useMemo(() => {
    const query = search.toLowerCase().trim()

    return posts.filter((post) => {
      const categoryMatch =
        category === "All" || post.category === category

      const searchMatch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)

      return categoryMatch && searchMatch
    })
  }, [category, search])

  /* =======================================================
     FEATURED
  ======================================================= */

  const featuredPost = posts.find((post) => post.featured)

  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Blog"
        title="Ideas, insights, and technology knowledge."
        description={[
          "Explore practical articles about software development, web applications, mobile development, cloud infrastructure, AI, and modern technology.",
          "Our goal is to make complex technology topics easier to understand and more useful for businesses.",
        ]}
        image="/images/resources/blog/blog-hero.jpg"
        imageAlt="InfiniGrow technology blog"
        primaryButton={{
          label: "Explore Articles",
          href: "#articles",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: "Let's Talk",
          href: "/contact",
        }}
      />

      {/* ===================================================
          FEATURED ARTICLE
      =================================================== */}

      {featuredPost && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Featured Article
              </p>
            </div>

            <Link
              href={`/resources/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl lg:grid-cols-2"
            >
              {/* IMAGE */}

              <div className="relative">
                <BlogImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  aspect="aspect-[16/10] lg:h-full lg:aspect-auto"
                />

                <div className="absolute left-5 top-5 z-20">
                  <Badge className="border-0 bg-background/90 text-foreground backdrop-blur">
                    Featured
                  </Badge>
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <CategoryIcon category={featuredPost.category} />
                  {featuredPost.category}
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {featuredPost.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ===================================================
          ARTICLES
      =================================================== */}

      <section id="articles" className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* HEADER */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Articles
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Explore our latest articles.
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredPosts.length}
              </span>{" "}
              articles
            </p>
          </div>

          {/* FILTER */}

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
                    variant={active ? "default" : "outline"}
                    onClick={() => setCategory(item)}
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
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                className="pl-9"
              />
            </div>
          </div>

          {/* =================================================
              GRID

              MOBILE  → 1
              TABLET  → 2
              LARGE   → 3
          ================================================= */}

          {filteredPosts.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  {/* IMAGE */}

                  <div className="relative">
                    <BlogImage
                      src={post.image}
                      alt={post.title}
                      aspect="aspect-[16/9]"
                    />

                    <div className="absolute left-4 top-4 z-20">
                      <Badge className="border-0 bg-background/90 text-foreground backdrop-blur">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {post.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </div>
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
                No articles found
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Try searching for another keyword or selecting a different
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
          NEWSLETTER / CTA
      =================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            Keep Learning
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Have a technology question?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            If you are planning a project and need help choosing the right
            technology or approach, our team is ready to help.
          </p>

          <Button
            size="lg"
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            <Link href="/contact" className="flex items-center gap-2">
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
                Have an idea worth building?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Let's turn your idea into a reliable, scalable digital
                product.
              </p>
            </div>

            <Button size="lg" variant="secondary" className="shrink-0">
              <Link href="/contact" className="flex items-center gap-2">
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