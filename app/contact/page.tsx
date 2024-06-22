import React from "react";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import ContactContainer from "./ContactContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(`https://shadialmilhem.com`),

  title: "Contact | Shadi Al Milhem",
  description: "Contact Shadi Al Milhem",
  keywords: [
    "Shadi",
    "Al Milhem",
    "Contact Shadi Al Milhem",
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
    canonical: "/contact",
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
