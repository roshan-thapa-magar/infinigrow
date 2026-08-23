import { Badge } from "../ui/badge"
import { useTranslations } from "next-intl"

export default function ProjectIntro() {
  const t = useTranslations("ProjectIntro")

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
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

          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  )
}