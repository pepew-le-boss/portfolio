import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import type { Translations } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"

interface TimelineSlotProps {
  experience: Translations["career"]["experiences"][number]
  index: number
  nbOfExperiences: number
}

export function TimelineSlot({ experience, index, nbOfExperiences }: TimelineSlotProps) {
  const isEven = index % 2 === 0

  const isLast = index === nbOfExperiences

  return (
    <div
      className={cn("flex gap-10 lg:gap-20", {
        "flex-row lg:flex-row-reverse": isEven
      })}
    >
      <div className="hidden flex-1 flex-col gap-10 border-2 border-transparent p-10 lg:flex"></div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[1px] flex-1 bg-muted-foreground" />
        <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background font-sfmono text-foreground">{`0${index}`}</div>
        <div
          className={cn("w-[1px] flex-1 bg-muted-foreground", {
            "bg-transparent": isLast
          })}
        />
      </div>
      <div className="my-5 flex flex-1 flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background p-10 lg:my-0">
        <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold leading-tight">{experience.title}</div>
          <div className="text-lg text-muted-foreground">{experience.company}</div>
        </div>
        <div>
          {experience.description.map((block) => {
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
          {experience.technologies.map((technology) => (
            <TechnologyChips key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  )
}
