export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function publicAsset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
