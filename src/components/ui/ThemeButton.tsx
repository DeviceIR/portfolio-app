import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeButton({ className = "rounded-full p-1.5 m-4" }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  const iconStyle = "w-8 h-8 text-[var(--color-bg)]";

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    [darkMode]
  );
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`${className} bg-[var(--color-primary)]  `}
    >
      {darkMode ? (
        <SunIcon className={iconStyle} />
      ) : (
        <MoonIcon className={iconStyle} />
      )}
    </button>
  );
}

export default ThemeButton;
