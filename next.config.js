/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
