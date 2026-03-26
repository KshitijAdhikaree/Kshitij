"use client";

import Link from "next/link";
import Image from "next/image";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Logo = () => {
  const [mode] = useThemeSwitcher();


  return (
    <Link href="/">
      <Image
        src={mode === "light" ? "/images/logo/1.svg" : "/images/logo/2.svg"}
        width={50}
        height={50}
        alt="Logo"
        className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12"
      />
    </Link>
  );
};

export default Logo;
