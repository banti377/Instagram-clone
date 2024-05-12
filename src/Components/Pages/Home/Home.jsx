import React from "react";
import Maininfo from "./Maininfo";

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div>
        <div>
          <Maininfo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
}
