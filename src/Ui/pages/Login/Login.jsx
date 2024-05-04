// import React, { useState } from 'react';
// import "./Login.css"
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate hook

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         // Logging the email and password before making the API request
//         console.log('Email:', email);
//         console.log('Password:', password);
//         try {
//             const response = await axios.post('http://localhost:8000/user/signIn', {
//                 email,
//                 password
//             });
//             console.log('Login success:', response.data);
//             // Redirect to profile page after successful login
//             navigate('/profile');
//         } catch (error) {
//             console.error('Login error:', error);
//         }
//     };

//     return (
//         <div className='container'>
//             <h2>V-Gram</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <Link to="/Signup">Create Account</Link>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React from "react";
import { Controller, useForm } from "react-hook-form";

import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["token"]);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginHandler = async (cred) => {
        try {
            const response = await axios.post('http://localhost:8000/user/signIn', cred);

            if (response.data.error) {
                // Handle error response
                toast.error("Something went wrong");
            } else {
                // Handle success response
                setCookie("token", response.data.token);
                setCookie("user", response.data.data);
            navigate('/profile');

            }
        } catch (error) {
            // Handle network error or other exceptions
            console.error("API error:", error);
            toast.error("Something went wrong");
        }
    };


    return (
        <div className="m-8 flex justify-center items-center ">
            <div className="border-[1px] border-gray-300 w-[50%] m-8 py-6">
                <p className="text-2xl px-8 ">Login</p>
                <p className="text-gray-400 px-8 ">
                    If you have Not an account with us, please Register.
                </p>
                <form
                    onSubmit={handleSubmit(loginHandler)}
                    className="flex justify-start px-8 flex-col gap-4 py-5 bg"
                >
                    <span className="flex items-center justify-between">
                        <label>E-MAIL *</label>
                        <p className="text-gray-400">* Required Fields</p>
                    </span>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextInput type="text" {...field} />}
                    />

                    <label>PASSWORD *</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextInput type="password" {...field} />}
                    />

                    <span className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500"
                        // onClick={() => navigate("/")}

                        >
                            LOGIN
                        </button>

                        <p className="text-[#d11e33cb]">Lost your password?</p>
                    </span>
                </form>

                <span className="flex gap-2 px-8">
                    <p className="text-gray-400">You Have Not a Account? </p>
                    <p
                        className="text-[#D11E33] cursor-pointer hover:border-b-2 border-[#D11E33]"
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </p>
                </span>
            </div>
        </div>
    );
}