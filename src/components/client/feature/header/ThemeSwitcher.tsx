"use client"

import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/client/common/DropDownMenu"
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
          "group grid h-8 w-8 place-items-center rounded-full bg-foreground transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:rounded-b-none data-[state=open]:ring-0 data-[state=open]:ring-offset-0",
          className
        )}
      >
        <Sun className="block h-auto w-5 text-background dark:hidden" />
        <Moon className="hidden h-auto w-5 text-background dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col rounded-b-full bg-foreground py-2"
        sideOffset={0}
        onCloseAutoFocus={(event) => event.preventDefault()}
        onFocusOutside={(event) => event.preventDefault()}
      >
        <DropdownMenuItem
          className="hidden h-8 w-8 place-items-center bg-foreground transition-all focus:scale-125 dark:grid"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-auto w-6 text-background" />
        </DropdownMenuItem>
        <DropdownMenuItem className="grid h-8 w-8 place-items-center bg-foreground transition-all focus:scale-125 dark:hidden" onClick={() => setTheme("dark")}>
          <Moon className="h-auto w-5 text-background" />
        </DropdownMenuItem>
        <DropdownMenuItem className="grid h-8 w-8 place-items-center bg-foreground transition-all focus:scale-125" onClick={() => setTheme("system")}>
          <Laptop className="h-auto w-5 text-background" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
