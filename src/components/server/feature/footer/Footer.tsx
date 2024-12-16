import Link from "next/link"
import { Icon } from "@/components/server/common/Icon"

export function Footer() {
  return (
    <div className="group mt-40 flex flex-col items-center justify-between gap-5 border-t-2 border-muted-foreground bg-background p-4 sm:flex-row">
      <span className="relative">
        <Icon.LogoSlashSepareted className="absolute left-0 right-0 z-10 h-auto w-24 translate-x-0 p-2 text-foreground transition-all duration-500 ease-in group-hover:translate-x-0 sm:-translate-x-8" />
        <Icon.LogoWithoutBg className="h-auto w-24 translate-x-0 p-2 text-foreground opacity-0 transition-all duration-500 ease-in group-hover:translate-x-0 group-hover:opacity-100 sm:-translate-x-8" />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-center font-sfmono text-sm sm:text-start">Tous droits réservés.©2024 William Fargues.</span>
        <span className="text-center font-sfmono text-sm sm:text-start">
          Code source disponible sur mon{" "}
          <Link href="https://github.com/pepew-le-boss/portfolio" className="italic underline" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          .
        </span>
      </div>
    </div>
  )
}
