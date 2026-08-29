"use client"

import {
  Code2,
  Database,
  Globe,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import { useTranslations } from "next-intl"

import ServicePage from "@/components/services/service-page"

export default function ApiDevelopmentPage() {
  const t = useTranslations("services.apiDevelopment")

  const apiDevelopmentData = {
    hero: {
      badge: t("hero.badge"),

      title: (
        <>
          {t("hero.titleBefore")}{" "}
          <span className="text-emerald-500">
            {t("hero.titleHighlight")}
          </span>
        </>
      ),

      description: t("hero.description"),

      primaryButton: t("hero.primaryButton"),

      features: [
        {
          icon: Code2,
          title: t("hero.features.modern.title"),
          description: t(
            "hero.features.modern.description"
          ),
        },
        {
          icon: ShieldCheck,
          title: t("hero.features.secure.title"),
          description: t(
            "hero.features.secure.description"
          ),
        },
        {
          icon: Layers,
          title: t("hero.features.scale.title"),
          description: t(
            "hero.features.scale.description"
          ),
        },
      ],
    },

    capabilities: t.raw("capabilities") as string[],

    middleSection: {
      badge: t("middleSection.badge"),

      title: (
        <>
          {t("middleSection.titleBefore")}
          <br />
          {t("middleSection.titleAfter")}
        </>
      ),

      description: t("middleSection.description"),

      items: [
        {
          icon: Server,
          title: t("middleSection.items.rest.title"),
          description: t(
            "middleSection.items.rest.description"
          ),
        },
        {
          icon: Database,
          title: t("middleSection.items.database.title"),
          description: t(
            "middleSection.items.database.description"
          ),
        },
        {
          icon: Globe,
          title: t(
            "middleSection.items.thirdParty.title"
          ),
          description: t(
            "middleSection.items.thirdParty.description"
          ),
        },
        {
          icon: Sparkles,
          title: t(
            "middleSection.items.automation.title"
          ),
          description: t(
            "middleSection.items.automation.description"
          ),
        },
      ],
    },

    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "OpenAPI",
    ],

    benefits: [
      {
        icon: Zap,
        title: t("benefits.performance.title"),
        description: t(
          "benefits.performance.description"
        ),
      },
      {
        icon: ShieldCheck,
        title: t("benefits.security.title"),
        description: t(
          "benefits.security.description"
        ),
      },
      {
        icon: Layers,
        title: t("benefits.scalable.title"),
        description: t(
          "benefits.scalable.description"
        ),
      },
      {
        icon: Rocket,
        title: t("benefits.integration.title"),
        description: t(
          "benefits.integration.description"
        ),
      },
    ],

    process: [
      {
        number: t("process.requirements.number"),
        title: t("process.requirements.title"),
        description: t(
          "process.requirements.description"
        ),
      },
      {
        number: t("process.architecture.number"),
        title: t("process.architecture.title"),
        description: t(
          "process.architecture.description"
        ),
      },
      {
        number: t("process.development.number"),
        title: t("process.development.title"),
        description: t(
          "process.development.description"
        ),
      },
      {
        number: t("process.testing.number"),
        title: t("process.testing.title"),
        description: t(
          "process.testing.description"
        ),
      },
      {
        number: t("process.deployment.number"),
        title: t("process.deployment.title"),
        description: t(
          "process.deployment.description"
        ),
      },
      {
        number: t("process.support.number"),
        title: t("process.support.title"),
        description: t(
          "process.support.description"
        ),
      },
    ],

    cta: {
      eyebrow: t("cta.eyebrow"),
      title: t("cta.title"),
      description: t("cta.description"),
    },
  }

  return <ServicePage {...apiDevelopmentData} />
}