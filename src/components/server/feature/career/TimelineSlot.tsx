import type { Translations } from "@/utils/common/getTranslations"
import { cn } from "@/utils/lib/tailwind/cn"

interface TimelineSlotProps {
  experience: Translations["career"]["experiences"][number]
  index: number
}

export function TimelineSlot({ experience, index }: TimelineSlotProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className={cn("flex gap-20", {
        "flex-row-reverse": isEven
      })}
    >
      <div className="flex flex-1 flex-col gap-10 border-2 border-transparent px-5 py-2.5 lg:px-10 lg:py-5"></div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[1px] flex-1 bg-muted-foreground" />
        <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background font-sfmono text-foreground">{index}</div>
        <div className="w-[1px] flex-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-1 flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:px-10 lg:py-5">
        <div className="text-sm uppercase text-muted-foreground">{experience.range}</div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold">{experience.title}</div>
          <div className="text-lg text-muted-foreground">{experience.company}</div>
        </div>
        <div>{experience.description}</div>
        <div className="mt-2 flex gap-2">
          <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">NextJS</div>
          <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">ReactJS</div>
          <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">Typescript</div>
          <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">GraphQL</div>
        </div>
      </div>
    </div>
  )
}
