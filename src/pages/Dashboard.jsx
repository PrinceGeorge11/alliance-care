import React, { useState } from "react";
import { FaBell, FaEye, FaTrash, FaUserCircle, FaUserNurse } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUsers, FaStethoscope, FaProcedures, FaMoneyBillWave, FaCalendarCheck, FaUserMd, FaBed, FaWallet } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { FaCalendarAlt, FaHeart, FaFileMedical, FaVials, FaFileAlt, FaPills, FaFileInvoiceDollar, FaShieldAlt, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 5;

  const menuItems = {
    Dashboard: [],
    Patient: [
      "Appointment",
      "Vital Check",
      "Consultation",
      "Discharge",
      "Admission",
      "Laboratory Report",
      "Patient Report",
    ],
    Pharmacy: ["Out-Patient Medication", "In-Patient Medication", "Medicine Stock", "Medicine Report"],
    Finance: ["Patient Bill", "Account Payable", "Third Party Insurance", "Financial Report"],
  };

  const dummyAppointments = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Patient ${i + 1}`,
    contact: `+1-123-456-78${i}`,
    address: `Address ${i + 1}`,
    status: i % 2 === 0 ? "Approved" : "Declined",
  }));

  const missedMessages = [
    { id: 1, message: "Has anyone attended to room 504 patient?" },
    { id: 2, message: "Please get the lab report for Dr. Raj" },
    { id: 3, message: "Has the the cancer patient book an appointment?" },
    { id: 4, message: "Have you requested for the x-ray?" },
    { id: 5, message: "Please send the check to HR" },
  ];

  const renderDashboardContent = () => (
    <div className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Administrators", icon: <FaUsers />, count: 12, bgColor: "bg-blue-500 shadow-blue-500/50" },
          { label: "Specialists", icon: <FaUserMd />, count: 25, bgColor: "bg-green-500 shadow-green-500/50" },
          { label: "Practitioners", icon: <FaStethoscope />, count: 30, bgColor: "bg-purple-500 shadow-purple-500/50" },
          { label: "Nurses", icon: <FaUserNurse />, count: 50, bgColor: "bg-pink-500 shadow-pink-500/50" },
        ].map((role, i) => (
          <div
            key={i}
            className={`p-3 shadow-md rounded-md flex flex-col items-center text-gray-200 ${role.bgColor}`}
          >
            <div className="text-3xl mb-2">{role.icon}</div>
            <div className="text-lg font-bold">{role.label}</div>
            <div className="text-2xl font-semibold">{role.count}</div>
          </div>
        ))}
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Appointments", icon: <FaCalendarCheck />, count: 120, bgColor: "bg-yellow-500 shadow-yellow-500/50" },
          { label: "In-Patients", icon: <FaProcedures/>, count: 45, bgColor: "bg-teal-500 shadow-teal-500/50" },
          { label: "Out-Patients", icon: <FaUsers />, count: 85, bgColor: "bg-orange-500 shadow-orange-500/50" },
          { label: "Finances", icon: <FaMoneyBillWave />, amount: "$12,340", bgColor: "bg-red-500 shadow-red-500/50" },
        ].map((category, i) => (
          <div
            key={i}
            className={`p-3 shadow-md rounded-md flex flex-col items-center text-gray-200 ${category.bgColor}`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-lg font-bold">{category.label}</div>
            <div className="text-2xl font-semibold">
              {category.count ?? category.amount}
            </div>
          </div>
        ))}
      </div>
      {/* Row 3 */}
      <div className="outline: 2px solid transparent; outline-offset: 2px;"><br/>
        <h3 className="text-xl text-sky-950 font-bold mb-4 ">Appointment List</h3>
        <table className=" w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {["ID", "Patient Name", "Contact", "Address", "Status", "Action"].map(
                (heading, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 p-2 bg-sky-950 text-gray-200 text-left font-semibold"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {dummyAppointments
              .slice(
                (currentPage - 1) * appointmentsPerPage,
                currentPage * appointmentsPerPage
              )
              .map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{appointment.id}</td>
                  <td className="border border-gray-300 p-2">{appointment.name}</td>
                  <td className="border border-gray-300 p-2">{appointment.contact}</td>
                  <td className="border border-gray-300 p-2">{appointment.address}</td>
                  <td
                    className={`border border-gray-300 p-2 ${
                      appointment.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {appointment.status}
                  </td>
                  <td className="border border-gray-300 p-2 space-x-2">
                    <button className="text-blue-600 hover:underline"><FaEye/></button>
                    <button className="text-green-600 hover:underline"><FaUserPen/></button>
                    <button className="text-red-600 hover:underline"><FaTrash/></button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="text-white p-2 bg-sky-950 rounded-md"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            Prev
          </button>
          <span className="flex items-center justify-center">
            Page {currentPage}
          </span>
          <button
            className="text-white p-2 bg-sky-950 rounded-md"
            onClick={() =>
              setCurrentPage(
                Math.min(
                  Math.ceil(dummyAppointments.length / appointmentsPerPage),
                  currentPage + 1
                )
              )
            }
          >
            Next
          </button>
        </div>
      </div>
      {/* Row 4 */}
      <br/>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Missed Messages</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {["ID", "Message"].map((heading, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 p-2 bg-gray-100 text-left"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {missedMessages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{message.id}</td>
                  <td className="border border-gray-300 p-2">{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">System Calender</h3>
          <Calendar
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          /><br/>
        </div>
      </div>
    </div>
  );
  
  const renderSubmenuContent = () => {
    const dummyContent = {
      Appointment: {
        icon: <FaCalendarAlt size={36} className="text-blue-600" />,
        title: "Manage Appointments",
        description: "View, schedule, and manage patient appointments. Ensure all slots are updated in real-time to avoid double bookings.",
      },
      "Vital Check": {
        icon: <FaHeart size={36} className="text-red-600" />,
        title: "Monitor Vital Signs",
        description: "Monitor and record patients' vital signs such as blood pressure, heart rate, and temperature during routine check-ups.",
      },
      Consultation: {
        icon: <FaUserMd size={36} className="text-green-600" />,
        title: "Consultation Details",
        description: "Details about ongoing and past consultations with patients. Review doctor's notes and follow-ups.",
      },
      Discharge: {
        icon: <FaBed size={36} className="text-purple-600" />,
        title: "Discharge Process",
        description: "Manage patient discharge processes, including finalizing discharge reports and post-discharge care instructions.",
      },
      Admission: {
        icon: <FaFileMedical size={36} className="text-yellow-600" />,
        title: "Patient Admission",
        description: "Handle patient admissions, assign beds, and coordinate with relevant departments for seamless entry.",
      },
      "Laboratory Report": {
        icon: <FaVials size={36} className="text-indigo-600" />,
        title: "Lab Reports",
        description: "View test results and updates from the laboratory. Track pending and completed lab requests.",
      },
      "Patient Report": {
        icon: <FaFileAlt size={36} className="text-orange-600" />,
        title: "Patient Reports",
        description: "Access detailed reports on individual patients, including medical history and treatment progress.",
      },
      "Out-Patient Medication": {
        icon: <FaPills size={36} className="text-cyan-600" />,
        title: "Outpatient Medications",
        description: "Manage prescriptions for outpatients and track medication dispensed for external visits.",
      },
      "In-Patient Medication": {
        icon: <FaPills size={36} className="text-teal-600" />,
        title: "Inpatient Medications",
        description: "Oversee the administration of medications to inpatients, ensuring timely delivery of prescribed doses.",
      },
      "Medicine Stock": {
        icon: <FaPills size={36} className="text-pink-600" />,
        title: "Medicine Stock",
        description: "Track inventory levels of medicines, manage restocking schedules, and prevent shortages.",
      },
      "Medicine Report": {
        icon: <FaFileAlt size={36} className="text-gray-600" />,
        title: "Medicine Reports",
        description: "Generate detailed reports on medication usage, wastage, and current inventory levels.",
      },
      "Patient Bill": {
        icon: <FaFileInvoiceDollar size={36} className="text-lime-600" />,
        title: "Billing Details",
        description: "Review and manage patient billing details, including outstanding balances and payment receipts.",
      },
      "Account Payable": {
        icon: <FaWallet size={36} className="text-blue-800" />,
        title: "Accounts Payable",
        description: "Track all outgoing payments for hospital expenses and coordinate with vendors or suppliers.",
      },
      "Third Party Insurance": {
        icon: <FaShieldAlt size={36} className="text-yellow-700" />,
        title: "Insurance Claims",
        description: "Handle insurance claims and verify patient coverage with third-party providers.",
      },
      "Financial Report": {
        icon: <FaChartLine size={36} className="text-green-700" />,
        title: "Financial Reports",
        description: "Generate financial summaries, profit/loss statements, and department-wise revenue reports.",
      },
    };
  
    if (activeSubmenu) {
      const { icon, title, description } = dummyContent[activeSubmenu];
  
      return (
        <div className="flex items-center p-6 bg-white rounded-lg shadow-lg space-x-4">
          {/* Icon */}
          <div className="p-4 bg-gray-100 rounded-full">{icon}</div>
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (activeMenu === "Dashboard") {
      return renderDashboardContent();
    }
    return renderSubmenuContent();
  };

  return (
    <div className="flex h-screen"><br/>
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white h-full pt-16 px-4 fixed">
        <ul className="space-y-2 divide-y-2 divide-sky-950">
          {Object.keys(menuItems).map((menu) => (
            <li key={menu}>
              <button
                className={`w-full text-left p-3 rounded-md ${
                  activeMenu === menu ? "bg-sky-700" : ""
                }`}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </button>
              {menuItems[menu].length > 0 && activeMenu === menu && (
                <ul className="ml-4 mt-2 space-y-2">
                  {menuItems[menu].map((submenu, index) => (
                    <li
                      key={index}
                      className="text-sm hover:bg-sky-800 divide-y divide-blue-200 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setActiveSubmenu(submenu);
                        setActiveMenu(menu);
                      }}
                    >
                      {submenu}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 pt-3 px-6 bg-gray-100 overflow-auto">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md p-4 shadow-md flex justify-between items-center z-50">
          <h1 className="text-2xl font-bold text-gray-200 ">Alliance Care</h1>
          <div className="flex items-center space-x-4">
            <div>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative"
              >
                <FaBell size={24} />
                {notificationsOpen && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    5
                  </div>
                )}
              </button>
            </div>
            <div>
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="relative"
              >
                <FaUserCircle size={24} />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-md bg-gray-100/80 shadow-lg rounded-md">
                  <ul>
                    <li className="px-4 py-2 text-gray-700 cursor-pointer">Profile</li>
                    <li className="px-4 py-2 text-gray-700 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 text-gray-700 cursor-pointer"><a href="./Login">Logout</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-20">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
