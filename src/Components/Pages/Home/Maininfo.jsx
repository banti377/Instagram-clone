import React from "react";
import CardCom from "./CardCom";
import Request from "./Request";
import "./Home.css";
import Story from "./Story";
import Option from "./Option";

export default function Maininfo() {
  return (
    <div className="maininfo-request-container">
      <Option/>
      <div className="maininfo-container">
        <Story />
        <div className="post-container">
          <CardCom />
          <CardCom />
        </div>
      </div>
      <Request />
    </div>
  );
}
