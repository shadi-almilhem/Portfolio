import { GridPattern } from "@/components/ui/GridPattern";

import Hero from "./Hero";
import Projects from "./Projects";
import { cn } from "@/lib/utils";
import Services from "./Services";
import Stacks from "./Stacks";
import Footer from "./Footer";
import Cta from "./Cta";
import RotatingGlow from "@/components/ui/RotatingGlow";
import AboutMe from "./AboutMe";
import { ProjectProvider } from "./projects/ProjectContext";
export default function Home() {
  return (
    <ProjectProvider>
      <main className="  flex w-full  flex-col items-center justify-between gap-28 ">
        <Hero />
        <Projects />
        <Services />
        <AboutMe />
        <Stacks />

        <RotatingGlow />
      </main>
    </ProjectProvider>
  );
}
