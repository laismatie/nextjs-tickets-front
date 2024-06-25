/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.sympla.com.br',
      },
    ],
  },
};

export default nextConfig;
