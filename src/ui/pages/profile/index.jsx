import React, { useEffect, useState } from "react";
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

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);
    try {
      const response = await axios.post(
        "http://localhost:8000/post/uploadImg",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        const newProfileImage = response.data.data;

        setProfileImage(newProfileImage);

        const userDataString = localStorage.getItem("userData");
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          if (userData && userData.data) {
            userData.data.profileImage = newProfileImage;
            localStorage.setItem("userData", JSON.stringify(userData));
          }
        }

        const updatedUserData = { profileImage: newProfileImage };
        const userDataResponse = await axios.put(
          "http://localhost:8000/user",
          updatedUserData
        );
        console.log(
          "User data updated in the database:",
          userDataResponse.data
        );
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="profile bg-gray-100 dark:bg-black min-h-screen ml-80">
      <div className="profile-header bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700">
        <div className="container mx-auto max-w-4xl px-4 py-6 flex flex-col md:flex-row items-center">
          <div className="flex items-center space-x-4 md:space-x-8">
            <label htmlFor="profileImageInput" className="cursor-pointer">
              <img
                src={profileImage || "/Images/user.jpg"}
                alt="Profile Picture"
                className="profile-picture w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white dark:border-gray-600"
              />
              <input
                type="file"
                id="profileImageInput"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <div className="profile-info flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-semibold mr-4">
                  Username
                </h1>
                <div className="flex space-x-2 md:space-x-4">
                  <button className="text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-md">
                    Edit Profile
                  </button>
                  <button className="text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-md">
                    View Archive
                  </button>
                  <Link to="/" className="ml-2">
                    <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </Link>
                </div>
              </div>
              <div className="mt-2 md:mt-3 flex justify-between md:justify-start text-sm gap-4">
                <div>
                  <strong>{postCount}</strong> posts
                </div>
                <div>
                  <strong>{followersCount}</strong> followers
                </div>
                <div>
                  <strong>{followingCount}</strong> following
                </div>
              </div>
              <p className="bio text-sm mt-2 md:mt-3">Bio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-list container mx-auto max-w-4xl px-4 flex justify-center bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700">
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4">
          <Grid3X3 className="w-6 h-6 text-gray-600 dark:text-gray-300 mr-1" />
          <span className="text-sm">Posts</span>
        </div>
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4">
          <Bookmark className="w-6 h-6 text-gray-600 dark:text-gray-300 mr-1" />
          <span className="text-sm">Saved</span>
        </div>
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4">
          <SquareUser className="w-6 h-6 text-gray-600 dark:text-gray-300 mr-1" />
          <span className="text-sm">Tagged</span>
        </div>
      </div>
      <div className="posts-grid container mx-auto max-w-4xl px-4 grid grid-cols-3 gap-1 md:gap-1 pt-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="post rounded-lg overflow-hidden w-307 h-307"
          >
            <img
              src="/Images/post.jpg"
              alt="Post"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
