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

import ServicePage from "@/components/services/service-page"

const webDevelopmentData = {
  hero: {
    badge: "Web Development",

    title: (
      <>
        We build websites and{" "}
        <span className="text-emerald-500">
          web applications
        </span>{" "}
        that grow with your business.
      </>
    ),

    description:
      "From high-converting business websites to complex web platforms, InfiniGrow creates fast, scalable, secure, and user-focused digital experiences.",

    primaryButton: "Start Your Project",
    image: {
      src: "/images/web-development.png",
      alt: "Modern web development",
    },
    features: [
      {
        icon: Code2,
        title: "Modern Technology",
        description:
          "Built with current web technologies.",
      },
      {
        icon: Rocket,
        title: "Built to Scale",
        description:
          "Architecture designed for future growth.",
      },
      {
        icon: Globe,
        title: "Global Experience",
        description:
          "Responsive experiences for every device.",
      },
    ],
  },

  capabilities: [
    "Business websites",
    "Corporate websites",
    "SaaS platforms",
    "E-commerce websites",
    "Web applications",
    "Admin dashboards",
    "Customer portals",
    "Booking platforms",
    "API-integrated websites",
    "Custom web platforms",
  ],

  middleSection: {
    badge: "Development Capabilities",

    title: "More than just building a website.",

    description:
      "We combine frontend engineering, backend development, APIs, databases, integrations, and performance optimization to create complete digital products.",

    items: [
      {
        icon: LayoutDashboard,
        title: "Frontend Development",
        description:
          "Modern interfaces with React, Next.js, TypeScript, Tailwind CSS, and responsive design principles.",
      },
      {
        icon: Database,
        title: "Backend Development",
        description:
          "Reliable backend systems, databases, authentication, business logic, and REST API integrations.",
      },
      {
        icon: Globe,
        title: "CMS & WordPress",
        description:
          "Professional WordPress websites, custom themes, integrations, content management, and business websites.",
      },
      {
        icon: Sparkles,
        title: "AI-Powered Web Experiences",
        description:
          "AI integrations, intelligent search, automation, assistants, recommendation systems, and AI-powered business workflows.",
      },
    ],
  },

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Django",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "WordPress",
    "Tailwind CSS",
  ],

  benefits: [
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Fast-loading websites and applications designed for a smooth user experience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Interfaces that work naturally across mobile, tablet, laptop, and desktop devices.",
    },
    {
      icon: Search,
      title: "SEO Friendly",
      description:
        "Clean technical foundations that help search engines understand and index your website.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Architecture",
      description:
        "Security-conscious development practices for applications, APIs, authentication, and data.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business, users, goals, technical requirements, and project scope.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "We create the structure, user experience, visual direction, and technical architecture.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers build the website or web application using modern and scalable technologies.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We test functionality, responsiveness, performance, security, and browser compatibility.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "After final approval, we deploy your project and make it ready for real users.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "We continue to help with improvements, maintenance, updates, and future development.",
    },
  ],

  cta: {
    eyebrow: "Start Your Project",
    title: "Have a web project in mind?",
    description:
      "Let's turn your idea into a fast, reliable, and scalable digital product.",
  },
}

export default function WebDevelopmentPage() {
  return <ServicePage {...webDevelopmentData} />
}