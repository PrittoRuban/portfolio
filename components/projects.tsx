"use client";

import React, { memo, useMemo, lazy, Suspense } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSectionInView } from "@/lib/hooks";
import { ExternalLink, Github, Calendar, ArrowUpRight } from "lucide-react";

// Types
type ProjectType = {
  title: string;
  description: string;
  duration: string;
  tags: string[];
  imageUrl?: string;
  appUrl?: string;
  github?: string;
};

// Constants moved outside component to prevent re-creation
const PROJECTS_DATA: ProjectType[] = [
  {
    title: "Deepfake Detection Application",
    description:
      "A responsive web app detecting phishing URLs, deepfake videos, and AI-generated images with admin management, real-time analysis, and educational chatbot.",
    duration: "Feb 2025 - May 2025",
    tags: ["Next.js", "ML", "Cybersecurity", "Python", "FastAPI"],
    imageUrl: "/Deepfake.png",
    appUrl: "https://cybersectool.vercel.app",
    github: "https://github.com/prittoruban/deephish_detetion",
  },
  {
    title: "Department Symposium Website",
    description:
      "Feature-rich symposium platform attracting 1500+ views and 150+ registrations with event details, schedules, and speaker profiles.",
    duration: "Jan 2025 - Feb 2025",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "CI/CD"],
    imageUrl: "/Symposium.png",
    appUrl: "https://cyberxelerate2k25.vercel.app",
    github: "https://github.com/prittoruban/CyberXelerate2k25",
  },
  {
    title: "Personal Blog Application",
    description:
      "Full-stack blog with admin CRUD operations, user commenting, Redux state management, and JWT authentication.",
    duration: "Apr 2024 - Jun 2024",
    tags: ["MERN", "Redux", "JWT", "Admin Dashboard"],
    imageUrl: "/blogApp.png",
    appUrl: "https://pritto-blog.onrender.com/",
    github: "https://github.com/prittoruban/MERN_Blog",
  },
];

// Animation variants for better performance
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const imageVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hover: { scale: 1.02, y: -1 },
  tap: { scale: 0.98 },
};

// Optimized Image Component with better loading
const OptimizedProjectImage = memo(
  ({
    project,
    index,
    priority = false,
  }: {
    project: ProjectType;
    index: number;
    priority?: boolean;
  }) => {
    if (!project.imageUrl) return null;

    return (
      <div className="relative lg:w-64 h-40 lg:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative w-full h-full"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={256}
            height={224}
            className="object-cover w-full h-full"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Floating Badge */}
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400">
          #{String(index + 1).padStart(2, "0")}
        </div>
      </div>
    );
  }
);

OptimizedProjectImage.displayName = "OptimizedProjectImage";

// Memoized Tag Component
const ProjectTag = memo(({ tag, index }: { tag: string; index: number }) => (
  <motion.span
    key={`${tag}-${index}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.15 }}
    className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md border border-blue-100 dark:border-blue-800/50"
  >
    {tag}
  </motion.span>
));

ProjectTag.displayName = "ProjectTag";

// Memoized Action Button Component
const ActionButton = memo(
  ({
    href,
    icon: Icon,
    children,
    variant = "primary",
  }: {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  }) => {
    const isPrimary = variant === "primary";

    return (
      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${
            isPrimary
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
          }`}
          prefetch={false}
        >
          <Icon className="w-3.5 h-3.5" />
          {children}
        </Link>
      </motion.div>
    );
  }
);

ActionButton.displayName = "ActionButton";

// Optimized Project Card with better memoization
const ProjectCard = memo(
  ({ project, index }: { project: ProjectType; index: number }) => {
    // Memoize computations
    const displayTags = useMemo(() => project.tags.slice(0, 4), [project.tags]);
    const remainingTagsCount = useMemo(
      () => (project.tags.length > 4 ? project.tags.length - 4 : 0),
      [project.tags.length]
    );
    const duration = useMemo(
      () => project.duration.split(" - ")[1] || project.duration,
      [project.duration]
    );

    return (
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        className="group relative bg-white/70 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/60 dark:border-gray-700/50 overflow-hidden"
      >
        {/* Card Content */}
        <div className="flex flex-col lg:flex-row max-w-4xl">
          {/* Image Section */}
          <OptimizedProjectImage
            project={project}
            index={index}
            priority={index === 0}
          />

          {/* Content Section */}
          <div className="flex-1 p-5 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                {project.title}
              </h3>

              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                <Calendar className="w-3 h-3" />
                {duration}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {displayTags.map((tag, idx) => (
                <ProjectTag key={`${tag}-${idx}`} tag={tag} index={idx} />
              ))}
              {remainingTagsCount > 0 && (
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                  +{remainingTagsCount}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.appUrl && (
                <ActionButton
                  href={project.appUrl}
                  icon={ExternalLink}
                  variant="primary"
                >
                  Live Demo
                </ActionButton>
              )}
              {project.github && (
                <ActionButton
                  href={project.github}
                  icon={Github}
                  variant="secondary"
                >
                  Code
                </ActionButton>
              )}
            </div>
          </div>
        </div>

        {/* Subtle Hover Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// Header component for better organization
const ProjectsHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Featured Projects
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
      />
      <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto lg:text-base">
        A curated selection of projects showcasing expertise in full-stack
        development, cybersecurity, and modern web technologies.
      </p>
    </motion.div>
  );
});

ProjectsHeader.displayName = "ProjectsHeader";

// Main Projects Component
const Projects: React.FC = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { scrollYProgress } = useScroll();

  // Memoized parallax transforms to prevent unnecessary recalculations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Memoize the projects list to prevent unnecessary re-renders
  const projectsList = useMemo(
    () =>
      PROJECTS_DATA.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          project={project}
          index={index}
        />
      )),
    []
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative max-w-5xl mx-auto py-12 px-4 sm:px-6 scroll-mt-28"
    >
      {/* Optimized Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl dark:from-blue-400/8 dark:to-purple-600/8"
      />
      <motion.div
        style={{ y: backgroundY2 }}
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-tl from-violet-400/15 to-pink-600/15 rounded-full blur-3xl dark:from-violet-400/8 dark:to-pink-600/8"
      />

      <div className="space-y-8">
        {/* Header */}
        <ProjectsHeader />

        {/* Projects Grid */}
        <div className="grid gap-6 lg:gap-8">{projectsList}</div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-6"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in exploring more projects?
          </p>
          <Link
            href="https://github.com/prittoruban"
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 font-medium rounded-lg hover:shadow-md transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);
