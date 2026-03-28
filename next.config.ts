import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // For easier deployment of simple static exports if needed
  },
};

export default nextConfig;
