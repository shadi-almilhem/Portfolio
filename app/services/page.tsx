import GridPattern from "@/components/ui/GridPattern";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { cn } from "@/lib/utils";

import React from "react";
import ServicesCards from "./ServicesCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Shadi Al Milhem",
  description: "Services by Shadi Al Milhem",
  keywords: [
    "Shadi",
    "Al Milhem",
    "Services by Shadi Al Milhem",
    "Shadi Al Milhem",
    "shadialmilhem",
    "Shadi Almilhem",
    "Shadi Al Melhem",
    "Shadi Al Milhem Portfolio",
    "شادي الملحم",
    "شادي",
    "shadi al melhem",
    "shadi almelhem",
    "shadi al milhem",
    "web developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "software engineer",
    "portfolio",
    "Next.js",
    "UI/UX",
    "web design",
    "responsive design",
    "SEO",
    "open source",
  ],
  icons: { icon: "/favicon.ico" },
  creator: "Shadi Al Milhem",
  alternates: {
    canonical: "https://shadialmilhem.com/services",
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
