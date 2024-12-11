"use client"

import { useEffect, useRef, useState } from "react"
import LocaleSwitcher from "@/components/client/feature/header/LocaleSwitcher"
import ThemeSwitcher from "@/components/client/feature/header/ThemeSwitcher"
import { Icon } from "@/components/server/common/Icon"
import { HeaderLink } from "@/components/server/feature/header/HeaderLink"
import { HeaderMenuDrawer } from "@/components/server/feature/header/HeaderMenuDrawer"
import { debounce } from "@/utils/common/debounce"
import type { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"
import { getAppearanceAnimation } from "@/utils/lib/tailwind/animation.utils"
import { cn } from "@/utils/lib/tailwind/cn"

// améliorer le header sheet en terme de design (cf https://arik-template.framer.website/ // https://cal.com/fr // https://ui.shadcn.com/docs/components/drawer)
// améliorer le système d'animations
// scroll to top quand on clique sur le logo du header

interface HeaderProps {
  headerTranslations: Translations["header"]
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
          {Object.values(headerLinks).map((link, index) => (
            <li key={link}>
              <HeaderLink number={`0${index + 1}`} text={headerTranslations[link]} link={link} className={getAppearanceAnimation("top", `0.${index + 1}`)} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto flex gap-6 lg:ml-0">
        <LocaleSwitcher className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.1s] lg:[animation-delay:0.6s]" />
        <ThemeSwitcher className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.2s] lg:[animation-delay:0.7s]" />
      </div>
      <HeaderMenuDrawer headerTranslations={headerTranslations} className="animate-appearance-right opacity-0 fill-mode-forwards [animation-delay:0.3s]" />
    </header>
  )
}
