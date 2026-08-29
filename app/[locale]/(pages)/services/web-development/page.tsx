"use client"

import {
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react"

import { useTranslations } from "next-intl"
import ServicePage from "@/components/services/service-page"

export default function WebDevelopmentPage() {
  const t = useTranslations("services.webDevelopment")

  const webDevelopmentData = {
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
        src: "/images/web-development.png",
        alt: t("hero.imageAlt"),
      },

      features: [
        {
          icon: Code2,
          title: t("hero.features.modernTechnology.title"),
          description: t("hero.features.modernTechnology.description"),
        },
        {
          icon: Rocket,
          title: t("hero.features.builtToScale.title"),
          description: t("hero.features.builtToScale.description"),
        },
        {
          icon: Globe,
          title: t("hero.features.globalExperience.title"),
          description: t("hero.features.globalExperience.description"),
        },
      ],
    },

    capabilities: t.raw("capabilities.items"),

    middleSection: {
      badge: t("middleSection.badge"),

      title: t("middleSection.title"),

      description: t("middleSection.description"),

      items: [
        {
          icon: LayoutDashboard,
          title: t("middleSection.items.frontend.title"),
          description: t("middleSection.items.frontend.description"),
        },
        {
          icon: Database,
          title: t("middleSection.items.backend.title"),
          description: t("middleSection.items.backend.description"),
        },
        {
          icon: Globe,
          title: t("middleSection.items.cms.title"),
          description: t("middleSection.items.cms.description"),
        },
        {
          icon: Sparkles,
          title: t("middleSection.items.ai.title"),
          description: t("middleSection.items.ai.description"),
        },
      ],
    },

    technologies: t.raw("technologies"),

    benefits: [
      {
        icon: Zap,
        title: t("benefits.items.performance.title"),
        description: t("benefits.items.performance.description"),
      },
      {
        icon: Smartphone,
        title: t("benefits.items.responsive.title"),
        description: t("benefits.items.responsive.description"),
      },
      {
        icon: Search,
        title: t("benefits.items.seo.title"),
        description: t("benefits.items.seo.description"),
      },
      {
        icon: ShieldCheck,
        title: t("benefits.items.security.title"),
        description: t("benefits.items.security.description"),
      },
    ],

    process: [
      {
        number: t("process.items.discovery.number"),
        title: t("process.items.discovery.title"),
        description: t("process.items.discovery.description"),
      },
      {
        number: t("process.items.planning.number"),
        title: t("process.items.planning.title"),
        description: t("process.items.planning.description"),
      },
      {
        number: t("process.items.development.number"),
        title: t("process.items.development.title"),
        description: t("process.items.development.description"),
      },
      {
        number: t("process.items.testing.number"),
        title: t("process.items.testing.title"),
        description: t("process.items.testing.description"),
      },
      {
        number: t("process.items.launch.number"),
        title: t("process.items.launch.title"),
        description: t("process.items.launch.description"),
      },
      {
        number: t("process.items.support.number"),
        title: t("process.items.support.title"),
        description: t("process.items.support.description"),
      },
    ],

    cta: {
      eyebrow: t("cta.eyebrow"),
      title: t("cta.title"),
      description: t("cta.description"),
    },
  }

  return <ServicePage {...webDevelopmentData} />
}