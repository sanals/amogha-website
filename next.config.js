/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    unoptimized: false,
  },
  // Enable static exports if needed (for static site generation)
  // output: 'export',
  // trailingSlash: true,
  
  // Webpack configuration for additional optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  
  // Environment variables (use NEXT_PUBLIC_ prefix for client-side access)
  // Note: Environment variables should be defined in .env file, not here
};

module.exports = nextConfig;

