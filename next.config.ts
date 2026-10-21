import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Most photos are local files under public/. A few are served from the
    // Webflow CDN, and the About page quote photo from withsoch.com, so
    // those hosts are allow-listed here.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "www.withsoch.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
