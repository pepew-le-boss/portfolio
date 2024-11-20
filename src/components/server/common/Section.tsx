import { ReactNode } from "react"

interface SectionProps {
  number: string
  title: string
  children: ReactNode
}

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="flex max-w-7xl flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h3 className="inline-flex items-center justify-start gap-2 rounded-full border border-foreground bg-background px-3.5 py-1 font-sfmono text-sm">
          <span className="text-muted-foreground">{number}</span>
          <span className="text-muted-foreground">{`//`}</span>
          <span>{title}</span>
        </h3>
        <h4 className="text-4xl font-semibold text-foreground lg:text-5xl">En apprendre plus sur moi</h4>
        <p className="max-w-md text-base text-muted-foreground lg:max-w-2xl lg:text-lg">dfksl fsdk klfjksdfk jsdkf lksdlkj</p>
      </div>
      {children}
    </section>
  )
}
