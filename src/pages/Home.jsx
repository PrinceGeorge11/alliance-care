import React, { useState, useEffect } from 'react';

const heroImages = [
  "https://img.freepik.com/free-photo/team-nurse-doctor-giving-assistance-ill-woman-with-wheelchair-transportation-from-hospital-ward-bed-medical-workers-helping-retired-patient-after-healthcare-consultation_482257-37097.jpg?t=st=1733174066~exp=1733177666~hmac=7dcbb70d38cf7fb8cfcd4c0d8c287436ee313e5cbb750a24f89721a408742151&w=1060",
  "https://img.freepik.com/premium-photo/leadership-teamwork-portrait-doctors-nurses-hospital-with-support-success-healthcare-health-help-medicine-confident-senior-doctor-happy-medical-employees-smile-together_396607-97163.jpg", // Replace with your image URLs
  "https://wallpapers.com/images/hd/lab-background-2716-x-1811-iy0zqdpg56r4bv9p.jpg",
  "https://emag.medicalexpo.com/wp-content/uploads/sites/9/Digital_Lab_iStock.jpg",
  
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Image Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Welcome to Alliance Care
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-white max-w-2xl mx-auto">
          Your trusted partner in quality healthcare solutions. We prioritize
          your well-being above all else.
        </p>
        
      </div>
    </div>
  );
};

export default Hero;