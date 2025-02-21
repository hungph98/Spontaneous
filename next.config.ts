import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "assets.wfcdn.com",
            },
            {
                protocol: "https",
                hostname: "assets.wfcdn.com",
            },
        ],
    },
};

export default nextConfig;
