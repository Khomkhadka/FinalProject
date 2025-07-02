import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { specialties } from '../assets/assets'
const DoctorSpeciality = () => {

  const navigate = useNavigate()
  return (
    <>
    <div className="text-center my-8" id="speciality">
  <h2 className="text-3xl font-bold text-gray-700">Explore Medical Specialties</h2>
  <p className="mt-2 text-gray-500 text-base">
    Find trusted doctors across a wide range of specialties tailored to your health needs.
  </p>
</div>
    <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
      {specialties.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 cursor-pointer border hover:border-blue-500"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-1">{item.speciality}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
      

          <button onClick={()=>navigate(`/doctors/${item.speciality}`)} className="mt-4 text-white font-medium bg-primary hover:bg-blue-600 hover:underline rounded p-1 hover:scale-105 transition-all duration-300  ">
            View Doctors 
          </button>
       
        </div>
      ))}
    </div>
    </>
  )
}

export default DoctorSpeciality