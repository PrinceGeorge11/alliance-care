import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  // Check if the current route is "/dashboard"
  if (location.pathname === "/dashboard") {
    return null; // Don't render NavBar on Dashboard
  }

  return (
    <div className="fixed left-0 right-0 bg-gray-900 backdrop-blur-md z-50 shadow-md flex justify-between items-center px-2 py-1">
      <div className="text-gray-200 flex gap-4">
        <p>📍 Location: 35th Bronzville</p>
        <p>⏰ Mon-Fri: 9am - 5pm</p>
        <p>📧 care@alliancecare.com</p>
      </div>
      <div className="text-gray-200 flex gap-4">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
        <a href="#" className="hover:text-blue-400">Instagram</a>
      </div>
    </div>
  );
};

export default TopBar;
