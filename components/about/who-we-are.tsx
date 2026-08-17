"use client"

import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function WhoWeAre() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">

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
              Who We Are
            </Badge>

            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technology built around{" "}
              <span className="text-emerald-500">
                people and progress.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              InfiniGrow Technologies is a technology company focused on
              building modern digital solutions that help organizations
              solve real problems, improve their operations, and create
              better experiences for their customers.
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We bring together design, development, and technology strategy
              to transform ideas into reliable digital products that are
              built for today and ready for tomorrow.
            </p>
          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border bg-muted">
            <Image
              src="/images/about/who-we-are.jpg"
              alt="InfiniGrow Technologies team working together"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-sm font-medium text-white/70">
                InfiniGrow Technologies
              </p>

              <p className="mt-1 max-w-md text-xl font-semibold text-white md:text-2xl">
                Turning ideas into meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between">

            {/* INTRO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                What drives us
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                We don't just build software.
                <br />
                We build solutions.
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                Every project starts with understanding the problem. We
                work closely with our clients to understand their goals,
                identify opportunities, and create technology that supports
                their long-term growth.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-10 divide-y border-y">

              {/* ITEM */}
              <div className="flex gap-5 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Lightbulb className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Ideas First
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    We start by understanding your idea, goals, and
                    challenges before choosing the right technology.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Modern Technology
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    We use modern tools and development practices to
                    create fast, scalable, and maintainable products.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    People Focused
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    We believe successful technology comes from strong
                    collaboration between people and teams.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5 py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Target className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Results Driven
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Our goal is not simply to deliver a product, but to
                    create something that delivers measurable value.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                
                variant="outline"
                className="group"
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
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mt-16 border-y">
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                Digital
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Solutions & Products
              </p>
            </div>

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                Modern
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Technology & Development
              </p>
            </div>

            <div className="px-6 py-7 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight">
                Long-Term
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Client Partnerships
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}