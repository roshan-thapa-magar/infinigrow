"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {
  ArrowRight,
  ExternalLink,
  Globe2,
  Smartphone,
  Code2,
  Cloud,
  Bot,
  Database,
  Briefcase,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { HeroSection } from "@/components/hero-section"

/* =========================================================
   FILTERS
========================================================= */

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Software Development",
  "Cloud & DevOps",
  "API Development",
  "AI Development",
]

const statuses = [
  "All",
  "Hosted",
  "In Progress",
  "Planning",
]

/* =========================================================
   PROJECT TYPES
========================================================= */

type ProjectStatus =
  | "Hosted"
  | "In Progress"
  | "Planning"

type Project = {
  title: string
  category: string
  status: ProjectStatus
  description: string
  image: string
  technologies: string[]
  url?: string
}

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    title: "Cloud By Kyirmu",
    category: "Software Development",
    status: "Hosted",
    description:
      "A centralized cafe management platform designed to simplify daily operations, business workflows, and management tasks.",
    image: "/images/projects/cloud-by-kyirmu.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
    ],
    url: "https://cloud-by-kyirmu.vercel.app/",
  },

  {
    title: "Barber Management System",
    category: "Software Development",
    status: "Hosted",
    description:
      "A digital management platform designed for barber businesses to organize services, customers, and daily operations.",
    image: "/images/projects/barber-management.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
    ],
    url: "https://rojan-three.onrender.com/",
  },

  {
    title: "Roshan Thapa Magar",
    category: "Web Development",
    status: "Hosted",
    description:
      "A modern personal website designed to showcase professional information, skills, projects, and digital presence.",
    image: "/images/projects/roshan-thapa-magar.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    url: "https://roshanthapamagar.vercel.app/",
  },

  {
    title: "Dining Management System",
    category: "Software Development",
    status: "Hosted",
    description:
      "DinX is a digital dining management platform created to organize dining-related operations and workflows.",
    image: "/images/projects/dinx.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    url: "https://dinex.vercel.app/",
  },

  {
    title: "GrabTheFund",
    category: "Web Development",
    status: "Hosted",
    description:
      "A funding discovery platform that brings grant opportunities together so users can spend more time applying and less time searching.",
    image: "/images/projects/grab-the-fund.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
      "Apify",
      "Arcjet",
    ],
    url: "https://grabthe.fund/",
  },

  {
    title: "Course Management System",
    category: "Software Development",
    status: "Hosted",
    description:
      "A comprehensive education management platform supporting course creation, enrollment, content management, and progress tracking.",
    image: "/images/projects/course-management.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "MongoDB",
      "Prisma",
      "UploadThing",
    ],
    url: "https://cms.mohammedsamrose.com.np/",
  },

  {
    title: "TeamFlow",
    category: "Software Development",
    status: "Hosted",
    description:
      "A collaborative platform designed to improve team communication, project management, and productivity.",
    image: "/images/projects/teamflow.jpg",
    technologies: [
      "Next.js",
      "TanStack Query",
      "TypeScript",
      "Prisma",
      "oRPC",
      "Kinde",
      "Arcjet",
      "Tailwind CSS",
    ],
  },

  {
    title: "Customer Mobile App",
    category: "Mobile Development",
    status: "In Progress",
    description:
      "A mobile application focused on creating a simple, accessible, and convenient digital experience for customers.",
    image: "/images/projects/mobile-app1.jpg",
    technologies: [
      "React Native",
      "TypeScript",
      "REST API",
    ],
  },

  {
    title: "Cloud Infrastructure Platform",
    category: "Cloud & DevOps",
    status: "In Progress",
    description:
      "A scalable cloud environment with automated deployment, monitoring, containerization, and production infrastructure.",
    image: "/images/projects/cloud1.jpg",
    technologies: [
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },

  {
    title: "Business API Platform",
    category: "API Development",
    status: "Planning",
    description:
      "A secure backend API platform designed to connect applications, databases, and external services.",
    image: "/images/projects/api.jpg",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
    ],
  },

  {
    title: "AI Knowledge Assistant",
    category: "AI Development",
    status: "Planning",
    description:
      "An AI-powered assistant designed to help organizations search, understand, and interact with their business knowledge.",
    image: "/images/projects/ai.jpg",
    technologies: [
      "Python",
      "FastAPI",
      "AI",
      "RAG",
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
  const className = "h-4 w-4 shrink-0"

  switch (category) {
    case "Web Development":
      return <Globe2 className={className} />

    case "Mobile Development":
      return <Smartphone className={className} />

    case "Cloud & DevOps":
      return <Cloud className={className} />

    case "API Development":
      return <Database className={className} />

    case "AI Development":
      return <Bot className={className} />

    default:
      return <Code2 className={className} />
  }
}

/* =========================================================
   STATUS STYLE
========================================================= */

function statusStyle(status: ProjectStatus) {
  switch (status) {
    case "Hosted":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"

    case "In Progress":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400"

    case "Planning":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400"

    default:
      return ""
  }
}

/* =========================================================
   PAGE
========================================================= */

export default function ProjectsPage() {
  const [category, setCategory] = useState("All")
  const [status, setStatus] = useState("All")

  /* =======================================================
     SCROLL TO PROJECTS
  ======================================================= */

  const scrollToProjects = () => {
    const projectsSection =
      document.getElementById("projects")

    if (!projectsSection) return

    const headerOffset = 80

    const elementPosition =
      projectsSection.getBoundingClientRect().top

    const offsetPosition =
      elementPosition +
      window.scrollY -
      headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  /* =======================================================
     FILTER PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        category === "All" ||
        project.category === category

      const statusMatch =
        status === "All" ||
        project.status === status

      return categoryMatch && statusMatch
    })
  }, [category, status])

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setCategory("All")
    setStatus("All")
  }

  return (
    <main className="bg-background">

      {/* ===================================================
          HERO
      =================================================== */}

      <HeroSection
        badge="Our Projects"
        title="Digital products built for real businesses."
        description={[
          "Explore selected projects across web development, mobile applications, software systems, cloud infrastructure, APIs, and AI solutions.",
          "Every project is built around specific business requirements with a focus on performance, usability, scalability, and long-term value.",
        ]}
        image="/images/projects/image.png"
        imageAlt="InfiniGrow projects"
        primaryButton={{
          label: "Our Projects",
          href: "/projects#projects",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          label: "Contact Us",
          href: "/contact",
          icon: <Briefcase className="h-4 w-4" />,
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
              Selected Work
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Projects that turn ideas into products.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              We build websites, web applications,
              management systems, mobile applications,
              APIs, cloud infrastructure, and AI-powered
              products.
            </p>

          </div>

        </div>
      </section>

      {/* ===================================================
          PROJECTS
      =================================================== */}

      <section
        id="projects"
        className="scroll-mt-24 bg-muted/30 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          {/* HEADER */}

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Portfolio
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Explore our projects
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p>

          </div>

          {/* FILTERS */}

          <Card className="mt-8 border-0 shadow-sm">
            <CardContent className="p-4 md:p-5">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* CATEGORY */}

                <div className="flex flex-1 flex-wrap gap-2">

                  {categories.map((item) => {
                    const active =
                      category === item

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

                {/* STATUS */}

                <div className="flex items-center gap-2">

                  <span className="hidden text-sm text-muted-foreground sm:block">
                    Status:
                  </span>

                  <Select
                    value={status}
                    onValueChange={(value) => {
                      if (value !== null) {
                        setStatus(value)
                      }
                    }}
                  >
                    <SelectTrigger className="w-[170px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      {statuses.map((item) => (
                        <SelectItem
                          key={item}
                          value={item}
                        >
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                </div>

              </div>

            </CardContent>
          </Card>

          {/* PROJECT GRID */}

          {filteredProjects.length > 0 ? (

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProjects.map(
                (project, index) => (

                  <Card
                    key={project.title}
                    className="group relative overflow-hidden border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* IMAGE */}

                    <div className="relative aspect-[16/9] overflow-hidden">

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

                      {/* NUMBER */}

                      <div className="absolute left-5 top-5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-xs font-bold shadow-sm backdrop-blur">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* STATUS */}

                      <div className="absolute right-5 top-5">
                        <Badge
                          className={`${statusStyle(
                            project.status
                          )} border-0 bg-background/90 backdrop-blur`}
                        >
                          {project.status}
                        </Badge>
                      </div>

                    </div>

                    {/* CONTENT */}

                    <CardContent className="p-6">

                      <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">

                        <CategoryIcon
                          category={project.category}
                        />

                        <span>
                          {project.category}
                        </span>

                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      <div className="mt-5 flex min-h-[52px] flex-wrap content-start gap-2">

                        {project.technologies
                          .slice(0, 5)
                          .map((technology) => (
                            <Badge
                              key={technology}
                              variant="secondary"
                              className="font-normal"
                            >
                              {technology}
                            </Badge>
                          ))}

                        {project.technologies.length > 5 && (
                          <Badge variant="secondary">
                            +
                            {project.technologies.length - 5}
                          </Badge>
                        )}

                      </div>

                    </CardContent>

                    {/* HOSTED PROJECT LINK */}

                    {project.status === "Hosted" &&
                      project.url && (

                        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">

                          <Button
                            
                            size="icon"
                            className="pointer-events-auto h-14 w-14 rounded-full border border-white/40 bg-white/20 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-110 hover:bg-white/30"
                            aria-label={`View ${project.title}`}
                          >
                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-6 w-6" />
                            </Link>
                          </Button>

                        </div>

                      )}

                  </Card>

                )
              )}

            </div>

          ) : (

            /* EMPTY STATE */

            <Card className="mt-10">

              <CardContent className="flex flex-col items-center justify-center py-24 text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                  <Code2 className="h-6 w-6 text-muted-foreground" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  No projects found
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  No projects match the selected
                  filters. Try another category or
                  project status.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  className="mt-6"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>

              </CardContent>

            </Card>

          )}

        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="border-t bg-emerald-600 text-white dark:bg-emerald-500">

        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Start Your Project
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Have an idea worth building?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Let's turn your idea into a reliable,
                scalable digital product.
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
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

          </div>

        </div>

      </section>

    </main>
  )
}