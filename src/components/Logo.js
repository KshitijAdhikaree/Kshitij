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
        width={60}
        height={60}
      />
    </Link>
  );
};

export default Logo;
