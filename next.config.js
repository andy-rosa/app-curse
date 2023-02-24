module.exports = {
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
