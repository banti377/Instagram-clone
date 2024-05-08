import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
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

      localStorage.setItem("userData", JSON.stringify(response.data)) 

      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="LoginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="frontImgWrapper">
            <img
              src={"loginpage1.png"}
              className={show1 === 1 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={"loginpage2.png"}
              className={show1 === 2 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={"loginpage3.png"}
              className={show1 === 3 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={"loginpage4.png"}
              className={show1 === 4 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
          </div>
        </div>
        <div className="loginRight">
          <div className="loginRightWrapper">
            <div className="loginRightTop">
              <div className="loginRightTopTop">
                <span className="loginRightTopLogo">instagram</span>
              </div>
              <div className="loginRightTopForm">
                <form className="loginBox" onSubmit={HandlerLoginForm}>
                  <input
                    placeholder="email"
                    type="text"
                    required
                    className="loginInput"
                    ref={email}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    minLength="6"
                    className="loginInput"
                    ref={password}
                  />
                  <button className="loginButton" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="loginRightBottom">
              <center>
                <span></span>
              </center>
              <center>
                <span>Don't have an account?</span>
                <span
                  className="SignUptext"
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

export default Login;
