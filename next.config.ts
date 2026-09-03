import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Most photos are local files under public/. A few (e.g. the founder
    // photo on the About page) are served from the Webflow CDN, so that
    // host is allow-listed here.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
