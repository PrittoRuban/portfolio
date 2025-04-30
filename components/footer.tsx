// components/Footer.js
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree, SiReddit, SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative  text-black dark:text-white  py-8 overflow-hidden">
      {/* <div className="bg-[#fbe2e3] absolute -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b2c2c]"></div> */}
      <div className="bg-[#eeedfc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0d222e]"></div>
      

      <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between md:gap-6 max-w-screen-lg">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">
            Let's build something together
          </h2>
          <p className="mb-4">
            Feel free to reach out if you're looking for a developer, have a
            question or just want to connect 🎯
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-6">
          <a
            href="https://twitter.com/prittoruban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <SiX size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prittoruban/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/prittoruban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://reddit.com/user/prittoruban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <SiReddit size={24} />
          </a> 
        </div>
      </div>
      <div className="container mx-auto px-6 text-center mt-4 md:mt-8 relative">
        <p className="text-sm">
          &copy; {new Date().getFullYear().toString()} All rights reserved.
        </p>
        <span className="text-sm">
          Made with ❤️ By{" "}
          <a
            href="https://www.linkedin.com/in/prittoruban/"
            target="_blank"
            className=" hover:text-blue-500"
          >
            Pritto Ruban
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
