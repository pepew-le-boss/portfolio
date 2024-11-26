import { Icon } from "@/components/server/common/Icon"
import { isTechnologyType } from "@/utils/common/validate-technologies.utils"
import type { CSSPropertiesWithVars } from "@/utils/lib/tailwind/inline-vars.utils"

const technologyColors = {
  Typescript: "#3178C6",
  NextJS: "#000000",
  ReactJS: "#61DAFB",
  TailwindCSS: "#06B6D4",
  NodeJS: "#5FA04E",
  DrizzleORM: "#C5F74F",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1"
}

interface TechnologyStackProps {
  technology: string
}

export function TechnologyStack({ technology }: TechnologyStackProps) {
  if (!isTechnologyType(technology)) {
    throw new Error(`Technology "${technology}" is not found in the list of technologies, maybe add it ?`)
  }

  const IconTechnology = Icon[technology as keyof typeof Icon]
  const color = technologyColors[technology as keyof typeof technologyColors]

  return (
    <div
      key={technology}
      style={{ "--hover-color": color } as CSSPropertiesWithVars}
      className="group flex flex-col items-center gap-2 rounded-lg border-2 border-muted-foreground bg-background p-6 transition-all hover:border-[--hover-color]"
    >
      <IconTechnology className="h-10 w-10 text-foreground transition-all group-hover:text-[--hover-color]" />
      <span className="text-lg font-medium">{technology}</span>
    </div>
  )
}
