import React, { useState, useRef, useEffect } from "react";
import {
  Compass,
  Heart,
  Home,
  MessageCircleCode,
  MonitorPlay,
  Search,
  SquarePlus,
} from "lucide-react";
import { MdOutlineDensityMedium } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaThreads } from "react-icons/fa6";
import CreateModal from "../../pages/create";
import { Instagram } from "react-feather";

export default function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Collapse sidebar for specific routes
    if (["/messages", "/search", "/notifications"].includes(location.pathname)) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const logout = () => {
    navigate("/");
  };

  const handleClick = (path) => {
    if (["/messages", "/notifications", "/search"].includes(path)) {
      setIsCollapsed(true);
      setTimeout(() => {
        navigate(path);
      }, 300); // Delay navigation to allow collapse animation
    } else {
      navigate(path);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFilesChange = (event) => {
    const files = event.target.files;
    console.log('Selected files:', files);
    // Add your file handling logic here
  };

  return (
    <div
      className={`bg-white dark:bg-black p-2.5 px-3.5 pb-5 flex flex-col border-r-2 border-gray-600 fixed top-0 left-0 bottom-0 max-h-screen transition-transform duration-500 ease-in-out ${isCollapsed ? "w-20" : "w-80"
        }`}
    >
      {/* Instagram Name */}
      <div className="pb-4 text-2xl font-bold font-sans flex items-center">
        <Link
          to="/home"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1"
          onClick={() => handleClick("/home")}
        >
          {!isCollapsed ? (
            <span>Instagram</span>
          ) : (
            <Instagram className=" w-7 h-10" />
          )}
        </Link>
      </div>

      <div className="flex flex-col flex-grow">
        {/* ----- Home ----- */}
        <Link
          to="/home"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/home")}
        >
          <Home className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("home")}
            </h5>
          )}
        </Link>

        {/* ----- Search ----- */}
        <Link
          to="/search"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out duration-1000 p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/search")}
        >
          <Search className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("search")}
            </h5>
          )}
        </Link>

        {/* ----- Explore ----- */}
        <Link
          to="/explore"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/explore")}
        >
          <Compass className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("explore")}
            </h5>
          )}
        </Link>

        {/* ----- Reels ----- */}
        <Link
          to="/reels"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/reels")}
        >
          <MonitorPlay className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("reels")}
            </h5>
          )}
        </Link>

        {/* ----- Messages ----- */}
        <Link
          to="/messages"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/messages")}
        >
          <MessageCircleCode className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("messages")}
            </h5>
          )}
        </Link>

        {/* ----- Notifications ----- */}
        <Link
          to="/notifications"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/notifications")}
        >
          <Heart className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("notifications")}
            </h5>
          )}
        </Link>

        {/* ----- Create ----- */}
        <span
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={openCreateModal}
        >
          <SquarePlus className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("create")}
            </h5>
          )}
        </span>

        {/* ----- Profile ----- */}
        <Link
          to="/profile"
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/profile")}
        >
          <img
            src="Images/user.jpg"
            alt="Profile"
            className="w-7 h-7 rounded-full object-cover border-2 border-black"
          />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("profile")}
            </h5>
          )}
        </Link>
      </div>

      <div className="mt-auto flex flex-col">
        {/* ----- Threads ----- */}
        <span
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
          onClick={() => handleClick("/threads")}
        >
          <FaThreads className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">
              {capitalizeFirstLetter("threads")}
            </h5>
          )}
        </span>

        {/* ----- More (Dropdown) ----- */}
        <span
          onClick={toggleMenu}
          className="flex items-center gap-4 cursor-pointer transition-all ease-in-out p-1.5 my-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
        >
          <MdOutlineDensityMedium className="w-7 h-7" />
          {!isCollapsed && (
            <h5 className="text-base font-normal">{capitalizeFirstLetter("more")}</h5>
          )}
        </span>
        {showMenu && (
          <div className="absolute bottom-16 bg-white dark:bg-gray-800 p-2.5 rounded-lg shadow-lg">
            <span
              onClick={logout}
              className="block cursor-pointer text-center p-2.5 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg"
            >
              <h5 className="text-base font-normal">Logout</h5>
            </span>
          </div>
        )}
      </div>

      {isCreateModalOpen && (
        <CreateModal onClose={closeCreateModal} handleFileSelect={handleFileSelect} handleFilesChange={handleFilesChange} />
      )}
    </div>
  );
}
