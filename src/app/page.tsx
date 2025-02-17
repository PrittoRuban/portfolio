import About from "@/src/components/about";
import Contact from "@/src/components/contact";
import Experiences from "@/src/components/experiences";
import Intro from "@/src/components/intro";
import Projects from "@/src/components/projects";
import Skills from "@/src/components/skills";
import SectionDivider from "@/src/components/UI/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}
