import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We learn about your business, users, goals, challenges, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    icon: Lightbulb,
    description:
      "We define the right strategy, technology, architecture, features, and project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    icon: Sparkles,
    description:
      "We create intuitive interfaces and experiences that align with your users and brand.",
  },
  {
    number: "04",
    title: "Develop",
    icon: Code2,
    description:
      "Our team turns the approved ideas into reliable, scalable, and maintainable software.",
  },
  {
    number: "05",
    title: "Test & Refine",
    icon: Settings2,
    description:
      "We test functionality, performance, responsiveness, and usability before launch.",
  },
  {
    number: "06",
    title: "Launch & Support",
    icon: Rocket,
    description:
      "We launch the product and continue providing improvements, maintenance, and support.",
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <Badge
            variant="outline"
            className="
              border-emerald-500/30
              bg-emerald-500/5
              text-emerald-600
              dark:text-emerald-400
            "
          >
            Our Process
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From idea to{" "}
            <span className="text-emerald-500">
              reality.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A clear and collaborative process helps us turn ideas into
            reliable digital products while keeping every project focused,
            transparent, and purposeful.
          </p>

        </div>

        {/* ================= DESKTOP PROCESS ================= */}
        <div className="relative mt-20 hidden lg:block">

          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-7 h-px bg-border" />

          <div className="relative grid grid-cols-6">

            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group relative px-4"
                >

                  {/* NUMBER / ICON */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* NUMBER */}
                  <p className="mt-7 text-center text-xs font-semibold tracking-[0.2em] text-emerald-500">
                    {step.number}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-2 text-center text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-center text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                </div>
              )
            })}

          </div>
        </div>

        {/* ================= MOBILE PROCESS ================= */}
        <div className="relative mt-14 lg:hidden">

          {/* Vertical Line */}
          <div className="absolute bottom-5 left-[27px] top-5 w-px bg-border" />

          <div className="space-y-8">

            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="relative flex gap-5"
                >

                  {/* ICON */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-1">

                    <p className="text-xs font-semibold tracking-[0.2em] text-emerald-500">
                      {step.number}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>
        </div>

        {/* ================= BOTTOM CONTENT ================= */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* ITEM */}
          <div className="border-t pt-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />

            <h3 className="mt-4 font-semibold">
              Clear Communication
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              We keep communication open and make sure everyone understands
              the project's progress and priorities.
            </p>
          </div>

          {/* ITEM */}
          <div className="border-t pt-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />

            <h3 className="mt-4 font-semibold">
              Flexible Collaboration
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Your feedback remains part of the process so the final product
              stays aligned with your needs.
            </p>
          </div>

          {/* ITEM */}
          <div className="border-t pt-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />

            <h3 className="mt-4 font-semibold">
              Long-Term Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Our relationship doesn't have to end at launch. We can continue
              improving and supporting your digital product.
            </p>
          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex justify-center">

          <Button
            className="
              group
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
              Start Your Project

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