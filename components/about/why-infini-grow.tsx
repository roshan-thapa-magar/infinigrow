import {
  ArrowRight,
  Check,
  Code2,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Lightbulb,
    title: "Business-Focused Solutions",
    description:
      "We start by understanding your business goals and challenges, then build technology around what actually matters.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern development tools and proven technologies to create fast, scalable, and maintainable digital products.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "We work closely with our clients throughout the project so ideas, feedback, and decisions remain aligned.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Scalable",
    description:
      "Our solutions are designed with reliability, security, performance, and future growth in mind.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    description:
      "Clear communication and honest collaboration help us build strong relationships and successful projects.",
  },
  {
    icon: Rocket,
    title: "Built for Growth",
    description:
      "We create flexible digital solutions that can evolve as your business, users, and requirements grow.",
  },
]

export default function WhyInfiniGrow() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>
            <Badge
              variant="outline"
              className="
                border-emerald-500/30
                bg-emerald-500/5
                text-emerald-600
                dark:text-emerald-400
              "
            >
              Why InfiniGrow
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technology that works for{" "}
              <span className="text-emerald-500">
                your goals.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              Choosing a technology partner is about more than technical
              skills. It is about finding a team that understands your
              goals, communicates clearly, and stays focused on delivering
              meaningful results.
            </p>
          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT ================= */}
          <div className="relative overflow-hidden rounded-2xl border bg-background p-7 md:p-10">

            {/* Decorative background */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-emerald-500/5
              "
            />

            <div className="relative z-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Rocket className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
                Our Approach
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                We build with purpose, not just technology.
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                Every project has a reason behind it. We take the time to
                understand that reason before deciding how technology should
                be used.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                From the first conversation to launch and beyond, we focus
                on creating solutions that are practical, useful, and ready
                to grow with your business.
              </p>

              {/* Checklist */}
              <div className="mt-8 space-y-3 border-t pt-7">

                {[
                  "Understand the problem",
                  "Define the right solution",
                  "Build with modern technology",
                  "Deliver measurable value",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3 w-3" />
                    </div>

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="divide-y border-y">

            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <div
                  key={reason.title}
                  className="
                    group
                    grid
                    gap-5
                    py-7
                    transition-colors
                    hover:bg-background/60
                    md:grid-cols-[55px_1fr]
                    md:px-5
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      bg-background
                      text-muted-foreground
                      transition-all
                      duration-300
                      group-hover:border-emerald-500/30
                      group-hover:bg-emerald-500/10
                      group-hover:text-emerald-600
                      dark:group-hover:text-emerald-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-widest text-emerald-500">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg font-semibold tracking-tight">
                        {reason.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
                      {reason.description}
                    </p>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex flex-col gap-5 rounded-2xl border bg-background p-7 md:flex-row md:items-center md:justify-between md:p-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Let's Build Together
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Have a project in mind?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Tell us about your idea and let's explore how technology
              can help turn it into reality.
            </p>
          </div>

          <Button
            className="
              group
              w-fit
              bg-emerald-600
              text-white
              hover:bg-emerald-700
              dark:bg-emerald-500
              dark:hover:bg-emerald-600
            "
          >
            <Link
              href="/contact"
              className="flex items-center gap-2"
            >
              Start a Conversation

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}