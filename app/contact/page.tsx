"use client";
import React from "react";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import ContactContainer from "./ContactContainer";

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
