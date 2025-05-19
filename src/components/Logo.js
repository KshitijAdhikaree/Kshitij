import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div
      className=" w-16 h-16 flex items-center justify-center rounded-2xl bg-[length:200%_100%] animate-gradient-bg transition-transform duration-100 hover:scale-105 hover:shadow-lg
      "
    >
      <Link
        href="/"
        className="text-3xl font-bold animate-text-color transition-colors duration-300 hover:text-light dark:hover:text-dark"
      >
        KA
      </Link>
    </div>
  );
};

export default Logo;
