"use client";
import React from "react";
import SectionHeading from "@/components/UI/section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" ref={ref} className="relative scroll-mt-28 mb-28 sm:mb-40 max-w-screen-lg">
      
      <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#523131]"></div>
      <SectionHeading>My Experience</SectionHeading>
      <div className="space-y-8">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center p-6 rounded-lg shadow-lg ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            } transition-all duration-300`}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="mr-6 text-4xl">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.location}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
