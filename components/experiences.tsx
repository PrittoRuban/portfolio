"use client";
import React from "react";
import SectionHeading from "@/components/UI/section-heading";
import { experiencesData } from "@/lib/data";
import Experience from "@/components/UI/experience";
import { useSectionInView } from "@/lib/hooks";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experiences" className="scroll-mt-28 mb-28 max-w-screen-md">
      <SectionHeading>My Experiences</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
