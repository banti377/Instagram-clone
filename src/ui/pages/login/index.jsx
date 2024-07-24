import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [show1, setshow1] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (show1 < 4) {
        setshow1(show1 + 1);
      } else {
        setshow1(1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [show1]);

  const email = useRef();
  const password = useRef();

  const HandlerLoginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/user/signin", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log("Login success:", response.data);

      localStorage.setItem("userData", JSON.stringify(response.data.data));

      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex w-full h-[70%] items-center">
        <div className="flex-1 relative w-full h-[600px] bg-[url('Images/loginPage.png')] min-w-[460px] bg-no-repeat bg-[right_2px] hidden md:flex">
          <div className="flex">
            <img
              src="Images/loginpage1.png"
              className={`${show1 === 1 ? "opacity-100 z-2" : "opacity-0"
                } absolute top-7 right-[3.7rem] transition-opacity duration-1500 ease-in-out`}
              alt=""
            />
            <img
              src="Images/loginpage2.png"
              className={`${show1 === 2 ? "opacity-100 z-2" : "opacity-0"
                } absolute top-7 right-[3.7rem] transition-opacity duration-1500 ease-in-out`}
              alt=""
            />
            <img
              src="Images/loginpage3.png"
              className={`${show1 === 3 ? "opacity-100 z-2" : "opacity-0"
                } absolute top-7 right-[3.7rem] transition-opacity duration-1500 ease-in-out`}
              alt=""
            />
            <img
              src="Images/loginpage4.png"
              className={`${show1 === 4 ? "opacity-100 z-2" : "opacity-0"
                } absolute top-7 right-[3.7rem] transition-opacity duration-1500 ease-in-out`}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-[360px] border border-gray-300 rounded-md p-4">
            <div className="flex flex-col items-center">
              <div className="flex justify-center w-full my-9">
                <span className="font-dancing-script text-[60px] font-bold">
                  instagram
                </span>
              </div>
              <div className="flex justify-center w-full">
                <form
                  className="flex flex-col items-center w-[70%] pb-5"
                  onSubmit={HandlerLoginForm}
                >
                  <input
                    placeholder="Email"
                    type="text"
                    required
                    className="h-[30px] w-full rounded-md border border-gray-400 text-[14px] mb-2 px-1.5 bg-transparent dark:text-white"
                    ref={email}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    minLength="6"
                    className="h-[30px] w-full rounded-md border border-gray-400 text-[14px] mb-2 px-1.5 bg-transparent dark:text-white"
                    ref={password}
                  />
                  <button
                    className="mt-2 w-full h-[25px] bg-[#0095f6] text-white rounded-md border-none text-[15px] cursor-pointer"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <center>
                <span>Don't have an account?</span>
                <span
                  className="text-[#0095f6] font-medium cursor-pointer"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign up
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
