import { Section } from "@/components/server/common/Section"
import type { Translations } from "@/utils/common/getTranslations"

interface ProjectsProps {
  translationsProjects: Translations["projects"]
}

export function Projects({ translationsProjects }: ProjectsProps) {
  return (
    <Section number="03" sectionName="Mes projets" title="En apprendre plus sur mes projets" subtitle="Gouzi gouzi gouzi la marsupilami ehehe">
      <p>lol</p>
    </Section>
  )
}
