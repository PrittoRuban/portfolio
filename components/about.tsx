"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChakraProvider, Link } from "@chakra-ui/react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ChakraProvider>
      <div className="relative max-w-4xl mx-auto p-6" id="about" ref={ref}>
        <div className="bg-[#d9d6ec] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3b3761]"></div>
        <motion.h1
          className="text-2xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Wanna know more about me? You've come to the right place 🎓
        </motion.h1>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Welcome! I'm{" "}
          <span className="sm:text-xl font-semibold">R. Pritto Ruban</span>, I
          completed my schooling at Vidya Mandir Matric Hr. Sec. School,
          achieving an impressive{" "}
          <span className="font-bold">87% in my 12th grade.</span>
        </motion.p>
        <motion.p
          className="sm:text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Currently, I am pursuing my{" "}
          <span className="font-bold">Bachelor of Engineering</span> degree,
          immersing myself in the world of Computer science and engineering,
          specializing in Cyber Security at R.M.K College of Engineering and
          Technology, Chennai.
        </motion.p>
        <motion.p
          className="sm:text-2xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          I've solved around 3000 problems across various coding platforms
          including{" "}
          <Link
            href="https://leetcode.com/u/prittoruban/"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Leetcode ⇗
          </Link>
          ,{"  "}
          <Link
            href="#"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Geeksforgeeks ⇗
          </Link>
          ,{"  "}
          <Link
            href="#"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Hackerrank ⇗
          </Link>
          , and{"  "}
          <Link
            href="#"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Skillrack ⇗
          </Link>
        </motion.p>

        <motion.p
          className="sm:text-2xl font-bold text-center mb-8 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          My approach to challenges and goals:{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Always striving, adapting, and celebrating successes along the way.
          </span>
        </motion.p>
      </div>
    </ChakraProvider>
  );
};

export default About;
