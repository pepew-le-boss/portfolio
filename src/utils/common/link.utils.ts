import type { Translations } from "@/utils/common/get-translations.utils"

export const headerLinks = {
  about: "about",
  career: "career",
  projects: "projects",
  technologies: "technologies",
  contact: "contact"
} as const

export function findBestProjectLink(project: Translations["projects"]["works"][number]): string | null {
  const { link_web, link_playstore, link_appstore } = project.other_info

  const candidates = [link_web, link_playstore, link_appstore]

  const validLink = candidates.find((link): link is string => Boolean(link) && !["confidential", "shutdown"].includes(link))

  return validLink || null
}
