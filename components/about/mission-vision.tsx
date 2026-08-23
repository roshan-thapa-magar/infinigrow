"use client"

import {
  Eye,
  Target,
  ArrowUpRight,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MissionVision() {
  const t = useTranslations("MissionVision")

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
          >
            {t("badge")}
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("title")}{" "}
            <span className="text-emerald-500">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {/* MISSION */}
          <div
            className="
              group relative overflow-hidden rounded-2xl border
              bg-background p-7 shadow-sm transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg md:p-10
            "
          >
            <div
              className="
                pointer-events-none absolute -right-20 -top-20
                h-56 w-56 rounded-full bg-emerald-500/5
                transition-transform duration-500
                group-hover:scale-125
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex h-14 w-14 items-center justify-center rounded-2xl
                  bg-emerald-500/10 text-emerald-600
                  dark:text-emerald-400
                "
              >
                <Target className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
                {t("mission.label")}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {t("mission.title")}
              </h3>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                {t("mission.description.first")}
              </p>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {t("mission.description.second")}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-sm font-medium text-muted-foreground">
                  {t("mission.bottom")}
                </span>
              </div>

            </div>
          </div>

          {/* VISION */}
          <div
            className="
              group relative overflow-hidden rounded-2xl border
              bg-foreground p-7 text-background shadow-sm
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-lg dark:bg-card dark:text-foreground md:p-10
            "
          >
            <div
              className="
                pointer-events-none absolute -bottom-20 -right-20
                h-64 w-64 rounded-full bg-emerald-500/10
                transition-transform duration-500
                group-hover:scale-125
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex h-14 w-14 items-center justify-center rounded-2xl
                  bg-emerald-500/15 text-emerald-400
                "
              >
                <Eye className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                {t("vision.label")}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {t("vision.title")}
              </h3>

              <p className="mt-5 text-base leading-7 text-background/70 dark:text-muted-foreground">
                {t("vision.description.first")}
              </p>

              <p className="mt-4 text-base leading-7 text-background/70 dark:text-muted-foreground">
                {t("vision.description.second")}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-background/10 pt-6 dark:border-border">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-sm font-medium text-background/70 dark:text-muted-foreground">
                  {t("vision.bottom")}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            variant="outline"
            className="group"
            
          >
            <Link
              href="/about#how-we-work"
              className="flex items-center gap-2"
            >
              {t("cta")}

              <ArrowUpRight
                className="
                  h-4 w-4 transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}