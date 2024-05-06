import React from "react";
import { FaCircle } from "react-icons/fa6";
import "./Home.css"


export default function Requset() {
  return (
    <div className="request-container">
      {/* ================(1)Account Details================ */}
      <div className="flex justify-between px-3 py-5 max-w-lg  ">
        <div className="flex  justify-between items-center w-[100%] ">
          <span className="flex items-center gap-2">
            <img
              src="../../../../../public/user.jpg"
              className="w-12 h-12 border-solid border-2 border-indigo-600 rounded-full p-0.5 "
            />
            <span className="">
              <h5 className="font-semibold text-xs">Noteworthy technology</h5>
              <h5 className="font-semibold text-xs text-gray-400">
                Noteworthy_tech
              </h5>
            </span>
          </span>

          <span>
            <p className="text-sky-500 text-xs font-bold">Switch</p>
          </span>
        </div>
      </div>

      {/* ================(2)OtherAccount Details================ */}
      <div className="flex justify-center  flex-col">
        <span className="flex justify-between px-3 py-0 item-center">
          <h5 className="font-semibold text-xm text-gray-500">
            Suggested for you
          </h5>
          <h5 className="text-xs font-semibold">See All</h5>
        </span>

        <div className="flex justify-between px-3 py-3 max-w-lg  ">
          <div className="flex  justify-between items-center w-[100%] ">
            <span className="flex items-center gap-2">
              <img
                src="../../../../../public/user.jpg"
                className="w-12 h-12 border-solid  rounded-full p-0.5 "
              />
              <span className="">
                <h5 className="font-semibold text-xs">Noteworthy technology</h5>
                <h5 className="font-semibold text-xs text-gray-400">
                  Noteworthy_tech
                </h5>
              </span>
            </span>

            <span>
              <p className="text-sky-500 text-xs font-bold">Follow</p>
            </span>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 max-w-lg  ">
          <div className="flex  justify-between items-center w-[100%] ">
            <span className="flex items-center gap-2">
              <img
                src="../../../../../public/user.jpg"
                className="w-12 h-12 border-solid  rounded-full p-0.5 "
              />
              <span className="">
                <h5 className="font-semibold text-xs">Noteworthy technology</h5>
                <h5 className="font-semibold text-xs text-gray-400">
                  Noteworthy_tech
                </h5>
              </span>
            </span>

            <span>
              <p className="text-sky-500 text-xs font-bold">Follow</p>
            </span>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 max-w-lg  ">
          <div className="flex  justify-between items-center w-[100%] ">
            <span className="flex items-center gap-2">
              <img
                src="../../../../../public/user.jpg"
                className="w-12 h-12 border-solid  rounded-full p-0.5 "
              />
              <span className="">
                <h5 className="font-semibold text-xs">Noteworthy technology</h5>
                <h5 className="font-semibold text-xs text-gray-400">
                  Noteworthy_tech
                </h5>
              </span>
            </span>

            <span>
              <p className="text-sky-500 text-xs font-bold">Follow</p>
            </span>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 max-w-lg  ">
          <div className="flex  justify-between items-center w-[100%] ">
            <span className="flex items-center gap-2">
              <img
                src="../../../../../public/user.jpg"
                className="w-12 h-12 border-solid  rounded-full p-0.5 "
              />
              <span className="">
                <h5 className="font-semibold text-xs">Noteworthy technology</h5>
                <h5 className="font-semibold text-xs text-gray-400">
                  Noteworthy_tech
                </h5>
              </span>
            </span>

            <span>
              <p className="text-sky-500 text-xs font-bold">Follow</p>
            </span>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 max-w-lg  ">
          <div className="flex  justify-between items-center w-[100%] ">
            <span className="flex items-center gap-2">
              <img
                src="../../../../../public/user.jpg"
                className="w-12 h-12 border-solid  rounded-full p-0.5 "
              />
              <span className="">
                <h5 className="font-semibold text-xs">Noteworthy technology</h5>
                <h5 className="font-semibold text-xs text-gray-400">
                  Noteworthy_tech
                </h5>
              </span>
            </span>

            <span>
              <p className="text-sky-500 text-xs font-bold">Follow</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
