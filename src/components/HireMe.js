import Link from "next/link";
import React from "react";
import { Circle } from "../components/Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:hidden">
      <div className="w-48 h-48 flex items-center justify-center relative md:w-24 md:h-24">
        <Circle className="fill-dark  dark:fill-light  animate-ping " />
        <Link
          href="mailto:adhikareekshitij@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark dark:bg-light
         w-20 h-20 rounded-full font-semibold  hover:bg-light hover:text-dark
         dark:hover:bg-dark dark:hover:text-light md:w-12 md:h-12 md:text-[10px]"
        >
          Connect
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
