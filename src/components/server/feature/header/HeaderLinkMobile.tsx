import Link from "next/link"

interface HeaderLinkMobileProps {
  number: string
  text: string
  link: string
}

export function HeaderLinkMobile({ number, text, link }: HeaderLinkMobileProps) {
  return (
    <Link href={`#${link}`} className="group flex items-center gap-2 px-4 py-4 font-sfmono text-sm">
      <span className="text-muted-foreground transition-all group-hover:translate-x-1">{"//"}</span>
      <span className="transition-all group-hover:translate-x-2">{text}</span>
      <span className="ml-auto transition-all group-hover:-translate-x-1">{number}</span>
    </Link>
  )
}
