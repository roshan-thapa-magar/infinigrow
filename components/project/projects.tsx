"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import {
  ExternalLink,
  Globe2,
  Smartphone,
  Code2,
  Cloud,
  Bot,
  Database,
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

/* =========================================================
   PROJECT TYPES
========================================================= */

type ProjectStatus =
  | "hosted"
  | "inProgress"
  | "planning"

type ProjectCategory =
  | "webDevelopment"
  | "mobileDevelopment"
  | "softwareDevelopment"
  | "cloudDevops"
  | "apiDevelopment"
  | "aiDevelopment"

type Project = {
  id: string
  category: ProjectCategory
  status: ProjectStatus
  image: string
  technologies: string[]
  url?: string
}

/* =========================================================
   FILTER TYPES
========================================================= */

type CategoryFilter =
  | "all"
  | ProjectCategory

type StatusFilter =
  | "all"
  | ProjectStatus

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    id: "cloudByKyirmu",
    category: "softwareDevelopment",
    status: "hosted",
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
    id: "barberManagement",
    category: "softwareDevelopment",
    status: "hosted",
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
    id: "roshanThapaMagar",
    category: "webDevelopment",
    status: "hosted",
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
    id: "diningManagement",
    category: "softwareDevelopment",
    status: "hosted",
    image: "/images/projects/dinx.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    url: "https://dinex.vercel.app/",
  },

  {
    id: "grabTheFund",
    category: "webDevelopment",
    status: "hosted",
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
    id: "courseManagement",
    category: "softwareDevelopment",
    status: "hosted",
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
    id: "teamFlow",
    category: "softwareDevelopment",
    status: "hosted",
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
    id: "customerMobileApp",
    category: "mobileDevelopment",
    status: "inProgress",
    image: "/images/projects/mobile-app1.jpg",
    technologies: [
      "React Native",
      "TypeScript",
      "REST API",
    ],
  },

  {
    id: "cloudInfrastructure",
    category: "cloudDevops",
    status: "inProgress",
    image: "/images/projects/cloud1.jpg",
    technologies: [
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },

  {
    id: "businessApi",
    category: "apiDevelopment",
    status: "planning",
    image: "/images/projects/api.jpg",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
    ],
  },

  {
    id: "aiKnowledgeAssistant",
    category: "aiDevelopment",
    status: "planning",
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
  category: ProjectCategory
}) {
  const className = "h-4 w-4 shrink-0"

  switch (category) {
    case "webDevelopment":
      return <Globe2 className={className} />

    case "mobileDevelopment":
      return <Smartphone className={className} />

    case "cloudDevops":
      return <Cloud className={className} />

    case "apiDevelopment":
      return <Database className={className} />

    case "aiDevelopment":
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
    case "hosted":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"

    case "inProgress":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400"

    case "planning":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400"

    default:
      return ""
  }
}

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

export default function Projects() {
  const t = useTranslations("Projects")

  const [category, setCategory] =
    useState<CategoryFilter>("all")

  const [status, setStatus] =
    useState<StatusFilter>("all")

  /* =======================================================
     FILTER OPTIONS
  ======================================================= */

  const categories: CategoryFilter[] = [
    "all",
    "webDevelopment",
    "mobileDevelopment",
    "softwareDevelopment",
    "cloudDevops",
    "apiDevelopment",
    "aiDevelopment",
  ]

  const statuses: StatusFilter[] = [
    "all",
    "hosted",
    "inProgress",
    "planning",
  ]

  /* =======================================================
     FILTER PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        category === "all" ||
        project.category === category

      const statusMatch =
        status === "all" ||
        project.status === status

      return categoryMatch && statusMatch
    })
  }, [category, status])

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setCategory("all")
    setStatus("all")
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {t("portfolio")}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {t("exploreTitle")}
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            {t("projectsCount")}
          </p>

        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <Card className="mt-8 border-0 shadow-sm">
          <CardContent className="p-4 md:p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* CATEGORY FILTER */}

              <div className="flex flex-1 flex-wrap gap-2">

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
                      {t(`categories.${item}`)}
                    </Button>
                  )
                })}

              </div>

              {/* STATUS FILTER */}

              <div className="flex items-center gap-2">

                <span className="hidden text-sm text-muted-foreground sm:block">
                  {t("statusLabel")}
                </span>

                <Select
                  value={status}
                  onValueChange={(value) => {
                    setStatus(
                      value as StatusFilter
                    )
                  }}
                >
                  <SelectTrigger className="w-[170px]">
                    <SelectValue
                      placeholder={t(
                        "selectStatus"
                      )}
                    />
                  </SelectTrigger>

                  <SelectContent>
                    {statuses.map((item) => (
                      <SelectItem
                        key={item}
                        value={item}
                      >
                        {t(`statuses.${item}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

              </div>

            </div>

          </CardContent>
        </Card>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        {filteredProjects.length > 0 ? (

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map(
              (project, index) => (

                <Card
                  key={project.id}
                  className="group relative overflow-hidden border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[16/9] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={t(
                        `items.${project.id}.title`
                      )}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

                    {/* NUMBER */}

                    <div className="absolute left-5 top-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-xs font-bold shadow-sm backdrop-blur">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    {/* STATUS */}

                    <div className="absolute right-5 top-5">

                      <Badge
                        className={`${statusStyle(
                          project.status
                        )} border-0 bg-background/90 backdrop-blur`}
                      >
                        {t(
                          `statuses.${project.status}`
                        )}
                      </Badge>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <CardContent className="p-6">

                    {/* CATEGORY */}

                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">

                      <CategoryIcon
                        category={project.category}
                      />

                      <span>
                        {t(
                          `categories.${project.category}`
                        )}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3 className="mt-3 text-2xl font-bold tracking-tight">
                      {t(
                        `items.${project.id}.title`
                      )}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {t(
                        `items.${project.id}.description`
                      )}
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

                      {project.technologies.length >
                        5 && (
                        <Badge variant="secondary">
                          +
                          {project.technologies.length -
                            5}
                        </Badge>
                      )}

                    </div>

                  </CardContent>

                  {/* =================================================
                      HOSTED PROJECT LINK
                  ================================================= */}

                  {project.status === "hosted" &&
                    project.url && (

                      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">

                        <Button
                          
                          size="icon"
                          className="pointer-events-auto h-14 w-14 rounded-full border border-white/40 bg-white/20 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-110 hover:bg-white/30"
                          aria-label={t(
                            "viewProject",
                            {
                              project: t(
                                `items.${project.id}.title`
                              ),
                            }
                          )}
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

          /* =================================================
             EMPTY STATE
          ================================================= */

          <Card className="mt-10">

            <CardContent className="flex flex-col items-center justify-center py-24 text-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Code2 className="h-6 w-6 text-muted-foreground" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {t("empty.title")}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                {t("empty.description")}
              </p>

              <Button
                type="button"
                variant="outline"
                className="mt-6"
                onClick={clearFilters}
              >
                {t("empty.clearFilters")}
              </Button>

            </CardContent>

          </Card>

        )}

      </div>
    </section>
  )
}