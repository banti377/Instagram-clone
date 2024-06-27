import React, { useState } from "react";
import {
  Compass,
  Heart,
  Home,
  MessageCircleCode,
  MonitorPlay,
  Search,
  SquarePlus,
} from "lucide-react";
import { FaThreads } from "react-icons/fa6";
import { MdOutlineDensityMedium } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-black p-2.5 px-3.5 pb-5 flex flex-col border-r-2 border-gray-600 w-1/5 fixed top-0 left-0 bottom-0 max-h-screen">
      <div className="pt-6 px-3.5 pb-4 text-2xl font-bold font-dancing-script">
        <h3>instagram</h3>
      </div>
      <div className="flex flex-col">
        {/* ----- Home ----- */}
        <Link to="/home" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <Home className="w-7 h-7" />
          <h5 className="text-base font-normal">home</h5>
        </Link>

        {/* ----- Search ----- */}
        <Link to="/search" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <Search className="w-7 h-7" />
          <h5 className="text-base font-normal">search</h5>
        </Link>

        {/* ----- Explore ----- */}
        <Link to="/explore" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <Compass className="w-7 h-7" />
          <h5 className="text-base font-normal">explore</h5>
        </Link>

        {/* ----- Reels ----- */}
        <Link to="/reels" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <MonitorPlay className="w-7 h-7" />
          <h5 className="text-base font-normal">reels</h5>
        </Link>

        {/* ----- Messages ----- */}
        <Link to="/messages" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <MessageCircleCode className="w-7 h-7" />
          <h5 className="text-base font-normal">messages</h5>
        </Link>

        {/* ----- Notifications ----- */}
        <Link to="/notifications" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <Heart className="w-7 h-7" />
          <h5 className="text-base font-normal">notifications</h5>
        </Link>

        {/* ----- Create ----- */}
        <Link to="/create" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <SquarePlus className="w-7 h-7" />
          <h5 className="text-base font-normal">create</h5>
        </Link>

        {/* ----- Profile ----- */}
        <Link to="/profile" className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <img src="Images/user.jpg" alt="Profile" className="w-7 h-7 rounded-full object-cover border-2 border-black" />
          <h5 className="text-base font-normal">profile</h5>
        </Link>
      </div>

      <div className="mt-auto flex flex-col">
        <span className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <FaThreads className="w-7 h-7" />
          <h5 className="text-base font-normal">threads</h5>
        </span>

        <span onClick={toggleMenu} className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
          <MdOutlineDensityMedium className="w-7 h-7" />
          <h5 className="text-base font-normal">more</h5>
        </span>
        {showMenu && (
          <div className="absolute bottom-16 bg-white dark:bg-gray-800 p-2.5 rounded-lg shadow-lg">
            <span onClick={logout} className="block cursor-pointer text-center p-2.5 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg">
              <h5 className="text-base font-normal">logout</h5>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}



