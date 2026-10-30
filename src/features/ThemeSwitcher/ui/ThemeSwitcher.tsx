import { useTheme } from "../model/useTheme";

import { Moon, Sun } from "lucide-react";

import "./ThemeSwitcher.scss";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="cursor-pointer"
      onClick={toggleTheme}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      {isDark ? <Sun size={34} /> : <Moon size={34} />}
    </button>
  );
};
