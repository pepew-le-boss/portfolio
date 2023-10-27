import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["var(--font-gabarito)"],
        sfmono: ["var(--font-sfmono)"]
      }
    }
  },
  plugins: []
}
export default config
