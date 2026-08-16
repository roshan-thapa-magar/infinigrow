"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { services } from "@/lib/site-data"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="bg-muted/30 py-20 ">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            What We Do
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            We Build Digital Solutions
            <span className="block text-emerald-600 dark:text-emerald-400">
              That Move Businesses Forward
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            From websites and software applications to AI-powered systems,
            we create modern technology that helps businesses automate,
            innovate, and grow.
          </p>
        </div>

        {/* ================= SERVICE TABS ================= */}
        <div className="mt-14 overflow-x-auto pb-3 scrollbar-thin">
          <div className="mx-auto flex w-max min-w-full justify-center gap-2 rounded-2xl border-b md:border md:bg-background p-2">
            {services.map((service) => {
              const isActive = activeService.id === service.id

              return (
                <Button
                  key={service.id}
                  variant="ghost"
                  onClick={() => setActiveService(service)}
                  className={`
              shrink-0
              rounded-xl
              px-5
              py-6
              text-sm
              font-medium
              transition-all
              ${isActive
                      ? "bg-emerald-600 text-white shadow-md hover:bg-emerald-700 hover:text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
            `}
                >
                  {service.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-6 overflow-hidden rounded-3xl border bg-background shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <Badge
                variant="secondary"
                className="w-fit bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              >
                {activeService.name}
              </Badge>

              <h3 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                {activeService.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                {activeService.description}
              </p>

              {/* Features */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {activeService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
                >
                  Explore {activeService.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[520px]">
              <Image
                src={activeService.image}
                alt={activeService.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    {activeService.name}
                  </p>

                  <p className="mt-1 text-xs text-white/70">
                    Modern technology built for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}