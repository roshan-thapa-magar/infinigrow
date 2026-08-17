import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We continuously explore better ideas, modern technologies, and smarter approaches to solve complex problems.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We care about the details and build reliable, maintainable, and high-quality digital products.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Transparency",
    description:
      "We believe in honest communication, clear expectations, and keeping our clients informed throughout every project.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "We listen carefully to our clients and create solutions around their real business needs and goals.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "Great products come from strong teamwork. We work closely with clients and teams to turn ideas into reality.",
    icon: Users,
  },
  {
    number: "06",
    title: "Continuous Growth",
    description:
      "We keep learning, improving, and adapting so our skills and solutions continue to move forward.",
    icon: Sparkles,
  },
]

export default function ValuesSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">

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
              Our Values
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Principles that shape{" "}
              <span className="text-emerald-500">
                everything we do.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg lg:ml-auto">
            Our values influence how we build products, communicate with
            clients, solve problems, and work together. They help us stay
            focused on creating meaningful and lasting results.
          </p>

        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-16 border-t">

          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.number}
                className="
                  group
                  grid
                  gap-6
                  border-b
                  py-7
                  transition-colors
                  hover:bg-muted/30
                  md:grid-cols-[80px_70px_1fr]
                  md:items-center
                  md:px-5
                "
              >

                {/* NUMBER */}
                <div>
                  <span className="text-sm font-semibold tracking-widest text-emerald-500">
                    {value.number}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
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
                <div className="grid gap-3 md:grid-cols-[220px_1fr] md:items-center">

                  <h3 className="text-xl font-semibold tracking-tight">
                    {value.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                    {value.description}
                  </p>

                </div>

              </div>
            )
          })}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-14 grid gap-6 rounded-2xl border bg-muted/30 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Our Commitment
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
              Technology is better when it is built with purpose.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              These principles keep us focused on delivering technology
              that is useful, reliable, and valuable for the people and
              businesses we work with.
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
              href="/services"
              className="flex items-center gap-2"
            >
              Explore Our Services

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}