import { GridPattern } from "@/components/ui/GridPattern";

import Hero from "./Hero";
import Projects from "./Projects";
import { cn } from "@/lib/utils";
import Services from "./Services";
import Stacks from "./Stacks";
import Footer from "./Footer";
import Cta from "./Cta";
import RotatingGlow from "@/components/ui/RotatingGlow";
export default function Home() {
  return (
    <main className="  flex w-full  flex-col items-center justify-between gap-28 ">
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          " [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black,transparent_70%)]",
        )}
      />
      <Hero />
      <Projects />
      <Services />
      <Stacks />

      <RotatingGlow />
      <Cta />

      <Footer />
    </main>
  );
}
