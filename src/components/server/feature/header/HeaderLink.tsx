import Link from "next/link"

interface HeaderLinkProps {
  number: string
  text: string
}

export async function HeaderLink({ number, text }: HeaderLinkProps) {
  return (
    <Link href={`#${text}`} className="group flex flex-col items-end">
      <span className="font-sfmono text-xs font-semibold leading-none transition-all ease-out group-hover:-translate-y-1">{number}</span>
      <span className="before:text-primary font-sfmono text-base font-semibold leading-none before:absolute before:-translate-x-5 before:-translate-y-[1px] before:transition-all before:content-['//'] group-hover:before:rotate-[-180deg]">
        {text}
      </span>
    </Link>
  )
}
