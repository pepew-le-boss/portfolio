import "server-only"
import { Locale } from "@/root/i18n-config"

const locales = {
  en: () => import("../../locales/en.json").then((module) => module.default),
  fr: () => import("../../locales/fr.json").then((module) => module.default)
}

export const getTranslation = async (locale: Locale) => locales[locale]()
