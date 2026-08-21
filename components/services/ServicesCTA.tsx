import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesCTA() {
  return (
    <section className="border-t bg-emerald-600 text-white dark:bg-emerald-500">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/80">
              Tell us about your idea, and let's build a digital solution
              that helps your business grow.
            </p>
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="shrink-0"
          >
            <Link href="/contact" className="flex items-center">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </div>
    </section>
  )
}