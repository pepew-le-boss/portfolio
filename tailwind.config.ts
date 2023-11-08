import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["var(--font-gabarito)"],
        sfmono: ["var(--font-sfmono)"]
      },
      backgroundImage: {
        "topography-pattern": "url('/icons/topography_pattern.svg')"
      },
      colors: {
        darkGrey: "#222222",
        mediumGrey: "#444444"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
export default config
