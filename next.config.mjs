/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gdsons.co.in",
      },
    ],
  },
};

export default nextConfig;
