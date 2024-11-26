export interface CSSPropertiesWithVars extends React.CSSProperties {
  [key: `--${string}`]: string
}
