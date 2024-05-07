import axios from "axios";
import React, { useEffect } from "react";
import Option from "../Home/Option";


export default function Profile() {
  const userId = "123";

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:8000/followers/allfollowers/${userId}",
  //   })
  //     .then((res) => {
  //       console.log("followers Res=>", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("followers Error=>", err);
  //     });
  // }, [userId]);

  return (
    <div class="profile">
      <Option />
      <div class="profile-header">
    <img src="user.jpg" alt="Profile Picture" />
    <div class="profile-info">
      <div class="profile-actions">
        <h1>Username</h1>
        <button>Edit Profile</button>
        <button>View Archive</button>
        <button class="settings-button">&#9881;</button>
      </div>
      <div class="follow-stats">
        <span>Posts: 100</span>
        <span>Followers: 500</span>
        <span>Following: 200</span>
      </div>
      <p class="bio">Bio</p>
    </div>
  </div>
  <div class="tab-list">
    <div class="tab"> 
      <span class="icon">&#128247;</span> 
      <span>Posts</span>
    </div>
    <div class="tab"> 
      <span class="icon">&#128465;</span>
      <span>Saved</span>
    </div>
    <div class="tab"> 
      <span class="icon">&#64;</span>
      <span>Tagged</span>
    </div>
  </div>
      <div class="posts-grid">
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div class="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
      </div>
    </div>
  );
}

