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

// refacto about me en cards: le texte dans une card au dessus des deux stats cards chiffres et ma photo à droite de ça et au dessus de la stat card à l'écoute du besoin
// refaire les titres des sections avec des chips (pourquoi pas sous titre aussi) cf: Knives Producer Website et Cal.com
// Créer une section mes technologies phares, cf: Maquette Brooks
// refaire le header ? cd: Knives Producer Website et Architecture Agency
// Dans la section mes projets, mettre les screens dans des mockups. cf: https://pix.framer.website/
// Faire une animation sur les images en hover, cf: https://cal.com/fr/platform?month=2024-11&date=2024-11-28
// Faire un effet de skew sur les cards des technos. cf: https://animata.design/docs/card/github-card-skew
// Faire un effet de gravité en easter egg
