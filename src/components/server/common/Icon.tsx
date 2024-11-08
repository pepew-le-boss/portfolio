// fore more info, check: https://github.com/shadcn-ui/ui/blob/main/apps/www/components/icons.tsx

type IconProps = React.HTMLAttributes<SVGElement>

export const Icon = {
  Arrow: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path fill="none" stroke="currentColor" d="M7.979 12.979v-10m3.5 3.25l-3.5-3.5l-3.5 3.5" />
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
      />
    </svg>
  ),
  Logo: (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="cutout-mask">
        <rect width="48" height="48" rx="8" fill="white" />
        <path d="M25.2212 34L19.9815 16.7313L19.1573 14H23.2784L28.6358 31.6211L26.5458 31.5037L31.1085 14H35.4651L29.9605 34H25.2212Z" fill="black" />
        <path d="M12.5046 34L7 14H11.3272L15.9193 31.5037L13.8293 31.6211L19.1573 14H23.2784L22.4836 16.7313L17.2439 34H12.5046Z" fill="black" />
        <path d="M31.6972 14H42V18.185H31.6972V14Z" fill="black" />
        <path d="M30.2254 21.2981H39.0564V25.4831H30.2254V21.2981Z" fill="black" />
      </mask>
      <rect width="48" height="48" rx="8" fill="currentColor" mask="url(#cutout-mask)" />
    </svg>
  ),
  Moon: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9m8 0v4m2-2h-4" />
    </svg>
  ),
  ScrollDown: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 390" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" {...props}>
      <style>
        {`@keyframes scroll {
            0% { transform: translateY(0); }
            30% { transform: translateY(100px); }
        }
        #wheel {
            animation: scroll ease 1.5s infinite;
        }`}
      </style>
      <path id="wheel" stroke="currentColor" strokeWidth="20" d="M123.359,79.775l0,72.843" />
      <path
        id="mouse"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
      />
    </svg>
  ),
  Sun: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
      </g>
    </svg>
  ),
  System: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
      />
    </svg>
  )
}
