import { Menu, X } from "lucide-react"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/client/common/Drawer"
import { HeaderLinkMobile } from "@/components/server/feature/header/HeaderLinkMobile"
import type { Translations } from "@/utils/common/getTranslations"
import { headerLinks } from "@/utils/common/link.utils"
import { cn } from "@/utils/lib/tailwind/cn"

interface HeaderMenuDrawerProps {
  headerTranslations: Translations["header"]
  className?: string
}

export function HeaderMenuDrawer({ headerTranslations, className }: HeaderMenuDrawerProps) {
  return (
    <Drawer noBodyStyles={true}>
      <DrawerTrigger
        className={cn(
          "group grid h-8 w-8 place-items-center rounded-full border border-foreground bg-background transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:hidden",
          className
        )}
      >
        <Menu className="h-4 w-4 text-foreground" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="relative">
          <DrawerTitle className="text-xl uppercase">Navigation</DrawerTitle>
          <DrawerClose>
            <X className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-foreground" />
          </DrawerClose>
        </DrawerHeader>
        <nav>
          <ul className="divide-y-foreground flex flex-col divide-y divide-border border-border first:border-t last:border-b">
            {Object.values(headerLinks).map((link, index) => (
              <li key={link}>
                <HeaderLinkMobile number={`0${index + 1}`} text={headerTranslations[link]} link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
