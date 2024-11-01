interface SectionTitleProps {
  number: string
  title: string
  isCentered?: boolean
}

export function SectionTitle({ number, title, isCentered }: SectionTitleProps) {
  return (
    <h3 className="flex items-end">
      {isCentered && <span className="mr-5 h-[1px] w-full self-center bg-muted-foreground"></span>}
      <span className="mb-[2px] font-sfmono text-xl font-semibold text-muted-foreground">{number}.</span>
      <span className="whitespace-nowrap text-3xl font-semibold text-foreground">{title}</span>
      <span className="ml-5 h-[1px] w-full self-center bg-muted-foreground"></span>
    </h3>
  )
}
