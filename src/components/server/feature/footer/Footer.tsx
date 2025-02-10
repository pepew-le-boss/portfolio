import Link from "next/link"

import { Icon } from "@/components/server/common/Icon"
import type { Translations } from "@/utils/common/get-translations.utils"

interface FooterProps {
  translationsFooter: Translations["footer"]
}

export function Footer({ translationsFooter }: FooterProps) {
  return (
    <footer className="group mt-40 flex flex-col items-center justify-between gap-5 border-t-2 border-muted-foreground bg-background p-4 sm:flex-row">
      <span className="relative">
        <Icon.LogoSlashSepareted className="absolute left-0 right-0 z-10 h-auto w-24 translate-x-0 p-2 text-foreground transition-all duration-500 ease-in group-hover:translate-x-0 sm:-translate-x-8" />
        <Icon.LogoWithoutBg className="h-auto w-24 translate-x-0 p-2 text-foreground opacity-0 transition-all duration-500 ease-in group-hover:translate-x-0 group-hover:opacity-100 sm:-translate-x-8" />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-center font-geist text-sm sm:text-start">
          ©{new Date().getFullYear()} {translationsFooter.rights}
        </span>
        <span className="text-center font-geist text-sm sm:text-start">
          {translationsFooter.code}{" "}
          <Link href="https://github.com/pepew-le-boss/portfolio" className="font-medium italic underline" target="_blank" rel="noreferrer">
            {translationsFooter.github}
          </Link>
          .
        </span>
      </div>
    </footer>
  )
}
