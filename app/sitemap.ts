import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shadialmilhem.com/",
      lastModified: new Date("2024-09-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://shadialmilhem.com/projects",
      lastModified: new Date("2024-9-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://shadialmilhem.com/services",
      lastModified: new Date("2024-09-20"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://shadialmilhem.com/contact",
      lastModified: new Date("2024-09-20"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://shadialmilhem.com/Shadi_Al_Milhem_CV.pdf",
      lastModified: new Date("2024-06-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
