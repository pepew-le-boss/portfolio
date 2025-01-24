import localFont from "next/font/local"

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
  display: "block",
  variable: "--font-sfmono"
})

export const gabarito = localFont({
  src: "../../../../public/fonts/Gabarito/GabaritoVariable.woff2",
  display: "block",
  variable: "--font-gabarito"
})
