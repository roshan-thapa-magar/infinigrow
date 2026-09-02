"use client";

import ProjectRequestForm from "@/components/project-request-form";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StartProjectPage() {
  const t = useTranslations("StartProject");

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 pb-10 pt-16 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("eyebrow")}
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}
            <span className="block text-primary">
              {t("titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Project Request Form */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ProjectRequestForm />

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge
              variant="outline"
              className="gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
            >
              <Clock className="h-3.5 w-3.5" />
              {t("badges.response")}
            </Badge>

            <Badge
              variant="outline"
              className="gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
            >
              <Users className="h-3.5 w-3.5" />
              {t("badges.delivered")}
            </Badge>

            <Badge
              variant="outline"
              className="gap-1.5 rounded-full px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
            >
              <Shield className="h-3.5 w-3.5" />
              {t("badges.consultation")}
            </Badge>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-10 lg:h-16" />
    </main>
  );
}