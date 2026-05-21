import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "eg-education.ru" },
      { protocol: "https", hostname: "zzbo.ru" },
      { protocol: "https", hostname: "www.metallistspb.ru" },
      { protocol: "https", hostname: "tehnolog-food.ru" },
      { protocol: "https", hostname: "promtx.ru" },
      { protocol: "https", hostname: "boda.su" },
      { protocol: "https", hostname: "cncmagazine.ru" },
      { protocol: "https", hostname: "mekkain.ru" },
      { protocol: "https", hostname: "cadsam.ru" }
    ]
  }
};

export default nextConfig;
