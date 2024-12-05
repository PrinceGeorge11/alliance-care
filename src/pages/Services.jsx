import React from "react";
import { FaHeartbeat, FaPills, FaWallet, FaUserMd } from "react-icons/fa";

const services = [
  {
    name: "Healthcare Consulting",
    description:
      "Providing expert medical advice and personalized treatment plans tailored to your needs.",
    icon: <FaHeartbeat className="text-red-500 w-12 h-12" />,
  },
  {
    name: "Pharmacy Services",
    description:
      "Ensuring availability of high-quality medication for both in-patients and out-patients.",
    icon: <FaPills className="text-green-500 w-12 h-12" />,
  },
  {
    name: "Financial Assistance",
    description:
      "Managing patient bills, insurance, and financial reports with transparency.",
    icon: <FaWallet className="text-yellow-500 w-12 h-12" />,
  },
  {
    name: "Specialist Care",
    description:
      "Access to a wide range of specialists to address complex medical conditions.",
    icon: <FaUserMd className="text-blue-500 w-12 h-12" />,
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24 sm:py-32">
      <img
        alt=""
        src="https://emag.medicalexpo.com/wp-content/uploads/sites/9/Digital_Lab_iStock.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-25"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Our Services
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            At Alliance Care, we offer a variety of healthcare services
            designed to cater to your medical needs with professionalism and
            care.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between p-6 bg-gray-300 rounded-lg shadow-lg text-center text-gray-900 hover:scale-105 transform transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
