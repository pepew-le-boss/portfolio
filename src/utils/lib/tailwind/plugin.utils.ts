import type { PluginCreator } from "tailwindcss/types/config"

// create new tailwind class: animation-delay-xxx (based on transition-delay-xxx)
export const animationDelay: PluginCreator = ({ matchUtilities, theme }) =>
  matchUtilities(
    {
      "animation-delay": (value) => {
        return {
          "animation-delay": value
        }
      }
    },
    {
      values: theme("transitionDelay")
    }
  )

// create new tailwind class: animation-appearance-base
export const animationBase: PluginCreator = ({ addUtilities }) =>
  addUtilities({
    ".animation-appearance-base": {
      "@apply opacity-[0.01] fill-mode-forwards": {}
    }
  })
