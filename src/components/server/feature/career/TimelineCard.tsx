import { Reveal } from "@/components/client/common/Reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/client/common/Tabs"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import type { Translations } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"

interface TimelineCardProps {
  experience: Translations["career"]["experiences"][number]
  isEven: boolean
  translationsCareer: Translations["career"]
}

export function TimelineCard({ experience, isEven, translationsCareer }: TimelineCardProps) {
  return (
    <Reveal className={cn("animate-appearance-left animation-delay-[0.1s] animation-appearance-base", { "animate-appearance-right": isEven })}>
      <div
        className={cn("col-start-1 flex max-w-lg flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background p-5 sm:p-10 lg:max-w-none", {
          "col-start-3": isEven
        })}
      >
        <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold leading-tight">{experience.title}</div>
          <div className="text-lg text-muted-foreground">{experience.company}</div>
        </div>
        <Tabs defaultValue="projects">
          <TabsList>
            <TabsTrigger value="projects">{translationsCareer.projects}</TabsTrigger>
            <TabsTrigger value="team">{translationsCareer.team}</TabsTrigger>
            <TabsTrigger value="company">{translationsCareer.company}</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <ul className="list-disc pl-5">
              {experience.projects.map((project) => (
                <li key={project.description}>{project.description}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="team">
            <p className="text-pretty">{experience.team}</p>
          </TabsContent>
          <TabsContent value="company">
            <p>{experience.company_description}</p>
            <p>{experience.company_size}</p>
          </TabsContent>
        </Tabs>
        <div className="mt-2 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <TechnologyChips key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
