"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

type ProjectType = {
  title: string;
  description: string;
  duration: string;
  tags: string[];
  imageUrl?: string;
  appUrl?: string;
  github?: string;
};

const Projects: React.FC = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  const projectsData: ProjectType[] = [
    {
      title: "Deepfake Detection Application",
      description:
        "A fully responsive web application to detect phishing URLs, deepfake videos, and AI-generated images. Features include admin management of threat reports, user contact system, real-time threat analysis, and an interactive chatbot that educates novice users on security threats.",
      duration: "Feb 2025 - May 2025",
      tags: [
        "Next.js",
        "Machine Learning",
        "Cybersecurity",
        "Problem Solving",
      ],
      imageUrl: "/Deepfake.png",
      appUrl: "https://cybersectool.vercel.app",
    },
    {
      title: "Department Symposium Website",
      description:
        "Developed a fully responsive, feature-rich website for the department's symposium. Attracted 1500+ views and registered 150+ participants. Provided a centralized platform for event details, schedules, speaker profiles, and registration updates, enhancing event outreach.",
      duration: "Jan 2025 - Mar 2025",
      tags: ["Next.js", "Tailwind CSS" ],
      imageUrl: "/Symposium.png",
      appUrl: "https://cyberxelerate2k25.vercel.app",
    },
    {
      title: "Personal Blog Application",
      description:
        "A fully responsive blog application with seamless user experience. Implemented admin features for creating, editing, and deleting blog posts, and user features for reading and commenting. Managed state with React Redux and secured authentication using JWT.",
      duration: "Apr 2024 - Jun 2024",
      tags: [
        "MERN Stack",
        "Tailwind CSS",
        "React Redux",
      ],
      imageUrl: "/blogApp.png",
      appUrl: "https://pritto-blog.onrender.com/",
      github: "https://github.com/prittoruban/blog-app",
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
      id="projects"
      ref={ref}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 relative scroll-mt-28"
    >
      {/* Background Elements */}
      <div className="absolute top-[-5rem] -z-10 left-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-28rem] dark:bg-[#3b3761]/30 bg-[#d9d6ec]/40" />

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Projects Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Projects List */}
        <motion.div className="space-y-12" variants={containerVariants}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="md:flex">
                {project.imageUrl && (
                  <div className="md:flex-shrink-0 md:w-64 h-48 md:h-auto relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover rounded-l-xl"
                      sizes="(max-width: 768px) 100vw, 256px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-50 rounded-l-xl" />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <h3 className="text-xl font-bold text-white text-center drop-shadow-lg">
                        {project.title.split(" ").slice(0, 3).join(" ")}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.appUrl && (
                      <Link
                        href={project.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Live Demo
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        GitHub
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </Link>
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

export default Projects;
