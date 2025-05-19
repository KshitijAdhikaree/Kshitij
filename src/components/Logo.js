import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="w-16 h-16 my-2 flex items-center justify-center rounded-2xl bg-gradient-logo bg-400 animate-bganimation transition-transform duration-300 hover:scale-110 shadow-dark dark:shadow-light">
      <Link
        href="/"
        className="text-light dark:text-dark text-3xl font-bold dark:hover:text-light hover:text-dark"
      >
        KA
      </Link>
    </div>
  );
};

export default Logo;
