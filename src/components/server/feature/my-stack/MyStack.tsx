import { Section } from "@/components/server/common/Section"
import { TechnologyStack } from "@/components/server/common/TechnologyStack"
import type { Translations } from "@/utils/common/getTranslations"
import { sectionLinks } from "@/utils/common/link.utils"

interface MyStackProps {
  translationsMyStack: Translations["my_stack"]
}

export function MyStack({ translationsMyStack }: MyStackProps) {
  return (
    <Section
      id={sectionLinks.technologies}
      number="04"
      sectionName="Ma stack"
      title="En apprendre plus sur ma stack de technologies"
      subtitle="Gouzi gouzi gouzi la marsupilami ehehe"
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:grid-cols-4">
        {translationsMyStack.technologies.map((technology) => (
          <TechnologyStack key={technology} technology={technology} />
        ))}
      </div>
    </Section>
  )
}
