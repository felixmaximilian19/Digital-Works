/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // output: 'export',
}

module.exports = nextConfig 