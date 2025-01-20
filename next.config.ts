import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  swcMinify: true, // Uses SWC for faster builds and smaller output
  output: 'export', // Enables static export (replaces `next export`)
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings/errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during builds
  },
  images: {
    unoptimized: true, // Required for static export to work with `next/image`
  },
  experimental: {
    appDir: true, // Enables the new App Router (`app` directory support)
  },
};

export default nextConfig;
