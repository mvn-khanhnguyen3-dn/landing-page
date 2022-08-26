/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: false,
  images: {
    deviceSizes: [480, 580, 768, 992, 1200, 1024, 1200, 1400],
  },
};
module.exports = nextConfig;
