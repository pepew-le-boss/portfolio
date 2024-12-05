import { LinkButton } from "@/components/server/common/LinkButton"
import { Marquee } from "@/components/server/common/Marquee"
import { Section } from "@/components/server/common/Section"
import type { Translations } from "@/utils/common/getTranslations"
import { sectionLinks } from "@/utils/common/link.utils"

interface ContactProps {
  translationsContact: Translations["contact"]
}

export function Contact({ translationsContact }: ContactProps) {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="w-screen border-y border-foreground bg-background py-2">
        <Marquee>
          <span className="text-sm uppercase leading-none text-foreground">{translationsContact.marquee_text}</span>
          <span className="text-sm leading-none text-foreground">{`//`}</span>
        </Marquee>
      </div>
      <Section id={sectionLinks.contact} number="05" sectionName="Contact" title={translationsContact.title} subtitle={translationsContact.description}>
        <div className="flex flex-wrap justify-center gap-5 px-10">
          <LinkButton href="https://www.linkedin.com/in/william-fargues-74a9b515a/" text="Me contacter sur LinkedIn" isExternal />
          <LinkButton href="mailto:fargues.wlm@gmail.com" text="Me contacter par email" isExternal />
        </div>
      </Section>
    </div>
  )
}
