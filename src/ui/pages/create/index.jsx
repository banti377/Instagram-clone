import React, { useRef, useState, useEffect } from 'react';

export default function CreateModal({ onClose, handleFilesChange }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const modalRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (event) => {
    const files = event.target.files || event.dataTransfer.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedFiles((prevFiles) => prevFiles.concat(fileArray));
    setCurrentImage(fileArray[0]);
    handleFilesChange(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div
        ref={modalRef}
        className="bg-gray-800 text-white rounded-lg shadow-lg w-[30%] h-[60%] relative p-0"
      >
        <h2 className="text-center text-xl font-semibold py-2">Create new post</h2>
        {!currentImage && (
          <div
            className="flex flex-col items-center p-20 w-full h-64"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
            <p className="mb-4">Drag photos and videos here</p>
            <button
              onClick={handleFileSelect}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Select from computer
            </button>
            <input
              type="file"
              onChange={handleFiles}
              ref={fileInputRef}
              className="hidden"
              multiple
            />
          </div>
        )}
        {currentImage && (
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={currentImage}
              alt="Current selected"
              className="object-cover w-full h-full rounded-b-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
