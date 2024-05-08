import React, { useEffect, useState } from "react";
import Option from "../Home/Option";

export default function Profile() {
  const [followingCount, setFollowingCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log("userData:", userData);

      const { data } = userData;
      console.log("data:", data);

      const { followers, following, postCount } = data;
      console.log("followers:", followers);
      console.log("following:", following);

      if (followers !== undefined) {
        setFollowersCount(followers);
      }
      if (following !== undefined) {
        setFollowingCount(following);
      }
      if (postCount !== undefined) {
        setPostCount(postCount);
      }
    } else {
      console.log("userData is not available in localStorage");
    }
  }, []);

  return (
    <div className="profile">
      <Option />
      <div className="profile-header">
        <img src="user.jpg" alt="Profile Picture" />
        <div className="profile-info">
          <div className="profile-actions">
            <h1>Username</h1>
            <button>Edit Profile</button>
            <button>View Archive</button>
            <button className="settings-button">&#9881;</button>
          </div>
          <div className="follow-stats">
            <span>Posts: {postCount}</span>
            <span>Followers: {followersCount}</span>
            <span>Following: {followingCount}</span>
          </div>
          <p className="bio">Bio</p>
        </div>
      </div>
      <div className="tab-list">
        <div className="tab">
          <span className="icon">&#128247;</span>
          <span>Posts</span>
        </div>
        <div className="tab">
          <span className="icon">&#128465;</span>
          <span>Saved</span>
        </div>
        <div className="tab">
          <span className="icon">&#64;</span>
          <span>Tagged</span>
        </div>
      </div>
      <div className="posts-grid">
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="post.jpg" alt="Post Image" />
        </div>
      </div>
    </div>
  );
}
