import TeamCard from "@/components/team-card"
import { teamMembers } from "@/lib/site-data"

export default function TeamSection() {
  return (
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
  )
}