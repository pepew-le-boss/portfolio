import { ReactNode } from "react"

interface SectionProps {
  number: string
  title: string
  children: ReactNode
}

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-10">
      <h3 className="flex items-end">
        <span className="mb-[2px] font-sfmono text-xl font-semibold text-muted-foreground">{number}.</span>
        <span className="whitespace-nowrap text-3xl font-semibold text-foreground">{title}</span>
        <span className="ml-5 h-[1px] w-full self-center bg-muted-foreground"></span>
      </h3>
      {children}
    </section>
  )
}
