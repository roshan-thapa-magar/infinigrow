"use client"

import {
  Code2,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react"

import { useTranslations } from "next-intl"
import ServicePage from "@/components/services/service-page"

export default function MobileDevelopmentPage() {
  const t = useTranslations("services.mobileDevelopment")

  const mobileDevelopmentData = {
    hero: {
      badge: t("hero.badge"),

      title: (
        <>
          {t("hero.title")}
        </>
      ),

      description: t("hero.description"),

      primaryButton: t("hero.primaryButton"),

      image: {
        src: "/images/mobile-development.png",
        alt: t("hero.imageAlt"),
      },

      features: [
        {
          icon: Smartphone,
          title: t("hero.features.iosAndroid.title"),
          description: t("hero.features.iosAndroid.description"),
        },
        {
          icon: Code2,
          title: t("hero.features.modernFrameworks.title"),
          description: t(
            "hero.features.modernFrameworks.description"
          ),
        },
        {
          icon: Sparkles,
          title: t("hero.features.greatExperiences.title"),
          description: t(
            "hero.features.greatExperiences.description"
          ),
        },
      ],
    },

    capabilities: t.raw("capabilities"),

    middleSection: {
      badge: t("middleSection.badge"),

      title: t("middleSection.title"),

      description: t("middleSection.description"),

      items: [
        {
          icon: Smartphone,
          title: t("middleSection.items.native.title"),
          description: t(
            "middleSection.items.native.description"
          ),
        },
        {
          icon: Code2,
          title: t("middleSection.items.crossPlatform.title"),
          description: t(
            "middleSection.items.crossPlatform.description"
          ),
        },
      ],
    },

    technologies: t.raw("technologies"),

    benefits: [
      {
        icon: Zap,
        title: t("benefits.fastResponsive.title"),
        description: t(
          "benefits.fastResponsive.description"
        ),
      },
      {
        icon: Layers,
        title: t("benefits.nativeCrossPlatform.title"),
        description: t(
          "benefits.nativeCrossPlatform.description"
        ),
      },
      {
        icon: ShieldCheck,
        title: t("benefits.secureApplications.title"),
        description: t(
          "benefits.secureApplications.description"
        ),
      },
      {
        icon: Rocket,
        title: t("benefits.builtToScale.title"),
        description: t(
          "benefits.builtToScale.description"
        ),
      },
    ],

    process: [
      {
        number: t("process.discovery.number"),
        title: t("process.discovery.title"),
        description: t("process.discovery.description"),
      },
      {
        number: t("process.uxPlanning.number"),
        title: t("process.uxPlanning.title"),
        description: t("process.uxPlanning.description"),
      },
      {
        number: t("process.development.number"),
        title: t("process.development.title"),
        description: t("process.development.description"),
      },
      {
        number: t("process.testing.number"),
        title: t("process.testing.title"),
        description: t("process.testing.description"),
      },
      {
        number: t("process.deployment.number"),
        title: t("process.deployment.title"),
        description: t("process.deployment.description"),
      },
      {
        number: t("process.maintenance.number"),
        title: t("process.maintenance.title"),
        description: t("process.maintenance.description"),
      },
    ],

    cta: {
      eyebrow: t("cta.eyebrow"),
      title: t("cta.title"),
      description: t("cta.description"),
    },
  }

  return <ServicePage {...mobileDevelopmentData} />
}