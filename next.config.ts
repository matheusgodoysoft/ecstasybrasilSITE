import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    largePageDataBytes: 128 * 1000, // 128KB
  },
  async headers() {
    return [
      {
        source: '/ecstasyvideo.webm',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/webm',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
