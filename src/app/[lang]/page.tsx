import { Header } from "@/components/client/feature/header/Header"
import { Marquee } from "@/components/server/common/Marquee"
import { AboutMe } from "@/components/server/feature/about-me/AboutMe"
import { Career } from "@/components/server/feature/career/Career"
import { CoverPage } from "@/components/server/feature/cover-page/CoverPage"
import { MyStack } from "@/components/server/feature/my-stack/MyStack"
import { Projects } from "@/components/server/feature/projects/Projects"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)

  return (
    <div className="relative z-20">
      <Header lang={lang} headerTranslations={translations.header} />
      <main className="flex flex-col items-center gap-60 overflow-x-hidden px-5 py-20 sm:px-10 lg:px-20">
        <CoverPage coverPageTranslations={translations.cover_page} />
        <AboutMe TranslationsAboutMe={translations.about_me} />
        <Career translationsCareer={translations.career} />
        <Projects translationsProjects={translations.projects} />
        <MyStack translationsMyStack={translations.my_stack} />
        <div className="w-screen border-y border-foreground bg-background py-2">
          <Marquee>
            <span className="text-sm uppercase leading-none text-foreground">DISCUTONS ENSEMBLE</span>
            <span className="text-sm leading-none text-foreground">//</span>
          </Marquee>
        </div>
      </main>
    </div>
  )
}
