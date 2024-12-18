import { BriefcaseBusiness, CalendarCheck, MapPinHouse, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Icon } from "@/components/server/common/Icon"
import { LinkButton } from "@/components/server/common/LinkButton"
import { OverLignedText } from "@/components/server/common/OverLignedText"
import { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"

interface CoverPageProps {
  coverPageTranslations: Translations["cover_page"]
}

export function CoverPage({ coverPageTranslations }: CoverPageProps) {
  return (
    <div className="relative mt-5 grid h-[calc(100vh_-_10rem)] content-center justify-center gap-5">
      <span className="animate-appearance-bottom font-sfmono text-[clamp(1rem,5vw,1.25rem)] font-semibold text-muted-foreground animation-delay-[0.1s] animation-appearance-base">
        {coverPageTranslations.hello}
      </span>
      <h1 className="flex flex-col gap-2">
        <span className="animate-appearance-bottom text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none animation-delay-[0.2s] animation-appearance-base">
          {coverPageTranslations.william}
        </span>
        <span className="animate-appearance-bottom text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none text-muted-foreground animation-delay-[0.3s] animation-appearance-base">
          {coverPageTranslations.developer}
        </span>
      </h1>
      <h2 className="xs:mt-5 mt-2 max-w-prose animate-appearance-bottom text-pretty text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground animation-delay-[0.4s] animation-appearance-base">
        {coverPageTranslations.description}
      </h2>
      <div className="xs:items-center xs:flex-row xs:gap-4 xs:my-5 my-2 flex flex-col gap-2">
        <div className="flex animate-appearance-bottom items-center gap-2 animation-delay-[0.5s] animation-appearance-base">
          <CalendarCheck className="h-4 w-4" />
          <span className="font-sfmono text-sm font-semibold">{coverPageTranslations.available}</span>
        </div>
        <span className="h-full animate-appearance-bottom rounded-full border-x border-muted-foreground animation-delay-[0.6s] animation-appearance-base" />
        <Link
          href="https://www.linkedin.com/company/bébé-boutik/"
          target="_blank"
          rel="noreferrer"
          className="group flex animate-appearance-bottom items-center gap-2 animation-delay-[0.6s] animation-appearance-base"
        >
          <BriefcaseBusiness className="h-4 w-4" />
          <OverLignedText className="font-sfmono text-sm font-semibold">{coverPageTranslations.job}</OverLignedText>
        </Link>
        <span className="h-full animate-appearance-bottom rounded-full border-x border-muted-foreground animation-delay-[0.7s] animation-appearance-base" />
        <Link
          href="https://maps.app.goo.gl/eDKCPKrWSqZqKA5PA"
          target="_blank"
          rel="noreferrer"
          className="group flex animate-appearance-bottom items-center gap-2 animation-delay-[0.7s] animation-appearance-base"
        >
          <MapPinHouse className="h-4 w-4" />
          <OverLignedText className="font-sfmono text-sm font-semibold">{coverPageTranslations.home}</OverLignedText>
        </Link>
      </div>
      <LinkButton
        href={`#${headerLinks.contact}`}
        text={coverPageTranslations.cta}
        icon={
          <MessageCircle className="h-6 w-6 text-background transition-all ease-out group-hover:translate-x-1 group-hover:rotate-[10deg] group-hover:scale-105" />
        }
        className="animate-appearance-bottom animation-delay-[0.8s] animation-appearance-base"
      />
      <Icon.ScrollDown className="absolute -bottom-4 left-1/2 h-8 w-auto -translate-x-1/2 animate-appearance-bottom text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:3s]" />
    </div>
  )
}
