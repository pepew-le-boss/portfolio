import "@/public/globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { Topography } from "@/components/server/common/Topography"
import { i18n } from "@/root/i18n-config"
import { gabarito, sfmono } from "@/utils/lib/next/fonts"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang}>
      <body className={`${gabarito.variable} ${sfmono.variable} font-gabarito`}>
        <main className="relative">
          {children}
          <div className="absolute inset-0 z-[-1] h-full opacity-5">
            <Topography />
          </div>
        </main>
      </body>
    </html>
  )
}