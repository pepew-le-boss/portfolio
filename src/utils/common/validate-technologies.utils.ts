const technologies = [
  "Typescript",
  "Javascript",
  "Turborepo",
  "NextJS",
  "ReactJS",
  "TailwindCSS",
  "OpenAI",
  "Expo",
  "React Native",
  "GraphQL",
  "NodeJS",
  "ExpressJS",
  "Redis",
  "PostgreSQL",
  "MySQL",
  "DrizzleORM",
  "TypeORM",
  "Kafka",
  "Angular",
  "AWS",
  "Kotlin",
  "Swift",
  "ThreeJS",
  "Azure",
  "HTML",
  "CSS",
  "Bootstrap",
  "jQuery",
  "PHP(ZendFramework)"
] as const

type TechnologyType = (typeof technologies)[number]

export function isTechnologyType(technology: string): technology is TechnologyType {
  return (technologies as readonly string[]).includes(technology)
}
