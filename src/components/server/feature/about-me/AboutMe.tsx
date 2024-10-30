import Image from "next/image"
import profilePic from "/public/images/me.webp"
import { Translations } from "@/utils/common/getTranslations"

interface AboutMeProps {
  content: Translations["about_me"]
}

export function AboutMe({ content }: AboutMeProps) {
  return (
    <section className="grid grid-cols-[2fr,1fr] overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background">
      <div className="flex flex-col gap-10 p-10">
        <h3 className="flex items-end">
          <span className="mb-[2px] font-sfmono text-xl font-semibold text-muted-foreground">01.</span>
          <span className="whitespace-nowrap text-3xl font-semibold text-foreground">À propos de moi</span>
          <span className="ml-5 h-[1px] w-full self-center bg-muted-foreground"></span>
        </h3>
        <div className="max-w-prose text-lg text-foreground">
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
      <div className="relative">
        <Image src={profilePic} alt={content.img_alt} fill={true} sizes="75vw" className="object-cover" />
      </div>
    </section>
  )
}
