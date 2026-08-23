"use client"

import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const values = [
  {
    number: "01",
    key: "innovation",
    icon: Lightbulb,
  },
  {
    number: "02",
    key: "quality",
    icon: CheckCircle2,
  },
  {
    number: "03",
    key: "transparency",
    icon: ShieldCheck,
  },
  {
    number: "04",
    key: "customerFocus",
    icon: HeartHandshake,
  },
  {
    number: "05",
    key: "collaboration",
    icon: Users,
  },
  {
    number: "06",
    key: "continuousGrowth",
    icon: Sparkles,
  },
]

export default function ValuesSection() {
  const t = useTranslations("ValuesSection")

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">

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
              {t("badge")}
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("title")}{" "}
              <span className="text-emerald-500">
                {t("titleHighlight")}
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg lg:ml-auto">
            {t("description")}
          </p>

        </div>

        {/* VALUES */}
        <div className="mt-16 border-t">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.number}
                className="
                  group grid gap-6 border-b py-7
                  transition-colors hover:bg-muted/30
                  md:grid-cols-[80px_70px_1fr]
                  md:items-center md:px-5
                "
              >
                {/* NUMBER */}
                <div>
                  <span className="text-sm font-semibold tracking-widest text-emerald-500">
                    {value.number}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl border bg-background
                    text-muted-foreground transition-all duration-300
                    group-hover:border-emerald-500/30
                    group-hover:bg-emerald-500/10
                    group-hover:text-emerald-600
                    dark:group-hover:text-emerald-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* CONTENT */}
                <div className="grid gap-3 md:grid-cols-[220px_1fr] md:items-center">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {t(`values.${value.key}.title`)}
                  </h3>

                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-14 grid gap-6 rounded-2xl border bg-muted/30 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
              {t("commitment.eyebrow")}
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
              {t("commitment.title")}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              {t("commitment.description")}
            </p>
          </div>

          <Button
            className="
              group w-fit
              bg-emerald-600 text-white
              hover:bg-emerald-700
              dark:bg-emerald-500
              dark:hover:bg-emerald-600
            "
            
          >
            <Link
              href="/services"
              className="flex items-center gap-2"
            >
              {t("commitment.button")}

              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform duration-300
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