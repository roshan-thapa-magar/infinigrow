"use client"

import Link from "next/link"
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

const services = [
  {
    id: "webDevelopment",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    id: "mobileDevelopment",
    icon: Smartphone,
    href: "/services/mobile-development",
  },
  {
    id: "uiUxDesign",
    icon: Globe,
    href: "/services/ui-ux-design",
  },
  {
    id: "apiDevelopment",
    icon: Database,
    href: "/services/api-development",
  },
  {
    id: "cloudSolutions",
    icon: Cloud,
    href: "/services/cloud-solutions",
  },
  {
    id: "cyberSecurity",
    icon: ShieldCheck,
    href: "/services/cyber-security",
  },
]

export default function ServicesCards() {
  const t = useTranslations("ServicesCards")

  return (
    <section id="services" className="border-t py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            {t("badge")}
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group"
              >
                <Card className="h-full border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-7">

                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Icon className="h-5 w-5 text-emerald-500" />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">
                      {t(`items.${service.id}.title`)}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {t(`items.${service.id}.description`)}
                    </p>

                    {/* Link */}
                    <div className="mt-6 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {t("explore")}

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}