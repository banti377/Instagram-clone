import React from "react";
import { Card } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import "./CardCom.css";

export default function CardCom() {
  axios({
    method: "get",
    url: " http://localhost:8000/post/getAll",
  })
    .then((res) => {})
    .catch((err) => {});

  return (
    <div className="card-request-container">
      <div className="card-container">
        {/*================ Card 1 ================*/}
        <Card className="instagram-card">
          <div className="instagram-header">
            <img src="Images/user.jpg" alt="User" className="user-avatar" />
            <h5 className="username">Username</h5>
            <IoIosMore className="more-icon" />
          </div>
          <img src="Images//post.jpg" alt="Post" className="post-image" />
          <div className="instagram-footer">
            <div className="icons">
              <button className="icon-button">
                <FaRegHeart className="icon" />
              </button>
              <button className="icon-button">
                <FiMessageCircle className="icon" />
              </button>
              <button className="icon-button">
                <FiSend className="icon" />
              </button>
            </div>
            <button className="icon-button">
              <BsBookmark className="icon" />
            </button>
          </div>
          <p className="likes">9 Likes</p>
          <p className="description">
            Here are the biggest enterprise technology acquisitions of 2021...
            more
          </p>
          <p className="add-comment">Add Comment...</p>
        </Card>
        {/*================ Card 2 ================*/}
        <Card className="instagram-card">
          <div className="instagram-header">
            <img src="Images/user.jpg" alt="User" className="user-avatar" />
            <h5 className="username">Username</h5>
            <IoIosMore className="more-icon" />
          </div>
          <img src="Images//post.jpg" alt="Post" className="post-image" />
          <div className="instagram-footer">
            <div className="icons">
              <button className="icon-button">
                <FaRegHeart className="icon" />
              </button>
              <button className="icon-button">
                <FiMessageCircle className="icon" />
              </button>
              <button className="icon-button">
                <FiSend className="icon" />
              </button>
            </div>
            <button className="icon-button">
              <BsBookmark className="icon" />
            </button>
          </div>
          <p className="likes">9 Likes</p>
          <p className="description">
            Here are the biggest enterprise technology acquisitions of 2021...
            more
          </p>
          <p className="add-comment">Add Comment...</p>
        </Card>
      </div>

      <div className="request-container">
        {/* ================(1)Account Details================ */}
        <div className="account-details">
          <div className="suggestion">
            <span className="user-info">
              <img src="Images/user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Switch</a>
            </span>
          </div>
        </div>

        {/* ================(2)OtherAccount Details================ */}
        <div className="other-accounts">
          <span className="section-title">
            <h5>Suggested for you</h5>
            <a href="#">See All</a>
          </span>

          <div className="suggestions">
            {/* Repeat this div block for each suggestion */}
            <div className="suggestion">
              <span className="user-info">
                <img src="Images/user.jpg" alt="User" />
                <div>
                  <h5>Noteworthy technology</h5>
                  <p>Noteworthy_tech</p>
                </div>
              </span>
              <span className="action-links">
                <a href="#">Follow</a>
              </span>
            </div>
            <div className="suggestion">
              <span className="user-info">
                <img src="Images/user.jpg" alt="User" />
                <div>
                  <h5>Noteworthy technology</h5>
                  <p>Noteworthy_tech</p>
                </div>
              </span>
              <span className="action-links">
                <a href="#">Follow</a>
              </span>
            </div>
            <div className="suggestion">
              <span className="user-info">
                <img src="Images/user.jpg" alt="User" />
                <div>
                  <h5>Noteworthy technology</h5>
                  <p>Noteworthy_tech</p>
                </div>
              </span>
              <span className="action-links">
                <a href="#">Follow</a>
              </span>
            </div>
            <div className="suggestion">
              <span className="user-info">
                <img src="Images/user.jpg" alt="User" />
                <div>
                  <h5>Noteworthy technology</h5>
                  <p>Noteworthy_tech</p>
                </div>
              </span>
              <span className="action-links">
                <a href="#">Follow</a>
              </span>
            </div>
            <div className="suggestion">
              <span className="user-info">
                <img src="Images/user.jpg" alt="User" />
                <div>
                  <h5>Noteworthy technology</h5>
                  <p>Noteworthy_tech</p>
                </div>
              </span>
              <span className="action-links">
                <a href="#">Follow</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
