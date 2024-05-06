import React from 'react'
import { Card } from "flowbite-react";
import { FaCircle, FaRegHeart } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { BsCollectionFill } from "react-icons/bs";
import axios from "axios";
import "./Home.css"


export default function CardCom() {
  axios({
    method: "get",
    url: " http://localhost:8000/post/getAll",
  })
    .then((res) => {
      console.log("Product Res=>", res.data);
    })
    .catch((err) => {
      console.log("Product Error=>", err);
    });


  return (
    <div className="card-container">
      <Card className="max-w-lg">
        <div className="flex justify-between items-center gap-1 ">
          <span className="flex items-center gap-2">
            <img
              src="../../../../../public/post.jpg"
              className="w-10 rounded-fullborder-solid border-2 border-indigo-600 rounded-full p-0.5 "
            />
            <span className="flex gap-2">
              <h5 className="font-semibold">Noteworthy technology</h5>
              <h6 className="text-gray-400 items-center flex">
                <FaCircle className="" style={{ fontSize: "4px" }} /> 1d
              </h6>
            </span>
          </span>

          <span>
            <IoIosMore />
          </span>
        </div>
        <img src="../../../../../public/post.jpg" />
        <div className="flex justify-between">
          <span className="flex text-2xl gap-3">
            <FaRegHeart />
            <FiMessageCircle />
            <FiSend />
          </span>
          <span className="text-2xl font-bold">
            <BsCollectionFill />
          </span>
        </div>
        <p className="font-medium">9 Likes</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are  the biggest enterprise technology acquisitions of 2021... more
        </p>
        <p className="text-gray-400 text-xm">Add Comment...</p>
      </Card>

    </div>
  )
}
