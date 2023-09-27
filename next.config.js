/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/ngodochanh/blogpostnext12/main/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
