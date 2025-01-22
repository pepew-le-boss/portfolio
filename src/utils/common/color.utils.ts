export function getTextColorForBackground(hexColor: string): string {
  const color = hexColor.replace(/^#/, "")

  const r = parseInt(color.slice(0, 2), 16)
  const g = parseInt(color.slice(2, 4), 16)
  const b = parseInt(color.slice(4, 6), 16)

  // contract from the vscode extension: https://github.com/enyancc/vscode-ext-color-highlight/blob/master/src/lib/dynamic-contrast.js#L117
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance > 186 ? "#000000" : "#FFFFFF"
}
