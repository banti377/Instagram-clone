import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Bookmark, Grid3X3, Settings, SquareUser } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [followingCount, setFollowingCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData && userData.data) {
        const { followers, following, postCount, profileImage } = userData.data;

        if (followers !== undefined) {
          setFollowersCount(followers);
        }
        if (following !== undefined) {
          setFollowingCount(following);
        }
        if (postCount !== undefined) {
          setPostCount(postCount);
        }
        if (profileImage !== undefined) {
          setProfileImage(profileImage);
        }
      } else {
        console.log("userData is missing 'data' property");
      }
    } else {
      console.log("userData is not available in localStorage");
    }
  }, []);

  // Function to handle profile image upload
  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);
    try {
      const response = await axios.post("http://localhost:8000/post/uploadImg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        const newProfileImage = response.data.data;

        // Update profileImage in state
        setProfileImage(newProfileImage);

        // Update user data in local storage
        const userDataString = localStorage.getItem("userData");
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          if (userData && userData.data) {
            userData.data.profileImage = newProfileImage;
            localStorage.setItem("userData", JSON.stringify(userData));
          }
        }

        // Update profileImage in database
        const updatedUserData = { profileImage: newProfileImage };
        const userDataResponse = await axios.put("http://localhost:8000/user", updatedUserData);
        console.log("User data updated in the database:", userDataResponse.data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <label htmlFor="profileImageInput">
          <img
            src={profileImage || "Images/user.jpg"}
            alt="Profile Picture"
            className="profile-picture"
          />
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </label>
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
          <span className="icon"><Grid3X3 /></span>
          <span>Posts</span>
        </div>
        <div className="tab">
          <span className="icon"><Bookmark /></span>
          <span>Saved</span>
        </div>
        <div className="tab">
          <span className="icon"><SquareUser /></span>
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
