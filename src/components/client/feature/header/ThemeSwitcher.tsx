"use client"

import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
import { Icon } from "@/components/server/common/Icon"
import { cn } from "@/utils/lib/tailwind/cn"

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full bg-primary transition-all hover:scale-110 focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
      >
        <Icon name="sun" className="block h-auto w-6 text-primary-foreground dark:hidden" />
        <Icon name="moon" className="hidden h-auto w-6 text-primary-foreground dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col gap-2 p-1"
        onCloseAutoFocus={(event) => event.preventDefault()}
        onFocusOutside={(event) => event.preventDefault()}
      >
        <DropdownMenuItem
          className="hidden h-8 w-8 place-items-center rounded-full bg-primary transition-all data-[highlighted]:scale-110 dark:grid"
          onClick={() => setTheme("light")}
        >
          <Icon name="sun" className="h-auto w-6 text-primary-foreground" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="grid h-8 w-8 place-items-center rounded-full bg-primary transition-all data-[highlighted]:scale-110 dark:hidden"
          onClick={() => setTheme("dark")}
        >
          <Icon name="moon" className="h-auto w-6 text-primary-foreground" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="grid h-8 w-8 place-items-center rounded-full bg-primary transition-all data-[highlighted]:scale-110"
          onClick={() => setTheme("system")}
        >
          <Icon name="system" className="h-auto w-5 text-primary-foreground" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
