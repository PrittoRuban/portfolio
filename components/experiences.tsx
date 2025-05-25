"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  SiWorkplace,
  SiOpensourcehardware,
  SiFreelancer,
} from "react-icons/si";

type ExperienceType = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  skills?: string[];
};

const Experiences: React.FC = () => {
  const { ref } = useSectionInView("Experiences", 0.5);

  const experiencesData: ExperienceType[] = [
    {
      title: "Technical Content Engineer Intern",
      location: "Kalvium, Coimbatore, India (Remote)",
      description:
        "Creating technical educational content, collaborating with subject matter experts, developing comprehensive documentation, ensuring quality standards, continuously learning new technologies, integrating feedback, and reviewing learning materials.",
      icon: React.createElement(SiWorkplace),
      date: "Jul 2024 - Nov 2024",
      skills: [
        "Technical Writing",
        "Documentation",
        "Content Development",
        "Quality Assurance",
      ],
    },
    {
      title: "Open Source Contributor",
      location: "Remote",
      description:
        "Contributing to open source projects aligned with my tech stack while exploring new technologies. Focusing on improving codebases, fixing issues, and implementing new features to enhance project functionality and user experience.",
      icon: React.createElement(SiOpensourcehardware),
      date: "May 2024 - Present",
      skills: [
        "Collaboration",
        "Version Control",
        "Code Review",
        "Problem Solving",
      ],
    },
    {
      title: "Freelance Web Developer",
      location: "Remote",
      description:
        "Designing and developing responsive, accessible websites and web applications for clients. Specializing in landing pages and portfolio websites with a focus on modern UI/UX principles and performance optimization.",
      icon: React.createElement(SiFreelancer),
      date: "Feb 2024 - Present",
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "UI/UX Design",
        "Client Management",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="experiences"
      ref={ref}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 relative scroll-mt-28"
    >
      {/* Background Elements */}
      <div className="absolute top-[-5rem] -z-10 left-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-28rem] dark:bg-[#3b2727]/30 bg-[#fceded]/40" />

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Experience Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            My Experiences
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative" variants={containerVariants}>
          {/* Timeline line */}
          <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-500 to-violet-500 hidden md:block" />

          {experiencesData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 last:mb-0 relative"
            >
              <div className="flex flex-col md:flex-row">
                {/* Timeline icon - visible on md and larger screens */}
                <div className="hidden md:flex items-start relative z-10">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-100 dark:border-gray-700 mr-6">
                    <div className="text-2xl text-blue-500">
                      {experience.icon}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white dark:bg-gray-800/50 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    {/* Mobile timeline icon - only visible on small screens */}
                    <div className="flex md:hidden items-center mb-4">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-100 dark:border-gray-700 mr-4">
                        <div className="text-2xl text-blue-500">
                          {experience.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {experience.date}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 dark:text-gray-400 mb-3 md:space-x-2">
                          <span className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                                fill="currentColor"
                              />
                            </svg>
                            {experience.location}
                          </span>
                          <span className="hidden md:inline">•</span>
                          <span className="hidden md:flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.25 7H11V13L16.2 16.15L17 14.92L12.25 12.25V7Z"
                                fill="currentColor"
                              />
                            </svg>
                            {experience.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {experience.skills && (
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experiences;
