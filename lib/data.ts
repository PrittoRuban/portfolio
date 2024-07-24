import React from "react";
import corpcommentImg from "@/public/blogApp.png";
import {
  SiFreelancer,
  SiOpensourcehardware,
  SiWorkplace,
} from "react-icons/si";

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
    title: "Technical Content Engineer Intern at Kalvium",
    location: "Coimbatore, India (Remote)",
    description:
      "Role Overview: Content Creation, Collaboration, Technical Documentation, Quality Assurance, Learning and Development, Feedback Integration, Review Learning Contents.",
    icon: React.createElement(SiWorkplace),
    date: "2024 Jul - Present",
  },
  {
    title: "Open source contributor",
    location: "Remote",
    description:
      "I'll be working on open source projects. I'll be contributing to the projects that includes in my tech stack, and also learning new technologies.",
    icon: React.createElement(SiOpensourcehardware),
    date: "2024 May - Present",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Create websites and web apps for clients. I've worked on projects landing pages and portfolio websites, ensuring they are responsive and accessible.",
    icon: React.createElement(SiFreelancer),
    date: "2024 Feb - Present",
  },
] as const;

export const projectsData = [
  {
    title: "MERN Blog App",
    description:
      "I've developed a MERN (MongoDB, Express.js, React.js, Node.js) stack Blog application. This application showcases my proficiency in full-stack web development",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: corpcommentImg,
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
