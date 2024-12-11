export function getAppearanceAnimation(direction: "top" | "right" | "left" | "bottom", delay: string) {
  return `animate-appearance-${direction} opacity-0 fill-mode-forwards animation-delay-[${delay}s]`
}
