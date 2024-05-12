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
import "./SideMenu.css";

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
    <div className="sidemenu-container">
      <div className="sidemenu-header">
        <h3>instagram</h3>
      </div>
      <div className="sidemenu-links">
        {/* ----- Home ----- */}
        <Link to="/home">
          <span>
            <Home />
            <h5>home</h5>
          </span>
        </Link>

        {/* ----- Search ----- */}
        <Link to="/search">
          <span>
            <Search />
            <h5>search</h5>
          </span>
        </Link>

        {/* ----- Explore ----- */}
        <Link to="/explore">
          <span>
            <Compass />
            <h5>explore</h5>
          </span>
        </Link>

        {/* ----- Reels ----- */}
        <Link to="/reels">
          <span>
            <MonitorPlay />
            <h5>reels</h5>
          </span>
        </Link>

        {/* ----- Messages ----- */}
        <Link to="/messages">
          <span>
            <MessageCircleCode />
            <h5>messages</h5>
          </span>
        </Link>

        {/* ----- Notifications ----- */}
        <Link to="/notifications">
          <span>
            <Heart />
            <h5>notifications</h5>
          </span>
        </Link>

        {/* ----- Create ----- */}
        <Link to="/create">
          <span>
            <SquarePlus />
            <h5>create</h5>
          </span>
        </Link>

        {/* ----- Profile ----- */}
        <Link to="/profile">
          <span>
            <img
              src="Images/user.jpg"
              alt="Profile"
              className="profile-image"
            />
            <h5>profile</h5>
          </span>
        </Link>
      </div>

      <div className="sidemenu-actions">
        <span>
          <FaThreads />
          <h5>threads</h5>
        </span>

        <span onClick={toggleMenu}>
          <MdOutlineDensityMedium />
          <h5>more</h5>
        </span>
        {showMenu && (
          <div className="popup-menu">
            <span onClick={logout}>
              <h5>logout</h5>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
