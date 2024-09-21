import React from "react";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import ContactContainer from "./ContactContainer";
import { Metadata } from "next";
interface ExtendedMetadata extends Metadata {
  additionalMetaTags?: { name: string; content: string }[];
  structuredData?: { [key: string]: any };
}
export const metadata: ExtendedMetadata = {
  metadataBase: new URL(`https://shadialmilhem.com`),

  title: "Contact",
  description: "Contact Shadi Al Milhem (شادي الملحم)",
  keywords: [
    "Shadi Al Milhem",
    "شادي الملحم",
    "شادي اياد الملحم",
    "contact web developer",
    "hire full stack developer",
    "Next.js expert",
    "UI/UX consultant",
    "responsive web design specialist",
    "web development services",
    "freelance web developer",
    "Arabic web developer",
    "international web projects",
  ],
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",
  alternates: {
    canonical: "https://shadialmilhem.com/contact",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shadi Al Milhem",
    alternateName: "شادي الملحم",
    url: "https://shadialmilhem.com/contact",
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
      <ContactContainer />
    </main>
  );
}

export default page;
