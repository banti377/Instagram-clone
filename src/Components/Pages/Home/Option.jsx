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
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";


export default function Option({ darkMode, toggleDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    navigate("/");
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode); // Make sure toggleDarkMode is a function
  };

  return (
    <div className={darkMode ? 'dark-mode option-container' : 'option-container'}>
      <div className="option-container">
        <div className="option-header">
          <h3>instagram</h3>
        </div>
        <div className="option-links">
          {/* ----- Home ----- */}
          <Link to="/home">
            <span>
              <Home />
              <h5 className="capitalize ">home</h5>
            </span>
          </Link>

          {/* ----- Search ----- */}
          <Link to="/search">
            <span>
              <Search />
              <h5 className="capitalize">search</h5>
            </span>
          </Link>

          <span>
            <Compass />
            <h5 className="capitalize">explore</h5>
          </span>

          <span>
            <MonitorPlay />
            <h5 className="capitalize">reels</h5>
          </span>

          <span>
            <MessageCircleCode />
            <h5 className="capitalize">messages</h5>
          </span>

          <span>
            <Heart />
            <h5 className="capitalize">notification</h5>
          </span>

          <span>
            <SquarePlus />
            <h5 className="capitalize">create</h5>
          </span>

          {/* ----- Profile ----- */}
          <Link to="/profile">
            <span>
              <img src="user.jpg" alt="Profile" className="profile-image" />
              <h5 className="capitalize">profile</h5>
            </span>
          </Link>
        </div>

        <div className="option-actions">
          <span>
            <FaThreads />
            <h5 className="capitalize">threads</h5>
          </span>

          <span onClick={toggleMenu}>
            <MdOutlineDensityMedium />
            <h5 className="capitalize">more</h5>
          </span>
          {showMenu && (
            <div className="popup-menu">
              <span onClick={logout}>
                <h5 className="capitalize">logout</h5>
              </span>
              <span className="toggle-dark-mode-button" onClick={handleDarkModeToggle}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
