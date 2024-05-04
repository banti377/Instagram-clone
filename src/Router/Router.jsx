import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../Ui/pages/Profile/Profile'
import Login from '../Ui/pages/Login/Login'
import Signup from '../Ui/pages/Signup/Signup'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
