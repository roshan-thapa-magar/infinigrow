"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type HeroButton = {
  label: string
  href?: string
  icon?: ReactNode
  onClick?: () => void
}

type HeroSectionProps = {
  badge?: string
  title: string
  description: string[]
  image?: string
  imageAlt?: string
  primaryButton?: HeroButton
  secondaryButton?: HeroButton
}

export function HeroSection({
  badge,
  title,
  description,
  image,
  imageAlt = "",
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-3xl">

            {/* BADGE */}

            {badge && (
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
                {badge}
              </Badge>
            )}

            {/* TITLE */}

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {/* DESCRIPTION */}

            <div className="mt-6 space-y-4">
              {description.map((text, index) => (
                <p
                  key={index}
                  className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            {(primaryButton || secondaryButton) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">

                {/* =================================================
                    PRIMARY BUTTON
                ================================================= */}

                {primaryButton && (
                  primaryButton.onClick ? (
                    <Button
                      type="button"
                      size="lg"
                      onClick={primaryButton.onClick}
                      className="bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      {primaryButton.label}

                      {primaryButton.icon ?? (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  ) : primaryButton.href ? (
                    <Button
                      size="lg"
                      
                      className="bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      <Link href={primaryButton.href} className="flex items-center gap-2">
                        {primaryButton.label}

                        {primaryButton.icon ?? (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Link>
                    </Button>
                  ) : null
                )}

                {/* =================================================
                    SECONDARY BUTTON
                ================================================= */}

                {secondaryButton && (
                  secondaryButton.onClick ? (
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={secondaryButton.onClick}
                    >
                      {secondaryButton.label}

                      {secondaryButton.icon && (
                        <span className="ml-2">
                          {secondaryButton.icon}
                        </span>
                      )}
                    </Button>
                  ) : secondaryButton.href ? (
                    <Button
                      size="lg"
                      variant="outline"
                      
                    >
                      <Link href={secondaryButton.href}>
                        {secondaryButton.label}

                        {secondaryButton.icon && (
                          <span className="ml-2">
                            {secondaryButton.icon}
                          </span>
                        )}
                      </Link>
                    </Button>
                  ) : null
                )}

              </div>
            )}

          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          {image && (
            <div className="relative">

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/30 shadow-sm">

                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  )
}