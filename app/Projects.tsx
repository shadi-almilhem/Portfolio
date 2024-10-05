"use client";
import React, { useEffect, useState } from "react";
import { bodoni_moda } from "@/fonts";

import { CardProject } from "@/components/ui/CardProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useProjectContext } from "./projects/ProjectContext";
import SkeletonCard from "@/components/ui/SkeletonCard";

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
      setVisibleProjects(projects.slice(0, 3));
      setLoading(false);
    };
    loadProjects();
  }, [projects, fetchProjects]);

  return (
    <section className="max-container relative mb-8 flex w-full flex-col items-center gap-8 rounded-b-[3rem] bg-gradient-to-t from-gray-300/10 via-primary/5  to-transparent p-8 pt-0">
      <div className="flex flex-col items-center gap-8">
        <div className="grid-col-1 grid justify-items-center gap-8 lg:grid-cols-3 lg:grid-rows-1">
          {loading ? (
            <>
              {Array(3)
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
          className="medium-12 gradient-s-button md:medium-14 lg:medium-16 w-full rounded-full px-16 md:w-fit  md:py-1"
          href="/projects"
        >
          <Button
            aria-label="See More Projects"
            variant="secondary"
            className="w-full   text-center text-white  "
          >
            See More Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
