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
      <div className="relative max-w-4xl mx-auto p-6 text-center" id="about" ref={ref}>
        <div className="bg-[#d9d6ec] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3b3761]"></div>

        {/* Introduction */}
        <motion.h1
          className="text-2xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Want to know more about me? You've come to the right place 🎓
        </motion.h1>

        {/* Education Section */}
        <motion.h2
          className="text-2xl font-bold mt-8 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          📚 Education
        </motion.h2>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <strong>R.M.K College of Engineering and Technology</strong>
          <br />
          Bachelor of Engineering in Computer Science
          <br />
          Specialization: Cyber Security
          <br />
          Expected Graduation: May 2027
          <br />
          Achieved 87% in my 12th grade at Vidya Mandir Matric Hr. Sec. School.
        </motion.p>

        {/* Achievements Section */}
        <motion.h2
          className="text-2xl font-bold mt-8 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          🏆 Achievements
        </motion.h2>

        {/* Hackathon Achievement */}
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="https://reservenow.vercel.app" isExternal>
            <strong>Hackathon - Full Stack Development</strong> ⇗
          </Link>
          <br />
          Won the <strong>Overall Championship</strong> at Sairam Engineering College 24 Hours Hackathon 
          in Aug 2024.
          <br />
        </motion.p>

        {/* Coding Contest */}
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <strong>Coding Contest</strong>
          <br />
          Secured <strong>1st place</strong> in the Coding Contest at SRM Eswari Engineering
          College in Aug 2024.
          <br />
        </motion.p>

        {/* Paper Presentation */}
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <strong>Paper Presentation</strong>
          <br />
          Achieved <strong>2nd place</strong> in the Paper Presentation at SRM Eswari Engineering
          College in Aug 2024.
          <br />
        </motion.p>

        {/* Additional Achievements */}
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <strong>First place</strong> in a coding event at RMK College of
          Engineering and Technology in Apr 2024.
          <br />
          Secured <strong>2nd place</strong> in Web Design at Rajalakshmi Engineering College in
          Feb 2024.
          <br />
          <strong>First place</strong> in Web Design using AI tools at Sairam Institute of
          Technology in Feb 2024.
        </motion.p>

        {/* Coding Platforms */}
        <motion.p
          className="sm:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Solved around 3000 problems across various coding platforms including{" "}
          <Link
            href="https://leetcode.com/u/prittoruban/"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Leetcode ⇗
          </Link>
          ,{" "}
          <Link
            href="https://www.geeksforgeeks.org/user/prittoruban/"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Geeksforgeeks ⇗
          </Link>
          ,{" "}
          <Link
            href="https://www.hackerrank.com/profile/PrittoRuban"
            className="!text-blue-600 dark:!text-blue-500"
            target="_blank"
          >
            Hackerrank ⇗
          </Link>
          , and{" "}
          <Link
            href="https://www.skillrack.com/faces/resume.xhtml?id=438898&key=61d8fe7f74d005af56334c549cb369255ccf8777"
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
