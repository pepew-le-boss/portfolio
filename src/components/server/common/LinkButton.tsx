import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/utils/lib/tailwind/cn"

interface LinkButtonProps {
  href: string
  text: string
  icon?: ReactNode
  isExternal?: boolean
  className?: string
}

export function LinkButton({ href, text, icon, isExternal = false, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={cn("group flex w-fit items-center gap-4 rounded-lg bg-foreground px-8 py-4 text-background transition-all", className)}
    >
      <span className="transition-all ease-out group-hover:translate-x-1">{text}</span>
      {icon}
    </Link>
  )
}
