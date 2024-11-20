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
    <Section number="01" title="À propos de moi">
      <section className="grid w-full grid-cols-3 grid-rows-[auto_auto] gap-4 p-4">
        <div className="col-span-2 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:px-10 lg:py-5">
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
        <div className="relative">
          <Image src={profilePic} alt={content.img_alt} fill={true} sizes="100vw" className="rounded-2xl object-cover" />
        </div>
        <StatCard bigInfo="5+" description="années d'expérience" />
        <StatCard bigInfo="10+" description="technologies maitrisées" />
        <StatCard bigInfo="100%" description="à l'écoute du besoin" />
      </section>
    </Section>
  )
}
