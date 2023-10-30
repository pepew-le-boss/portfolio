/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // SVG
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"))
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ },
        loader: "@svgr/webpack",
        options: {
          dimensions: false,
          titleProp: true
        }
      }
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  }
}

module.exports = nextConfig
