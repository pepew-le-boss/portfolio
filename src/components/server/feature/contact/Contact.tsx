import { Marquee } from "@/components/server/common/Marquee"
import { Section } from "@/components/server/common/Section"
import type { Translations } from "@/utils/common/getTranslations"

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
      <Section number="05" sectionName="Contact" title={translationsContact.title} subtitle={translationsContact.description}>
        <div className="flex gap-5">
          <button className="rounded-[10rem] border-2 border-muted-foreground bg-background px-8 py-4 text-lg uppercase text-foreground transition-all hover:rounded-2xl">
            Me contacter sur LinkedIn
          </button>
          <button className="rounded-lg border-2 border-muted-foreground bg-background px-5 py-2.5 text-lg font-medium text-foreground">
            Me contacter par email
          </button>
        </div>
      </Section>
    </div>
  )
}
