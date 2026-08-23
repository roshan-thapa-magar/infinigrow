import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export default function CompanyInfoSection() {
  const t = useTranslations("CompanyInfo")

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-10">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t("title")}

            <span className="block text-emerald-600 dark:text-emerald-400">
              {t("titleHighlight")}
            </span>
          </h2>
        </div>

        {/* Company Description */}
        <div className="space-y-6 text-justify text-base leading-8 text-muted-foreground md:text-lg">

          <p>
            <span className="font-semibold text-foreground">
              InfiniGrow Technology
            </span>{" "}
            {t("paragraph1").replace("InfiniGrow Technology ", "")}
          </p>

          <p>
            {t("paragraph2")}
          </p>

          <p>
            {t("paragraph3")}
          </p>

          <p>
            {t("paragraph4")}
          </p>

          <p>
            {t("paragraph5")}
          </p>

        </div>
      </div>
    </section>
  )
}