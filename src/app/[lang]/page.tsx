import Link from "next/link"
import { Header } from "@/components/server/feature/header/Header"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)
  return (
    <div className="relative z-20">
      <Header lang={lang} headerTranslations={translations.header} />
      <div className="flex flex-col gap-96 px-5 py-20 sm:px-10 lg:px-20">
        <div className="grid h-[calc(100vh_-_10rem)] content-center justify-center gap-5">
          <span className="animate-appearance font-sfmono text-[clamp(1rem,5vw,1.25rem)] font-semibold text-muted-foreground [animation-delay:0.1s]">
            {translations.main.hello}
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="animate-appearance text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none [animation-delay:0.2s]">
              {translations.main.william}.
            </h1>
            <h2 className="animate-appearance text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none text-muted-foreground [animation-delay:0.3s]">
              {translations.main.developer}.
            </h2>
          </div>
          <span className="max-w-prose animate-appearance text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground [animation-delay:0.4s]">
            {translations.main.work_1}{" "}
            <Link
              href="https://www.linkedin.com/company/bébé-boutik/"
              target="_blank"
              className="font-sfmono text-[clamp(0.9rem,5vw,1.15rem)] italic underline transition-all hover:text-foreground"
            >
              Bebeboutik
            </Link>{" "}
            {translations.main.work_2}.
          </span>
        </div>
        <div>Section 1</div>
        <div>Section 2</div>
        <div>Section 3</div>
      </div>
    </div>
  )
}
