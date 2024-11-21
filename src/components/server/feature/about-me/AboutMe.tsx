import Image from "next/image"
import profilePic from "/public/images/me.webp"
import { Section } from "@/components/server/common/Section"
import { StatCard } from "@/components/server/feature/about-me/StatCard"
import { Translations } from "@/utils/common/getTranslations"

interface AboutMeProps {
  content: Translations["about_me"]
}

export function AboutMe({ content }: AboutMeProps) {
  return (
    <Section number="01" sectionName="À propos de moi" title="En apprendre plus sur moi" subtitle="Gouzi gouzi gouzi la marsupilami ehehe">
      <div className="grid w-full grid-flow-row-dense grid-cols-6 gap-4">
        <div className="col-span-6 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:col-span-4 lg:px-10 lg:py-5">
          <p className="text-base text-foreground md:text-lg">
            {content.paragraph1}
            <br />
            <br />
            {content.paragraph2}
            <br />
            <br />
            {content.paragraph3}
          </p>
        </div>
        <div className="relative col-span-6 h-48 sm:col-span-3 sm:col-start-4 sm:row-span-2 sm:h-auto lg:col-span-2 lg:col-start-auto lg:row-span-1">
          <Image src={profilePic} alt={content.img_alt} fill={true} sizes="100vw" className="h-full rounded-2xl object-cover" />
        </div>
        <StatCard bigInfo="5+" description="années d'expérience" className="col-span-6 sm:col-span-3 lg:col-span-2" />
        <StatCard bigInfo="10+" description="technologies maitrisées" className="col-span-6 sm:col-span-3 lg:col-span-2" />
        <StatCard bigInfo="100%" description="à l'écoute du besoin" className="col-span-6 lg:col-span-2" />
      </div>
    </Section>
  )
}
