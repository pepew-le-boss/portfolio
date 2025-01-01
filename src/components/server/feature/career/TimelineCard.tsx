import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger
} from "@/components/client/common/MorphingDialog"
import { Reveal } from "@/components/client/common/Reveal"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import type { Translations } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"

interface TimelineCardProps {
  experience: Translations["career"]["experiences"][number]
  isEven: boolean
  translationsCareer: Translations["career"]
}

export function TimelineCard({ experience, isEven, translationsCareer }: TimelineCardProps) {
  return (
    <Reveal className={cn("animate-appearance-left animation-delay-[0.1s] animation-appearance-base", { "animate-appearance-right": isEven })}>
      <div
        className={cn("col-start-1 max-w-lg lg:max-w-none", {
          "col-start-3": isEven
        })}
      >
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25
          }}
        >
          <MorphingDialogTrigger className="flex flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background p-10">
            <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
            <div className="flex flex-col">
              <MorphingDialogTitle className="text-2xl font-semibold leading-tight">{experience.title}</MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-lg text-muted-foreground">{experience.company}</MorphingDialogSubtitle>
            </div>
            <div className="flex flex-col gap-1">
              <MorphingDialogDescription>{experience.overview}</MorphingDialogDescription>
              <button className="w-fit text-sm underline transition-all hover:opacity-80">{translationsCareer.see_more}</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <TechnologyChips key={technology} technology={technology} />
              ))}
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent className="relative mx-5 flex max-w-lg flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background p-10">
              <MorphingDialogClose />
              <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
              <div className="flex flex-col">
                <MorphingDialogTitle className="text-2xl font-semibold leading-tight">{experience.title}</MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-lg text-muted-foreground">{experience.company}</MorphingDialogSubtitle>
              </div>
              <div className="flex flex-col gap-1">
                <MorphingDialogDescription>{experience.overview}</MorphingDialogDescription>{" "}
                <ul className="list-disc pl-5">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <TechnologyChips key={technology} technology={technology} />
                ))}
              </div>
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      </div>
    </Reveal>
  )
}
