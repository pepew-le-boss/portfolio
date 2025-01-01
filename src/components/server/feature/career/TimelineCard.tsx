import { Reveal } from "@/components/client/common/Reveal"
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
        className={cn("col-start-1 flex max-w-lg flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background p-10 lg:max-w-none", {
          "col-start-3": isEven
        })}
      >
        <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold leading-tight">{experience.title}</div>
          <div className="text-lg text-muted-foreground">{experience.company}</div>
        </div>
        <div className="flex flex-col gap-1">
          {experience.overview}
          <button className="w-fit text-sm underline transition-all hover:opacity-80">{translationsCareer.see_more}</button>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <TechnologyChips key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
