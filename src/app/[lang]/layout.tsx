import "@/public/globals.css"
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/client/common/ThemeProvider"
import { Topography } from "@/components/client/common/Topography"
import { i18n, Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/getTranslations"
import { gabarito, sfmono } from "@/utils/lib/next/fonts"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
  const translations = await getTranslation(lang)
  return {
    title: "William Fargues",
    description: translations.metadata.description
  }
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${gabarito.variable} ${sfmono.variable} bg-foreground/5 font-gabarito`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative">
            <Topography />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
