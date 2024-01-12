import Link from "next/link"
import { Header } from "@/components/client/feature/header/Header"
import { Section } from "@/components/server/common/Section"
import { AboutMe } from "@/components/server/feature/about-me/AboutMe"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)

  return (
    <div className="relative z-20">
      <Header lang={lang} headerTranslations={translations.header} />
      <main className="flex flex-col gap-40 px-5 py-20 sm:px-10 lg:px-20">
        <div className="grid h-[calc(100vh_-_10rem)] content-center justify-center gap-5">
          <span className="animate-appearance font-sfmono text-[clamp(1rem,5vw,1.25rem)] font-semibold text-muted-foreground [animation-delay:0.1s]">
            {translations.main.hello}
          </span>
          <h1 className="flex flex-col gap-2">
            <span className="animate-appearance text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none [animation-delay:0.2s]">
              {translations.main.william}.
            </span>
            <span className="animate-appearance text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none text-muted-foreground [animation-delay:0.3s]">
              {translations.main.developer}.
            </span>
          </h1>
          <h2 className="max-w-prose animate-appearance text-[clamp(1rem,5vw,1.25rem)] font-normal leading-tight text-muted-foreground [animation-delay:0.4s]">
            {translations.main.work_1}{" "}
            <Link
              href="https://www.linkedin.com/company/bébé-boutik/"
              target="_blank"
              className="font-sfmono text-[clamp(0.9rem,5vw,1.15rem)] italic underline transition-all hover:text-foreground"
            >
              Bebeboutik
            </Link>{" "}
            {translations.main.work_2}.
          </h2>
        </div>
        <Section number="01" title="À propos de moi">
          <AboutMe content={translations.about_me} />
        </Section>
        <div>Section 1</div>
        <div>Section 2</div>
        <div>Section 3</div>
      </main>
    </div>
  )
}
