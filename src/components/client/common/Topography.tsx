"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/utils/lib/tailwind/cn"

export function Topography() {
  const boxRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handlePointerMove = (ev: PointerEvent) => {
    if (boxRef.current) {
      const x = ev.clientX
      const y = ev.clientY
      setPosition({ x, y })
    }
  }

  const handleMouseEnter = (ev: PointerEvent) => {
    const cursor = ev.target ? getComputedStyle(ev.target as Element).cursor : ""
    if (cursor === "pointer") {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMove)
    document.addEventListener("pointerover", handleMouseEnter)

    return () => {
      document.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerover", handleMouseEnter)
    }
  }, [])

  const circleSize = {
    width: 80,
    height: 80
  }

  const circlePosition = {
    transform: `translate(${position.x - circleSize.width / 2}px, ${position.y - circleSize.height / 2}px)`
  }

  return (
    <div className="absolute inset-0">
      <div className="fixed inset-0">
        <div ref={boxRef} className="relative hidden lg:block" style={{ ...circlePosition, width: circleSize.width, height: circleSize.height }}>
          <div className="absolute left-0 top-0 h-full w-full rounded-full bg-foreground/50"></div>
          <div
            className={cn("absolute h-full w-full scale-50 rounded-full bg-background transition-transform duration-300", {
              "scale-95": isHovering
            })}
          ></div>
        </div>
      </div>
      <div className="relative z-10 h-full w-full bg-background [-webkit-mask-image:url('./icons/topography_pattern.svg')] [mask-image:url('./icons/topography_pattern.svg')]"></div>
    </div>
  )
}
