import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../Ui/Pages/Login/Login";
import Signup from "../Ui/Pages/Signup/Signup";
import Home from "../Ui/Pages/Home/Home";
import Profile from "../Ui/Pages/Profile/Profile";
import Search from "../Ui/Pages/Search/Search";
import Explore from "../Ui/Pages/Explore/Explore";
import Reels from "../Ui/Pages/Reels/Reels";
import Notifications from "../Ui/Pages/Notifications/Notifications";
import Messages from "../Ui/Pages/Messages/Messages";
import Create from "../Ui/Pages/Create/Create";
import SideMenu from "../Ui/Components/SideMenu/SideMenu";

export default function Router() {
  const location = useLocation();
  const { pathname } = location;

  // Function to check if the current route is login or signup
  const isLoginOrSignup = pathname === "/" || pathname === "/signup";

  return (
    <>
      {!isLoginOrSignup && <SideMenu />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
  );
}
