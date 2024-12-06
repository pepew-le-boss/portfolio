"use client"

import { Languages } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { i18n, Locale } from "@/root/i18n-config"
import { cn } from "@/utils/lib/tailwind/cn"

interface LocaleSwitcherProps {
  className?: string
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
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
          "group grid h-8 w-8 place-items-center rounded-full bg-foreground transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
      >
        <Languages className="h-4 w-4 text-background" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col gap-2 p-1"
        onCloseAutoFocus={(event) => event.preventDefault()}
        onFocusOutside={(event) => event.preventDefault()}
      >
        {i18n.locales.map((locale: Locale) => (
          <DropdownMenuItem
            key={locale}
            className="grid h-8 w-8 place-items-center rounded-full bg-foreground transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
            asChild
          >
            <Link href={redirectedPathName(locale)}>
              <span className="text-sm text-background">{locale}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
