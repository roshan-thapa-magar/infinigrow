"use client"

import {
  Code2,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import { useTranslations } from "next-intl"

import ServicePage from "@/components/services/service-page"

export default function SoftwareDevelopmentPage() {
  const t = useTranslations("services.softwareDevelopment")

  const softwareDevelopmentData = {
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

      image: {
        src: "/images/software-development.png",
        alt: t("hero.imageAlt"),
      },

      features: [
        {
          icon: Code2,
          title: t("hero.features.custom.title"),
          description: t(
            "hero.features.custom.description"
          ),
        },
        {
          icon: Layers,
          title: t("hero.features.scalable.title"),
          description: t(
            "hero.features.scalable.description"
          ),
        },
        {
          icon: Rocket,
          title: t("hero.features.growth.title"),
          description: t(
            "hero.features.growth.description"
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
          icon: LayoutDashboard,
          title: t(
            "middleSection.items.business.title"
          ),
          description: t(
            "middleSection.items.business.description"
          ),
        },
        {
          icon: Database,
          title: t(
            "middleSection.items.backend.title"
          ),
          description: t(
            "middleSection.items.backend.description"
          ),
        },
        {
          icon: Globe,
          title: t(
            "middleSection.items.integration.title"
          ),
          description: t(
            "middleSection.items.integration.description"
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
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "Docker",
    ],

    benefits: [
      {
        icon: Zap,
        title: t("benefits.efficient.title"),
        description: t(
          "benefits.efficient.description"
        ),
      },
      {
        icon: Layers,
        title: t("benefits.modular.title"),
        description: t(
          "benefits.modular.description"
        ),
      },
      {
        icon: ShieldCheck,
        title: t("benefits.secure.title"),
        description: t(
          "benefits.secure.description"
        ),
      },
      {
        icon: Rocket,
        title: t("benefits.scale.title"),
        description: t(
          "benefits.scale.description"
        ),
      },
    ],

    process: [
      {
        number: t("process.discovery.number"),
        title: t("process.discovery.title"),
        description: t(
          "process.discovery.description"
        ),
      },
      {
        number: t("process.planning.number"),
        title: t("process.planning.title"),
        description: t(
          "process.planning.description"
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
        number: t("process.maintenance.number"),
        title: t("process.maintenance.title"),
        description: t(
          "process.maintenance.description"
        ),
      },
    ],

    cta: {
      eyebrow: t("cta.eyebrow"),
      title: t("cta.title"),
      description: t("cta.description"),
    },
  }

  return <ServicePage {...softwareDevelopmentData} />
}