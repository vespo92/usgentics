/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@usgentics/genetics-analysis',
    '@usgentics/environmental-tracking',
    '@usgentics/data-models',
    '@usgentics/ui-components'
  ],
}

module.exports = nextConfig
