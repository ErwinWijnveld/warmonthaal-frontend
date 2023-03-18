/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'admin.warmonthaal.nl',
      'testomgeving.website',
    ],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://testomgeving.website',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
