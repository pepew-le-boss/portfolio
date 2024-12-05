import { Section } from "@/components/server/common/Section"
import { Timeline } from "@/components/server/feature/career/Timeline"
import type { Translations } from "@/utils/common/getTranslations"
import { sectionLinks } from "@/utils/common/link.utils"

interface CareerProps {
  translationsCareer: Translations["career"]
}

export function Career({ translationsCareer }: CareerProps) {
  return (
    <Section
      id={sectionLinks.career}
      number="02"
      sectionName="Ma carrière"
      title="En apprendre plus sur ma carrière"
      subtitle="Gouzi gouzi gouzi la marsupilami ehehe"
    >
      <Timeline translationsCareer={translationsCareer} />
    </Section>
  )
}
