"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChakraProvider, Link, Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ChakraProvider>
      <Box ref={ref} className="max-w-3xl mx-auto p-6 text-center" id="about">
        {/* Background Blur */}
        <Box className="absolute top-[-1rem] -z-10 right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-28rem] dark:bg-[#3b3761] bg-[#d9d6ec]" />

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="xl" mb={6}>
            Want to know more about me? You've come to the right place 🎓
          </Heading>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Heading as="h2" size="lg" mt={12} mb={4}>
            📚 Education
          </Heading>
          <Text fontSize="lg">
            <strong>R.M.K College of Engineering and Technology</strong> <br />
            Bachelor of Engineering in Computer Science (Specialization: Cyber
            Security) <br />
            Expected Graduation: May 2027
            <br />
            Scored 87% in 12th grade at Vidya Mandir Matric Hr. Sec. School
          </Text>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Heading as="h2" size="lg" mt={12} mb={4}>
            🏆 Achievements
          </Heading>

          {/* Hackathon Achievement */}
          <Text fontSize="lg" mb={4}>
            <Link href="https://reservenow.vercel.app" isExternal>
              <strong>Hackathon - Full Stack Development</strong> ⇗
            </Link>{" "}
            <br />
            Won the <strong>Overall Championship</strong> at Sairam Engineering
            College Hackathon (Aug 2024).
          </Text>

          {/* Other Achievements */}
          <Text fontSize="lg" mb={4}>
            Secured <strong>1st place</strong> in Coding Contest at SRM Eswari
            Engineering College (Aug 2024).
            <br />
            Achieved <strong>2nd place</strong> in Paper Presentation at SRM
            Eswari Engineering College (Aug 2024).
            <br />
            Won <strong>1st place</strong> in Web Design using AI tools at
            Sairam Institute of Technology (Feb 2024).
          </Text>
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text fontSize="lg" mb={8}>
            Solved over 3000 problems on platforms like{" "}
            <Link href="https://leetcode.com/u/prittoruban/" isExternal>
              Leetcode ⇗
            </Link>
            ,{" "}
            <Link
              href="https://www.geeksforgeeks.org/user/prittoruban/"
              isExternal
            >
              Geeksforgeeks ⇗
            </Link>
            ,{" "}
            <Link
              href="https://www.hackerrank.com/profile/PrittoRuban"
              isExternal
            >
              Hackerrank ⇗
            </Link>
            , and{" "}
            <Link
              href="https://www.skillrack.com/faces/resume.xhtml?id=438898&key=61d8fe7f74d005af56334c549cb369255ccf8777"
              isExternal
            >
              Skillrack ⇗
            </Link>
          </Text>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Text fontSize="xl" fontWeight="bold" mb={12}>
            My motto:{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Strive, adapt, and celebrate the journey to success.
            </span>
          </Text>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
};

export default About;
