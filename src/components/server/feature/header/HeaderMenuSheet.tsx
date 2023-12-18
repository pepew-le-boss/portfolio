import { Sheet, SheetContent, SheetTrigger } from "@/components/client/common/Sheet"
import { Translations } from "@/utils/common/getTranslations"
import { HeaderLink } from "./HeaderLink"

interface HeaderMenuSheetProps {
  headerTranslations: Translations["header"]
}

export function HeaderMenuSheet({ headerTranslations }: HeaderMenuSheetProps) {
  return (
    <Sheet>
      <SheetTrigger className="group flex flex-col gap-2 p-2 transition-all hover:-rotate-45 lg:hidden">
        <span className="h-[2px] w-6 bg-foreground transition-all group-hover:translate-x-1"></span>
        <span className="h-[2px] w-6 bg-foreground transition-all group-hover:-translate-x-1"></span>
      </SheetTrigger>
      <SheetContent className="grid place-items-center">
        <nav>
          <ul className="flex flex-col items-center gap-12">
            <li>
              <HeaderLink number="01" text={headerTranslations.about} />
            </li>
            <li>
              <HeaderLink number="02" text={headerTranslations.work} />
            </li>
            <li>
              <HeaderLink number="03" text={headerTranslations.projects} />
            </li>
            <li>
              <HeaderLink number="04" text={headerTranslations.contact} />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
