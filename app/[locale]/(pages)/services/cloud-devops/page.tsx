"use client"

import {
  Cloud,
  GitBranch,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
} from "lucide-react"

import { useTranslations } from "next-intl"

import ServicePage from "@/components/services/service-page"

export default function CloudDevOpsPage() {
  const t = useTranslations("services.cloudDevOps")

  const cloudDevOpsData = {
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
        src: "/images/devops-cloud.png",
        alt: t("hero.imageAlt"),
      },

      features: [
        {
          icon: Cloud,
          title: t("hero.features.infrastructure.title"),
          description: t(
            "hero.features.infrastructure.description"
          ),
        },
        {
          icon: GitBranch,
          title: t("hero.features.cicd.title"),
          description: t(
            "hero.features.cicd.description"
          ),
        },
        {
          icon: ShieldCheck,
          title: t("hero.features.security.title"),
          description: t(
            "hero.features.security.description"
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
          icon: Cloud,
          title: t(
            "middleSection.items.infrastructure.title"
          ),
          description: t(
            "middleSection.items.infrastructure.description"
          ),
        },
        {
          icon: GitBranch,
          title: t(
            "middleSection.items.cicd.title"
          ),
          description: t(
            "middleSection.items.cicd.description"
          ),
        },
        {
          icon: Server,
          title: t(
            "middleSection.items.containers.title"
          ),
          description: t(
            "middleSection.items.containers.description"
          ),
        },
        {
          icon: Sparkles,
          title: t(
            "middleSection.items.monitoring.title"
          ),
          description: t(
            "middleSection.items.monitoring.description"
          ),
        },
      ],
    },

    technologies: t.raw("technologies") as string[],

    benefits: [
      {
        icon: Zap,
        title: t("benefits.deployments.title"),
        description: t(
          "benefits.deployments.description"
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
        icon: ShieldCheck,
        title: t("benefits.security.title"),
        description: t(
          "benefits.security.description"
        ),
      },
      {
        icon: Rocket,
        title: t("benefits.production.title"),
        description: t(
          "benefits.production.description"
        ),
      },
    ],

    process: [
      {
        number: t("process.assessment.number"),
        title: t("process.assessment.title"),
        description: t(
          "process.assessment.description"
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
        number: t("process.implementation.number"),
        title: t("process.implementation.title"),
        description: t(
          "process.implementation.description"
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

  return <ServicePage {...cloudDevOpsData} />
}