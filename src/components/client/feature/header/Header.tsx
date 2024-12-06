"use client"

import { useEffect, useRef, useState } from "react"
import LocaleSwitcher from "@/components/client/feature/header/LocaleSwitcher"
import ThemeSwitcher from "@/components/client/feature/header/ThemeSwitcher"
import { Icon } from "@/components/server/common/Icon"
import { HeaderLink } from "@/components/server/feature/header/HeaderLink"
import { HeaderMenuSheet } from "@/components/server/feature/header/HeaderMenuSheet"
import { debounce } from "@/utils/common/debounce"
import { getTranslation } from "@/utils/common/getTranslations"
import { sectionLinks } from "@/utils/common/link.utils"
import { cn } from "@/utils/lib/tailwind/cn"

interface HeaderProps {
  headerTranslations: Awaited<ReturnType<typeof getTranslation>>["header"]
}

export function Header({ headerTranslations }: HeaderProps) {
  const prevScrollPos = useRef(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [hasPageScrolled, setHasPageScrolled] = useState(false)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    // hide the header roughly after the cover page (= 800px)
    if (currentScrollPos > prevScrollPos.current && currentScrollPos > 800) {
      setIsHeaderVisible(false)
    } else {
      setIsHeaderVisible(true)
    }

    if (currentScrollPos > 50) {
      setHasPageScrolled(true)
    } else {
      setHasPageScrolled(false)
    }

    prevScrollPos.current = currentScrollPos
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
        "fixed left-0 right-0 z-10 mx-5 flex items-center justify-between gap-6 border-b border-b-transparent px-5 py-5 [transition:all_300ms,_border_100ms] sm:mx-10",
        {
          "mt-2 rounded-2xl border border-muted-foreground bg-background px-4 py-3 shadow-sm [transition:all_300ms,_border_300ms] lg:mx-20": hasPageScrolled,
          "mt-0 -translate-y-full": !isHeaderVisible,
          "translate-y-0": isHeaderVisible
        }
      )}
    >
      <Icon.Logo className="h-9 w-9 animate-appearance-left text-foreground opacity-0 fill-mode-forwards [animation-delay:0.3s] " />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          <li>
            <HeaderLink
              number="01"
              text={headerTranslations.about}
              link={sectionLinks.about}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.1s]"
            />
          </li>
          <li>
            <HeaderLink
              number="02"
              text={headerTranslations.work}
              link={sectionLinks.career}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.2s]"
            />
          </li>
          <li>
            <HeaderLink
              number="03"
              text={headerTranslations.projects}
              link={sectionLinks.projects}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.3s]"
            />
          </li>
          <li>
            <HeaderLink
              number="04"
              text={headerTranslations.technologies}
              link={sectionLinks.technologies}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.4s]"
            />
          </li>
          <li>
            <HeaderLink
              number="05"
              text={headerTranslations.contact}
              link={sectionLinks.contact}
              className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.5s]"
            />
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex gap-6 lg:ml-0">
        <LocaleSwitcher className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.1s] lg:[animation-delay:0.6s]" />
        <ThemeSwitcher className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.2s] lg:[animation-delay:0.7s]" />
      </div>
      <HeaderMenuSheet headerTranslations={headerTranslations} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.3s]" />
    </header>
  )
}
