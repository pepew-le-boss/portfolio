"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/client/common/Drawer"
import { HeaderLinkMobile } from "@/components/server/feature/header/HeaderLinkMobile"
import type { Translations } from "@/utils/common/get-translations.utils"
import { headerLinks } from "@/utils/common/link.utils"
import { cn } from "@/utils/lib/tailwind/cn.utils"

interface HeaderMenuDrawerProps {
  headerTranslations: Translations["header"]
  className?: string
}

export function HeaderMenuDrawer({ headerTranslations, className }: HeaderMenuDrawerProps) {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer} noBodyStyles={true}>
      <DrawerTrigger
        className={cn(
          "group grid h-8 w-8 place-items-center rounded-full border border-foreground bg-background transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:hidden",
          className
        )}
      >
        <Menu className="h-4 w-4 text-foreground" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="relative flex items-center justify-between py-4 pl-4 pr-3">
          <DrawerTitle className="text-lg uppercase">{headerTranslations.drawer_title}</DrawerTitle>
          <DrawerDescription className="sr-only">{headerTranslations.drawer_description}</DrawerDescription>
          <DrawerClose className="rounded-full p-1 transition-all hover:bg-foreground/10">
            <X className="h-6 w-6 text-foreground" />
          </DrawerClose>
        </DrawerHeader>
        <nav>
          <ul className="divide-y-foreground flex flex-col divide-y divide-border border-border first:border-t last:border-b">
            {Object.values(headerLinks).map((link, index) => (
              <li key={link}>
                <HeaderLinkMobile number={`0${index + 1}`} text={headerTranslations[link]} link={link} onClick={() => setOpenDrawer(false)} />
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
