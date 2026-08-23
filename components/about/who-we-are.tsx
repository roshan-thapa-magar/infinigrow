"use client"

import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
  Users,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    key: "ideasFirst",
    icon: Lightbulb,
  },
  {
    key: "modernTechnology",
    icon: Code2,
  },
  {
    key: "peopleFocused",
    icon: Users,
  },
  {
    key: "resultsDriven",
    icon: Target,
  },
]

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre")

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">

          <div>
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
            >
              {t("badge")}
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("title")}{" "}
              <span className="text-emerald-500">
                {t("titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              {t("description.first")}
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {t("description.second")}
            </p>
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border bg-muted">
            <Image
              src="/images/about/who-we-are.jpg"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-sm font-medium text-white/70">
                {t("imageLabel")}
              </p>

              <p className="mt-1 max-w-md text-xl font-semibold text-white md:text-2xl">
                {t("imageTitle")}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                {t("drivesUs")}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {t("solutionTitle")}
                <br />
                {t("solutionTitleSecond")}
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                {t("solutionDescription")}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-10 divide-y border-y">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.key}
                    className="flex gap-5 py-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {t(`highlights.${item.key}.title`)}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {t(`highlights.${item.key}.description`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                variant="outline"
                className="group"
                
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2"
                >
                  {t("cta")}

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="mt-16 border-y">
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                {t("stats.digital.title")}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {t("stats.digital.description")}
              </p>
            </div>

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                {t("stats.modern.title")}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {t("stats.modern.description")}
              </p>
            </div>

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                {t("stats.longTerm.title")}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {t("stats.longTerm.description")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}