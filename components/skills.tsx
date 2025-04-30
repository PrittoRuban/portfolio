"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// Define our skills data from the previous categories
const skillsData = [
  // Frontend
  // "HTML",
  // "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Figma",
  // Backend
  "Node.js",
  "Express.js",
  "GraphQL",
  "Python",
  "Java",
  "C++",
  // Database
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  // Tools
  "Git",
  "GitHub",
  "VSCode",
  "Postman",
  "Insomnia",
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills: React.FC = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 relative scroll-mt-28"
    >
      {/* Background Elements */}
      <div className="absolute top-[-5rem] -z-10 right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] dark:bg-[#3b3761]/30 bg-[#d9d6ec]/40" />

      {/* Skills Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          My Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8 rounded-full" />
      </motion.div>

      {/* Skills List */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="px-5 py-3 bg-white dark:bg-white/10 rounded-3xl text-gray-800 dark:text-white/80 border border-gray-100 dark:border-gray-700 font-medium"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
