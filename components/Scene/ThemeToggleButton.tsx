  "use client";

  import { useState, useEffect } from "react";
  import { Button } from "@/components/ui/button"
  import { MdDarkMode } from "react-icons/md";
  import { MdLightMode } from "react-icons/md";

  export default function ThemeToggle() {
    const [theme, setTheme] = useState<string | undefined>(undefined);

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }, []);

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
      <Button
        onClick={toggleTheme}
      >
        {theme === "light" ? <MdDarkMode/> : <MdLightMode/>}
      </Button>
    );
  }
