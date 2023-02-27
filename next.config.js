/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
