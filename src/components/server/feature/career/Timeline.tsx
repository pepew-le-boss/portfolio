import { ChevronsDown } from "lucide-react"
import { Reveal } from "@/components/client/common/Reveal"
import { TimelineSlot } from "@/components/server/feature/career/TimelineSlot"
import type { Translations } from "@/utils/common/get-translations.utils"

interface TimelineProps {
  translationsCareer: Translations["career"]
}

export function Timeline({ translationsCareer }: TimelineProps) {
  return (
    <div className="flex flex-col">
      <Reveal className="animate-appearance-static animation-delay-[0.1s] animation-appearance-base">
        <div className="flex flex-col items-center gap-4 lg:w-full">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background font-sfmono text-foreground">
            <ChevronsDown className="h-5 w-5 text-foreground" />
          </div>
          <div className="h-5 w-[1px] bg-muted-foreground lg:h-20" />
        </div>
      </Reveal>
      <div className="flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-[1fr_auto_1fr]">
        {translationsCareer.experiences.map((experience, index) => (
          <TimelineSlot
            key={`${experience.range}-${experience.title}`}
            experience={experience}
            index={index + 1}
            nbOfExperiences={translationsCareer.experiences.length}
            translationsCareer={translationsCareer}
          />
        ))}
      </div>
    </div>
  )
}
