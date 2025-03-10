import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io"], // Sanity CDN allow kar raha hai
  },
};

export default nextConfig;
