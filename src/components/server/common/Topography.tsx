import { Icon } from "./Icon"

export function Topography() {
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="repeating-pattern" x="0" y="0" width="1920" height="953" patternUnits="userSpaceOnUse">
          <Icon name="topography_pattern" className="fill-secondary-foreground" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#repeating-pattern)" />
    </svg>
  )
}
