import { Header } from "@/components/client/feature/header/Header"
import { AboutMe } from "@/components/server/feature/about-me/AboutMe"
import { Career } from "@/components/server/feature/career/Career"
import { Contact } from "@/components/server/feature/contact/Contact"
import { CoverPage } from "@/components/server/feature/cover-page/CoverPage"
import { Footer } from "@/components/server/feature/footer/Footer"
import { MyStack } from "@/components/server/feature/my-stack/MyStack"
import { Projects } from "@/components/server/feature/projects/Projects"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/get-translations.utils"

export default async function Home(props: { params: Promise<{ lang: Locale }> }) {
  const params = await props.params

  const { lang } = params

  const translations = await getTranslation(lang)

  return (
    <div className="relative z-20">
      <Header headerTranslations={translations.header} />
      <main className="flex flex-col items-center gap-60 overflow-x-hidden px-5 py-20 sm:px-10 lg:px-20">
        <CoverPage coverPageTranslations={translations.cover_page} />
        <AboutMe translationsAboutMe={translations.about_me} />
        <Career translationsCareer={translations.career} />
        <Projects translationsProjects={translations.projects} />
        <MyStack translationsMyStack={translations.my_stack} />
        <Contact translationsContact={translations.contact} />
      </main>
      <Footer translationsFooter={translations.footer} />
    </div>
  )
}
