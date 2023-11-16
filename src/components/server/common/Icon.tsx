// for more info: https://stackoverflow.com/questions/66475126/importing-svg-in-react-dynamically

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const svgDir = require.context("!@svgr/webpack!public/icons", false, /\.svg$/)

  const IconSVG = svgDir(`./${name}.svg`).default

  return <IconSVG className={className} />
}
