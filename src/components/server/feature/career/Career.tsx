import { Section } from "@/components/server/common/Section"
import { Timeline } from "@/components/server/feature/career/Timeline"
import type { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"

interface CareerProps {
  translationsCareer: Translations["career"]
}

export function Career({ translationsCareer }: CareerProps) {
  return (
    <Section
      id={headerLinks.career}
      number="02"
      sectionName={translationsCareer.section_title}
      title={translationsCareer.title}
      subtitle={translationsCareer.subtitle}
    >
      <Timeline translationsCareer={translationsCareer} />
    </Section>
  )
}
