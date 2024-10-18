"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { i18n, Locale } from "@/root/i18n-config"
import { cn } from "@/utils/lib/tailwind/cn"

interface LocaleSwitcherProps {
  lang: Locale
  className?: string
}

export default function LocaleSwitcher({ lang, className }: LocaleSwitcherProps) {
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
          "group grid h-8 w-8 place-items-center rounded-full bg-foreground transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
      >
        <span className="text-base text-background">{lang}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1" onCloseAutoFocus={(event) => event.preventDefault()} onFocusOutside={(event) => event.preventDefault()}>
        {i18n.locales
          .filter((locale) => locale !== lang)
          .map((locale: Locale) => (
            <DropdownMenuItem
              key={locale}
              className="grid h-8 w-8 place-items-center rounded-full bg-foreground transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background"
              asChild
            >
              <Link href={redirectedPathName(locale)}>
                <span className="mb-0.5 text-base text-background">{locale}</span>
              </Link>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
