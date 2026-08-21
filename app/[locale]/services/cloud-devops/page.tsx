"use client"

import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import ServicePage from "@/components/services/service-page"

const cloudDevOpsData = {
  hero: {
    badge: "Cloud & DevOps",

    title: (
      <>
        Cloud infrastructure built for{" "}
        <span className="text-emerald-500">
          reliability and scale.
        </span>
      </>
    ),

    description:
      "We design, deploy, and manage modern cloud infrastructure and DevOps workflows that help businesses release software faster, improve reliability, and scale with confidence.",

    primaryButton: "Start Your Cloud Project",
    image: {
      src: "/images/devops-cloud.png",
      alt: "Cloud & DeVops",
    },
    features: [
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Reliable and scalable infrastructure designed around your application requirements.",
      },
      {
        icon: GitBranch,
        title: "CI/CD Automation",
        description:
          "Automated development, testing, deployment, and release workflows.",
      },
      {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        description:
          "Infrastructure designed with security, monitoring, backups, and reliability in mind.",
      },
    ],
  },

  capabilities: [
    "Cloud infrastructure",
    "Cloud migration",
    "CI/CD pipelines",
    "Infrastructure automation",
    "Containerization",
    "Kubernetes deployment",
    "Server management",
    "Application deployment",
    "Monitoring & logging",
    "Backup & disaster recovery",
  ],

  middleSection: {
    badge: "Cloud & DevOps Capabilities",

    title: (
      <>
        Infrastructure designed for
        <br />
        modern software teams.
      </>
    ),

    description:
      "We combine cloud platforms, automation, containers, CI/CD, monitoring, and infrastructure-as-code to create reliable development and production environments.",

    items: [
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Design and deploy scalable cloud environments for applications, APIs, databases, storage, and other services.",
      },
      {
        icon: GitBranch,
        title: "CI/CD & Automation",
        description:
          "Automate testing, builds, deployments, releases, and development workflows to deliver software faster.",
      },
      {
        icon: Server,
        title: "Containers & Orchestration",
        description:
          "Containerize applications and manage scalable workloads using Docker and Kubernetes.",
      },
      {
        icon: Sparkles,
        title: "Monitoring & Optimization",
        description:
          "Monitor applications and infrastructure, identify issues, optimize resources, and improve system reliability.",
      },
    ],
  },

  technologies: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "GitLab CI/CD",
    "Terraform",
    "Linux",
    "Nginx",
    "Prometheus",
    "Grafana",
  ],

  benefits: [
    {
      icon: Zap,
      title: "Faster Deployments",
      description:
        "Automated development and deployment workflows help teams release reliable software faster.",
    },
    {
      icon: Layers,
      title: "Scalable Infrastructure",
      description:
        "Cloud architecture designed to handle increasing users, traffic, workloads, and business requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      description:
        "Security-conscious infrastructure with monitoring, access controls, backups, and reliable deployment practices.",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description:
        "Infrastructure and deployment environments prepared for real-world applications and continuous growth.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Assessment",
      description:
        "We understand your existing infrastructure, applications, workloads, business requirements, and technical goals.",
    },
    {
      number: "02",
      title: "Architecture",
      description:
        "We design the cloud infrastructure, deployment strategy, security model, networking, and scalability approach.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We configure cloud resources, containers, infrastructure automation, CI/CD pipelines, and deployment environments.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We test deployments, infrastructure reliability, application performance, security, backups, and recovery processes.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We deploy your applications into production and establish reliable release and monitoring workflows.",
    },
    {
      number: "06",
      title: "Monitoring & Support",
      description:
        "We monitor infrastructure and applications while providing optimization, maintenance, troubleshooting, and ongoing improvements.",
    },
  ],

  cta: {
    eyebrow: "Start Your Cloud Project",
    title: "Ready to modernize your infrastructure?",
    description:
      "Let's build a secure, automated, and scalable cloud environment for your applications.",
  },
}

export default function CloudDevOpsPage() {
  return <ServicePage {...cloudDevOpsData} />
}