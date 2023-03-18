/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'admin.warmonthaal.nl',
    ],
  }
}

module.exports = nextConfig
