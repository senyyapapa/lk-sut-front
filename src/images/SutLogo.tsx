"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SutLogoProps {
    height: number, 
    width: number,
}

const SutLogo = ({height, width} : SutLogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update the state based on the class
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark-theme');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();

    // Set up a MutationObserver to watch for class changes on the <html> element
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkTheme();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="themed-logo-container">
      <Image
        src={isDarkMode ? '/sut_logo_white.svg' : '/sut_logo_black.svg'}
        alt="SUT Logo"
        width={width} 
        height={height} 
      />
    </div>
  );
};

export default SutLogo;
