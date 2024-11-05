import { TimelineSlot } from "@/components/server/feature/career/TimelineSlot"
import type { Translations } from "@/utils/common/getTranslations"

interface TimelineProps {
  translationsCareer: Translations["career"]
}

export function Timeline({ translationsCareer }: TimelineProps) {
  return (
    <div className="flex flex-col">
      {translationsCareer.experiences.map((experience, index) => (
        <TimelineSlot key={experience.title} experience={experience} index={index + 1} />
      ))}
    </div>
  )
}
