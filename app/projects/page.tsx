import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectsShow from "./ProjectsShow";
import { ProjectProvider } from "./ProjectContext";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Metadata } from "next";
interface ExtendedMetadata extends Metadata {
  additionalMetaTags?: { name: string; content: string }[];
  structuredData?: { [key: string]: any };
}
export const metadata: ExtendedMetadata = {
  metadataBase: new URL(`https://shadialmilhem.com`),

  title: "Projects",
  description:
    "Explore Shadi Al Milhem’s (شادي الملحم) web design projects using Next.js, Tailwind CSS, and Figma.",
  keywords: [
    "Shadi Al Milhem",
    "شادي الملحم",
    "شادي اياد الملحم",
    "web development projects",
    "Next.js projects",
    "full stack applications",
    "UI/UX portfolio",
    "Syrian web developer",

    "responsive web design examples",
    "SEO-optimized websites",
    "software engineering portfolio",
    "Arabic web developer projects",
    "international web solutions",
    "custom web applications",
    "JavaScript projects",
    "React applications",
    "Node.js projects",
    "database-driven websites",
    "API integration examples",
    "performance-optimized sites",
    "cross-platform web apps",
    "mobile-first design portfolio",
  ],
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "Shadi Al Milhem Projects (شادي الملحم)",
    description:
      "Discover the innovative web design and front-end development projects by Shadi Al Milhem (شادي الملحم).",
    url: "https://shadialmilhem.com/projects",
    images: [
      {
        url: "https://shadialmilhem.com/SH-logo.png",
        alt: "Shadi Al Milhem Logo شادي الملحم",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  creator: "Shadi Al Milhem",
  alternates: {
    canonical: "https://shadialmilhem.com/projects",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shadi Al Milhem",
    alternateName: "شادي الملحم",
    url: "https://shadialmilhem.com/projects",
    jobTitle: "Full Stack Web Developer",
    description:
      "Shadi Al Milhem is a Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    image: "https://shadialmilhem.com/SH-logo.png",
    sameAs: [
      "https://github.com/shadi-almilhem",
      "https://www.linkedin.com/in/shadi-al-milhem",
      "https://x.com/shadi_m02",
    ],
  },
};
function Page() {
  return (
    <ProjectProvider>
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
        <ProjectsShow />
        <ScrollToTop />
      </main>
    </ProjectProvider>
  );
}

export default Page;
