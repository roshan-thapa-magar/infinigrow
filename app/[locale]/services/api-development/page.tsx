"use client"

import {
  Code2,
  Database,
  Globe,
  Layers,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import ServicePage from "@/components/services/service-page"

const apiDevelopmentData = {
  hero: {
    badge: "API Development",

    title: (
      <>
        Powerful APIs built for{" "}
        <span className="text-emerald-500">
          connected applications.
        </span>
      </>
    ),

    description:
      "We design and develop secure, scalable, and well-structured APIs that connect web applications, mobile apps, software systems, databases, and third-party services.",

    primaryButton: "Start Your API Project",

    features: [
      {
        icon: Code2,
        title: "Modern APIs",
        description:
          "Well-structured APIs designed for reliable communication between applications and services.",
      },
      {
        icon: ShieldCheck,
        title: "Secure by Design",
        description:
          "Authentication, authorization, validation, and security-conscious API architecture.",
      },
      {
        icon: Layers,
        title: "Built to Scale",
        description:
          "API architecture designed to support growing users, requests, integrations, and data.",
      },
    ],
  },

  capabilities: [
    "REST API development",
    "GraphQL API development",
    "Web APIs",
    "Mobile app APIs",
    "Third-party API integration",
    "Payment API integration",
    "Authentication APIs",
    "Database APIs",
    "Business automation APIs",
    "API documentation",
  ],

  middleSection: {
    badge: "API Development Capabilities",

    title: (
      <>
        APIs that connect your
        <br />
        digital ecosystem.
      </>
    ),

    description:
      "We build APIs that allow your applications and services to communicate reliably while keeping security, performance, scalability, and maintainability in mind.",

    items: [
      {
        icon: Server,
        title: "REST API Development",
        description:
          "Reliable REST APIs for web applications, mobile applications, business systems, dashboards, and third-party integrations.",
      },
      {
        icon: Database,
        title: "Data & Database APIs",
        description:
          "Secure APIs that connect applications with databases and provide controlled access to business data.",
      },
      {
        icon: Globe,
        title: "Third-Party Integrations",
        description:
          "Connect your applications with payment gateways, communication platforms, maps, analytics, cloud services, and other external systems.",
      },
      {
        icon: Sparkles,
        title: "API Automation",
        description:
          "Use APIs to automate business workflows, synchronize systems, exchange data, and connect different services.",
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
      title: "High Performance",
      description:
        "Efficient API architecture designed for fast response times and reliable application communication.",
    },
    {
      icon: ShieldCheck,
      title: "Secure APIs",
      description:
        "Authentication, authorization, validation, rate limiting, and security-conscious development practices.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "API systems designed to support increasing traffic, users, data, and integrations.",
    },
    {
      icon: Rocket,
      title: "Integration Ready",
      description:
        "Well-structured APIs that make it easier to connect web, mobile, software, and third-party services.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Requirements",
      description:
        "We understand your applications, users, data, integrations, business workflows, and API requirements.",
    },
    {
      number: "02",
      title: "API Architecture",
      description:
        "We design endpoints, data models, authentication, permissions, error handling, and overall API architecture.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers build secure and maintainable APIs using technologies suited to your project requirements.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We test endpoints, authentication, validation, performance, errors, integrations, and different usage scenarios.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We deploy your API to the appropriate production infrastructure and configure the required environment.",
    },
    {
      number: "06",
      title: "Monitoring & Support",
      description:
        "We provide monitoring, maintenance, performance improvements, security updates, and ongoing API support.",
    },
  ],

  cta: {
    eyebrow: "Start Your API Project",
    title: "Need APIs that connect everything?",
    description:
      "Let's build secure, scalable APIs that power your web, mobile, and software applications.",
  },
}

export default function ApiDevelopmentPage() {
  return <ServicePage {...apiDevelopmentData} />
}