import { isTechnologyType } from "@/utils/common/validate-technologies.utils"

interface TechnologyChipsProps {
  technology: string
}

export function TechnologyChips({ technology }: TechnologyChipsProps) {
  if (!isTechnologyType(technology)) {
    throw new Error(`Technology "${technology}" is not found in the list of technologies, maybe add it ?`)
  }
  return (
    <div key={technology} className="whitespace-nowrap rounded-full bg-foreground px-2 pb-0.5 pt-[0.1875rem] font-geist text-xs text-background">
      {technology}
    </div>
  )
}
