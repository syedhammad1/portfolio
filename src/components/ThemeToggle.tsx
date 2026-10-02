"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark-mode"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark-mode", next);
    try {
      localStorage.setItem("color-mode", next ? "dark" : "light");
    } catch {}
  };

  const Icon = isDark ? FaMoon : FaSun;
  return (
    <span className="cursor-pointer ml-10 dark:text-kjColorLight inline-block align-[-0.15em]">
      <Icon className="text-lg ml-1" onClick={toggle} aria-label="Toggle dark mode" />
    </span>
  );
}
