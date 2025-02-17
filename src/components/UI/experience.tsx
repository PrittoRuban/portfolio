"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiencesData } from "@/src/lib/data";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience({
  icon,
  title,
  location,
  description,
  date,
}: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="flex items-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300">
        <div className="mr-6 text-4xl">{icon}</div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-500">{location}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
          <p className="mt-1 text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </motion.div>
  );
}
