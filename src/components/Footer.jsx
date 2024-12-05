import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:text-left">
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Alliance Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
