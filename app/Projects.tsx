import React from "react";
import { Bodoni_Moda } from "next/font/google";

import { CardProject } from "@/components/ui/CardProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Card_Project = [
  {
    imageLink: "/web-design-1-1024x768.jpg",
    title: "Project 1",
    badgeText: "Next.js tailwind",
    ProjectExplain:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageLink: "/Al-Hashem.webp",
    title: "Project 2",
    badgeText: "Figma",
    ProjectExplain:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageLink: "/save-to-notion.webp",
    title: "Project 3",
    badgeText: "Canva",
    ProjectExplain:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageLink: "/save-to-notion-website.webp",
    title: "Project 4",
    badgeText: "Next.js tailwind",
    ProjectExplain:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});
function Projects() {
  return (
    <section className="max-container relative mb-8 flex w-full flex-col items-center gap-16 rounded-b-[3rem] bg-gradient-to-t from-gray-500/5 via-purple-500/5  to-transparent p-8">
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic text-white md:text-medium-40 lg:text-medium-52`}
      >
        My Projects
      </h2>
      <div className="flex flex-col items-center gap-8">
        <div className="grid-col-1 grid justify-items-center gap-8 lg:grid-cols-2 lg:grid-rows-2">
          {Card_Project.map((card) => (
            <CardProject
              key={card.title}
              src={card.imageLink}
              heading={card.title}
              badgeText={card.badgeText}
              ProjectExplain={card.ProjectExplain}
            />
          ))}
        </div>
        <Button
          variant="secondary"
          className="gradient-s-button w-full rounded-full px-3 text-white md:w-fit md:px-5 md:py-5"
        >
          <Link
            className="medium-12 md:medium-14 lg:medium-16"
            href="/projects"
          >
            See More
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Projects;
