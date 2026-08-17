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

import ServicePage from "@/components/services/service-page"

const softwareDevelopmentData = {
  hero: {
    badge: "Software Development",

    title: (
      <>
        Custom software built for{" "}
        <span className="text-emerald-500">
          the way your business works.
        </span>
      </>
    ),

    description:
      "We design and develop custom software solutions that automate processes, connect systems, improve productivity, and help businesses scale with confidence.",

    primaryButton: "Start Your Software Project",
    image: {
      src: "/images/software-development.png",
      alt: "Software development",
    },
    features: [
      {
        icon: Code2,
        title: "Custom Solutions",
        description:
          "Software designed around your business requirements and workflows.",
      },
      {
        icon: Layers,
        title: "Scalable Architecture",
        description:
          "Systems designed to support new users, features, integrations, and growth.",
      },
      {
        icon: Rocket,
        title: "Built for Growth",
        description:
          "Reliable software focused on long-term performance and maintainability.",
      },
    ],
  },

  capabilities: [
    "Custom business software",
    "Enterprise applications",
    "SaaS applications",
    "Business management systems",
    "ERP software",
    "CRM systems",
    "Workflow automation",
    "Internal business tools",
    "Customer portals",
    "Custom dashboards",
  ],

  middleSection: {
    badge: "Software Capabilities",

    title: (
      <>
        Software designed around
        <br />
        your business requirements.
      </>
    ),

    description:
      "From internal business systems to customer-facing platforms, we combine modern frontend, backend, database, API, and cloud technologies to create complete software solutions.",

    items: [
      {
        icon: LayoutDashboard,
        title: "Business Applications",
        description:
          "Custom applications that help teams manage operations, customers, employees, products, and business workflows.",
      },
      {
        icon: Database,
        title: "Backend & Database Systems",
        description:
          "Reliable backend architecture, databases, authentication, APIs, business logic, and data management.",
      },
      {
        icon: Globe,
        title: "Cloud & API Integration",
        description:
          "Connect your software with third-party services, payment systems, communication platforms, and cloud infrastructure.",
      },
      {
        icon: Sparkles,
        title: "Automation & AI",
        description:
          "Automate repetitive processes and integrate intelligent features to improve productivity and decision-making.",
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
      title: "Efficient Systems",
      description:
        "Software designed to reduce repetitive work, improve workflows, and increase operational efficiency.",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description:
        "Well-structured systems that make it easier to add features, integrations, and new business capabilities.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Development",
      description:
        "Security-conscious development for authentication, authorization, APIs, databases, and business data.",
    },
    {
      icon: Rocket,
      title: "Ready to Scale",
      description:
        "Architecture designed to support increasing users, data, transactions, and business requirements.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business processes, users, challenges, requirements, and software objectives.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We define the software architecture, features, database structure, integrations, and development roadmap.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers build the software using modern technologies and an architecture designed for long-term growth.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We test functionality, performance, security, integrations, user workflows, and different usage scenarios.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We deploy your software to the appropriate production environment and prepare it for real users.",
    },
    {
      number: "06",
      title: "Maintenance",
      description:
        "We provide ongoing maintenance, improvements, monitoring, bug fixes, security updates, and new features.",
    },
  ],

  cta: {
    eyebrow: "Start Your Software Project",
    title: "Have a software idea in mind?",
    description:
      "Let's build a reliable software solution that improves your business and grows with your requirements.",
  },
}

export default function SoftwareDevelopmentPage() {
  return <ServicePage {...softwareDevelopmentData} />
}