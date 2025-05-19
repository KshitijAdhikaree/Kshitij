import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div
      className="
        w-16 h-16 flex items-center justify-center rounded-2xl border-2 bg-[length:200%_100%] animate-gradient-bg"
    >
      <Link
        href="/"
        className="text-3xl font-bold animate-text-color transition-transform duration-100"
      >
        KA
      </Link>
    </div>
  );
};

export default Logo;
