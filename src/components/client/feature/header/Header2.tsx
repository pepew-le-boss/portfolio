"use client"

import { useEffect, useState } from "react"
import LocaleSwitcher from "@/components/client/feature/header/LocaleSwitcher"
import ThemeSwitcher from "@/components/client/feature/header/ThemeSwitcher"
import { Locale } from "@/root/i18n-config"
import { debounce } from "@/utils/common/debounce"
import { getTranslation } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"
import { Icon } from "../../../server/common/Icon"
import { HeaderLink } from "../../../server/feature/header/HeaderLink"
import { HeaderMenuSheet } from "../../../server/feature/header/HeaderMenuSheet"

interface HeaderProps {
  lang: Locale
  headerTranslations: Awaited<ReturnType<typeof getTranslation>>["header"]
}

export function Header2({ lang, headerTranslations }: HeaderProps) {
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
      className={cn(
        "fixed left-0 right-0 z-10 mx-5 flex items-center justify-between border-b border-b-transparent px-5 py-5 transition-all duration-300 sm:mx-10",
        {
          "mt-2 rounded-2xl border border-border bg-background py-4 shadow-sm lg:mx-20": hasPageScrolled
        }
      )}
    >
      <Icon.Logo className="h-9 w-9 animate-appearance-left text-foreground opacity-0 fill-mode-forwards [animation-delay:0.3s] " />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          <li>
            <HeaderLink number="01" text={headerTranslations.about} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.1s]" />
          </li>
          <li>
            <HeaderLink number="02" text={headerTranslations.work} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.2s]" />
          </li>
          <li>
            <HeaderLink
              number="03"
              text={headerTranslations.projects}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.3s]"
            />
          </li>
          <li>
            <HeaderLink
              number="04"
              text={headerTranslations.contact}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.4s]"
            />
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <LocaleSwitcher lang={lang} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.1s] lg:[animation-delay:0.5s]" />
        <ThemeSwitcher className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.2s] lg:[animation-delay:0.6s]" />
      </div>
      <HeaderMenuSheet headerTranslations={headerTranslations} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.3s]" />
    </header>
  )
}
