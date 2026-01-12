/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ["henryas.com", "www.henryas.com"],
  },
};

module.exports = nextConfig;
