import React, { useRef, useState } from 'react';

export default function CreateModal({ onClose, handleFilesChange }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (event) => {
    const files = event.target.files || event.dataTransfer.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedFiles((prevFiles) => prevFiles.concat(fileArray));
    handleFilesChange(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <h2 className="text-center text-xl font-semibold mb-4">Create new post</h2>
        <div
          className="flex flex-col items-center border-2 border-dashed border-gray-500 p-4 w-full h-64"
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
        {selectedFiles.length > 0 && (
          <div className="flex flex-wrap mt-4">
            {selectedFiles.map((file, index) => (
              <div key={index} className="w-1/4 p-1">
                <img
                  src={file}
                  alt={`file-preview-${index}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
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
      </div>
    </div>
  );
}
