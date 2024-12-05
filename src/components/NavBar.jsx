import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Check if the current route is "/dashboard"
  if (location.pathname === "/dashboard") {
    return null; // Don't render NavBar on Dashboard
  }

  return (
    <nav className="fixed top-8 left-0 right-0 bg-transparent backdrop-blur-md z-50 shadow-md flex justify-between items-center px-2 py-1">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-200">Alliance Care</h1>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-200" : "text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-gray-200" : "text-blue-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-gray-200" : "text-blue-300"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gray-200" : "text-blue-300"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-gray-200" : "text-blue-300"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
