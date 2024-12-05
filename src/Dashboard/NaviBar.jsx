import React from "react";

const NaviBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50 shadow-md flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Alliance Care
      </h1>
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <button className="text-gray-800 dark:text-white hover:text-blue-500">
          Settings
        </button>
      </div>
    </nav>
  );
};

export default NaviBar;
