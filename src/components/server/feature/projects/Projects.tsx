import { Section } from "@/components/server/common/Section"
import { ProjectCard } from "@/components/server/feature/projects/ProjectCard"
import type { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"

interface ProjectsProps {
  translationsProjects: Translations["projects"]
}

export function Projects({ translationsProjects }: ProjectsProps) {
  return (
    <Section
      id={headerLinks.projects}
      number="03"
      sectionName="Mes projets"
      title="En apprendre plus sur mes projets"
      subtitle="Gouzi gouzi gouzi la marsupilami ehehe"
    >
      <div className="flex flex-wrap justify-center gap-10">
        {translationsProjects.works.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
