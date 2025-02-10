import Link from "next/link"
import type { MouseEventHandler } from "react"

interface HeaderLinkMobileProps {
  number: string
  text: string
  link: string
  onClick: MouseEventHandler<HTMLAnchorElement>
}

export function HeaderLinkMobile({ number, text, link, onClick }: HeaderLinkMobileProps) {
  return (
    <Link href={`#${link}`} onClick={onClick} className="group flex items-center gap-2 px-4 py-4 font-geist text-sm">
      <span className="text-muted-foreground transition-all group-hover:translate-x-1">{"//"}</span>
      <span className="transition-all group-hover:translate-x-2">{text}</span>
      <span className="ml-auto transition-all group-hover:-translate-x-1">{number}</span>
    </Link>
  )
}
