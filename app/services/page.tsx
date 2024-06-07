import GridPattern from "@/components/ui/GridPattern";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Vortex } from "@/components/ui/vortex";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CircleGauge,
  CodeXml,
  Paintbrush,
  PanelsTopLeft,
} from "lucide-react";
import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";
import React from "react";
import ServicesCards from "./ServicesCards";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
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
