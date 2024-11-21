import { ReactNode } from "react"

interface SectionProps {
  number: string
  sectionName: string
  title: string
  subtitle: string
  children: ReactNode
}

export function Section({ number, sectionName, title, subtitle, children }: SectionProps) {
  return (
    <section className="flex max-w-7xl flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h3 className="inline-flex items-center justify-start gap-2 rounded-full border border-foreground bg-background px-3.5 py-1 font-sfmono text-sm">
          <span className="text-muted-foreground">{number}</span>
          <span className="text-muted-foreground">{`//`}</span>
          <span>{sectionName}</span>
        </h3>
        <h4 className="text-center text-4xl font-semibold text-foreground lg:text-5xl">{title}</h4>
        <p className="max-w-md text-center text-base text-muted-foreground lg:max-w-2xl lg:text-lg">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}
