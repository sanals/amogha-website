/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
  },

  // Significantly reduces dev compilation time by tree-shaking heavy icon/motion packages
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Webpack configuration for additional optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
