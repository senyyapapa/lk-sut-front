import React from 'react';

const blockingScript = `
  (function() {
    try {
      // Check for a saved theme in localStorage
      const savedTheme = localStorage.getItem('theme');
      // Check for the user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Determine the theme to apply
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        // Apply the dark theme class to the root <html> element
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    } catch (e) {
      // Ignore errors, e.g., if localStorage is disabled
    }
  })();
`;

const ThemeScript = () => {
  return (
    <script dangerouslySetInnerHTML={{ __html: blockingScript }} />
  );
};

export default ThemeScript;
