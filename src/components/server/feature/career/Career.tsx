import { SectionTitle } from "@/components/server/common/SectionTitle"
import { Timeline } from "@/components/server/feature/career/Timeline"

export function Career() {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle number="02" title="Ma carrière" isCentered={true} />
      <Timeline />
    </div>
  )
}
