import React from 'react';
import { doctors } from '../assets/assets';



const myProfile = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Patient Info */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome, John Doe</h2>
          <p className="text-gray-600 mb-2">Email: johndoe@example.com</p>
          <p className="text-gray-600">Member since: Jan 2024</p>
        </div>

        {/* Recommended Doctors */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-6">Recommended Doctors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 mx-auto mb-4"
                />
                <h4 className="text-center text-lg font-semibold text-gray-800">
                  {doctor.name}
                </h4>
                <p className="text-center text-sm text-gray-500 mb-2">
                  {doctor.speciality} ({doctor.experience})
                </p>
                <p className="text-center text-sm text-gray-500">
                  {doctor.degree} | Fee: ${doctor.fees}
                </p>
                <p className="text-center text-xs text-gray-400 mt-2">
                  {doctor.address.line1}, {doctor.address.line2}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default myProfile;