"use client";

import React from "react";
import SectionHeading from "@/src/components/UI/section-heading";
import { projectsData } from "@/src/lib/data";
import Project from "@/src/components/UI/project";
import { useSectionInView } from "@/src/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="space-y-6">
        {" "}
        {/* Vertical spacing between each row */}
        {projectsData.map((project, index) => (
          <div key={index} className="w-full">
            {" "}
            {/* Ensuring full width for each tile */}
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
