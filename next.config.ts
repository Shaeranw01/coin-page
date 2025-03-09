import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "assets.coingecko.com",
      "images.cointelegraph.com",
      "www.coindesk.com",
      "coin-images.coingecko.com",
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
