import Image from "next/image"
import profilePic from "/public/images/me.webp"
import { Section } from "@/components/server/common/Section"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import type { Translations } from "@/utils/common/getTranslations"

interface ProjectsProps {
  translationsProjects: Translations["projects"]
}

export function Projects({ translationsProjects }: ProjectsProps) {
  return (
    <Section number="03" sectionName="Mes projets" title="En apprendre plus sur mes projets" subtitle="Gouzi gouzi gouzi la marsupilami ehehe">
      <div className="grid grid-cols-2 gap-10">
        {translationsProjects.works.map((project, index) => (
          <div key={project.title} className="flex flex-col overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background">
            <div className="relative h-80 w-full">
              <Image src={profilePic} alt="test" fill={true} sizes="100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 p-10">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div>
                {project.description.map((block) => {
                  if (typeof block === "string") {
                    return <p key={block}>{block}</p>
                  }
                  if (typeof block === "object") {
                    return (
                      <ul key={index} className="list-disc pl-5">
                        {block.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  }
                })}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <TechnologyChips key={technology} technology={technology} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
