import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/conversations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
