import { SectionTitle } from "@/components/server/common/SectionTitle"
import type { Translations } from "@/utils/common/getTranslations"

interface ProjectsProps {
  translationsProjects: Translations["projects"]
}

export function Projects({ translationsProjects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-10 px-5 py-20 sm:px-10 lg:px-20">
      <SectionTitle number="03" title={translationsProjects.title} />
    </div>
  )
}
