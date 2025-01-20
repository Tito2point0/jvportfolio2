import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your custom configuration options here
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Enables the SWC compiler for faster builds
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during builds
  },
  images: {
    domains: ["example.com"], // Allow loading images from external domains
    formats: ["image/webp"], // Support modern image formats
  },
  experimental: {
    // appDir: true, // Enable the new `app` directory for Next.js
  },
};

export default nextConfig;
