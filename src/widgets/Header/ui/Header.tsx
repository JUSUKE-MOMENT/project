import { ThemeSwitcher } from "../../../features";

import { KeyRound } from "lucide-react";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header
      className={`${styles.header} w-full sticky top-0 left-0 flex justify-center items-center px-4 z-50`}
    >
      <div className="flex w-4/5 h-full rounded-[10px] items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <KeyRound size={32} />

          <div className="flex flex-col">
            <span className="text-2xl font-bold">KeyForge</span>
            <span className="hidden text-sm text-[var(--text-secondary)] sm:block">
              Free Password Generator
            </span>
          </div>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
