import React from "react";
import CardCom from "./CardCom";
import Request from "./Request";
import "./Home.css";
import Story from "./Story";
import Option from "./Option";

export default function Maininfo({ darkMode, toggleDarkMode }) {
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="maininfo-request-container">
        <Option darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="maininfo-container">
          <Story darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="post-container">
            <CardCom darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <CardCom />
          </div>
        </div>
        <Request darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
