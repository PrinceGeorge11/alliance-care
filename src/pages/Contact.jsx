import React from "react";

export default function Contact() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24 sm:py-32">
      <img
        src="https://img.freepik.com/free-photo/two-paramedics-ambulance-african-american-female-paramedic-driving-talking-radio_657921-1521.jpg?t=st=1733369104~exp=1733372704~hmac=20279379f5056e2ee5ce6c3f942199f54550dc44cf0874e606b2e65790811298&w=900"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-25"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-8">
            We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to contact us.
          </p>
        </div>

        {/* Contact Form and Details */}
        <div className="mt-20 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-10 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Email Address"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-lg font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="text-white space-y-10">
            <div>
              <h3 className="text-2xl font-semibold">Our Office</h3>
              <p className="mt-4 text-lg">
                123 Alliance Street, <br />
                Chicago, IL, 60601
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Call Us</h3>
              <p className="mt-4 text-lg">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Email Us</h3>
              <p className="mt-4 text-lg">care@alliancecare.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
