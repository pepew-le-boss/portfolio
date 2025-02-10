import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Reveal } from "@/components/client/common/Reveal"
import { ScrollArea } from "@/components/client/common/ScrollArea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/client/common/Tabs"
import { SpotlightImage } from "@/components/server/common/SpotlightImage"
import { TechnologyChips } from "@/components/server/common/TechnologyChips"
import { ProjectInfoListItem } from "@/components/server/feature/projects/ProjectInfoListItem"
import type { Translations } from "@/utils/common/get-translations.utils"
import { findBestProjectLink } from "@/utils/common/link.utils"
import { cn } from "@/utils/lib/tailwind/cn.utils"

interface ProjectCardProps {
  project: Translations["projects"]["works"][number]
  translationsProjects: Translations["projects"]
}

// process to have the image the good ratio (for desktop screenshot):
// take a 1920x1080 screenshot
// go on https://shots.so/
// choose safari browser
// keep UI scale to 100
// choose "realistic" shadow
// change size (size and position menu) to 115%
// choose a custom frame of 1920x1260
// export in x2

// for mobile screenshot (same as desktop except):
// choose "iphone 16 pro max"
// choose "hug" shadow

// finally:
// convert png to webp: https://convertio.co/fr/png-webp/
// optimize webp size: https://tinypng.com/

export function ProjectCard({ project, translationsProjects }: ProjectCardProps) {
  const link = findBestProjectLink(project)

  return (
    <Reveal className="animate-appearance-right animation-delay-[0.1s] animation-appearance-base">
      <div id={project.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-muted-foreground bg-background">
        <Link
          href={link || ""}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!link}
          className={cn("group/image relative aspect-[1920/1260] w-full grayscale transition-all duration-300 group-hover:grayscale-0", {
            "pointer-events-none": !link
          })}
        >
          <span className="absolute right-2 top-2 z-10 rounded-full bg-background p-2 text-foreground opacity-0 transition-all group-hover/image:right-1 group-hover/image:top-1 group-hover/image:opacity-100">
            <ExternalLink className="h-auto w-4" />
          </span>
          <SpotlightImage>
            <Image
              src={project.image}
              alt={project.image_alt}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
              quality={100}
              className="object-cover"
            />
          </SpotlightImage>
        </Link>
        <div className="flex flex-1 flex-col gap-4 py-4">
          <div className="flex flex-col px-4">
            <span className="text-lg text-muted-foreground">{project.company}</span>
            <h5 className="text-2xl font-semibold leading-tight">{project.name}</h5>
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
