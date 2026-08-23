"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const services = [
  {
    key: "web-development",
    slug: "web-development",
  },
  {
    key: "mobile-development",
    slug: "mobile-development",
  },
  {
    key: "software-development",
    slug: "software-development",
  },
  {
    key: "api-development",
    slug: "api-development",
  },
  {
    key: "cloud-and-devops",
    slug: "cloud-and-devops",
  },
  {
    key: "ai-development",
    slug: "ai-development",
  },
  {
    key: "ui-ux-design",
    slug: "ui-ux-design",
  },
  {
    key: "technology-consulting",
    slug: "technology-consulting",
  },
]

export default function Services() {
  const t = useTranslations("IndustriesServices")

  return (
    <section className="border-y bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* SERVICES */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.key}
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
            >
              <span className="text-sm font-medium">
                {t(`services.${service.key}`)}
              </span>

              <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}