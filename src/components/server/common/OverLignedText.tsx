import type { ReactNode } from "react"

import { cn } from "@/utils/lib/tailwind/cn.utils"

interface OverLignedTextProps {
  children: ReactNode
  className?: string
}

export function OverLignedText({ children, className }: OverLignedTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all ease-out group-hover:bg-[length:100%_1px]",
        className
      )}
    >
      {children}
    </span>
  )
}
