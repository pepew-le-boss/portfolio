import localFont from "next/font/local"

export const sfmono = localFont({
  src: [
    {
      path: "../../../app/fonts/SFMono/SFMonoMedium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../app/fonts/SFMono/SFMonoSemibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../app/fonts/SFMono/SFMonoSemiboldItalic.woff2",
      weight: "600",
      style: "italic"
    }
  ],
  display: "block",
  variable: "--font-sfmono"
})

export const gabarito = localFont({
  src: "../../../app/fonts/Gabarito/GabaritoVariable.woff2",
  display: "block",
  variable: "--font-gabarito"
})
