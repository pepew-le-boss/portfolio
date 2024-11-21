import { cn } from "@/utils/lib/tailwind/cn"

interface StatCardProps {
  bigInfo: string
  description: string
  className?: string
}

export function StatCard({ bigInfo, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col items-center gap-2 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:px-10 lg:py-5",
        className
      )}
    >
      <span className="whitespace-nowrap font-sfmono text-5xl font-bold italic text-foreground lg:text-6xl">{bigInfo}</span>
      <span className="whitespace-nowrap text-sm font-medium uppercase text-muted-foreground">{`// ${description}`}</span>
    </div>
  )
}
