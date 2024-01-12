import { Translations } from "@/utils/common/getTranslations"

interface AboutMeProps {
  content: Translations["about_me"]
}

export function AboutMe({ content }: AboutMeProps) {
  return (
    <div className="max-w-prose text-lg text-foreground">
      <p>{content.paragraph1}</p>
      <br />
      <p>{content.paragraph2}</p>
      <br />
      <p>{content.paragraph3}</p>
      <br />
      <span>{content.listTitle}</span>
      <ul className="list-inside list-disc">
        {content.listElements.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  )
}
