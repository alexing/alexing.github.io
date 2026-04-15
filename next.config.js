/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/cv', destination: '/cv.pdf' },
    ]
  },
}

module.exports = nextConfig
