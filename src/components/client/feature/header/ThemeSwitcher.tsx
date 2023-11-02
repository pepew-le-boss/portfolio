"use client"

import { Icon } from "@/components/server/common/Icon"

export default function ThemeSwitcher() {
  return (
    <button className="rounded-full bg-darkGrey p-[8px]">
      <Icon name="lune" className="h-auto w-[18px] fill-white" />
    </button>
  )
}
