import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable, and modern websites and web applications built around your business.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "User-friendly mobile applications designed for performance and seamless experiences.",
    href: "/services/mobile-development",
  },
  {
    icon: Globe,
    title: "UI/UX Design",
    description:
      "Clean and intuitive digital experiences that make your products easier to use.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Database,
    title: "API Development",
    description:
      "Secure and scalable APIs that connect your applications, services, and business systems.",
    href: "/services/api-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Reliable cloud infrastructure and deployment solutions built for scalability.",
    href: "/services/cloud-solutions",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Security-focused solutions to help protect applications, systems, and business data.",
    href: "/services/cyber-security",
  },
]

export default function ServicesCards() {
  return (
    <section className="border-t py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            Our Services
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Digital solutions built for your business.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            From websites and mobile applications to APIs, cloud solutions,
            and security, we build technology that helps businesses grow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <Card className="h-full border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-7">

                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Icon className="h-5 w-5 text-emerald-500" />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="mt-6 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Explore service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}