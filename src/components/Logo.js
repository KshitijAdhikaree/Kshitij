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
        className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
        style={{ aspectRatio: '1/1' }}
      />
    </Link>
  );
};

export default Logo;
