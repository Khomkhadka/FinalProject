
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { specialties } from '../assets/assets';
import { doctors } from '../assets/assets';
import React from 'react'

const Doctors = () => {
   const specialtyList = specialties.map((s) => s.speciality);
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialtyList[0]);
 
  const filteredDoctors = doctors.filter(
    (doc) => doc.speciality === selectedSpecialty
  );
  const {speciality} = useParams()
  const navigate = useNavigate()
useEffect(()=>{
     
},[])

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Find Doctors by Specialty
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar - Specialties */}
        <div className="md:col-span-1 bg-gray-50 p-4 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-4 text-gray-700">Specialties</h4>
          <ul className="space-y-2">
            {specialties.map((item, idx) => (
              
              <li key={idx}>
                <button
                  onClick={() => {
                    setSelectedSpecialty(item.speciality);
                    navigate(`/doctors/${item.speciality}`)}}
                  className={`w-full text-left px-3 py-2 rounded-md transition font-medium ${
                    selectedSpecialty === item.speciality
                      ? 'bg-primary text-white'
                      : 'hover:bg-blue-100 text-gray-700'
                  }`}
                >
                  
                  <span className="mr-2">{item.icon}</span>
                  {item.speciality}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Doctor Cards */}
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            {selectedSpecialty}
          </h3>
          <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
          { (filteredDoctors?.length>0)?
            (filteredDoctors.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ): (<p className="text-gray-600 items-center text-center">No doctors available for this specialty at the moment.</p>)
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors

