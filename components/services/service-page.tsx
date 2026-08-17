"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ServiceFeature = {
  icon: React.ElementType
  title: string
  description: string
}

type ServiceBenefit = {
  icon: React.ElementType
  title: string
  description: string
}

type ProcessItem = {
  number: string
  title: string
  description: string
}

type MiddleItem = {
  icon: React.ElementType
  title: string
  description: string
}

type ServicePageProps = {
  hero: {
    badge: string
    title: React.ReactNode
    description: string
    primaryButton: string

    image?: {
      src: string
      alt: string
    }

    features: ServiceFeature[]
  }

  capabilities: string[]

  middleSection: {
    badge: string
    title: React.ReactNode
    description: string
    items: MiddleItem[]
  }

  technologies: string[]

  benefits: ServiceBenefit[]

  process: ProcessItem[]

  cta: {
    eyebrow: string
    title: string
    description: string
  }
}

export default function ServicePage({
  hero,
  capabilities,
  middleSection,
  technologies,
  benefits,
  process,
  cta,
}: ServicePageProps) {
  return (
    <main className="bg-background">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">

          {/* HERO CONTENT + IMAGE */}

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT */}

            <div className="max-w-4xl">

              <Badge
                variant="outline"
                className="mb-6 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                {hero.badge}
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {hero.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                >
                  <Link
                    href="/contact"
                    className="flex items-center"
                  >
                    {hero.primaryButton}

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                >
                  <Link href="#">
                    Explore Services
                  </Link>
                </Button>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            {hero.image && (
              <div className="relative mx-auto w-full max-w-xl lg:mx-0">

                {/* Background glow */}

                <div className="absolute -inset-6 rounded-[2rem] bg-emerald-500/10 blur-3xl" />

                {/* Image container */}

                <div className="relative overflow-hidden rounded-2xl border bg-muted/20 shadow-2xl">

                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={900}
                    height={700}
                    priority
                    className="h-auto w-full object-cover"
                  />

                </div>

              </div>
            )}

          </div>

          {/* HERO FEATURES */}

          <div className="mt-16 grid border-y sm:grid-cols-3">

            {hero.features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={`
                    px-6 py-7
                    ${
                      index < 2
                        ? "border-b sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >

                  <Icon className="h-6 w-6 text-emerald-500" />

                  <p className="mt-3 text-lg font-semibold">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                What We Build
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                {middleSection.badge === "API Development Capabilities"
                  ? "Digital products connected around your business."
                  : "Digital products designed around your business."}
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-muted-foreground">
                {capabilities.length > 0
                  ? "Every project has different requirements. We build custom solutions around your users, business goals, technical requirements, and long-term growth."
                  : ""}
              </p>

            </div>

            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">

              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b py-4"
                >

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  </div>

                  <span className="text-sm font-medium">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT CAPABILITIES
      ===================================================== */}

      <section className="border-y bg-muted/30 py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="max-w-3xl">

            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              {middleSection.badge}
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              {middleSection.title}
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              {middleSection.description}
            </p>

          </div>

          <div className="mt-14 grid gap-x-12 md:grid-cols-2">

            {middleSection.items.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="border-t py-8"
                >

                  <Icon className="h-7 w-7 text-emerald-500" />

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="text-center">

            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              Technology Stack
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Technologies we work with.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              We choose technologies based on your project's requirements,
              scalability, performance, and long-term maintainability.
            </p>

          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">

            {technologies.map((technology) => (
              <div
                key={technology}
                className="
                  rounded-lg
                  border
                  bg-background
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-emerald-500/40
                  hover:bg-emerald-500/5
                "
              >
                {technology}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY INFINIGROW
      ===================================================== */}

      <section className="border-y bg-muted/30 py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                Why InfiniGrow
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Built for performance, usability, and growth.
              </h2>

            </div>

            <div className="grid sm:grid-cols-2">

              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <div
                    key={benefit.title}
                    className="border-t px-0 py-8 sm:px-6 sm:even:border-l"
                  >

                    <Icon className="h-6 w-6 text-emerald-500" />

                    <h3 className="mt-4 font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>

                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="max-w-3xl">

            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              Our Process
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              From idea to launch.
            </h2>

            <p className="mt-5 text-muted-foreground">
              A clear development process keeps projects organized,
              transparent, and focused on your business goals.
            </p>

          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3">

            {process.map((item) => (
              <div
                key={item.number}
                className="border-t p-6 first:pl-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(3)]:border-r"
              >

                <span className="text-sm font-bold text-emerald-500">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t bg-emerald-600 text-white dark:bg-emerald-500">

        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {cta.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                {cta.title}
              </h2>

              <p className="mt-4 max-w-xl text-white/80">
                {cta.description}
              </p>

            </div>

            <Button
              size="lg"
              variant="secondary"
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="flex items-center"
              >
                Talk to Our Team

                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

        </div>
      </section>

    </main>
  )
}