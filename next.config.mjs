/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.modernworldtravel.com",
      },
    ],
  },
};

export default nextConfig;
