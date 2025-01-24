import { Reveal } from "@/components/client/common/Reveal"
import { cn } from "@/utils/lib/tailwind/cn.utils"

interface TimelineConnectorProps {
  index: number
  isFirst: boolean
  isLast: boolean
}

export function TimelineConnector({ index, isFirst, isLast }: TimelineConnectorProps) {
  return (
    <Reveal className="animate-appearance-top animation-delay-[0.1s] animation-appearance-base">
      <div
        className={cn("col-start-2 my-4 flex flex-col items-center gap-4 lg:mx-20 lg:my-0", {
          "my-0 mb-4": isFirst
        })}
      >
        <div
          className={cn("h-5 w-[1px] bg-muted-foreground lg:h-auto lg:flex-1", {
            "h-0": isFirst
          })}
        />
        <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background font-sfmono text-foreground">{`0${index}`}</div>
        <div
          className={cn("h-5 w-[1px] bg-muted-foreground lg:h-auto lg:flex-1", {
            "lg:bg-transparent": isLast
          })}
        />
      </div>
    </Reveal>
  )
}
