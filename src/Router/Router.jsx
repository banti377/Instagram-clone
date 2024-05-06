import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Pages/Login/Login";
import Profile from "../Components/Pages/Profile/Profile";
import Signup from "../Components/Pages/Signup/Signup";
import Home from "../Components/Pages/Home/Home";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
