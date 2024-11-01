import Image from "next/image"
import profilePic from "/public/images/me.webp"
import { SectionTitle } from "@/components/server/common/SectionTitle"
import { StatCard } from "@/components/server/feature/about-me/StatCard"
import { Translations } from "@/utils/common/getTranslations"

interface AboutMeProps {
  content: Translations["about_me"]
}

export function AboutMe({ content }: AboutMeProps) {
  return (
    <section className="flex flex-col gap-10 self-center 2xl:flex-row">
      <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background lg:grid lg:grid-cols-[2fr,1fr]">
        <div className="flex flex-col gap-10 p-10">
          <SectionTitle number="01" title="À propos de moi" />
          <div className="max-w-prose text-base text-foreground md:text-lg">
            <p>
              {content.paragraph1}
              <br />
              <br />
              {content.paragraph2}
              <br />
              <br />
              {content.paragraph3}
            </p>
            {/* <span>{content.listTitle}</span>
          <ul className="list-inside list-disc">
            {content.listElements.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul> */}
          </div>
        </div>
        <div className="relative h-96 w-full lg:h-auto">
          <Image src={profilePic} alt={content.img_alt} fill={true} sizes="100vw" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-10 2xl:flex-col">
        <StatCard bigInfo="5+" description="années d'expérience" />
        <StatCard bigInfo="10+" description="technologies maitrisées" />
        <StatCard bigInfo="100%" description="à l'écoute du besoin" />
      </div>
    </section>
  )
}
