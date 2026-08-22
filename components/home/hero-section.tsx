import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations("Hero");
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 md:min-h-[calc(100dvh-4rem)] md:grid-cols-2 md:px-8 lg:gap-16">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col justify-center space-y-8 py-12 md:py-16 lg:py-0">

          {/* Badge */}
          <Badge
            className="
              w-fit
              inline-flex
              items-center
              gap-2
              border-emerald-200
              bg-emerald-50
              text-emerald-700
              hover:bg-emerald-100
              dark:border-emerald-800
              dark:bg-emerald-950/30
              dark:text-emerald-400
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title")}
            <span className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
           {t("description")}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground shadow-lg shadow-emerald-500/20 hover:bg-primary/90"
            >
              <Link href="/contact">
                 {t("startProject")}
              </Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-muted"
            >
              <Link href="/services">
                 {t("exploreServices")}
              </Link>
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid max-w-xl grid-cols-3 gap-3 border-t pt-8 sm:gap-6">
            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                50+
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {t("projectsDelivered")}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                20+
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {t("technologies")}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                99%
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {t("clientSatisfaction")}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="relative hidden h-[calc(100svh-4rem)] min-h-[600px] md:block md:h-[calc(100dvh-4rem)]">

          {/* Emerald Glow */}
          <div className="absolute inset-y-20 right-0 -z-10 w-3/4 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* Image */}
          <div
            className="relative h-full w-full overflow-hidden bg-black"
            style={{
              clipPath:
                "polygon(18% 0%, 100% 0%, 100% 100%, 18% 100%, 0% 50%)",
            }}
          >
            <Image
              src="/images/image.png"
              alt={t("imageAlt")}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}