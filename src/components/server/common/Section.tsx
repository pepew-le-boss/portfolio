import { type ComponentProps, ReactNode } from "react"
import { Reveal } from "@/components/client/common/Reveal"
import { cn } from "@/utils/lib/tailwind/cn"

interface SectionProps extends ComponentProps<"section"> {
  number: string
  sectionName: string
  title: string
  subtitle: string
  children: ReactNode
}

export function Section({ number, sectionName, title, subtitle, children, className, ...props }: SectionProps) {
  return (
    <section className={cn("flex max-w-7xl flex-col items-center gap-10", className)} {...props}>
      <div className="flex flex-col items-center gap-5">
        <Reveal className="animate-appearance-bottom animation-delay-[0.1s] animation-appearance-base">
          <h3 className="inline-flex items-center justify-start gap-2 rounded-full border border-foreground bg-background px-3.5 py-1 font-sfmono text-sm">
            <span className="text-muted-foreground">{number}</span>
            <span className="text-muted-foreground">{`//`}</span>
            <span>{sectionName}</span>
          </h3>
        </Reveal>

        <Reveal className="animate-appearance-bottom animation-delay-[0.2s] animation-appearance-base">
          <h4 className="text-center text-4xl font-semibold text-foreground lg:text-5xl">{title}</h4>
        </Reveal>
        <Reveal className="animate-appearance-bottom animation-delay-[0.3s] animation-appearance-base">
          <p className="max-w-md text-center text-base text-muted-foreground lg:max-w-2xl lg:text-lg">{subtitle}</p>
        </Reveal>
      </div>
      {children}
    </section>
  )
}
