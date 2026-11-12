import { useCallback, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const x = event.clientX;
      const y = event.clientY;

      const nextTheme: Theme = theme === "dark" ? "light" : "dark";

      document.documentElement.style.setProperty("--theme-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-y", `${y}px`);

      document.startViewTransition(() => {
        document.documentElement.dataset.theme = nextTheme;
        setTheme(nextTheme);
      });
    },
    [theme],
  );

  return {
    theme,
    toggleTheme,
  };
};
