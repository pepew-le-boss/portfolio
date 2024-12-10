import Link from "next/link"

interface HeaderLinkMobileProps {
  number: string
  text: string
  link: string
}

export function HeaderLinkMobile({ number, text, link }: HeaderLinkMobileProps) {
  return (
    <Link href={`#${link}`} className="flex items-center gap-2 px-4 py-4 font-sfmono text-sm">
      <span className="text-muted-foreground">{number}</span>
      <span className="text-muted-foreground">{"//"}</span>
      <span>{text}</span>
    </Link>
  )
}
