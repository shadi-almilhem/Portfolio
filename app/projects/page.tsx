import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectsShow from "./ProjectsShow";
import { ProjectProvider } from "./ProjectContext";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(`https://shadialmilhem.com`),

  title: "Projects | Shadi Al Milhem",
  description: "Projects by Shadi Al Milhem",
  keywords: [
    "Shadi",
    "Al Milhem",
    "Projects by Shadi Al Milhem",
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
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",
  alternates: {
    canonical: "/projects",
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
