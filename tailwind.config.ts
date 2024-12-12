import type { Config } from "tailwindcss"
import { animationBase, animationDelay } from "./src/utils/lib/tailwind/plugin.utils"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["var(--font-gabarito)"],
        sfmono: ["var(--font-sfmono)"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      keyframes: {
        "appearance-top": {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        "appearance-bottom": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        "appearance-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" }
        },
        "appearance-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" }
        }
      },
      animation: {
        "appearance-top": "appearance-top 1s",
        "appearance-bottom": "appearance-bottom 1s",
        "appearance-left": "appearance-left 1s",
        "appearance-right": "appearance-right 1s",
        marquee: "marquee var(--duration) linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), animationDelay, animationBase],
  safelist: [
    "animation-delay-[0.1s]",
    "animation-delay-[0.2s]",
    "animation-delay-[0.3s]",
    "animation-delay-[0.4s]",
    "animation-delay-[0.5s]",
    "animation-delay-[0.6s]",
    "animation-delay-[0.7s]",
    "animation-delay-[0.8s]",
    "animation-delay-[0.9s]"
  ]
}
export default config
