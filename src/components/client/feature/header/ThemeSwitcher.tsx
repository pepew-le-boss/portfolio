"use client"

import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { Icon } from "@/components/server/common/Icon"

export default function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-primary focus:ring-ring grid h-8 w-8 place-items-center rounded-full transition-all hover:opacity-80 focus:ring-2 focus:ring-offset-2">
        <Icon name="sun" className="text-primary-foreground block h-auto w-6 dark:hidden" />
        <Icon name="moon" className="text-primary-foreground hidden h-auto w-6 dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col gap-1"
        onCloseAutoFocus={(event) => event.preventDefault()}
        onFocusOutside={(event) => event.preventDefault()}
      >
        <DropdownMenuItem
          className="bg-primary hidden h-8 w-8 place-items-center rounded-full transition-all data-[highlighted]:opacity-80 dark:grid"
          onClick={() => setTheme("light")}
        >
          <Icon name="sun" className="text-primary-foreground h-auto w-6" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-primary grid h-8 w-8 place-items-center rounded-full transition-all data-[highlighted]:opacity-80 dark:hidden"
          onClick={() => setTheme("dark")}
        >
          <Icon name="moon" className="text-primary-foreground h-auto w-6" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-primary grid h-8 w-8 place-items-center rounded-full transition-all data-[highlighted]:opacity-80"
          onClick={() => setTheme("system")}
        >
          <Icon name="system" className="text-primary-foreground h-auto w-5" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
