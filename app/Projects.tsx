"use client";
import React, { useEffect, useState } from "react";
import { Bodoni_Moda } from "next/font/google";

import { CardProject } from "@/components/ui/CardProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useProjectContext } from "./projects/ProjectContext";
import SkeletonCard from "@/components/ui/SkeletonCard";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});
interface Project {
  title: string;
  imageLink: string;
  badgeText: string;
  projectExplain: string;
  websiteLink?: string;
}
function Projects() {
  const { projects, fetchProjects } = useProjectContext();
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      if (projects.length === 0) {
        await fetchProjects();
      }
      setVisibleProjects(projects.slice(0, 4));
      setLoading(false);
    };
    loadProjects();
  }, [projects, fetchProjects]);

  return (
    <section className="max-container relative mb-8 flex w-full flex-col items-center gap-16 rounded-b-[3rem] bg-gradient-to-t from-gray-300/10 via-primary/5  to-transparent p-8">
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic text-white md:text-medium-40 lg:text-medium-52`}
      >
        My Projects
      </h2>
      <div className="flex flex-col items-center gap-8">
        <div className="grid-col-1 grid justify-items-center gap-8 lg:grid-cols-2 lg:grid-rows-2">
          {loading ? (
            <>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
            </>
          ) : (
            visibleProjects.map((project) => (
              <CardProject
                key={project.imageLink}
                src={project.imageLink}
                websiteLink={project.websiteLink}
                heading={project.title}
                badgeText={project.badgeText}
                ProjectExplain={project.projectExplain}
              />
            ))
          )}
        </div>
        <Link
          aria-label="projects"
          className="medium-12 gradient-s-button md:medium-14 lg:medium-16  w-full  rounded-full  md:w-fit"
          href="/projects"
        >
          <Button
            aria-label="See More Projects"
            variant="secondary"
            className="w-full   px-4 py-6 text-center text-white md:px-5 md:py-5"
          >
            See More
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
