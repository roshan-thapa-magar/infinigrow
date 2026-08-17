import {
  Eye,
  Target,
  ArrowUpRight,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MissionVision() {
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
            Our Direction
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Purpose that drives our{" "}
            <span className="text-emerald-500">
              progress.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Our mission and vision guide the way we build products,
            work with our clients, and continuously improve as a
            technology company.
          </p>
        </div>

        {/* ================= MISSION + VISION ================= */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {/* ================= MISSION ================= */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              bg-background
              p-7
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              md:p-10
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-emerald-500/5
                transition-transform
                duration-500
                group-hover:scale-125
              "
            />

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/10
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <Target className="h-7 w-7" />
              </div>

              {/* Label */}
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500">
                Our Mission
              </p>

              {/* Heading */}
              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Turning technology into meaningful progress.
              </h3>

              {/* Content */}
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Our mission is to create reliable, scalable, and
                user-focused digital solutions that help businesses
                solve real problems and achieve their goals.
              </p>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We focus on understanding the needs behind every
                project and delivering technology that provides
                practical, long-term value.
              </p>

              {/* Bottom Line */}
              <div className="mt-8 flex items-center gap-3 border-t pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-sm font-medium text-muted-foreground">
                  Build with purpose
                </span>
              </div>

            </div>
          </div>

          {/* ================= VISION ================= */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              bg-foreground
              p-7
              text-background
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              dark:bg-card
              dark:text-foreground
              md:p-10
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-64
                w-64
                rounded-full
                bg-emerald-500/10
                transition-transform
                duration-500
                group-hover:scale-125
              "
            />

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/15
                  text-emerald-400
                "
              >
                <Eye className="h-7 w-7" />
              </div>

              {/* Label */}
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Our Vision
              </p>

              {/* Heading */}
              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Becoming a trusted partner for digital growth.
              </h3>

              {/* Content */}
              <p className="mt-5 text-base leading-7 text-background/70 dark:text-muted-foreground">
                Our vision is to become a trusted technology partner
                for businesses and organizations that want to use
                technology to create better products, services, and
                experiences.
              </p>

              <p className="mt-4 text-base leading-7 text-background/70 dark:text-muted-foreground">
                We aim to continuously learn, innovate, and build
                solutions that remain valuable as technology and
                business needs evolve.
              </p>

              {/* Bottom Line */}
              <div className="mt-8 flex items-center gap-3 border-t border-background/10 pt-6 dark:border-border">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-sm font-medium text-background/70 dark:text-muted-foreground">
                  Think beyond today
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 flex justify-center">

          <Button
            
            variant="outline"
            className="group"
          >
            <Link
              href="#"
              className="flex items-center gap-2"
            >
              See How We Work

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