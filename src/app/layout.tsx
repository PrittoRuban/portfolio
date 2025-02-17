import Header from "@/src/components/header";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import ActiveSectionContextProvider from "@/src/context/active-section-context";
import Footer from "@/src/components/footer";
import ThemeSwitch from "@/src/components/UI/theme-switch";
import ThemeContextProvider from "@/src/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Pritto Ruban | Portfolio",
  description:
    "Pritto Ruban is a Student, Engineer, Developer, and a Tech Enthusiast. Aspiring Software Engineer, Freelancer, and Competitive Programmer. 🎯 In love with creative problem-solving and building things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#423d3d]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}