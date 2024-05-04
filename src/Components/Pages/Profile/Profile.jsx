import axios from "axios";
import React, { useEffect } from "react";

export default function Profile() {
  const userId = "123";

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/followers/allfollowers/${userId}",
    })
      .then((res) => {
        console.log("followers Res=>", res.data);
      })
      .catch((err) => {
        console.log("followers Error=>", err);
      });
  }, [userId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img
            src="user.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="font-semibold text-xl">John Doe</h1>
            <p className="text-gray-500">@johndoe</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>

      {/* Profile Stats */}
      <div className="flex mb-8">
        <div className="w-1/3 text-center">
          <h2 className="font-semibold text-lg">Posts</h2>
          <p className="text-gray-500">10</p>
        </div>
        <div className="w-1/3 text-center">
          <h2 className="font-semibold text-lg">Followers</h2>
          <p className="text-gray-500">100</p>
        </div>
        <div className="w-1/3 text-center">
          <h2 className="font-semibold text-lg">Following</h2>
          <p className="text-gray-500">50</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-4">
        <img src="post.jpg" alt="Post 1" className="rounded-lg" />
        <img src="post.jpg" alt="Post 2" className="rounded-lg" />
        <img src="post.jpg" alt="Post 3" className="rounded-lg" />
        {/* Add more images here */}
      </div>
    </div>
  );
}
