import React, { useEffect, useState } from "react";
import { Bookmark, Grid3X3, Settings, SquareUser } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [followingCount, setFollowingCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [user, setUser] = useState("");
  console.log("🚀 ~ Profile ~ user:", user)

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    // if (userDataString) {
    const userData = JSON.parse(userDataString);
    console.log("🚀 ~ useEffect ~ userData:", userData)
    if (userData && userData.data) {
      const { followers, following, postCount, userName } = userData.data;

      setFollowersCount(followers);
      setFollowingCount(following);
      setPostCount(postCount);

      setUser(userData);
    } else {
      console.log("userData is missing 'data' property");
    }
    // } else {
    //   console.log("userData is not available in localStorage");
    // }
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
      // if (response.data.success) {
      const newProfileImage = response.data.data;
      console.log("🚀 ~ handleImageUpload ~ newProfileImage:", newProfileImage)

      setUser({ ...user, profileImage: newProfileImage });


      //   const userDataString = localStorage.getItem("userData");
      //   if (userDataString) {
      //     const userData = JSON.parse(userDataString);
      //     if (userData && userData.data) {
      //       userData.data.profileImage = newProfileImage;
      //       localStorage.setItem("userData", JSON.stringify(userData));
      //     }
      //   }
      //   localStorage.setItem("profileImage", newProfileImage);
      // }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="profile bg-gray-100 dark:bg-black min-h-screen ml-64">
      <div className="profile-header bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-10 py-6 flex flex-col md:flex-row">
          <div className="flex items-center space-x-4 md:space-x-8">
            <label htmlFor="profileImageInput" className="cursor-pointer">
              <img
                src={user.profileImage}
                alt="Profile Picture"
                className="profile-picture w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white dark:border-gray-600 mt-8"
              />
              <input
                type="file"
                id="profileImageInput"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <div className="profile-info ms-20 mt-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-semibold mr-4">
                {user}
              </h1>
              <div className="flex space-x-2 md:space-x-4">
                <button className="text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md">
                  Edit Profile
                </button>
                <button className="text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md">
                  View Archive
                </button>
                <Link to="" className="ml-2">
                  <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </Link>
              </div>
            </div>
            <div className="mt-2 md:mt-3 flex justify-between md:justify-start text-base gap-10">
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
            <p className="bio text-sm mt-2 md:mt-3">ᴹᴿ°__ʙᴜɴɴʏ™🐰</p>
            <p className="bio text-sm mt-2 md:mt-3">Bio</p>
            <p className="bio text-sm mt-2 md:mt-3">❤️ || कृष्ण सदा सहायते || 🙏🏻</p>
          </div>
        </div>
        <div className="mb-10 mt-7 bg-white dark:bg-black rounded-lg shadow-md overflow-hidden flex flex-col items-center mr-[760px]">
          <img
            src="Images/user.jpg"
            alt="Profile"
            className="p-0.5 w-20 h-20 rounded-full object-cover border-2 border-gray-600"
          />
          <p>new</p>
        </div>
      </div>
      <div className="tab-list container mx-auto max-w-4xl px-4 flex justify-center bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 gap-5 p-1">
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4 text-gray-600 dark:text-gray-400">
          <Grid3X3 className="w-3 h-3 mr-1" />
          <span className="text-xs font-bold">POSTS</span>
        </div>
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4 text-gray-600 dark:text-gray-400">
          <Bookmark className="w-3 h-3 mr-1" />
          <span className="text-xs font-bold">SAVED</span>
        </div>
        <div className="tab flex items-center justify-center py-2 md:py-3 px-2 md:px-4 text-gray-600 dark:text-gray-400">
          <SquareUser className="w-3 h-3 mr-1" />
          <span className="text-xs font-bold">TAGGED</span>
        </div>
      </div>
      <div className="posts-grid container mx-auto max-w-4xl grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="post overflow-hidden w-[307px] h-[307px]"
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
