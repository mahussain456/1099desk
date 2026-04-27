import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://1099desk.com";
  const paths = [
    "/",
    "/self-employment-tax-calculator",
    "/quarterly-estimated-tax-calculator",
    "/freelance-hourly-rate-calculator",
    "/invoice-generator",
    "/project-profit-margin-calculator",
    "/retainer-vs-hourly-calculator",
    "/1099-vs-w2-calculator",
    "/privacy",
    "/terms",
    "/cookies",
    "/affiliate-disclosure",
    "/about",
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-01-01") }));
}
