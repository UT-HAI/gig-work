/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ['https://public.tableau.com/javascripts/api/'],
  },
}

module.exports = nextConfig
