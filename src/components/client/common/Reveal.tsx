"use client"

import { useInView } from "motion/react"
import { cloneElement, type ReactElement, useRef } from "react"
import { cn } from "@/utils/lib/tailwind/cn"

interface RevealProps {
  children: ReactElement
  className: string
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return cloneElement(children, {
    ref,
    className: cn(children.props.className, "opacity-0", {
      [className]: isInView
    })
  })
}
