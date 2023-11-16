"use client"

import { useEffect, useState } from "react"
import LocaleSwitcher from "@/components/client/feature/header/LocaleSwitcher"
import ThemeSwitcher from "@/components/client/feature/header/ThemeSwitcher"
import { Locale } from "@/root/i18n-config"
import { debounce } from "@/utils/common/debounce"
import { getTranslation } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"
import { Icon } from "../../common/Icon"
import { HeaderLink } from "./HeaderLink"

interface HeaderProps {
  lang: Locale
  headerTranslations: Awaited<ReturnType<typeof getTranslation>>["header"]
}

export function Header({ lang, headerTranslations }: HeaderProps) {
  const [hasPageScrolled, setHasPageScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasPageScrolled(true)
    } else {
      setHasPageScrolled(false)
    }
  }

  useEffect(() => {
    handleScroll() // manual call so when the page is reloaded, the function is triggered
    const debouncedHandleScroll = debounce(handleScroll, 10)
    window.addEventListener("scroll", debouncedHandleScroll)
    return () => window.removeEventListener("scroll", debouncedHandleScroll)
  }, [])

  return (
    <header
      className={cn("fixed left-0 right-0 flex justify-between border-b border-b-transparent px-10 py-5 transition-all duration-300", {
        "border-b-border bg-background py-4": hasPageScrolled
      })}
    >
      <Icon name="logo" className="h-9 w-9 text-primary" />
      <div className="flex items-center gap-20">
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <HeaderLink number="01" text={headerTranslations.about} />
            </li>
            <li>
              <HeaderLink number="02" text={headerTranslations.work} />
            </li>
            <li>
              <HeaderLink number="03" text={headerTranslations.projects} />
            </li>
            <li>
              <HeaderLink number="04" text={headerTranslations.contact} />
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <LocaleSwitcher lang={lang} altImage={headerTranslations.alt_lang} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
