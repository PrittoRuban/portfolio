"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { IoMdPlanet } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import photo from "@/public/MyPhoto.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [showHoverEffect, setShowHoverEffect] = useState(false);

  const imageVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial="initial"
          animate="animate"
          onHoverStart={() => setShowHoverEffect(true)}
          onHoverEnd={() => setShowHoverEffect(false)}
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.3,
            }}
          >
            <Image
              src={photo}
              alt="Pritto Ruban's photo"
              width="162"
              height="162"
              quality="100"
              priority={true}
              className="h-28 w-28 sm:w-36 sm:h-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-700"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            whileHover={{ rotate: [0, 15, -15, 15, -15, 0], scale: 1.2 }}
          >
            ✨
          </motion.span>

          <AnimatePresence>
            {showHoverEffect && (
              <motion.div
                className="absolute -top-2 -left-2 w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-blue-500 opacity-20 blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.h1
        className="mb-6 mt-6 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 75,
          delay: 0.2,
          duration: 0.7,
        }}
      >
        <motion.span
          className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400"
          whileHover={{ scale: 1.05 }}
        >
          I'm Pritto Ruban,{" "}
        </motion.span>
        <span>Aspiring </span>
        <motion.span
          className="font-bold relative"
          whileHover={{ scale: 1.05 }}
        >
          Engineer
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.span>
        <span>, </span>
        <motion.span
          className="font-bold relative"
          whileHover={{ scale: 1.05 }}
        >
          Cyber Security Enthusiast
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-green-500 dark:bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </motion.span>
        <span> and </span>
        <motion.span
          className="font-bold relative"
          whileHover={{ scale: 1.05 }}
        >
          Problem Solver
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 dark:bg-purple-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
        </motion.span>
        <span className="font-bold">. 🎯 </span>
      </motion.h1>

      <motion.p
        className="mb-10 px-4 text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 75,
          delay: 0.3,
          duration: 0.7,
        }}
      >
        In love with creative problem solving and building things that make a
        difference. <span className="inline-block animate-pulse">📖</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
      >
        <div className="flex flex-wrap justify-center gap-3 mb-4 sm:mb-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-800 active:scale-105 transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-105 transition cursor-pointer shadow-lg borderBlack dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              href="https://drive.google.com/file/d/1npu9qT7pln5ahKqmQXMINzIIoac4VeFB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-row gap-3">
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer shadow-md hover:shadow-xl transition-shadow borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
              href="https://www.linkedin.com/in/prittoruban/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <BsLinkedin />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer shadow-md hover:shadow-xl transition-shadow borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
              href="https://github.com/prittoruban"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <BsGithub />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer shadow-md hover:shadow-xl transition-shadow borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
              href="#projects"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
              aria-label="View Projects"
            >
              <IoMdPlanet />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
