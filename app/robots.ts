import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/private/", "/cdn-cgi/"],
    },
    sitemap: "https://shadialmilhem.com/sitemap.xml",
  };
}
