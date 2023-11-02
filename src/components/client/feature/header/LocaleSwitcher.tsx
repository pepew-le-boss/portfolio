"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import france from "@/public/images/france.png"
import { i18n, Locale } from "@/root/i18n-config"

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <button className="rounded-full bg-darkGrey p-[5px]">
      <Image alt="" src={france} className="h-auto w-6" />
    </button>
    // <div>
    //   <p>Locale switcher:</p>
    //   <ul>
    //     {i18n.locales.map((locale: Locale) => {
    //       return (
    //         <li key={locale}>
    //           <Link href={redirectedPathName(locale)}>{locale}</Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
  )
}
