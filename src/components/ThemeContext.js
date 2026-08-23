import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [initialized, setInitialized] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = window.localStorage.getItem("theme");
    const next = stored === "dark" || stored === "light"
      ? stored
      : (mediaQuery.matches ? "dark" : "light");

    // Read the saved choice before enabling persistence, so the default light
    // state cannot overwrite a user's saved dark preference during hydration.
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    initializedRef.current = true;
    setInitialized(true);

    const handleChange = (event) => {
      if (!window.localStorage.getItem("theme")) {
        const systemMode = event.matches ? "dark" : "light";
        setMode(systemMode);
        document.documentElement.classList.toggle("dark", systemMode === "dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!initialized || !initializedRef.current) return;

    document.documentElement.classList.toggle("dark", mode === "dark");
    window.localStorage.setItem("theme", mode);
  }, [mode, initialized]);

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
