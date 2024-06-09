"use client";
import GridPattern from "@/components/ui/GridPattern";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { cn } from "@/lib/utils";

import { Bodoni_Moda } from "next/font/google";
import React from "react";
import ServicesCards from "./ServicesCards";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});

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
