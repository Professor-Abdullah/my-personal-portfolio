import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.com", // To be updated
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
