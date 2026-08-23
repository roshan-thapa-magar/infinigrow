"use client"

import Link from "next/link"
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingCart,
  BriefcaseBusiness,
  Rocket,
  Check,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Hero from "@/components/industries/hero"
import Intro from "@/components/industries/intro"
import Industry from "@/components/industries/industry"
import HowWeHelp from "@/components/industries/how-we-help"
import Services from "@/components/industries/services"
import IndustryCTA from "@/components/industries/industry-cta"


/* =========================================================
   PAGE
========================================================= */

export default function IndustriesPage() {
  return (
    <main className="bg-background">
      {/* ===================================================
          HERO
      =================================================== */}

      <Hero />

      {/* ===================================================
          INTRO
      =================================================== */}

      <Intro />

      {/* ===================================================
          INDUSTRIES
      =================================================== */}

      <Industry />
      {/* ===================================================
          HOW WE HELP
      =================================================== */}

      <HowWeHelp />

      {/* ===================================================
          SERVICES
      =================================================== */}

      <Services />

      {/* ===================================================
          CTA
      =================================================== */}

      <IndustryCTA />
    </main>
  )
}