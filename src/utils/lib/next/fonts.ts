import { Gabarito } from "next/font/google"
import localFont from "next/font/local"

export const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" })

export const sfmono = localFont({
  src: [
    {
      path: "../../../../public/fonts/SFMono/SFMonoMedium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../../public/fonts/SFMono/SFMonoSemibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../../public/fonts/SFMono/SFMonoSemiboldItalic.woff2",
      weight: "600",
      style: "italic"
    }
  ],
  variable: "--font-sfmono"
})
