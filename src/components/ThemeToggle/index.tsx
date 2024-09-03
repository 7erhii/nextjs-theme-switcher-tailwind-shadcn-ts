"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    applyTheme(savedTheme);
  }, []);

  function applyTheme(theme: string) {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    }
    setTheme(theme);
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={() => applyTheme("system")} variant={theme === "system" ? "default" : "outline"}>
        <Monitor className="h-5 w-5" />
      </Button>
      <Button onClick={() => applyTheme("light")} variant={theme === "light" ? "default" : "outline"}>
        <Sun className="h-5 w-5" />
      </Button>
      <Button onClick={() => applyTheme("dark")} variant={theme === "dark" ? "default" : "outline"}>
        <Moon className="h-5 w-5" />
      </Button>
    </div>
  );
}
