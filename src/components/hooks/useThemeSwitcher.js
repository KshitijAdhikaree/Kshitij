import { useTheme } from "../ThemeContext";

const useThemeSwitcher = () => {
  const { mode, setMode } = useTheme();
  return [mode, setMode];
};

export default useThemeSwitcher;
