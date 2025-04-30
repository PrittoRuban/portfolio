"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollUp = currentScrollY < lastScrollY || currentScrollY <= 0;

    // Only update state when direction changes to avoid unnecessary re-renders
    if (isScrollUp !== isScrollingUp) {
      setIsScrollingUp(isScrollUp);
    }

    // Control visibility with some threshold to prevent flickering
    if (currentScrollY > 100 && !isScrollUp && isVisible) {
      setIsVisible(false);
    } else if ((isScrollUp && !isVisible) || currentScrollY <= 0) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, isScrollingUp, isVisible]);

  useEffect(() => {
    // Add passive flag for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize link click handler
  const handleLinkClick = useCallback(
    (
      name: "Home" | "About" | "Projects" | "Skills" | "Experiences" | "Contact"
    ) => {
      setActiveSection(name);
      setTimeOfLastClick(Date.now());
    },
    [setActiveSection, setTimeOfLastClick]
  );

  return (
    <header className="z-[999] relative">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, opacity: 0, x: "-50%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </AnimatePresence>

      <nav
        className={clsx(
          "flex fixed left-1/2 -translate-x-1/2 py-2",
          "top-[0.15rem] h-12 sm:top-[1.7rem] sm:h-[initial] sm:py-0",
          { "opacity-0 pointer-events-none": !isVisible }
        )}
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 font-semibold dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
                aria-current={activeSection === link.name ? "page" : undefined}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
