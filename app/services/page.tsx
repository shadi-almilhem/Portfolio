import GridPattern from "@/components/ui/GridPattern";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { cn } from "@/lib/utils";

import React from "react";
import ServicesCards from "./ServicesCards";
import { Metadata } from "next";
interface ExtendedMetadata extends Metadata {
  additionalMetaTags?: { name: string; content: string }[];
  structuredData?: { [key: string]: any };
}
export const metadata: ExtendedMetadata = {
  metadataBase: new URL(`https://shadialmilhem.com`),

  title: "Services",
  description: "Services by Shadi Al Milhem (شادي الملحم)",
  keywords: [
    "Shadi Al Milhem",
    "شادي الملحم",
    "شادي اياد الملحم",
    "web development services",
    "Next.js developer",
    "full stack developer",
    "UI/UX design",
    "responsive web design",
    "SEO optimization",
    "software engineering",
    "Arabic web developer",
    "international web services",
    "custom web solutions",
    "JavaScript expert",
    "React developer",
    "Node.js developer",
    "database management",
    "API integration",
    "performance optimization",
    "cross-browser compatibility",
    "mobile-first design",
  ],
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",
  alternates: {
    canonical: "https://shadialmilhem.com/services",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shadi Al Milhem",
    alternateName: "شادي الملحم",
    url: "https://shadialmilhem.com/services",
    jobTitle: "Full Stack Web Developer",
    description:
      "Shadi Al Milhem is a Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    image: "https://shadialmilhem.com/SH-logo.png",
    sameAs: [
      "https://github.com/shadi-almilhem",
      "https://www.linkedin.com/in/shadi-al-milhem",
      "https://x.com/shadi_m02",
    ],
    skills: [
      "Next.js",
      "UI/UX Design",
      "Responsive Web Design",
      "SEO",
      "Full Stack Development",
    ],

    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Full Stack Web Development",
          description:
            "End-to-end web application development using modern technologies like Next.js, React, and Node.js.",
        },
        {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
        },
        {
          "@type": "Service",
          name: "Responsive Web Design",
          description:
            "Developing websites that work seamlessly across all devices and screen sizes.",
        },
        {
          "@type": "Service",
          name: "SEO Optimization",
          description:
            "Implementing best practices to improve search engine visibility and ranking.",
        },
      ],
    },
  },
};
function page() {
  return (
    <main className="flex w-full flex-col items-center justify-between gap-28">
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,transparent_15%,black,transparent_70%)]",
        )}
      />
      <ServicesCards />
      <ScrollToTop />
    </main>
  );
}

export default page;
