"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export type Service = {
  id: string
  image: string
}

export const services: Service[] = [
  {
    id: "generativeAi",
    image: "/images/generative.png",
  },
  {
    id: "webDevelopment",
    image: "/images/web-development.png",
  },
  {
    id: "softwareDevelopment",
    image: "/images/software-development.png",
  },
  {
    id: "mobileDevelopment",
    image: "/images/mobile-development.png",
  },
  {
    id: "devopsCloud",
    image: "/images/devops-cloud.png",
  },
  {
    id: "aiData",
    image: "/images/ai-data.png",
  },
]

export default function ServicesSection() {
  const t = useTranslations("Services")

  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("title")}

            <span className="block text-emerald-600 dark:text-emerald-400">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        {/* SERVICE TABS */}
        <div className="mt-14 overflow-x-auto pb-3 scrollbar-thin">
          <div className="mx-auto flex w-max min-w-full justify-center gap-2 rounded-2xl border-b p-2 md:border md:bg-background">
            {services.map((service) => {
              const isActive = activeService.id === service.id

              return (
                <Button
                  key={service.id}
                  variant="ghost"
                  onClick={() => setActiveService(service)}
                  className={`
                    shrink-0
                    rounded-xl
                    px-5
                    py-6
                    text-sm
                    font-medium
                    transition-all
                    ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md hover:bg-emerald-700 hover:text-white"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  {t(`items.${service.id}.name`)}
                </Button>
              )
            })}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 overflow-hidden rounded-3xl border bg-background shadow-sm">
          <div className="grid lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

              <Badge
                variant="secondary"
                className="w-fit bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              >
                {t(`items.${activeService.id}.name`)}
              </Badge>

              <h3 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                {t(`items.${activeService.id}.title`)}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t(`items.${activeService.id}.description`)}
              </p>

              {/* FEATURES */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {(
                  t.raw(`items.${activeService.id}.features`) as string[]
                ).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
                >
                  {t("explore")}{" "}
                  {t(`items.${activeService.id}.name`)}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[520px]">
              <Image
                src={activeService.image}
                alt={t(`items.${activeService.id}.name`)}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              {/* IMAGE LABEL */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    {t(`items.${activeService.id}.name`)}
                  </p>

                  <p className="mt-1 text-xs text-white/70">
                    {t("imageDescription")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}