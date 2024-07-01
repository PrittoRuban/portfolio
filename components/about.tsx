"use client";
import React from "react";
import ItemLayout from "@/components/UI/ItemLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full" id="about">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <motion.h2
            className="text-xl md:text-2xl text-left w-full capitalize"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome! I'm R. Pritto Ruban, a passionate Computer Science
            Engineering student specializing in Cyber Security at R.M.K College
            of Engineering and Technology, Chennai. I am deeply interested in
            Full-Stack Development and Blockchain, continuously learning and
            exploring new technologies to stay ahead in this ever-evolving
            field.
          </motion.p>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong>My Journey:</strong> I completed my schooling at Vidya
            Mandir Matric Hr. Sec. School, achieving an impressive 87% in my
            12th grade. Currently, I am pursuing my Bachelor of Engineering
            degree, immersing myself in the fascinating world of computer
            science and engineering.
          </motion.p>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <strong>My Interests:</strong> I am enthusiastic about attending
            project presentations and coding events, where I can learn from
            industry experts and stay updated with the latest trends and
            technologies. My dedication to mastering my field drives me to
            innovate and contribute meaningfully to the world of technology.
          </motion.p>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <strong>Skills and Achievements:</strong>
          </motion.p>
          <ul className="list-disc ml-6 mt-2">
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Full-Stack Development: Skilled in JavaScript and its frameworks,
              with a keen interest in developing comprehensive web applications.
            </motion.li>
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Blockchain: Exploring the intricacies of blockchain technology and
              its potential applications.
            </motion.li>
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Competitive Programming: Solved around 3000 problems across
              various coding platforms, showcasing my problem-solving skills and
              critical thinking abilities.
            </motion.li>
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Freelancing: Created landing pages and portfolios for clients,
              utilizing my web development expertise.
            </motion.li>
          </ul>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            This snippet encapsulates my approach to challenges and goals:
            always striving, adapting, and celebrating successes along the way.
          </motion.p>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <strong>Personal Tidbits:</strong>
          </motion.p>
          <ul className="list-disc ml-6 mt-2">
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              Hobbies: Walking, playing chess, and reading the Bible.
            </motion.li>
            <motion.li
              className="font-light text-xs sm:text-sm md:text-base mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              Achievements: A critical thinker and problem solver, I have
              actively participated in competitive programming and
              problem-solving events, honing my skills and achieving remarkable
              results.
            </motion.li>
          </ul>
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            <strong>Contact:</strong> For more about my coding profiles and
            other projects, visit my{" "}
            <Link href="https://linktr.ee/prittoruban" target="_blank">
              Linktree
            </Link>
            .
          </motion.p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <motion.p
            className="font-semibold w-full text-left text-2xl sm:text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            25+ <sub className="font-semibold text-base">clients</sub>
          </motion.p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <motion.p
            className="font-semibold w-full text-left text-2xl sm:text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </motion.p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <motion.img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=PrittoRuban&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="PrittoRuban"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <motion.img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=PrittoRuban27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="PrittoRuban"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <motion.img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="PrittoRuban"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <motion.img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=PrittoRuban&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="PrittoRuban"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/PrittoRuban27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <motion.img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=PrittoRuban&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="PrittoRuban"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
