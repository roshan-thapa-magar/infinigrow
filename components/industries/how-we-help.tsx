"use client"

import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"

const steps = ["01", "02", "03", "04"]

export default function HowWeHelp() {
  const t = useTranslations("HowWeHelp")

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LEFT */}
          <div>
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              {t("badge")}
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step}
                className="border-l-2 border-emerald-500 pl-5"
              >
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {step}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {t(`steps.${step}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t(`steps.${step}.description`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}