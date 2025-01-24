import { ExternalLink } from "lucide-react"
import { LinkButton } from "@/components/server/common/LinkButton"
import { Marquee } from "@/components/server/common/Marquee"
import { Section } from "@/components/server/common/Section"
import type { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"

interface ContactProps {
  translationsContact: Translations["contact"]
}

export function Contact({ translationsContact }: ContactProps) {
  return (
    <div className="flex flex-col items-center gap-52">
      <div className="w-screen border-y border-foreground bg-background py-2">
        <Marquee>
          <span className="text-sm uppercase leading-none text-foreground">{translationsContact.marquee_text}</span>
          <span className="text-sm leading-none text-foreground">{`//`}</span>
        </Marquee>
      </div>
      <Section
        id={headerLinks.contact}
        number="05"
        sectionName={translationsContact.section_title}
        title={translationsContact.title}
        subtitle={translationsContact.subtitle}
      >
        <div className="flex flex-wrap justify-center gap-5 px-10">
          <LinkButton
            href="https://www.linkedin.com/in/william-fargues-74a9b515a/"
            icon={<ExternalLink className="h-5 w-5 text-background transition-all ease-out group-hover:-translate-y-0.5 group-hover:translate-x-1" />}
            text={translationsContact.contact_me_linkedin}
            isExternal
          />
          <LinkButton
            href="mailto:fargues.wlm@gmail.com"
            icon={<ExternalLink className="h-5 w-5 text-background transition-all ease-out group-hover:-translate-y-0.5 group-hover:translate-x-1" />}
            text={translationsContact.contact_me_email}
            isExternal
          />
        </div>
      </Section>
    </div>
  )
}
