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
      <SheetTrigger className={cn("group flex flex-col gap-2 p-2 transition-all hover:-rotate-45 lg:hidden", className)}>
        <span className="h-[2px] w-6 bg-foreground transition-all group-hover:translate-x-1"></span>
        <span className="h-[2px] w-6 bg-foreground transition-all group-hover:-translate-x-1"></span>
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
