import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required in Next.js 16 — restricts which quality values are allowed
    qualities: [75, 100],
  },
};

export default nextConfig;
