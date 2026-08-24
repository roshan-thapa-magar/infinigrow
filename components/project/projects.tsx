"use client"

import { useMemo, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence, useInView, Variants } from "framer-motion"

import {
  ExternalLink,
  Globe2,
  Smartphone,
  Code2,
  Cloud,
  Bot,
  Database,
  Sparkles,
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

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const countVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
}

const filterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
}

const emptyStateVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2,
    },
  },
}

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="projects"
      className="scroll-mt-24 bg-muted/30 py-20 md:py-28 overflow-hidden"
    >
      {/* Animated background decorations */}
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={headerVariants}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p
              variants={badgeVariants}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
            >
              <Sparkles className="h-4 w-4" />
              {t("portfolio")}
            </motion.p>

            <motion.h2
              variants={titleVariants}
              className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            >
              {t("exploreTitle")}
            </motion.h2>
          </div>

          <motion.p
            variants={countVariants}
            className="text-sm text-muted-foreground"
          >
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            {t("projectsCount")}
          </motion.p>
        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <motion.div variants={filterVariants}>
          <Card className="mt-8 border-0 shadow-sm">
            <CardContent className="p-4 md:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* CATEGORY FILTER */}
                <div className="flex flex-1 flex-wrap gap-2">
                  {categories.map((item) => {
                    const active = category === item
                    return (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
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
                          {t(`categories.${item}`)}
                        </Button>
                      </motion.div>
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
                      setStatus(value as StatusFilter)
                    }}
                  >
                    <SelectTrigger className="w-[170px]">
                      <SelectValue placeholder={t("selectStatus")} />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((item) => (
                        <SelectItem key={item} value={item}>
                          {t(`statuses.${item}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        {filteredProjects.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${status}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  custom={index}
                  layout
                >
                  <Card
                    className="group relative overflow-hidden border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={t(`items.${project.id}.title`)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <motion.div
                        className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      {/* NUMBER */}
                      <div className="absolute left-5 top-5">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            delay: index * 0.05,
                          }}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-xs font-bold shadow-sm backdrop-blur"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>
                      </div>

                      {/* STATUS */}
                      <div className="absolute right-5 top-5">
                        <Badge
                          className={`${statusStyle(
                            project.status
                          )} border-0 bg-background/90 backdrop-blur`}
                        >
                          {t(`statuses.${project.status}`)}
                        </Badge>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <CardContent className="p-6">
                      {/* CATEGORY */}
                      <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        <CategoryIcon category={project.category} />
                        <span>{t(`categories.${project.category}`)}</span>
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-3 text-2xl font-bold tracking-tight">
                        {t(`items.${project.id}.title`)}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                        {t(`items.${project.id}.description`)}
                      </p>

                      {/* TECHNOLOGIES */}
                      <div className="mt-5 flex min-h-[52px] flex-wrap content-start gap-2">
                        {project.technologies.slice(0, 5).map((technology) => (
                          <motion.div
                            key={technology}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="secondary" className="font-normal">
                              {technology}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.technologies.length > 5 && (
                          <Badge variant="secondary">
                            +{project.technologies.length - 5}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    {/* HOSTED PROJECT LINK */}
                    {project.status === "hosted" && project.url && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100 group-hover:backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            className="pointer-events-auto h-14 w-14 rounded-full border border-white/40 bg-white/20 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-110 hover:bg-white/30"
                            aria-label={t("viewProject", {
                              project: t(`items.${project.id}.title`),
                            })}
                          >
                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-6 w-6" />
                            </Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          /* EMPTY STATE */
          <motion.div
            variants={emptyStateVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="mt-10">
              <CardContent className="flex flex-col items-center justify-center py-24 text-center">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-muted"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code2 className="h-6 w-6 text-muted-foreground" />
                </motion.div>

                <h3 className="mt-5 text-xl font-semibold">
                  {t("empty.title")}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {t("empty.description")}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={clearFilters}
                  >
                    {t("empty.clearFilters")}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}