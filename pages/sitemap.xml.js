import { getAllCropSlugs } from "../data";

const SITE_URL = "https://potbound.vercel.app"; // update once deployed on a real domain

function generateSitemap(cropSlugs) {
  const staticPages = [
    { path: "about", priority: "0.5" },
    { path: "privacy", priority: "0.2" },
    { path: "terms", priority: "0.2" },
    { path: "affiliate-disclosure", priority: "0.2" },
  ];
  const urls = [
    { path: "", priority: "1.0" },
    ...cropSlugs.map((slug) => ({ path: slug, priority: "0.8" })),
    ...staticPages,
  ]
    .map(
      ({ path, priority }) => `  <url>
    <loc>${SITE_URL}/${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap(getAllCropSlugs());
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
