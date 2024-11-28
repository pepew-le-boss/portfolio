import type { ReactNode } from "react"
import { cn } from "@/utils/lib/tailwind/cn"

// fore more info, check: https://magicui.design/docs/components/marquee

interface MarqueeProps {
  className?: string
  children?: ReactNode
  repeat?: number
}

export function Marquee({ className, children, repeat = 20 }: MarqueeProps) {
  return (
    <div className={cn("group flex w-full flex-row overflow-hidden p-2 [--duration:5s] [--gap:2rem] [gap:var(--gap)]", className)}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex shrink-0 animate-marquee flex-row justify-around [gap:var(--gap)]">
            {children}
          </div>
        ))}
    </div>
  )
}
