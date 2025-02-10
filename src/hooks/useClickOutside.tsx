import { MutableRefObject, useEffect } from "react"

export function useClickOutside(ref: MutableRefObject<HTMLElement | null>, onClickOut: () => void) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => ref.current && !ref.current.contains(event.target as Node) && onClickOut?.()
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [onClickOut, ref])
}
