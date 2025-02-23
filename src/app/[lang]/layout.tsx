import "../globals.css"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { ReactNode } from "react"

import { ThemeProvider } from "@/components/client/common/ThemeProvider"
import { Topography } from "@/components/client/common/Topography"
import { i18n, Locale } from "@/root/i18n-config"
import { getTranslation } from "@/utils/common/get-translations.utils"
import { gabarito, geist } from "@/utils/lib/next/fonts.utils"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata(props: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const params = await props.params

  const { lang } = params

  const translations = await getTranslation(lang)
  return {
    title: translations.metadata.title,
    description: translations.metadata.description,
    openGraph: {
      title: translations.metadata.title,
      description: translations.metadata.description,
      type: "website",
      locale: lang,
      url: `${process.env.WEBSITE_URL}/${lang}`,
      siteName: translations.metadata.title
    },
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/${lang}`,
      languages: {
        "fr-FR": `${process.env.WEBSITE_URL}/fr`,
        "en-US": `${process.env.WEBSITE_URL}/en`
      }
    }
  }
}

export default async function RootLayout(props: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const params = await props.params

  const { children } = props

  return (
    <html lang={params.lang} suppressHydrationWarning className="scroll-pt-24 scroll-smooth">
      <body className={`${gabarito.variable} ${geist.variable} bg-foreground/5 font-gabarito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative">
            <Topography />
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

// x Refacto about me en cards: le texte dans une card au dessus des deux stats cards chiffres et ma photo à droite de ça et au dessus de la stat card à l'écoute du besoin
// x Refaire les titres des sections avec des chips (pourquoi pas sous titre aussi) cf: Knives Producer Website et Cal.com
// x Créer une section mes technologies phares, cf: Maquette Brooks
// x Refaire le header ? cd: Knives Producer Website et Architecture Agency
// x Inspis header: https://sevalla.com/?ref=land-book.com // https://linear.app/homepage
// x Faire que le header disparaisse quand on scroll vers le bas et réapparaisse quand on scroll vers le haut: https://www.gopidge.com/
// x En mode mobile mettre le header en bas de l'écran ?
// x Dans la section mes projets, mettre les screens dans des mockups. cf: https://pix.framer.website/
// x Dans la section mes projets, faire un effet de spotlight sur les images. cf: https://motion-primitives.com/docs/tilt#tilt-with-spotlight
// Faire une animation sur les images en hover, cf: https://cal.com/fr/platform?month=2024-11&date=2024-11-28
// x Faire un effet de skew sur les cards des technos. cf: https://animata.design/docs/card/github-card-skew ou ça https://motion-primitives.com/docs/tilt
// Faire un effet de gravité en easter egg, cf: https://www.designspells.com/spells/apps-fall-to-the-bottom-of-the-screen-when-a-search-yields-no-results-on
// x Voir pour utiliser la font de https://mode.com/
// x Voir pour utiliser la font de https://fonts.google.com/specimen/Geist+Mono
// x Améliorer le dark thème
// Contacter ce gars pour lui proposer mes services: https://www.youtube.com/watch?v=SMi72xAM3H8
// x Check le seo (metadata + balisage)
// x Retravailler le contenu (éviter de mentionner freelance et rester généraliste (travailler vaec vous) + insister sur la spécialisation frontend)
// x Faire les traductions en anglais
// x Clean le public folder
// x Passer en next 15
// Faire une image de moi
