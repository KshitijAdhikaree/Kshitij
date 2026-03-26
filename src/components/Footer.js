import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import buyMeACoffee from "../../public/images/yellow-button.png";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Footer = () => {
  const [mode] = useThemeSwitcher();

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-row items-center justify-between gap-6 text-center md:flex-col md:items-center lg:px-16 lg:py-6 md:px-12 md:py-6 sm:px-8 sm:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <Link href="/">
          <img
            src={mode === "light" ? "/images/logo/1.svg" : "/images/logo/2.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="object-contain hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <motion.a
          href="https://www.buymeacoffee.com/kshitijAd"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-[180px] md:w-[120px]"
        >
          <Image
            src={buyMeACoffee}
            alt="Buy Me A Coffee"
            as="image"
            width={300}
            height={200}
          />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
