import { Reveal } from "@/components/client/common/Reveal"
import { Tilt } from "@/components/client/common/Tilt"
import { Icon } from "@/components/server/common/Icon"
import { getTextColorForBackground } from "@/utils/common/color.utils"
import { isTechnologyType } from "@/utils/common/validate-technologies.utils"
import type { CSSPropertiesWithVars } from "@/utils/lib/tailwind/inline-vars.utils"

const technologyColors = {
  Typescript: "#3178C6",
  Javascript: "#F7DF1E",
  NextJS: "#000000",
  ReactJS: "#61DAFB",
  TailwindCSS: "#06B6D4",
  NodeJS: "#5FA04E",
  DrizzleORM: "#C5F74F",
  PostgreSQL: "#4169E1"
}

interface TechnologyStackProps {
  technology: string
  index: number
}

export function TechnologyStack({ technology, index }: TechnologyStackProps) {
  if (!isTechnologyType(technology)) {
    throw new Error(`Technology "${technology}" is not found in the list of technologies, maybe add it ?`)
  }

  const IconTechnology = Icon[technology as keyof typeof Icon]
  const color = technologyColors[technology as keyof typeof technologyColors]
  const contrastingTextColor = getTextColorForBackground(color)

  const delay = (index * 0.1).toFixed(1)

  return (
    <Reveal key={technology} className={`animate-appearance-bottom animation-delay-[${delay}s] animation-appearance-base`}>
      <div>
        <Tilt rotationFactor={20} isRevese>
          <div
            key={technology}
            style={{ "--technology-color": color, "--text-color-hover": contrastingTextColor } as CSSPropertiesWithVars}
            className="group flex flex-col items-center gap-4 rounded-lg border-2 border-muted-foreground bg-background p-6 transition-all hover:border-[--technology-color] hover:bg-[--technology-color] hover:shadow-lg"
          >
            <IconTechnology className="h-10 w-10 text-foreground transition-all group-hover:text-[--text-color-hover]" />
            <span className="font-geist cursor-default text-base font-semibold tracking-tight group-hover:text-[--text-color-hover]">{technology}</span>
          </div>
        </Tilt>
      </div>
    </Reveal>
  )
}
