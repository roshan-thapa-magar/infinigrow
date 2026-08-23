import ProjectCTA from "@/components/project/project-cta"
import ProjectHero from "@/components/project/project-hero"
import ProjectIntro from "@/components/project/project-intro"
import Projects from "@/components/project/projects"



export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <ProjectHero />
      <ProjectIntro />
      <Projects />
      <ProjectCTA/>
    </main>
  )
}