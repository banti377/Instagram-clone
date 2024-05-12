import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  // const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        
        const response = await axios.post("http://localhost:8000/user/signup", { email, password });
        console.log("Signup response:", response.data);

        navigate("/");
    } catch (error) {
        console.error("Error in registerHandler:", error);
    }
};


  return (
    <div className="SignupContainer">
      <div className="signupWrapper">
        <div className="signupRight">
          <div className="signupRightTop">
            <div className="signupRightTopTop">
              <span className="signupRightTopLogo">instagram</span>
            </div>
            <div className="signupRightTopForm">
              <form action="" className="signupBox" onSubmit={registerHandler}>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                  type="email"
                  required
                  className="signupInput"
                />
                {/* <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Username"
                  type="text"
                  required
                  className="signupInput"
                /> */}
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  type="password"
                  required
                  minLength="6"
                  className="signupInput"
                />
                <button className="signupButton">Sign Up</button>
              </form>
            </div>
          </div>
          <div className="signupRightBottom">
            <center>
              <span>have an account? </span>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span
                  className="SignUptext"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Log in
                </span>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
