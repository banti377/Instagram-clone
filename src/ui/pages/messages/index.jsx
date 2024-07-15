import React, { useState } from "react";

// MessageModal Component
function MessageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">New Message</h2>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="To: Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          placeholder="Message..."
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          rows="4"
        ></textarea>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 mr-2 border border-gray-300 rounded dark:border-gray-600">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

// Messages Component
export default function Messages() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const messages = [
    { id: 1, name: 'SCORPION UNITED', message: 'Haa', time: '3m' },
    { id: 2, name: 'Chahan', message: 'sent an attachment', time: '1h' },
    { id: 3, name: 'Tejas Chandekar', message: 'vat kri le ani', time: '10h' },
    { id: 4, name: 'Chirag Gandhi', message: '??', time: '16h' },
    { id: 5, name: 'school', message: 'sent an attachment', time: '18h' },
    { id: 6, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 7, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 8, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 9, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 10, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 11, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 12, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
    { id: 13, name: 'Patel Utkarsh', message: 'sent an attachment', time: '18h' },
  ];

  return (
    <div className={`pl-20 h-screen flex ${darkMode ? 'dark' : ''}`}>
      <aside className="w-1/4 bg-black dark:bg-black pl-4 pt-4 border-r border-gray-300 dark:border-gray-700 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">bunny_377</span>
          <button className="text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
        {/* Stories Section */}
        <div className="mt-4 flex space-x-2">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>
        {/* Messages Section */}
        <div className="mt-4 flex-grow overflow-y-auto">
          <h2 className="text-lg font-semibold">Messages</h2>
          <ul className="space-y-4 mt-2">
            {messages.map((msg) => (
              <li key={msg.id} className="flex items-center space-x-2">
                <img
                  src={`https://via.placeholder.com/40?text=${msg.name.charAt(0)}`}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{msg.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You: {msg.message} · {msg.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">Your messages</h2>
          <p className="text-gray-500 dark:text-gray-400">Send a message to start a chat.</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send message
          </button>
        </div>
      </main>
      <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
