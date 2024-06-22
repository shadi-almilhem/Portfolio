import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Stacks from "./Stacks";

import RotatingGlow from "@/components/ui/RotatingGlow";
import AboutMe from "./AboutMe";
import { ProjectProvider } from "./projects/ProjectContext";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Shadi Al Milhem",
  description:
    "Shadi Al Milhem Portfolio, Your Favorite Front-End Developer With 3 years experience. Crafting unforgettable websites for your online identity.",
  keywords: [
    "Shadi",
    "Al Milhem",
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
    canonical: "https://shadialmilhem.com/",
  },
};
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
