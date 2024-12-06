import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/client/common/Sheet"
import { Translations } from "@/utils/common/getTranslations"
import { sectionLinks } from "@/utils/common/link.utils"
import { cn } from "@/utils/lib/tailwind/cn"
import { HeaderLink } from "./HeaderLink"

interface HeaderMenuSheetProps {
  headerTranslations: Translations["header"]
  className?: string
}

export function HeaderMenuSheet({ headerTranslations, className }: HeaderMenuSheetProps) {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "group grid h-8 w-8 place-items-center rounded-full border border-foreground bg-background transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:hidden",
          className
        )}
      >
        <Menu className="h-4 w-4 text-foreground" />
      </SheetTrigger>
      <SheetContent className="grid place-items-center">
        <SheetTitle className="sr-only">{headerTranslations.sheet_title}</SheetTitle>
        <SheetDescription className="sr-only">{headerTranslations.sheet_description}</SheetDescription>
        <nav>
          <ul className="flex flex-col items-center gap-12">
            <li>
              <HeaderLink number="01" text={headerTranslations.about} link={sectionLinks.about} isInsideSheet={true} />
            </li>
            <li>
              <HeaderLink number="02" text={headerTranslations.work} link={sectionLinks.career} isInsideSheet={true} />
            </li>
            <li>
              <HeaderLink number="03" text={headerTranslations.projects} link={sectionLinks.projects} isInsideSheet={true} />
            </li>
            <li>
              <HeaderLink number="04" text={headerTranslations.technologies} link={sectionLinks.technologies} isInsideSheet={true} />
            </li>
            <li>
              <HeaderLink number="05" text={headerTranslations.contact} link={sectionLinks.contact} isInsideSheet={true} />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
