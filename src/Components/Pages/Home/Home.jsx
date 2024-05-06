import React from "react";
import Option from "./Option";
import Maininfo from "./Maininfo";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between w-100 gap-3">
        <div className="w-[25%]">
          <Option />
        </div>
        <div className="w-[25%]">
          <Maininfo />
        </div>
        {/*
      
       */}
      </div>
    </div>
  );
}
