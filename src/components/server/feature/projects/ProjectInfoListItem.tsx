import Link from "next/link"
import type { Translations } from "@/utils/common/get-translations.utils"

interface ProjectInfoListItemProps {
  label: string
  children: string
  isLink?: boolean
  translationsProjects: Translations["projects"]
}

export function ProjectInfoListItem({ children, label, isLink, translationsProjects }: ProjectInfoListItemProps) {
  return (
    <li>
      <span className="text-[0.8125rem] font-medium uppercase text-muted-foreground">{label}:</span>{" "}
      {isLink && children === "confidential" && <span>{translationsProjects.confidential}</span>}
      {isLink && children === "shutdown" && <span>{translationsProjects.shutdown}</span>}
      {isLink && children !== "confidential" && children !== "shutdown" && (
        <Link href={children} target="_blank" rel="noreferrer" className="underline transition-all hover:opacity-85">
          {translationsProjects.click_here}
        </Link>
      )}
      {!isLink && <>{children}</>}
    </li>
  )
}
