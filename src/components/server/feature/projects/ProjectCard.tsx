import Image from "next/image"
import mockup from "/public/images/bebeboutik_prive_mockup.png"
import { Reveal } from "@/components/client/common/Reveal"
import { ScrollArea } from "@/components/client/common/ScrollArea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/client/common/Tabs"
import { SpotlightImage } from "@/components/server/common/SpotlightImage"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import { ProjectInfoListItem } from "@/components/server/feature/projects/ProjectInfoListItem"
import type { Translations } from "@/utils/common/get-translations.utils"

interface ProjectCardProps {
  project: Translations["projects"]["works"][number]
  translationsProjects: Translations["projects"]
}

// process to have the image the good ratio:
// take a 1920x1080 screenshot
// go on https://shots.so/
// choose safari browser
// keep UI scale to 100
// change size to 115%
// choose a custom frame of 1920x1260

export function ProjectCard({ project, translationsProjects }: ProjectCardProps) {
  return (
    <Reveal className="animate-appearance-right animation-delay-[0.1s] animation-appearance-base">
      <div id={project.id} className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background">
        <div className="relative aspect-[1920/1260] w-full">
          <SpotlightImage>
            <Image src={mockup} alt="test" fill={true} sizes="100vw" className="object-cover" />
          </SpotlightImage>
        </div>
        <div className="flex flex-1 flex-col gap-4 py-4">
          <div className="flex flex-col px-4">
            <span className="text-lg text-muted-foreground">{project.company}</span>
            <h4 className="text-2xl font-semibold leading-tight">{project.name}</h4>
          </div>
          <Tabs defaultValue="description">
            <TabsList className="mx-4">
              <TabsTrigger value="description">{translationsProjects.description}</TabsTrigger>
              <TabsTrigger value="responsabilities">{translationsProjects.responsabilities}</TabsTrigger>
              <TabsTrigger value="informations">{translationsProjects.informations}</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <ScrollArea className="h-[150px] px-4">
                <p className="text-pretty">{project.description}</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="responsabilities">
              <ScrollArea className="h-[150px] px-4">
                <ul className="list-disc pl-5">
                  {project.responsabilities.map((resposability) => (
                    <li key={resposability}>{resposability}</li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="informations">
              <ScrollArea className="h-[150px] px-4">
                <ul className="list-disc pl-5">
                  <ProjectInfoListItem label={translationsProjects.team} translationsProjects={translationsProjects}>
                    {project.other_info.team}
                  </ProjectInfoListItem>
                  <ProjectInfoListItem label={translationsProjects.type} translationsProjects={translationsProjects}>
                    {project.other_info.type}
                  </ProjectInfoListItem>
                  {project.other_info.link_web && (
                    <ProjectInfoListItem label={translationsProjects.link_web} translationsProjects={translationsProjects} isLink={true}>
                      {project.other_info.link_web}
                    </ProjectInfoListItem>
                  )}
                  {project.other_info.link_playstore && (
                    <ProjectInfoListItem label={translationsProjects.link_playstore} translationsProjects={translationsProjects} isLink={true}>
                      {project.other_info.link_playstore}
                    </ProjectInfoListItem>
                  )}
                  {project.other_info.link_appstore && (
                    <ProjectInfoListItem label={translationsProjects.link_appstore} translationsProjects={translationsProjects} isLink={true}>
                      {project.other_info.link_appstore}
                    </ProjectInfoListItem>
                  )}
                </ul>
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <div className="mt-auto flex flex-wrap gap-2 px-4">
            {project.technologies.map((technology) => (
              <TechnologyChips key={technology} technology={technology} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
