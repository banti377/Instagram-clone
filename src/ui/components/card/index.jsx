import React, { useRef, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const dummyStories = [
  { id: 1, username: "User1", image: "Images/user.jpg" },
  { id: 2, username: "User2", image: "Images/user.jpg" },
  { id: 3, username: "User3", image: "Images/user.jpg" },
  { id: 4, username: "User4", image: "Images/user.jpg" },
  { id: 5, username: "User5", image: "Images/user.jpg" },
  { id: 6, username: "User6", image: "Images/user.jpg" },
  { id: 7, username: "User7", image: "Images/user.jpg" },
  { id: 8, username: "User8", image: "Images/user.jpg" },
  { id: 9, username: "User9", image: "Images/user.jpg" },
  { id: 10, username: "User10", image: "Images/user.jpg" },
  { id: 11, username: "User11", image: "Images/user.jpg" },
  { id: 12, username: "User12", image: "Images/user.jpg" },
  { id: 13, username: "User13", image: "Images/user.jpg" },
  { id: 14, username: "User14", image: "Images/user.jpg" },
  { id: 15, username: "User15", image: "Images/user.jpg" },
];

export default function CardCom() {
  const storyContainerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showNextStories = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 4, dummyStories.length - 8)
    );
  };

  const showPrevStories = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className=" flex justify-center mt-10 ml-80">

      <div className={`max-w-[614px] w-full ${isModalOpen ? "blur-md" : ""}`}>
        {/* Stories Section */}
        <div className="mb-5 bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">
          <div
            className="flex space-x-4 overflow-x-auto"
            style={{ overflowX: "auto", scrollbarWidth: "none" }}
            ref={storyContainerRef}
          >
            {/* Displaying visible stories */}
            {dummyStories
              .slice(startIndex, startIndex + 8)
              .map((story, index) => (
                <div className="flex flex-col items-center ml-4 " key={story.id}>
                  {index === 0 && startIndex > 0 && (
                    <button
                      onClick={showPrevStories}
                      className="absolute top-[75px] transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full focus:outline-none z-10"
                    >
                      {/* Previous icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )}
                  <div>
                    <img src={story.image} alt={story.username} className="w-16 h-16 rounded-full mb-1" />
                  </div>
                  <h5 className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                    {story.username}
                  </h5>
                  {index === 7 && startIndex + 8 < dummyStories.length && (
                    <button
                      onClick={showNextStories}
                      className="absolute top-[75px] transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full focus:outline-none z-10"
                    >
                      {/* Next icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Post Cards */}
        <div className="flex flex-col justify-center">
          {/* Example of a post card */}
          <div className="mb-5 bg-white dark:bg-black rounded-lg shadow-md ml-4 max-w-[614px] flex-shrink-0">
            <div className="flex items-center p-3">
              <img
                src="Images/user.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h5 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Username
              </h5>
              <IoIosMore className="ml-auto text-gray-900 dark:text-gray-100" />
            </div>
            <div className="w-full h-full">
              <img
                src="Images/post.jpg"
                alt="Post"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex items-center justify-between mt-1 mb-1 py-2">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1">
                  <FaRegHeart className="text-xl text-black dark:text-white hover:text-gray-600 transition duration-100" />
                </button>
                <button className="flex items-center space-x-1">
                  <FiMessageCircle className="text-xl text-black dark:text-white hover:text-gray-600 transition duration-100" />
                </button>
                <button className="flex items-center space-x-1">
                  <FiSend className="text-xl text-black dark:text-white hover:text-gray-600 transition duration-100" />
                </button>
              </div>
              <button className="flex items-center space-x-1">
                <BsBookmark className="text-xl text-black dark:text-white hover:text-gray-600 transition duration-100" />
              </button>
            </div>
            <p className="py-1 font-semibold text-gray-900 dark:text-gray-100">
              9 Likes
            </p>
            <p className="py-1 text-sm text-gray-900 dark:text-gray-100">
              Here are the biggest enterprise technology acquisitions of 2021...{" "}
              <span className="text-blue-500 cursor-pointer">more</span>
            </p>
            <input
              type="text"
              placeholder="Add Comment..."
              className="w-full py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-black dark:border-gray-700 focus:outline-none"
            />
            <hr className="border-gray-300 dark:border-gray-700 mt-2" />
          </div>
          {/* Repeat for other post cards */}
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-80 ml-10">
        {/* Sidebar content */}
        <div className="p-4 bg-white dark:bg-black rounded-md">
          <div className="flex items-center mb-4">
            <img
              src="Images/user.jpg"
              alt="User"
              className="w-11 h-11 rounded-full mr-3"
            />
            <div>
              <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Noteworthy technology
              </h5>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Noteworthy_tech
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <a
                href="#"
                className="text-blue-500 text-xs transition-colors duration-100 dark:hover:text-white hover:text-black"
              >
                Switch
              </a>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <h6 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Suggestions For You
            </h6>
            <a href="#" className="text-xs text-white dark:hover:text-gray-500">
              See All
            </a>
          </div>
          <ul>
            <li className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="Images/user.jpg"
                  alt="User"
                  className="w-11 h-11 rounded-full mr-3"
                />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    User 1
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    New to Instagram
                  </p>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <a
                  href="#"
                  className="text-blue-500 text-xs transition-colors duration-100 dark:hover:text-white hover:text-black"
                >
                  Follow
                </a>
              </div>
            </li>
            <li className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="Images/user.jpg"
                  alt="User"
                  className="w-11 h-11 rounded-full mr-3"
                />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    User 2
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Followed by User1
                  </p>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <a
                  href="#"
                  className="text-blue-500 text-xs transition-colors duration-100 dark:hover:text-white hover:text-black"
                >
                  Follow
                </a>
              </div>
            </li>
            <li className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="Images/user.jpg"
                  alt="User"
                  className="w-11 h-11 rounded-full mr-3"
                />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    User 3
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Followed by User2
                  </p>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <a
                  href="#"
                  className="text-blue-500 text-xs transition-colors duration-100 dark:hover:text-white hover:text-black"
                >
                  Follow
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
