"use client"

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    key: "discover",
    number: "01",
    icon: Search,
  },
  {
    key: "plan",
    number: "02",
    icon: Lightbulb,
  },
  {
    key: "design",
    number: "03",
    icon: Sparkles,
  },
  {
    key: "develop",
    number: "04",
    icon: Code2,
  },
  {
    key: "testRefine",
    number: "05",
    icon: Settings2,
  },
  {
    key: "launchSupport",
    number: "06",
    icon: Rocket,
  },
]

const highlights = [
  {
    key: "communication",
  },
  {
    key: "collaboration",
  },
  {
    key: "support",
  },
]

export default function ProcessSection() {
  const t = useTranslations("ProcessSection")

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <Badge
            variant="outline"
            className="
              border-emerald-500/30
              bg-emerald-500/5
              text-emerald-600
              dark:text-emerald-400
            "
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

        {/* DESKTOP PROCESS */}
        <div className="relative mt-20 hidden lg:block">

          <div className="absolute left-0 right-0 top-7 h-px bg-border" />

          <div className="relative grid grid-cols-6">

            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.key}
                  className="group relative px-4"
                >

                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-7 text-center text-xs font-semibold tracking-[0.2em] text-emerald-500">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-center text-lg font-semibold tracking-tight">
                    {t(`steps.${step.key}.title`)}
                  </h3>

                  <p className="mt-3 text-center text-sm leading-6 text-muted-foreground">
                    {t(`steps.${step.key}.description`)}
                  </p>

                </div>
              )
            })}

          </div>
        </div>

        {/* MOBILE PROCESS */}
        <div className="relative mt-14 lg:hidden">

          <div className="absolute bottom-5 left-[27px] top-5 w-px bg-border" />

          <div className="space-y-8">

            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.key}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="pt-1">

                    <p className="text-xs font-semibold tracking-[0.2em] text-emerald-500">
                      {step.number}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {t(`steps.${step.key}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t(`steps.${step.key}.description`)}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {highlights.map((highlight) => (
            <div
              key={highlight.key}
              className="border-t pt-5"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />

              <h3 className="mt-4 font-semibold">
                {t(`highlights.${highlight.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {t(`highlights.${highlight.key}.description`)}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">

          <Button
            
            className="
              group
              bg-emerald-600
              text-white
              hover:bg-emerald-700
              dark:bg-emerald-500
              dark:hover:bg-emerald-600
            "
          >
            <Link
              href="/contact"
              className="flex items-center gap-2"
            >
              {t("button")}

              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}