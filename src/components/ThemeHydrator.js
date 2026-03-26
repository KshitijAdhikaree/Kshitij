"use client";
import { useEffect } from "react";

export default function ThemeHydrator() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored ? stored : system ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return null;
}
