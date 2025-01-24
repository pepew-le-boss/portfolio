import { Carousel, CarouselContent, CarouselDotIndicators, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/client/common/Carousel"
import { Reveal } from "@/components/client/common/Reveal"
import { Section } from "@/components/server/common/Section"
import { ProjectCard } from "@/components/server/feature/projects/ProjectCard"
import { Translations } from "@/utils/common/get-translations.utils"
import { headerLinks } from "@/utils/common/link.utils"

interface ProjectsProps {
  translationsProjects: Translations["projects"]
}

export function Projects({ translationsProjects }: ProjectsProps) {
  return (
    <Section
      id={headerLinks.projects}
      number="03"
      sectionName={translationsProjects.section_title}
      title={translationsProjects.title}
      subtitle={translationsProjects.subtitle}
    >
      <Carousel className="flex w-full max-w-[90vw] flex-col gap-6">
        <CarouselContent className="-ml-16">
          {translationsProjects.works.map((project, index) => (
            <CarouselItem key={index} className="pl-16 md:basis-1/2 xl:basis-1/3">
              <ProjectCard key={project.title} project={project} translationsProjects={translationsProjects} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <Reveal className="animate-appearance-bottom animation-delay-[0.2s] animation-appearance-base">
          <div className="flex items-center justify-between gap-4">
            <CarouselDotIndicators />
            <div className="flex items-center gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Reveal>
      </Carousel>
    </Section>
  )
}
