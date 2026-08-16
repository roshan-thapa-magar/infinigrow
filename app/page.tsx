"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import TeamCard from "@/components/team-card"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    id: "roshan",
    name: "Roshan Thapa Magar",
    designation: "Software Developer",
    image: "/images/roshan.png",
    badge: "Developer",
    about:
      "Roshan is a passionate software developer focused on building reliable, scalable, and user-friendly digital solutions.",
  },
  {
    id: "sundar",
    name: "Sundar Thapa Magar",
    designation: "Business Analyst",
    image: "/images/sundar.png",
    badge: "Analyst",
    about:
      "Sundar works on understanding business requirements, analyzing processes, and helping turn ideas into effective solutions.",
  },
  {
    id: "khum",
    name: "Khum Bahadur Thapa Magar",
    designation: "CEO",
    image: "/images/Chairperson.png",
    badge: "CEO",
    about:
      "Sundar works on understanding business requirements, analyzing processes, and helping turn ideas into effective solutions.",
  },
]

const trustedCompanies = [
  "TechNova",
  "CloudWorks",
  "DigitalEdge",
  "NextGen",
  "InnovateX",
  "SmartCore",
]

const services = [
  {
    id: "generative-ai",
    name: "Generative AI",
    title: "Build Smarter With Generative AI",
    description:
      "We build intelligent AI solutions that help businesses automate workflows, generate content, analyze information, and create better digital experiences.",
    image: "/images/generative.png",
    features: [
      "AI-powered applications",
      "Intelligent automation",
      "AI assistants & chatbots",
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    title: "Modern Web Experiences That Convert",
    description:
      "We create fast, responsive, and scalable websites that combine modern design with powerful technology to deliver exceptional user experiences.",
    image: "/images/web-development.png",
    features: [
      "Modern responsive websites",
      "High-performance applications",
      "SEO-friendly architecture",
    ],
  },
  {
    id: "software-development",
    name: "Software Development",
    title: "Custom Software Built Around Your Business",
    description:
      "We develop reliable and scalable software solutions designed around your business processes, requirements, and long-term goals.",
    image: "/images/software-development.png",
    features: [
      "Custom business software",
      "Scalable architecture",
      "API & backend development",
    ],
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    title: "Powerful Mobile Applications",
    description:
      "We design and develop intuitive mobile applications that provide smooth experiences across modern mobile platforms.",
    image: "/images/mobile-development.png",
    features: [
      "Cross-platform applications",
      "Modern mobile UI",
      "Secure API integration",
    ],
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    title: "Reliable Infrastructure That Scales",
    description:
      "We help businesses build secure, scalable, and reliable cloud infrastructure with modern DevOps practices and automation.",
    image: "/images/devops-cloud.png",
    features: [
      "Cloud infrastructure",
      "CI/CD automation",
      "Deployment & monitoring",
    ],
  },
  {
    id: "ai-data",
    name: "AI & Data",
    title: "Turn Data Into Better Decisions",
    description:
      "We transform business data into useful insights with analytics, intelligent systems, and modern data technologies.",
    image: "/images/ai-data.png",
    features: [
      "Data analytics",
      "Machine learning solutions",
      "Business intelligence",
    ],
  },
]
export default function HeroPage() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-center space-y-8 py-12 lg:py-0">

            {/* Badge */}
            <Badge
              className="
                w-fit
                inline-flex
                items-center
                gap-2
                border-emerald-200
                bg-emerald-50
                text-emerald-700
                hover:bg-emerald-100
                dark:border-emerald-800
                dark:bg-emerald-950/30
                dark:text-emerald-400
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Modern Software & AI Solutions
            </Badge>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build Smarter.
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Grow Faster.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We build modern software, AI-powered solutions, web applications,
              and digital products that help businesses innovate, automate,
              and scale with confidence.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground shadow-lg shadow-emerald-500/20 hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted"
              >
                Explore Services
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid max-w-xl grid-cols-3 gap-4 border-t pt-8 sm:gap-6">
              <div>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  50+
                </p>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Projects Delivered
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  20+
                </p>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  99%
                </p>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="relative h-full min-h-[calc(100vh-4rem)] hidden md:block">

            {/* Emerald Glow */}
            <div className="absolute inset-y-20 right-0 -z-10 w-3/4 rounded-full bg-emerald-500/10 blur-3xl" />

            {/* Image Shape */}
            <div
              className="
                relative
                h-full
                min-h-[calc(100vh-4rem)]
                overflow-hidden
                bg-black
              "
              style={{
                clipPath:
                  "polygon(18% 0%, 100% 0%, 100% 100%, 18% 100%, 0% 50%)",
              }}
            >
              <Image
                src="/images/image.png"
                alt="Software developer and business analyst working together"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>


      {/* ================= TRUSTED BY ================= */}
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Meet Our Team
            </h2>

            <p className="mt-4 text-muted-foreground">
              The people behind our software and technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={`${member.name}-${index}`}
                name={member.name}
                designation={member.designation}
                image={member.image}
                badge={member.badge}
                about={member.about}
              />
            ))}
          </div>

        </div>
      </section>

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

<section className="bg-background py-20">
  <div className="mx-auto max-w-7xl px-4 md:px-8">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">
      <Badge
        variant="outline"
        className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
      >
        Client Stories
      </Badge>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        What Our Clients
        <span className="block text-emerald-600 dark:text-emerald-400">
          Say About Us
        </span>
      </h2>

      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        We work closely with our clients to turn ideas into reliable
        digital products and meaningful business solutions.
      </p>
    </div>

    {/* ================= TESTIMONIALS ================= */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* ================= TESTIMONIAL 1 ================= */}
      <div className="group rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5">

        {/* Rating */}
        <div className="flex gap-1 text-emerald-500">
          ★★★★★
        </div>

        {/* Review */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          “The team understood our requirements quickly and transformed
          our idea into a clean, reliable, and easy-to-use digital
          solution. The overall experience was excellent.”
        </p>

        {/* Client */}
        <div className="mt-7 flex items-center gap-4 border-t pt-6">
          <Avatar className="h-11 w-11 border border-emerald-500/20">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="Raj Kumar"
            />
            <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
              RK
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold">
              Raj Kumar
            </p>

            <p className="text-sm text-muted-foreground">
              Business Owner
            </p>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIAL 2 ================= */}
      <div className="group rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5">

        {/* Rating */}
        <div className="flex gap-1 text-emerald-500">
          ★★★★★
        </div>

        {/* Review */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          “From design to development, everything was handled
          professionally. They delivered a modern product that helped
          us improve our workflow and serve our customers better.”
        </p>

        {/* Client */}
        <div className="mt-7 flex items-center gap-4 border-t pt-6">
          <Avatar className="h-11 w-11 border border-emerald-500/20">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="Suman Magar"
            />
            <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
              SM
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold">
              Suman Magar
            </p>

            <p className="text-sm text-muted-foreground">
              Product Manager
            </p>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIAL 3 ================= */}
      <div className="group rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5">

        {/* Rating */}
        <div className="flex gap-1 text-emerald-500">
          ★★★★★
        </div>

        {/* Review */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          “Their technical knowledge and communication made the entire
          project much easier. We received a scalable solution that
          matched exactly what our business needed.”
        </p>

        {/* Client */}
        <div className="mt-7 flex items-center gap-4 border-t pt-6">
          <Avatar className="h-11 w-11 border border-emerald-500/20">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Anil Sharma"
            />
            <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
              AS
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold">
              Anil Sharma
            </p>

            <p className="text-sm text-muted-foreground">
              Founder & CEO
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* ================= BOTTOM TRUST ================= */}
    <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
      <p className="text-sm text-muted-foreground">
        Building long-term relationships through technology.
      </p>

      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-emerald-500">●</span>
        Trusted. Reliable. Innovative.
      </div>
    </div>

  </div>
</section>


      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          {/* Header */}
          <div className="mb-10">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            >
              Company Info
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              InfiniGrow Technology
              <span className="block text-emerald-600 dark:text-emerald-400">
                Building Technology That Makes a Difference
              </span>
            </h2>
          </div>

          {/* Company Description */}
          <div className="space-y-6 text-justify text-base leading-8 text-muted-foreground md:text-lg">

            <p>
              <span className="font-semibold text-foreground">
                InfiniGrow Technology
              </span>{" "}
              is a modern software and technology company focused on creating
              reliable digital solutions for businesses of all sizes. We combine
              software development, artificial intelligence, cloud technologies,
              and modern design to build products that solve real-world problems.
            </p>

            <p>
              Our approach starts with understanding the needs of our clients.
              We work closely with businesses to understand their goals,
              challenges, and workflows before designing and developing the right
              solution. This allows us to create technology that is practical,
              scalable, and easy to use.
            </p>

            <p>
              From modern websites and custom software to AI-powered applications
              and cloud-based systems, InfiniGrow Technology helps organizations
              improve their digital capabilities. Our focus is not only on building
              technology, but also on creating solutions that deliver long-term
              value.
            </p>

            <p>
              We believe great technology is built through collaboration,
              continuous learning, and attention to detail. Our team works with a
              strong focus on quality, performance, security, and user experience
              throughout every stage of a project.
            </p>

            <p>
              As technology continues to evolve, our mission at InfiniGrow
              Technology is to help businesses adapt, innovate, and grow with
              confidence. We aim to build lasting relationships with our clients
              while delivering digital solutions that are ready for the future.
            </p>

          </div>

        </div>
      </section>

    </main>
  )
}