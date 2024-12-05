import React from "react";

const SideBar = () => {
  return (
    <aside className="fixed top-16 left-0 h-screen w-60 bg-transparent backdrop-blur-md shadow-md px-4 py-6">
      <nav className="text-gray-800 dark:text-white">
        <ul className="space-y-4">
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Patients
            </a>
            <ul className="ml-4 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  List Patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Add Patient
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Doctors
            </a>
            <ul className="ml-4 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  List Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Add Doctor
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Finances
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
