"use client"

import TeamCard from "@/components/team-card"
import { useTranslations } from "next-intl"

const memberIds = [
  "khum",
  "sundar",
  "roshan",
  "suman",
  "samrose",
] as const

export default function TeamSection() {
  const t = useTranslations("Team")

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Team */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {memberIds.map((id) => (
            <TeamCard
              key={t(`members.${id}.id`)}
              name={t(`members.${id}.name`)}
              designation={t(`members.${id}.designation`)}
              image={t(`members.${id}.image`)}
              badge={t(`members.${id}.badge`)}
              about={t(`members.${id}.about`)}
              aboutLabel={t("aboutLabel")}
              href={t(`members.${id}.href`)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}