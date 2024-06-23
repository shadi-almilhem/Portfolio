import Hero from "./Hero";
import Projects from "./Projects";
import dynamic from "next/dynamic";

import { ProjectProvider } from "./projects/ProjectContext";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
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
const DynamicServices = dynamic(() => import("./Services"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
});
const DynamicAboutMe = dynamic(() => import("./AboutMe"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  ),
});
const DynamicStack = dynamic(() => import("./Stacks"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  ),
});
const DynamicRotationGlow = dynamic(
  () => import("@/components/ui/RotatingGlow"),
  {
    loading: () => (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
    ),
  },
);
export default function Home() {
  return (
    <ProjectProvider>
      <main className="  flex w-full  flex-col items-center justify-between gap-28 ">
        <Hero />
        <Projects />
        <DynamicServices />
        <DynamicAboutMe />
        <DynamicStack />

        <DynamicRotationGlow />
      </main>
    </ProjectProvider>
  );
}
