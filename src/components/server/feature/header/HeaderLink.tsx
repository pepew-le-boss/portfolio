import Link from "next/link"

import { cn } from "@/utils/lib/tailwind/cn.utils"

interface HeaderLinkProps {
  number: string
  text: string
  link: string
  className?: string
}

export function HeaderLink({ number, text, link, className }: HeaderLinkProps) {
  return (
    <Link href={`#${link}`} className={cn("group flex flex-col items-end gap-0", className)}>
      <span className="font-geist text-xs font-medium transition-all ease-out group-hover:-translate-y-1">{number}</span>
      <span className="font-geist text-base font-medium transition-all ease-out group-hover:translate-x-1">
        <span>{"//"}</span>
        <span className="inline-block transition-all ease-out group-hover:translate-x-1">{text}</span>
      </span>
    </Link>
  )
}
