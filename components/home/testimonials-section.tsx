import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/lib/site-data"

export default function TestimonialsSection() {
  return (
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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-3xl border bg-muted/20 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Rating */}
              <div className="flex gap-1 text-emerald-500">★★★★★</div>

              {/* Review */}
              <p className="mt-6 leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </p>

              {/* Client */}
              <div className="mt-7 flex items-center gap-4 border-t pt-6">
                <Avatar className="h-11 w-11 border border-emerald-500/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-emerald-500/10 font-semibold text-emerald-600">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
  )
}