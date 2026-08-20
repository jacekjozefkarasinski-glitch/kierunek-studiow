import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kierunek-studiow",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;