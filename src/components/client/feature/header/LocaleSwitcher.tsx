"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { i18n, Locale } from "@/root/i18n-config"

interface LocaleSwitcherProps {
  lang: Locale
  altImage: string
}

export default function LocaleSwitcher({ lang, altImage }: LocaleSwitcherProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-primary focus:ring-ring grid h-8 w-8 place-items-center rounded-full transition-all hover:opacity-80 focus:ring-2 focus:ring-offset-2">
        <Image alt={`${altImage} ${lang}`} src={`/images/${lang}.png`} width={24} height={24} className="h-auto w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(event) => event.preventDefault()} onFocusOutside={(event) => event.preventDefault()}>
        {i18n.locales
          .filter((locale) => locale !== lang)
          .map((locale: Locale) => (
            <DropdownMenuItem key={locale} className="bg-primary grid h-8 w-8 place-items-center rounded-full transition-all data-[highlighted]:opacity-80">
              <Link href={redirectedPathName(locale)}>
                <Image alt={`${altImage} ${lang}`} src={`/images/${locale}.png`} width={24} height={24} className="h-auto w-6" />
              </Link>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
