"use client"

import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import { useTranslations } from "next-intl"

import ServicePage from "@/components/services/service-page"

export default function AiDevelopmentPage() {
  const t = useTranslations("services.aiDevelopment")

  const aiDevelopmentData = {
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
        src: "/images/generative.png",
        alt: t("hero.imageAlt"),
      },

      features: [
        {
          icon: BrainCircuit,
          title: t("hero.features.aiSolutions.title"),
          description: t("hero.features.aiSolutions.description"),
        },
        {
          icon: Bot,
          title: t("hero.features.automation.title"),
          description: t("hero.features.automation.description"),
        },
        {
          icon: Sparkles,
          title: t("hero.features.experiences.title"),
          description: t("hero.features.experiences.description"),
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
          icon: MessageSquare,
          title: t("middleSection.items.assistants.title"),
          description: t(
            "middleSection.items.assistants.description"
          ),
        },
        {
          icon: Search,
          title: t("middleSection.items.search.title"),
          description: t(
            "middleSection.items.search.description"
          ),
        },
        {
          icon: Database,
          title: t("middleSection.items.documents.title"),
          description: t(
            "middleSection.items.documents.description"
          ),
        },
        {
          icon: Zap,
          title: t("middleSection.items.automation.title"),
          description: t(
            "middleSection.items.automation.description"
          ),
        },
      ],
    },

    technologies: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "LLM APIs",
      "LangChain",
      "RAG",
      "Vector Databases",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "TypeScript",
      "Docker",
    ],

    benefits: [
      {
        icon: Zap,
        title: t("benefits.automation.title"),
        description: t("benefits.automation.description"),
      },
      {
        icon: BrainCircuit,
        title: t("benefits.experiences.title"),
        description: t("benefits.experiences.description"),
      },
      {
        icon: ShieldCheck,
        title: t("benefits.responsible.title"),
        description: t("benefits.responsible.description"),
      },
      {
        icon: Rocket,
        title: t("benefits.evolve.title"),
        description: t("benefits.evolve.description"),
      },
    ],

    process: [
      {
        number: t("process.discovery.number"),
        title: t("process.discovery.title"),
        description: t("process.discovery.description"),
      },
      {
        number: t("process.planning.number"),
        title: t("process.planning.title"),
        description: t("process.planning.description"),
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
        number: t("process.improvement.number"),
        title: t("process.improvement.title"),
        description: t("process.improvement.description"),
      },
    ],

    cta: {
      eyebrow: t("cta.eyebrow"),
      title: t("cta.title"),
      description: t("cta.description"),
    },
  }

  return <ServicePage {...aiDevelopmentData} />
}