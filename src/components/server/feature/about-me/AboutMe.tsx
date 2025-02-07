import Image from "next/image"
import { Reveal } from "@/components/client/common/Reveal"
import { Section } from "@/components/server/common/Section"
import { SpotlightImage } from "@/components/server/common/SpotlightImage"
import { StatCard } from "@/components/server/feature/about-me/StatCard"
import { getYearsOfExperience } from "@/utils/common/date.utils"
import { Translations } from "@/utils/common/get-translations.utils"
import { headerLinks } from "@/utils/common/link.utils"

interface AboutMeProps {
  translationsAboutMe: Translations["about_me"]
}

export function AboutMe({ translationsAboutMe }: AboutMeProps) {
  return (
    <Section
      id={headerLinks.about}
      number="01"
      sectionName={translationsAboutMe.section_title}
      title={translationsAboutMe.title}
      subtitle={translationsAboutMe.subtitle}
    >
      <div className="grid w-full grid-flow-row-dense grid-cols-6 gap-4">
        <Reveal className="animate-appearance-left animation-delay-[0.8s] animation-appearance-base">
          <div className="col-span-6 rounded-2xl border-2 border-muted-foreground bg-background p-5 lg:col-span-4 lg:p-10">
            <p className="text-base text-foreground md:text-lg">
              {translationsAboutMe.paragraph1}
              <br />
              <br />
              {translationsAboutMe.paragraph2}
              <br />
              <br />
              {translationsAboutMe.paragraph3}
            </p>
          </div>
        </Reveal>
        <Reveal className="animate-appearance-right animation-delay-[0.8s] animation-appearance-base">
          <div className="relative col-span-6 h-48 sm:col-span-3 sm:col-start-4 sm:row-span-2 sm:h-auto lg:col-span-2 lg:col-start-auto lg:row-span-1">
            <SpotlightImage>
              <Image
                src="/images/me.webp"
                alt={translationsAboutMe.img_alt}
                fill={true}
                sizes="(max-width: 1024px) 33vw, (max-width: 640px) 50vw, 100vw"
                className="h-full rounded-2xl object-cover"
              />
            </SpotlightImage>
          </div>
        </Reveal>
        <Reveal className="animate-appearance-bottom animation-delay-[0.2s] animation-appearance-base">
          <StatCard bigInfo={`${getYearsOfExperience()}+`} description={translationsAboutMe.stat_card_1} className="col-span-6 sm:col-span-3 lg:col-span-2" />
        </Reveal>
        <Reveal className="animate-appearance-bottom animation-delay-[0.3s] animation-appearance-base">
          <StatCard bigInfo="10+" description={translationsAboutMe.stat_card_2} className="col-span-6 sm:col-span-3 lg:col-span-2" />
        </Reveal>
        <Reveal className="animate-appearance-bottom animation-delay-[0.4s] animation-appearance-base">
          <StatCard bigInfo="100%" description={translationsAboutMe.stat_card_3} className="col-span-6 lg:col-span-2" />
        </Reveal>
      </div>
    </Section>
  )
}
