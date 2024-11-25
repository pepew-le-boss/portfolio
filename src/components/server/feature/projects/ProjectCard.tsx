import Image from "next/image"
import profilePic from "/public/images/me.webp"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import type { Translations } from "@/utils/common/getTranslations"

interface ProjectCardProps {
  project: Translations["projects"]["works"][number]
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div key={project.title} className="flex max-w-96 flex-col overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background">
      <div className="relative h-48 w-full">
        <Image src={profilePic} alt="test" fill={true} sizes="100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col">
          <span className="text-lg text-muted-foreground">{project.company}</span>
          <h4 className="text-2xl font-semibold leading-tight">{project.name}</h4>
        </div>
        <div>
          {project.description.map((block) => {
            if (typeof block === "string") {
              return <p key={block}>{block}</p>
            }
            if (typeof block === "object") {
              return (
                <ul key={block[0]} className="list-disc pl-5">
                  {block.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }
          })}
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyChips key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  )
}
