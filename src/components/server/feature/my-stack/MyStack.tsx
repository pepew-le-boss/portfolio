import { Section } from "@/components/server/common/Section"
import { TechnologyStack } from "@/components/server/common/TechnologyStack"
import type { Translations } from "@/utils/common/get-translations.utils"
import { headerLinks } from "@/utils/common/link.utils"

interface MyStackProps {
  translationsMyStack: Translations["my_stack"]
}

export function MyStack({ translationsMyStack }: MyStackProps) {
  return (
    <Section
      id={headerLinks.technologies}
      number="04"
      sectionName={translationsMyStack.section_title}
      title={translationsMyStack.title}
      subtitle={translationsMyStack.subtitle}
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:grid-cols-4">
        {translationsMyStack.technologies.map((technology, index) => (
          <TechnologyStack key={technology} technology={technology} index={index} />
        ))}
      </div>
    </Section>
  )
}
