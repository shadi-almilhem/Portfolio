import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/cdn-cgi/", "/private/", "/cdn-cgi/l/email-protection"],
    },
    sitemap: "https://shadialmilhem.com/sitemap.xml",
  };
}
