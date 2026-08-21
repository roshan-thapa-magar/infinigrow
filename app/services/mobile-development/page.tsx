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

import ServicePage from "@/components/services/service-page"

const mobileDevelopmentData = {
  hero: {
    badge: "Mobile App Development",

    title: (
      <>
        Mobile apps built for{" "}
        <span className="text-emerald-500">
          real-world users.
        </span>
      </>
    ),

    description:
      "We design and develop modern mobile applications for iOS and Android using native and cross-platform technologies. From your first idea to app store deployment, we build products designed for performance, usability, and growth.",

    primaryButton: "Start Your App Project",
    image: {
      src: "/images/mobile-development.png",
      alt: "Mobile development",
    },
    features: [
      {
        icon: Smartphone,
        title: "iOS & Android",
        description:
          "Applications for both major mobile platforms.",
      },
      {
        icon: Code2,
        title: "Modern Frameworks",
        description:
          "Swift, Kotlin, Flutter, and React Native.",
      },
      {
        icon: Sparkles,
        title: "Great Experiences",
        description:
          "Simple, intuitive, and user-focused interfaces.",
      },
    ],
  },

  capabilities: [
    "iOS applications",
    "Android applications",
    "Cross-platform applications",
    "Business mobile apps",
    "E-commerce mobile apps",
    "Booking applications",
    "Customer applications",
    "On-demand applications",
    "Mobile dashboards",
    "API-connected applications",
  ],

  middleSection: {
    badge: "Development Approaches",

    title: (
      <>
        Native or cross-platform.
        <br />
        We choose what fits your product.
      </>
    ),

    description:
      "Different applications require different approaches. We select the right technology based on performance, budget, platform requirements, development speed, and long-term maintenance.",

    items: [
      {
        icon: Smartphone,
        title: "Native Development",
        description:
          "Build platform-specific applications with technologies designed specifically for iOS and Android.",
      },
      {
        icon: Code2,
        title: "Cross-Platform Development",
        description:
          "Build applications for multiple platforms while sharing a significant portion of the development code.",
      },
    ],
  },

  technologies: [
    "Swift",
    "SwiftUI",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Dart",
    "React Native",
    "TypeScript",
    "Firebase",
    "REST API",
    "Node.js",
    "Python",
  ],

  benefits: [
    {
      icon: Zap,
      title: "Fast & Responsive",
      description:
        "Mobile experiences optimized for smooth interactions, fast loading, and reliable performance.",
    },
    {
      icon: Layers,
      title: "Native & Cross-Platform",
      description:
        "Choose native development or a cross-platform approach depending on your business and technical needs.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Applications",
      description:
        "Security-conscious development for authentication, APIs, user data, payments, and application services.",
    },
    {
      icon: Rocket,
      title: "Built to Scale",
      description:
        "Architecture designed to support growing users, new features, integrations, and business requirements.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your users, business requirements, platform requirements, and project goals.",
    },
    {
      number: "02",
      title: "UX & Planning",
      description:
        "We plan the user experience, application structure, navigation, features, and technical architecture.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our team develops your application using native or cross-platform technologies based on your requirements.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We test the application across devices, screen sizes, operating systems, performance, and functionality.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We prepare and deploy your application for the required app stores and production environments.",
    },
    {
      number: "06",
      title: "Maintenance",
      description:
        "We provide ongoing improvements, updates, bug fixes, monitoring, and new feature development.",
    },
  ],

  cta: {
    eyebrow: "Start Your Mobile Project",
    title: "Ready to build your mobile app?",
    description:
      "Tell us about your idea and let's create a mobile experience your users will love.",
  },
}

export default function MobileDevelopmentPage() {
  return <ServicePage {...mobileDevelopmentData} />
}