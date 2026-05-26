const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.modernworldtravel.com";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/dashboard/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
