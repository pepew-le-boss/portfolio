"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { Icon } from "@/components/server/common/Icon"

export default function ThemeSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="grid h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all hover:opacity-80 focus:ring-2 focus:ring-darkGrey focus:ring-offset-2">
        <Icon name="lune" className="h-auto w-5 fill-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(event) => event.preventDefault()} onFocusOutside={(event) => event.preventDefault()}>
        {/* {i18n.locales
          .filter((locale) => locale !== lang)
          .map((locale: Locale) => (
            <DropdownMenuItem key={locale} className="grid h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all data-[highlighted]:opacity-80">
              <Link href={redirectedPathName(locale)}>
                <Image alt={`${altImage} ${lang}`} src={`/images/${locale}.png`} width={24} height={24} className="h-auto w-6" />
              </Link>
            </DropdownMenuItem>
          ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
