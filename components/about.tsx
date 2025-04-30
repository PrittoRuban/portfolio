"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

type AchievementType = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
};

type EducationType = {
  institution: string;
  degree: string;
  duration: string;
};

const About: React.FC = () => {
  const { ref } = useSectionInView("About", 0.5);

  const achievements: AchievementType[] = [
    {
      title: "Hackathon - Open Innovation",
      issuer: "New Prince Shri Bhavani College Of Engineering & Technology",
      date: "Mar 2025",
      description: "Won 3rd Prize in 36 Hours Hackathon",
    },
    {
      title: "Coding Contest",
      issuer: "S.R.M Eswari Engineering College",
      date: "Aug 2024",
      description: "Secured 1st place in the Coding Contest",
    },
    {
      title: "Hackathon - Full Stack Development",
      issuer: "Sri Sairam Engineering College",
      date: "Aug 2024",
      description: "Won the Overall Championship in 24 Hours Hackathon",
      url: "https://reservenow.vercel.app",
    },
    {
      title: "Paper Presentation",
      issuer: "S.R.M Eswari Engineering College",
      date: "Aug 2024",
      description: "Achieved 2nd place in the Paper Presentation",
    },
    {
      title: "Coding Contest",
      issuer: "RMK College of Engineering and Technology",
      date: "Apr 2024",
      description: "First place in coding event",
    },
    {
      title: "Web Design",
      issuer: "Rajalakshmi Engineering College",
      date: "Feb 2024",
      description: "Secured 2nd place in a web design event",
    },
    {
      title: "Web Development ",
      issuer: "Sairam Institute of Technology",
      date: "Feb 2024",
      description:
        "Secured first place in the web development event. ",
    },
  ];

  const education: EducationType[] = [
    {
      institution: "R.M.K College Of Engineering And Technology",
      degree:
        "Bachelor of Engineering - BE, Computer Science Engineering (Cyber Security)",
      duration: "Aug 2023 - Jul 2027",
    },
    {
      institution: "Vidya Mandir Matric Higher Secondary School",
      degree: "Higher Secondary, Computer Science",
      duration: "Jun 2021 - May 2023",
    },
  ];

  const codingPlatforms = [
    { name: "LeetCode", url: "https://leetcode.com/u/prittoruban/" },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/prittoruban/",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/PrittoRuban",
    },
    {
      name: "Skillrack",
      url: "https://www.skillrack.com/faces/resume.xhtml?id=438898&key=61d8fe7f74d005af56334c549cb369255ccf8777",
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
      id="about"
      ref={ref}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 relative scroll-mt-28"
    >
      {/* Background Elements */}
      <div className="absolute top-[-5rem] -z-10 right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] dark:bg-[#3b3761]/30 bg-[#d9d6ec]/40" />

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* About Intro */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8 rounded-full" />

          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 text-left">
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-blue-500 mr-2 text-xl">•</span>
              <p>
                I've solved over{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  3000 coding problems
                </span>{" "}
                across LeetCode, GeeksforGeeks, and Skillrack, giving me a solid
                grasp of algorithms, data structures, and how to break down
                complex problems efficiently.
              </p>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-blue-500 mr-2 text-xl">•</span>
              <p>
                In hackathons and coding contests, I've consistently delivered
                fast, reliable solutions by focusing on what matters most:
                solving the problem well, under pressure.
              </p>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-blue-500 mr-2 text-xl">•</span>
              <p>
                I write clean, efficient code with a strong foundation in
                computer science and a focus on real-world practicality.
              </p>
            </motion.li>
          </ul>
        </motion.div>

        {/* Education Section */}
        {/* <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <span className="mr-2">🎓</span> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {edu.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {edu.degree}
                </p>
                <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                  {edu.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

         Achievements Section 
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <span className="mr-2">🏆</span> Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {achievement.title}
                  </h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {achievement.issuer}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {achievement.description}
                </p>
                 {achievement.url && (
                  <Link
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
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
              </motion.div>
            ))} 
          </div>
        </motion.div> */}

        {/* Coding Platforms */}
        {/* <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <span className="mr-2">💻</span> Coding Platforms
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {codingPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-all"
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.div> */}

        {/* Final Note */}
        {/* <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            My motto:{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              Strive, adapt, and celebrate the journey to success.
            </span>
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default About;
