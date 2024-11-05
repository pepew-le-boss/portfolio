import { SectionTitle } from "@/components/server/common/SectionTitle"
import { Timeline } from "@/components/server/feature/career/Timeline"
import type { Translations } from "@/utils/common/getTranslations"

interface CareerProps {
  translationsCareer: Translations["career"]
}

export function Career({ translationsCareer }: CareerProps) {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle number="02" title="Ma carrière" isCentered={true} />
      <Timeline translationsCareer={translationsCareer} />
    </div>
  )
}
