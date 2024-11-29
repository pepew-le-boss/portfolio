import Link from "next/link"
import { Icon } from "@/components/server/common/Icon"

interface LinkButtonProps {
  href: string
  text: string
  isExternal?: boolean
}

export function LinkButton({ href, text, isExternal = false }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group flex items-center gap-2 rounded-lg bg-foreground px-8 py-4 text-background transition-all hover:opacity-95"
    >
      <span className="transition-all group-hover:translate-x-1">{text}</span>
      {isExternal && <Icon.BrokenArrow className="ml-2 h-6 w-6 rotate-45 text-background transition-all group-hover:translate-x-1 group-hover:rotate-90" />}
    </Link>
  )
}
