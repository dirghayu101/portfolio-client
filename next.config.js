/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
  
module.exports = nextConfig;
