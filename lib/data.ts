import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/blogApp.png";
import rmtdevImg from "@/public/eCommerse.png";
import wordanalyticsImg from "@/public/TinDog.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Create websites and web apps for clients. I've worked on projects landing pages and portfolio websites.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - till date",
  },
  {
    title: "Open source contributor",
    location: "Remote",
    description:
      "I'll be working on open source projects. I'll be contributing to the projects that includes in my tech stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - till date",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Prisma",
  "GraphQL",
  "Python",
  "Java",
  "C++",
] as const;
