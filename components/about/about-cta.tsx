import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutCTA() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            bg-foreground
            px-6
            py-16
            text-background
            shadow-sm
            dark:bg-card
            dark:text-foreground
            sm:px-10
            md:px-16
            md:py-20
          "
        >

          {/* ================= DECORATIVE BACKGROUND ================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-20
              h-80
              w-80
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <Badge
              variant="outline"
              className="
                border-emerald-400/30
                bg-emerald-500/10
                text-emerald-400
              "
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Let's Build Something
            </Badge>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Have an idea?
              <br />
              <span className="text-emerald-400">
                Let's turn it into reality.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-background/70 dark:text-muted-foreground md:text-lg">
              Whether you are starting a new project, improving an existing
              product, or exploring how technology can help your business,
              our team is ready to talk.
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Button
                size="lg"
                className="
                  group
                  w-full
                  bg-emerald-500
                  px-6
                  text-white
                  hover:bg-emerald-600
                  sm:w-auto
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

              <Button
                size="lg"
                variant="outline"
                className="
                  w-full
                  border-background/20
                  bg-transparent
                  text-background
                  hover:bg-background/10
                  hover:text-background
                  sm:w-auto
                  dark:border-border
                  dark:text-foreground
                  dark:hover:bg-muted
                  dark:hover:text-foreground
                "
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Explore Our Services
                </Link>
              </Button>

            </div>

            {/* ================= SMALL TRUST LINE ================= */}

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-background/50 dark:text-muted-foreground">

              <span>Web Development</span>

              <span className="h-1 w-1 rounded-full bg-emerald-400" />

              <span>Mobile Development</span>

              <span className="h-1 w-1 rounded-full bg-emerald-400" />

              <span>AI Solutions</span>

              <span className="h-1 w-1 rounded-full bg-emerald-400" />

              <span>Digital Solutions</span>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}