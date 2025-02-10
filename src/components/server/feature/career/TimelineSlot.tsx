import { TimelineCard } from "@/components/server/feature/career/TimelineCard"
import { TimelineConnector } from "@/components/server/feature/career/TimelineConnector"
import type { Translations } from "@/utils/common/get-translations.utils"
import { cn } from "@/utils/lib/tailwind/cn.utils"

interface TimelineSlotProps {
  experience: Translations["career"]["experiences"][number]
  index: number
  nbOfExperiences: number
  translationsCareer: Translations["career"]
}

export function TimelineSlot({ experience, index, nbOfExperiences, translationsCareer }: TimelineSlotProps) {
  const isEven = index % 2 === 0
  const isFirst = index === 1
  const isLast = index === nbOfExperiences

  return (
    <>
      <TimelineConnector index={index} isFirst={isFirst} isLast={isLast} />
      <TimelineCard experience={experience} isEven={isEven} translationsCareer={translationsCareer} />
      <div className={cn("col-start-3 hidden lg:block", { "col-start-1": isEven })}></div>
    </>
  )
}
