import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../ui/pages/login";
import Home from "../ui/pages/home";
import Signup from "../ui/pages/signup";
import Search from "../ui/pages/search";
import Explore from "../ui/pages/explore";
import Reels from "../ui/pages/reels";
import Messages from "../ui/pages/messages";
import Notifications from "../ui/pages/notifications";
import Create from "../ui/pages/create";
import Profile from "../ui/pages/profile";
import SideMenu from "../ui/components/sideMenu";

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
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
