import { Header } from "@/components/client/feature/header/Header"
import { Section } from "@/components/server/common/Section"
import { AboutMe } from "@/components/server/feature/about-me/AboutMe"
import { CoverPage } from "@/components/server/feature/cover-page/CoverPage"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)

  return (
    <div className="relative z-20">
      <Header lang={lang} headerTranslations={translations.header} />
      <main className="flex flex-col gap-40 px-5 py-20 sm:px-10 lg:px-20">
        <CoverPage coverPageTranslations={translations.cover_page} />
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
