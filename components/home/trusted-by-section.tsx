import { CheckCircle2 } from "lucide-react"
import { trustedCompanies } from "@/lib/site-data"

export default function TrustedBySection() {
  return (
    <section className="border-y bg-muted/20 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted By Innovative Businesses
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Technology that businesses can rely on
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We work with ambitious teams and businesses to build reliable
            digital products, automate workflows, and turn ideas into
            scalable solutions.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedCompanies.map((company) => (
            <div
              key={company}
              className="
                group
                flex
                h-24
                items-center
                justify-center
                rounded-2xl
                border
                bg-background
                px-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-500/40
                hover:shadow-lg
                hover:shadow-emerald-500/5
              "
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Reliable Solutions
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Modern Technology
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Long-Term Support
          </div>
        </div>
      </div>
    </section>
  )
}