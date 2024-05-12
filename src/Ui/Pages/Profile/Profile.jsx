import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [followingCount, setFollowingCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);

      const { data } = userData;

      const { followers, following, postCount } = data;

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
      <div className="profile-header">
        <img src="Images/user.jpg" alt="Profile Picture" />
        <div className="profile-info">
          <div className="profile-actions">
            <h1>Username</h1>
            <button>Edit Profile</button>
            <button>View Archive</button>
            <Link>
              <span>
                <Settings />
              </span>
            </Link>
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
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
        <div className="post">
          <img src="Images/post.jpg" alt="Post Image" />
        </div>
      </div>
    </div>
  );
}
