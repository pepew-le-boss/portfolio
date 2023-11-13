import LocaleSwitcher from "@/components/client/feature/header/LocaleSwitcher"
import ThemeSwitcher from "@/components/client/feature/header/ThemeSwitcher"
import { Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"
import { Icon } from "../../common/Icon"
import { HeaderLink } from "./HeaderLink"

interface HeaderProps {
  lang: Locale
}

export async function Header({ lang }: HeaderProps) {
  const translations = await getTranslation(lang)

  return (
    <header className="flex justify-between px-10 py-5">
      <Icon name="logo" className="text-primary h-9 w-9" />
      <div className="flex items-center gap-20">
        <nav>
          <ul className="flex items-center gap-14">
            <li>
              <HeaderLink number="01" text={translations.header.about} />
            </li>
            <li>
              <HeaderLink number="02" text={translations.header.work} />
            </li>
            <li>
              <HeaderLink number="03" text={translations.header.projects} />
            </li>
            <li>
              <HeaderLink number="04" text={translations.header.contact} />
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <LocaleSwitcher lang={lang} altImage={translations.header.alt_lang} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
