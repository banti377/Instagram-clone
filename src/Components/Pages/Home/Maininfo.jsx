import React from "react";
import CardCom from "./CardCom";
import Request from "./Request"; // Import the Request component
import "./Home.css";
import Story from "./Story";

export default function Maininfo() {
  return (
    <div className="maininfo-request-container">
      {/* New container for Maininfo and Request */}
      <div className="maininfo-container">
        <Story />
        <div className="post-container">
          <CardCom />
          <CardCom />
        </div>
      </div>
      <Request /> {/* Render the Request component */}
    </div>
  );
}
