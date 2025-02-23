import { BriefcaseBusiness, MapPinHouse, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/client/common/Tooltip"
import { Icon } from "@/components/server/common/Icon"
import { LinkButton } from "@/components/server/common/LinkButton"
import { OverLignedText } from "@/components/server/common/OverLignedText"
import { Translations } from "@/utils/common/get-translations.utils"
import { headerLinks } from "@/utils/common/link.utils"

interface CoverPageProps {
  coverPageTranslations: Translations["cover_page"]
}

export function CoverPage({ coverPageTranslations }: CoverPageProps) {
  return (
    <section className="relative mt-5 grid h-[calc(100vh_-_10rem)] content-center justify-center gap-5">
      <span className="animate-appearance-bottom font-geist text-[clamp(1rem,5vw,1.25rem)] font-medium tracking-tight text-muted-foreground animation-delay-[0.1s] animation-appearance-base">
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
      <h2 className="mt-2 max-w-prose animate-appearance-bottom text-pretty text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground animation-delay-[0.4s] animation-appearance-base xs:mt-5">
        {coverPageTranslations.description}
      </h2>
      <div className="my-2 flex flex-col gap-2 xs:my-5 xs:flex-row xs:items-center xs:gap-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="flex w-fit animate-appearance-bottom cursor-default items-center gap-2 rounded-full border border-foreground px-2 py-0.5 animation-delay-[0.5s] animation-appearance-base">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="font-geist text-sm font-medium">{coverPageTranslations.available}</span>
            </TooltipTrigger>
            <TooltipContent>{coverPageTranslations.available_tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="h-full animate-appearance-bottom rounded-full border-x border-muted-foreground animation-delay-[0.6s] animation-appearance-base" />
        <Link
          href="https://www.linkedin.com/company/bébé-boutik/"
          target="_blank"
          rel="noreferrer"
          className="group flex animate-appearance-bottom items-center gap-2 animation-delay-[0.6s] animation-appearance-base"
        >
          <BriefcaseBusiness className="h-4 w-4" />
          <OverLignedText className="font-geist text-sm font-medium">{coverPageTranslations.job}</OverLignedText>
        </Link>
        <span className="h-full animate-appearance-bottom rounded-full border-x border-muted-foreground animation-delay-[0.7s] animation-appearance-base" />
        <Link
          href="https://maps.app.goo.gl/eDKCPKrWSqZqKA5PA"
          target="_blank"
          rel="noreferrer"
          className="group flex animate-appearance-bottom items-center gap-2 animation-delay-[0.7s] animation-appearance-base"
        >
          <MapPinHouse className="h-4 w-4" />
          <OverLignedText className="font-geist text-sm font-medium">{coverPageTranslations.home}</OverLignedText>
        </Link>
      </div>
      <LinkButton
        href={`#${headerLinks.contact}`}
        text={coverPageTranslations.cta}
        icon={
          <MessageCircle className="h-6 w-6 text-background transition-all ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[10deg] group-hover:scale-105" />
        }
        className="animate-appearance-bottom animation-delay-[0.8s] animation-appearance-base"
      />
      <Icon.ScrollDown className="absolute -bottom-4 left-1/2 hidden h-8 w-auto -translate-x-1/2 animate-appearance-bottom text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:3s] sm:block" />
    </section>
  )
}
