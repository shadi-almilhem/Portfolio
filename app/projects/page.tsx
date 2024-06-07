import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectsShow from "./ProjectsShow";
import { ProjectProvider } from "./ProjectContext";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
