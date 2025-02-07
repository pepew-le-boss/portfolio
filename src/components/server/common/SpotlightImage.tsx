import type { ReactNode } from "react"

import { Spotlight } from "@/components/client/common/Spotlight"

interface SpotlightImageProps {
  children: ReactNode
}

export function SpotlightImage({ children }: SpotlightImageProps) {
  return (
    <>
      <Spotlight
        className="z-10 from-white/100 via-white/80 to-white/50 blur-2xl"
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1
        }}
      />
      {children}
    </>
  )
}
