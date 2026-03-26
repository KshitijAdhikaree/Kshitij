import React from "react";
import ThemeHydrator from "./ThemeHydrator";

const Layout = ({ children, className = "" }) => {
  return (
    <main
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      <ThemeHydrator />
      {children}
    </main>
  );
};

export default Layout;
