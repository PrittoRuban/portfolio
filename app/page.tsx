// page.jsx
import { Suspense } from "react";
import dynamic from "next/dynamic";
import SectionDivider from "@/components/UI/section-divider";

// Static components loaded immediately
import Intro from "@/components/intro";

// Dynamic imports with lazy loading
const About = dynamic(() => import("@/components/about"), {
  ssr: true,
  loading: () => <div className="skeleton-loader h-96 w-full" />,
});
const Projects = dynamic(() => import("@/components/projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });
const Experiences = dynamic(() => import("@/components/experiences"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Intro />
      <SectionDivider />

      <Suspense fallback={<div className="skeleton-loader h-96 w-full" />}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="skeleton-loader h-96 w-full" />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div className="skeleton-loader h-64 w-full" />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div className="skeleton-loader h-96 w-full" />}>
        <Experiences />
      </Suspense>

      <Suspense fallback={<div className="skeleton-loader h-64 w-full" />}>
        <Contact />
      </Suspense>
    </main>
  );
}
