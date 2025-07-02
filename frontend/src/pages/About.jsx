import React from 'react';
import { FaUserMd, FaClinicMedical, FaCalendarCheck, FaSmile } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight mb-6">
            Your Health, Our Priority
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At <span className="text-primary font-semibold">Doctime</span>, we bridge the gap between patients and healthcare professionals with a platform that's simple, secure, and efficient.
          </p>
          <p className="text-base text-gray-500 mb-4">
            Whether you're booking a regular check-up or seeking a specialist consultation, our goal is to ensure that every patient receives care from trusted, verified doctors.
          </p>
          <p className="text-base text-gray-500 mb-6">
            With real-time availability, easy appointment scheduling, and a wide range of specialties, Doctime empowers you to take control of your health from the comfort of your home.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            Create an Account
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/path/to/about-illustration.png" // Replace with actual path
            alt="Doctor Consultation"
            className="w-full max-w-md rounded-xl shadow-md border border-blue-100"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-blue-50 py-12 px-6 rounded-xl shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaUserMd className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-3xl font-bold text-blue-700">1,200+</h3>
            <p className="text-sm text-gray-600 mt-1">Verified Doctors</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClinicMedical className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-3xl font-bold text-blue-700">25+</h3>
            <p className="text-sm text-gray-600 mt-1">Specialties</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCalendarCheck className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-3xl font-bold text-blue-700">10K+</h3>
            <p className="text-sm text-gray-600 mt-1">Appointments Booked</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-3xl font-bold text-blue-700">98%</h3>
            <p className="text-sm text-gray-600 mt-1">User Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/path/to/mission-image.png" // Replace with actual path
            alt="Our Mission"
            className="w-full max-w-md rounded-xl shadow border border-blue-100"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h3>
          <p className="text-gray-600 text-base">
            We believe healthcare should be accessible and stress-free. Our mission is to build a seamless connection between patients and doctors, enhancing trust and convenience through technology.
          </p>
          <ul className="list-disc text-gray-500 pl-6 mt-4 space-y-2">
            <li>Ensuring access to verified professionals</li>
            <li>Providing timely and secure appointments</li>
            <li>Improving patient engagement and satisfaction</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;