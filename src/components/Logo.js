"use client";

import Link from "next/link";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Logo = () => {
  const [mode] = useThemeSwitcher();

  // console.log("LOGO RENDER: mode =", mode);

  return (
    <Link href="/">
      <img
        src={mode === "light" ? "/images/logo/1.svg" : "/images/logo/2.svg"}
        alt="Logo"
        className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12"
      />
    </Link>
  );
};

export default Logo;
