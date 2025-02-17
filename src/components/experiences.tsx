"use client";
import React from "react";
import SectionHeading from "@/src/components/UI/section-heading";
import { experiencesData } from "@/src/lib/data";
import Experience from "@/src/components/UI/experience";
import { useSectionInView } from "@/src/lib/hooks";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences", 0.5);

  return (
    <section
      ref={ref}
      id="experiences"
      className="relative scroll-mt-28 mb-28 max-w-screen-md"
    >
      <div className="bg-[#fceded] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#3b2727]"></div>
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
