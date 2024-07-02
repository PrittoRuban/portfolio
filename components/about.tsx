"use client";

import React from "react";
import SectionHeading from "@/components/UI/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <main>
      <motion.section
        ref={ref}
        className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#413e64]"></div>
        <SectionHeading>About Me</SectionHeading>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          Welcome! I'm R. Pritto Ruban, a passionate{" "}
          <span className="font-bold">
            Computer Science Engineering student specializing in Cyber Security
            at R.M.K College of Engineering and Technology
          </span>
          , Chennai. I am deeply interested in Full-Stack Development and
          Blockchain, continuously learning and exploring new technologies to
          stay ahead in this ever-evolving field.
        </motion.p>
        <motion.h4
          className="mb-2 font-semibold"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          My Journey
        </motion.h4>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          I completed my schooling at{" "}
          <span className="font-bold">Vidya Mandir </span>Matric Hr. Sec.
          School, achieving an impressive{" "}
          <span className="font-bold">87% in my 12th grade</span>. Currently, I
          am pursuing my Bachelor of Engineering degree, immersing myself in the
          world of computer science and engineering.
        </motion.p>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
        >
          I am enthusiastic about attending project presentations and coding
          events, where I can learn from industry experts and stay updated with
          the latest technologies.
        </motion.p>

        <motion.p
          className="mb-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          My approach to challenges and goals:{" "}
          <span className=" text-violet-600 dark:text-fuchsia-500">
            Always striving, adapting, and celebrating successes along the way.
          </span>
        </motion.p>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          For more about my coding profiles and other projects, visit my{" "}
          <a
            href="https://linktr.ee/prittoruban"
            className="text-blue-500 underline"
            target="_blank"
          >
            Linktree
          </a>
          .
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          Thank you for visiting my portfolio. Let's achieve the impossible
          together!
        </motion.p>
      </motion.section>
    </main>
  );
}
