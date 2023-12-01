import { Header } from "@/components/server/feature/header/Header"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)
  return (
    <div className="relative z-20">
      <Header lang={lang} headerTranslations={translations.header} />
      <div className="pt-20">{translations.products.cart}</div>
      <div className="flex w-fit flex-col items-start">
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
      </div>
    </div>
  )
}
