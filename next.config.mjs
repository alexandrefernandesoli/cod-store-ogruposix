/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.example.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.runescape.com',
      },
      {
        protocol: 'https',
        hostname: 'inapak.com',
      },
    ],
  },
};

export default nextConfig;
