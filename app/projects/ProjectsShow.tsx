// File: pages/ProjectsShow.js
"use client";
import { Button } from "@/components/ui/button";
import { CardProject } from "@/components/ui/CardProject";
import { Spotlight } from "@/components/ui/Spotlight";
import { Bodoni_Moda } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useProjectContext } from "./ProjectContext";
import SkeletonCard from "@/components/ui/SkeletonCard"; // Ensure this import is correct

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: true,
});

interface Project {
  title: string;
  imageLink: string;
  badgeText: string;
  projectExplain: string;
  websiteLink?: string;
}

function ProjectsShow() {
  const { projects, fetchProjects } = useProjectContext();
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      if (projects.length === 0) {
        await fetchProjects();
      }
      setVisibleProjects(projects.slice(0, 6));
      setLoading(false);
    };
    loadProjects();
    console.log(projects);
  }, [projects, fetchProjects]);

  const handleSeeMore = () => {
    const newOffset = offset + 6;
    setVisibleProjects(projects.slice(0, newOffset + 6));
    setOffset(newOffset);
  };

  return (
    <section className="max-container relative z-40 mt-44 flex w-full flex-col flex-wrap items-center gap-6 sm:mt-48 md:mt-56 md:gap-8 lg:mt-60">
      <Spotlight
        className="-top-30 md:left-30 left-0 h-screen w-full md:-top-60"
        fill="white"
      />

      <h1
        className={`${bodoni_moda.className} gradient-p lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto  px-4 text-center italic leading-[130%]`}
      >
        My Projects
      </h1>
      <div className="flex flex-col items-center gap-8">
        <div className="grid-col-1 grid justify-items-center gap-8 lg:grid-cols-2 lg:grid-rows-2">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
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
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <Button
            aria-label="See More Projects"
            variant="secondary"
            className="gradient-s-button mt-5 w-full rounded-full px-3 text-white md:w-fit md:px-5 md:py-5"
            onClick={handleSeeMore}
            disabled={visibleProjects.length >= projects.length}
          >
            See More
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectsShow;
