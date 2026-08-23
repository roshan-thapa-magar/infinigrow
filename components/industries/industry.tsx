"use client"

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const industries = [
  {
    slug: "education",
    icon: GraduationCap,
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
  },
  {
    slug: "hospitality",
    icon: Hotel,
  },
  {
    slug: "finance-business",
    icon: BriefcaseBusiness,
  },
  {
    slug: "professional-services",
    icon: Building2,
  },
  {
    slug: "startups-small-businesses",
    icon: Rocket,
  },
]

export default function Industry() {
  const t = useTranslations("Industries")

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* SECTION HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {t("section.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {t("section.title")}
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <article
                key={industry.slug}
                className="group relative overflow-hidden rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
              >

                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-7 text-2xl font-bold tracking-tight">
                  {t(`items.${industry.slug}.title`)}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {t(`items.${industry.slug}.description`)}
                </p>

                {/* SOLUTIONS */}
                <div className="mt-6 space-y-3">
                  {t
                    .raw(`items.${industry.slug}.solutions`)
                    .map((solution: string) => (
                      <div
                        key={solution}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />

                        <span>{solution}</span>
                      </div>
                    ))}
                </div>

                {/* LINK */}
                <div className="mt-7 border-t pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all group-hover:gap-3 dark:text-emerald-400"
                  >
                    {t("link")}

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}