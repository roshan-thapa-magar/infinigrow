import {
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const technologyGroups = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces designed for performance, accessibility, and excellent user experiences.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "ShadCn"
    ],
  },

  {
    icon: Server,
    number: "02",
    title: "Backend Development",
    description:
      "Secure and scalable backend systems, APIs, and application services built around your business requirements.",
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "FastAPI",
    ],
  },

  {
    icon: Braces,
    number: "03",
    title: "API Development",
    description:
      "Reliable APIs that connect web applications, mobile apps, third-party services, and business systems.",
    technologies: [
      "REST API",
      "RESTful Services",
      "API Integration",
      "Authentication",
      "Webhooks",
    ],
  },

  {
    icon: Smartphone,
    number: "04",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications designed for performance, usability, and scalable product experiences.",
    technologies: [
      "Swift",
      "Kotlin",
      "Flutter",
      "React Native",
      "iOS",
      "Android",
    ],
  },

  {
    icon: BrainCircuit,
    number: "05",
    title: "AI & Machine Learning",
    description:
      "Intelligent digital solutions that use AI to automate tasks, analyze information, and create smarter user experiences.",
    technologies: [
      "AI Integration",
      "Machine Learning",
      "Generative AI",
      "AI APIs",
      "Python",
      "Automation",
    ],
  },

  {
    icon: Globe,
    number: "06",
    title: "CMS & WordPress",
    description:
      "Flexible websites and content platforms that make it easier for businesses to manage and grow their online presence.",
    technologies: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "Custom Themes",
      "Custom Plugins",
    ],
  },

  {
    icon: Database,
    number: "07",
    title: "Database",
    description:
      "Reliable data storage and management solutions selected according to application requirements and scale.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Database Design",
    ],
  },

  {
    icon: Cloud,
    number: "08",
    title: "Cloud & DevOps",
    description:
      "Deployment and infrastructure solutions focused on reliability, automation, security, and scalability.",
    technologies: [
      "AWS",
      "Vercel",
      "Docker",
      "CI/CD",
      "Cloud Services",
    ],
  },

  {
    icon: Wrench,
    number: "09",
    title: "Development Tools",
    description:
      "Modern development workflows that help teams collaborate efficiently and maintain high-quality software.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "ESLint",
      "Prettier",
    ],
  },
]

export default function TechnologySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-end">

          <div>
            <Badge
              variant="outline"
              className="
                border-emerald-500/30
                bg-emerald-500/5
                text-emerald-600
                dark:text-emerald-400
              "
            >
              Technology
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The technology behind{" "}
              <span className="text-emerald-500">
                what we build.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              We choose technologies based on the needs of each project,
              focusing on performance, maintainability, scalability, and
              long-term value rather than simply following trends.
            </p>
          </div>

        </div>

        {/* ================= TECHNOLOGY GRID ================= */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {technologyGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-background
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500/30
                  hover:shadow-lg
                  md:p-8
                "
              >

                {/* Decorative background */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-500/5
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-500/10
                        text-emerald-600
                        dark:text-emerald-400
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      {group.number}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    {group.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t pt-6">
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          bg-muted/40
                          px-2.5
                          py-1.5
                          text-xs
                          font-medium
                          text-muted-foreground
                          transition-colors
                          group-hover:border-emerald-500/20
                          group-hover:text-foreground
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            )
          })}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div
          className="
            mt-14
            overflow-hidden
            rounded-2xl
            border
            bg-muted/30
            p-7
            md:p-10
          "
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="flex gap-5">

              <div
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/10
                  text-emerald-600
                  dark:flex
                  dark:text-emerald-400
                  md:flex
                "
              >
                <Layers3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Right Technology
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  We choose technology around the problem.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                  Every project is different. We select the right tools,
                  architecture, and technologies based on the product,
                  users, business requirements, and future growth.
                </p>
              </div>

            </div>

            <Button
              variant="outline"
              className="group w-fit"
            >
              <Link
                href="/services"
                className="flex items-center gap-2"
              >
                Explore Our Services

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </Button>

          </div>
        </div>

      </div>
    </section>
  )
}