"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import CustomBorder from "./CustomBorder";

const groups = [
  { key: "web", title: "Applications" },
] as const;

export default function Projects({ showBorders = false }: { showBorders?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const step = (d: number) => setOpen((i) => (i === null ? i : (i + d + projects.length) % projects.length));

  return (
    <>
      {groups.map(({ key, title }) => {
        const items = projects.map((p, i) => ({ p, i })).filter(({ p }) => p.category === key);
        if (!items.length) return null;
        return (
          <div key={key}>
            <h1 className="mt-6 text-2xl font-bold capitalize">{title}</h1>
            {showBorders && <CustomBorder />}
            <div className="mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight">
              {items.map(({ p, i }) => (
                <ProjectCard key={p.slug} project={p} onOpen={() => setOpen(i)} />
              ))}
            </div>
          </div>
        );
      })}
      {open !== null && (
        <ProjectGallery
          project={projects[open]}
          onClose={() => setOpen(null)}
          onPrevProject={projects.length > 1 ? () => step(-1) : undefined}
          onNextProject={projects.length > 1 ? () => step(1) : undefined}
        />
      )}
    </>
  );
}
