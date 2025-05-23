import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  XIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  YouTubeIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      aria-label="lightDarkMode"
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        aria-label="onClick"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.linkedin.com/in/kshitijadhikaree"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/kshitizadhikaree"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@kshitizadhikaree"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <YouTubeIcon />
          </motion.a>

          <motion.a
            href="https://github.com/KshitijAdhikaree"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://x.com/KshitijAdhikar3"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3 bg-white dark:bg-black"
          >
            <XIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-16 flex items-center justify-center rounded-full p-2 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            aria-label="lightDark"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {/* Mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed min-w-[70vw] flex flex-col justify-between z-30 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-[60px]"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className="mb-6"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center ">
            <motion.a
              href="https://github.com/KshitijAdhikaree"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-light/80 rounded-full dark:bg-dark/80"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://x.com/KshitijAdhikar3"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light/80 rounded-md dark:bg-dark/80"
            >
              <XIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@kshitizadhikaree"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light/80 rounded-md dark:bg-dark/80"
            >
              <YouTubeIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kshitijadhikaree/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light/80 rounded-md dark:bg-dark/80"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/kshitizadhikaree"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 bg-light/80 rounded-full dark:bg-dark/80"
            >
              <FacebookIcon />
            </motion.a>
          </nav>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={` mt-8 flex items-center justify-center rounded-full p-2 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            aria-label="lightDarkMobile"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </motion.div>
      ) : null}

      <div className="absolute left-[47%] top-2 traslate-x-[-50%] md:left-[43%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
