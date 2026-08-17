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

import ServicePage from "@/components/services/service-page"

const aiDevelopmentData = {
  hero: {
    badge: "AI Development",

    title: (
      <>
        Intelligent software powered by{" "}
        <span className="text-emerald-500">
          practical AI.
        </span>
      </>
    ),

    description:
      "We design and develop AI-powered applications that automate workflows, improve customer experiences, analyze information, and help businesses work smarter.",

    primaryButton: "Start Your AI Project",
    image: {
      src: "/images/generative.png",
      alt: "Ai Development",
    },
    features: [
      {
        icon: BrainCircuit,
        title: "AI-Powered Solutions",
        description:
          "Intelligent features integrated into your applications and business workflows.",
      },
      {
        icon: Bot,
        title: "AI Automation",
        description:
          "Automate repetitive tasks and processes using modern AI technologies.",
      },
      {
        icon: Sparkles,
        title: "Smarter Experiences",
        description:
          "AI-powered search, assistants, recommendations, and personalized experiences.",
      },
    ],
  },

  capabilities: [
    "AI-powered web applications",
    "AI-powered mobile applications",
    "AI chatbots",
    "AI assistants",
    "AI search systems",
    "Recommendation systems",
    "Document processing",
    "AI workflow automation",
    "Generative AI applications",
    "Custom AI integrations",
  ],

  middleSection: {
    badge: "AI Development Capabilities",

    title: (
      <>
        AI solutions built around
        <br />
        real business problems.
      </>
    ),

    description:
      "We focus on practical AI applications that improve workflows, make information easier to access, automate repetitive work, and create better digital experiences.",

    items: [
      {
        icon: MessageSquare,
        title: "AI Assistants & Chatbots",
        description:
          "Build intelligent assistants that can answer questions, guide users, retrieve information, and support business workflows.",
      },
      {
        icon: Search,
        title: "AI Search & Knowledge Systems",
        description:
          "Create intelligent search experiences that help users find relevant information across documents, databases, and business content.",
      },
      {
        icon: Database,
        title: "AI Data & Document Processing",
        description:
          "Extract, organize, summarize, classify, and analyze information from documents and other business data.",
      },
      {
        icon: Zap,
        title: "AI Automation",
        description:
          "Integrate AI into business workflows to reduce repetitive tasks and improve operational efficiency.",
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
      title: "Automate Workflows",
      description:
        "Use AI to automate repetitive processes and help teams spend more time on valuable work.",
    },
    {
      icon: BrainCircuit,
      title: "Intelligent Experiences",
      description:
        "Add AI-powered search, assistants, recommendations, and personalization to digital products.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible Development",
      description:
        "Security-conscious AI development with attention to data access, privacy, permissions, and reliable application behavior.",
    },
    {
      icon: Rocket,
      title: "Built to Evolve",
      description:
        "Flexible AI architectures designed to support new models, features, integrations, and business requirements.",
    },
  ],

  process: [
    {
      number: "01",
      title: "AI Discovery",
      description:
        "We understand your business problem, users, available data, workflows, and where AI can provide practical value.",
    },
    {
      number: "02",
      title: "Solution Planning",
      description:
        "We define the AI approach, application architecture, data requirements, integrations, and technology stack.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our team builds the AI-powered application and integrates models, APIs, databases, and business workflows.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We evaluate functionality, performance, reliability, security, response quality, and real-world usage scenarios.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We deploy the AI application to the appropriate production environment and configure the required services.",
    },
    {
      number: "06",
      title: "Improvement",
      description:
        "We monitor the application and continuously improve performance, workflows, integrations, and AI capabilities.",
    },
  ],

  cta: {
    eyebrow: "Start Your AI Project",
    title: "Have an AI idea in mind?",
    description:
      "Let's turn your idea into a practical AI-powered product that creates real value for your users and business.",
  },
}

export default function AiDevelopmentPage() {
  return <ServicePage {...aiDevelopmentData} />
}