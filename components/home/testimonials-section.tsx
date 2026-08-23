"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/lib/site-data"
import { useTranslations } from "next-intl"

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials")

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
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

        {/* ================= TESTIMONIALS ================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5"
            >

              {/* Rating */}
              <div
                className="flex gap-1 text-emerald-500"
                aria-label="5 star rating"
              >
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-6 leading-relaxed text-muted-foreground">
                “{t(`items.${testimonial.id}.quote`)}”
              </p>

              {/* Client */}
              <div className="mt-7 flex items-center gap-4 border-t pt-6">
                <Avatar className="h-11 w-11 border border-emerald-500/20">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={t(`items.${testimonial.id}.name`)}
                  />

                  <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-semibold">
                    {t(`items.${testimonial.id}.name`)}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {t(`items.${testimonial.id}.role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM TRUST ================= */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">

          <p className="text-sm text-muted-foreground">
            {t("bottomDescription")}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-emerald-500">●</span>
            {t("trusted")}
          </div>

        </div>
      </div>
    </section>
  )
}