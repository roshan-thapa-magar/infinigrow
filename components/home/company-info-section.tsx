import { Badge } from "@/components/ui/badge"

export default function CompanyInfoSection() {
  return (
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
            challenges, and workflows before designing and developing the
            right solution. This allows us to create technology that is
            practical, scalable, and easy to use.
          </p>

          <p>
            From modern websites and custom software to AI-powered
            applications and cloud-based systems, InfiniGrow Technology helps
            organizations improve their digital capabilities. Our focus is not
            only on building technology, but also on creating solutions that
            deliver long-term value.
          </p>

          <p>
            We believe great technology is built through collaboration,
            continuous learning, and attention to detail. Our team works with
            a strong focus on quality, performance, security, and user
            experience throughout every stage of a project.
          </p>

          <p>
            As technology continues to evolve, our mission at InfiniGrow
            Technology is to help businesses adapt, innovate, and grow with
            confidence. We aim to build lasting relationships with our
            clients while delivering digital solutions that are ready for the
            future.
          </p>
        </div>
      </div>
    </section>
  )
}