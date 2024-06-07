"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Project {
  title: string;
  imageLink: string;
  badgeText: string;
  projectExplain: string;
  // ... any other properties of a project
}

interface ProjectContextType {
  projects: Project[];
  fetchProjects: (offset: number) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const cachedProjects = sessionStorage.getItem("projects");
    if (cachedProjects) {
      setProjects(JSON.parse(cachedProjects));
    }
  }, []);

  const fetchProjects = async (offset: number) => {
    try {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .range(offset, offset + 9);
      if (error) throw error;
      if (Array.isArray(data)) {
        const newProjects = [...projects, ...data];
        setProjects(newProjects);
        sessionStorage.setItem("projects", JSON.stringify(newProjects));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
