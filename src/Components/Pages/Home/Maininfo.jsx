import React from "react";
import CardCom from "./CardCom";
import "./Home.css"


export default function Maininfo() {
  return (
    <div className="maininfo-container">
      <div className="post-container">
        <CardCom />
        <CardCom />
      </div>
    </div>
  );
}
