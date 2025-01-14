import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/client/common/Carousel"
import { Section } from "@/components/server/common/Section"
import { ProjectCard } from "@/components/server/feature/projects/ProjectCard"
import { Translations } from "@/utils/common/getTranslations"
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
      {/* <div className="flex flex-wrap justify-center gap-10">
        {translationsProjects.works.map((project) => (
          <ProjectCard key={project.title} project={project} translationsProjects={translationsProjects} />
        ))}
      </div> */}
      <Carousel className="flex w-full flex-col gap-6">
        <CarouselContent className="-ml-16">
          {translationsProjects.works.map((project, index) => (
            <CarouselItem key={index} className="pl-16 md:basis-1/2 lg:basis-1/3">
              <ProjectCard key={project.title} project={project} translationsProjects={translationsProjects} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between gap-4">
          <p>pagination</p>
          <div className="flex items-center gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </Section>
  )
}
