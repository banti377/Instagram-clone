import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      const response = await axios.post("http://localhost:8000/user/signup", {
        email,
        password,
      });
      console.log("Signup response:", response.data);

      navigate("/");
    } catch (error) {
      console.error("Error in registerHandler:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-md w-full py-8 px-6 bg-white dark:bg-black shadow-md sm:rounded-lg border border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Instagram
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={registerHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none bg-transparent dark:text-white"
            placeholder="Email address"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
            className="block w-full px-3 py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none bg-transparent dark:text-white"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            minLength="6"
            className="block w-full px-3 py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none bg-transparent dark:text-white"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-blue-500 hover:text-blue-600"
              onClick={() => navigate("/")}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
