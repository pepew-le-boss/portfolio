"use client"

import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { Icon } from "@/components/server/common/Icon"

export default function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="grid h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all hover:opacity-80 focus:ring-2 focus:ring-darkGrey focus:ring-offset-2">
        <Icon name="sun" className="block h-auto w-6 text-white dark:hidden" />
        <Icon name="moon" className="hidden h-auto w-6 text-white dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col gap-1"
        onCloseAutoFocus={(event) => event.preventDefault()}
        onFocusOutside={(event) => event.preventDefault()}
      >
        <DropdownMenuItem
          className="hidden h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all data-[highlighted]:opacity-80 dark:grid"
          onClick={() => setTheme("light")}
        >
          <Icon name="sun" className="h-auto w-6 text-white" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="grid h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all data-[highlighted]:opacity-80 dark:hidden"
          onClick={() => setTheme("dark")}
        >
          <Icon name="moon" className="h-auto w-6 text-white" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="grid h-8 w-8 place-items-center rounded-full bg-darkGrey transition-all data-[highlighted]:opacity-80"
          onClick={() => setTheme("system")}
        >
          <Icon name="system" className="h-auto w-5 text-white" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
