import React from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24 sm:py-32">
      {/* Background Image */}
      <img
        alt="Healthcare Team"
        src="https://img.freepik.com/premium-photo/leadership-teamwork-portrait-doctors-nurses-hospital-with-support-success-healthcare-health-help-medicine-confident-senior-doctor-happy-medical-employees-smile-together_396607-97163.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-25"
      />

      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="hidden sm:block sm:absolute sm:top-0 sm:right-1/2 sm:translate-x-1/2 sm:transform sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-square w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Join Our Mission
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-300 sm:text-xl">
            Empowering healthcare teams to achieve excellence. Be part of our
            journey to redefine care and innovation in the medical field.
          </p>
        </div>

        {/* Links Section */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 text-lg font-semibold text-white sm:grid-cols-2 lg:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                {link.name}{" "}
                <span aria-hidden="true" className="text-pink-500">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <dl className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col-reverse items-center text-center"
            >
              <dt className="text-base font-medium text-gray-300">
                {stat.name}
              </dt>
              <dd className="text-4xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}


