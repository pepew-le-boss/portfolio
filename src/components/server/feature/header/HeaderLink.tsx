import Link from "next/link"

interface HeaderLinkProps {
  number: string
  text: string
}

export async function HeaderLink({ number, text }: HeaderLinkProps) {
  return (
    <Link href={`#${text}`} className="group flex flex-col items-end">
      <span className="font-sfmono text-xs font-semibold leading-none transition-all ease-out group-hover:-translate-y-1">{number}</span>
      <span className="font-sfmono text-base font-semibold leading-none transition-all group-hover:translate-x-1">
        <span>{"//"}</span>
        <span className="inline-block transition-all group-hover:translate-x-1">{text}</span>
      </span>
    </Link>
  )
}
