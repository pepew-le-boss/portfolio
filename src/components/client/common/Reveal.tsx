"use client"

import { cloneElement, type ReactElement } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/utils/lib/tailwind/cn"

interface RevealProps {
  children: ReactElement
  className: string
}

export function Reveal({ children, className }: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0
  })

  return cloneElement(children, {
    ref,
    className: cn(children.props.className, "opacity-0", {
      [className]: inView
    })
  })
}
