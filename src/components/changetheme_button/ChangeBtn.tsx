"use client";
import React, { useState, useEffect } from "react";
import "./ChangeBtn.scss";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

const ChangeBtn = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches; 
    
    // const initialThemeIsDark = savedTheme ? savedTheme === "dark" : prefersDark;

    // setIsDark(initialThemeIsDark);
    setIsDark(prefersDark);


    if (prefersDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []); 

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark); 

    if (newIsDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
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
