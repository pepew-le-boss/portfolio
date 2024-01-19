"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { i18n, Locale } from "@/root/i18n-config"
import { cn } from "@/utils/lib/tailwind/cn"

interface LocaleSwitcherProps {
  lang: Locale
  altImage: string
  className?: string
}

export default function LocaleSwitcher({ lang, altImage, className }: LocaleSwitcherProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          "group grid h-8 w-8 place-items-center rounded-full bg-primary transition-all hover:scale-110 focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
      >
        <Image alt={`${altImage} ${lang}`} src={`/images/${lang}.png`} width={24} height={24} className="h-auto w-6 transition-all" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1" onCloseAutoFocus={(event) => event.preventDefault()} onFocusOutside={(event) => event.preventDefault()}>
        {i18n.locales
          .filter((locale) => locale !== lang)
          .map((locale: Locale) => (
            <DropdownMenuItem
              key={locale}
              className="grid h-8 w-8 place-items-center rounded-full bg-primary transition-all data-[highlighted]:scale-110"
              asChild
            >
              <Link href={redirectedPathName(locale)}>
                <Image alt={`${altImage} ${lang}`} src={`/images/${locale}.png`} width={24} height={24} className="h-auto w-6" />
              </Link>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
