import Link from "next/link"

interface HeaderLinkProps {
  number: string
  text: string
}

export async function HeaderLink({ number, text }: HeaderLinkProps) {
  return (
    <Link href={`#${text}`} className="flex flex-col items-end">
      <span className="font-sfmono text-xs font-semibold leading-none">{number}</span>
      <span className="font-sfmono text-base font-semibold leading-none">{`//${text}`}</span>
    </Link>
  )
}
