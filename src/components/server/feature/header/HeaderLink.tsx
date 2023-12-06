import Link from "next/link"

interface HeaderLinkProps {
  number: string
  text: string
}

export function HeaderLink({ number, text }: HeaderLinkProps) {
  return (
    <Link href={`#${text}`} className="group flex flex-col items-center gap-2 lg:items-end lg:gap-0">
      <span className="font-sfmono text-base font-semibold leading-none transition-all ease-out group-hover:-translate-y-1 lg:text-xs">{number}</span>
      <span className="font-sfmono text-lg font-semibold leading-none transition-all group-hover:translate-x-1 lg:text-base">
        <span>{"//"}</span>
        <span className="inline-block transition-all group-hover:translate-x-1">{text}</span>
      </span>
    </Link>
  )
}
