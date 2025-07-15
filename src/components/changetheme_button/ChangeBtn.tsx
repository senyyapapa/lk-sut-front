"use client";
import React, { useState, useEffect, useContext } from "react";
import "./ChangeBtn.scss";
import Sun from "../../images/ThemeButton/Sun";
import Moon from "../../images/ThemeButton/Moon";

const ChangeBtn = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const isActuallyDark = document.documentElement.classList.contains('dark-theme');
    setIsDark(isActuallyDark);
  }, []); 

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
    console.log("тема:", newIsDark ? "тёмная" : "светлая");
  };

  return (
    <div className="theme-switch">
      <input
        type="checkbox"
        id="theme-checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-checkbox">
        <div />
        <span>
          <Sun />
        </span>
        <span>
          <Moon />
        </span>
      </label>
    </div>
  );
};

export default ChangeBtn;
