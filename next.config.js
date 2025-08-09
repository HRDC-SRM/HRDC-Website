/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["herokuapp.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig