import { MessageCircle } from "lucide-react"
import { Icon } from "@/components/server/common/Icon"
import { LinkButton } from "@/components/server/common/LinkButton"
import { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"

// faire les chips
// ne pas oublier animations (avec class custom)

interface CoverPageProps {
  coverPageTranslations: Translations["cover_page"]
}

export function CoverPage({ coverPageTranslations }: CoverPageProps) {
  return (
    <div className="relative grid h-[calc(100vh_-_10rem)] content-center justify-center gap-5">
      <span className="animate-appearance-bottom font-sfmono text-[clamp(1rem,5vw,1.25rem)] font-semibold text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:0.1s]">
        {coverPageTranslations.hello}
      </span>
      <h1 className="flex flex-col gap-2">
        <span className="animate-appearance-bottom text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none opacity-0 fill-mode-forwards [animation-delay:0.2s]">
          {coverPageTranslations.william}.
        </span>
        <span className="animate-appearance-bottom text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:0.3s]">
          {coverPageTranslations.developer}.
        </span>
      </h1>
      <h2 className="max-w-prose animate-appearance-bottom text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:0.4s]">
        {coverPageTranslations.description}
      </h2>
      <div>
        <span>🟢 Disponible</span>
        <span>💼 Bébéboutik</span>
        <span>📍 Colomiers</span>
      </div>
      {/* <span className="max-w-prose animate-appearance-bottom text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:0.5s]">
        {coverPageTranslations.current_situation_1}{" "}
        <Link
          href="https://www.linkedin.com/company/bébé-boutik/"
          target="_blank"
          rel="noreferrer"
          className="font-sfmono text-[clamp(0.9rem,5vw,1.15rem)] italic underline transition-all hover:text-foreground"
        >
          {coverPageTranslations.current_situation_2}
        </Link>{" "}
        {coverPageTranslations.current_situation_3}{" "}
        <Link
          href="https://maps.app.goo.gl/eDKCPKrWSqZqKA5PA"
          target="_blank"
          rel="noreferrer"
          className="font-sfmono text-[clamp(0.9rem,5vw,1.15rem)] italic underline transition-all hover:text-foreground"
        >
          {coverPageTranslations.current_situation_4}
        </Link>
        .
      </span> */}
      <LinkButton
        href={`#${headerLinks.contact}`}
        text={coverPageTranslations.cta}
        icon={<MessageCircle className="h-6 w-6 text-background transition-all group-hover:translate-x-1 group-hover:rotate-[10deg] group-hover:scale-105" />}
      />
      <Icon.ScrollDown className="absolute bottom-0 left-1/2 h-8 w-auto -translate-x-1/2 animate-appearance-bottom text-muted-foreground opacity-0 fill-mode-forwards [animation-delay:3s]" />
    </div>
  )
}
