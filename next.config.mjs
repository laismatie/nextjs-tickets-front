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
  experimental: {
    serverActions: {
        allowedOrigins: ['localhost:8000']
    }
  }
};

export default nextConfig;
