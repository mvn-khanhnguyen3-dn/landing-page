/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: false,
  images: {
    formats: ["image/png", "image/jpeg"],
  },
};
module.exports = nextConfig;
