import React from 'react'

const MyAppointments = () => {
  const appointmentToken = 1;
  return (
<div className='min-h-screen '>
  <h1  className="text-2xl font-semibold text-blue-900">Your appointment Recepts:</h1>
      <div className=' bg-blue-50 p-50 m-100 flex fle justify-center h-full '>
      {
          appointmentToken ? (
           <div className="bg-white p-6 rounded-xl shadow-md m-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Appointment Recept</h2>
          <p className="text-gray-600 mb-2">DoctorName:
            <p className='text-bold '>Raju Yadav</p>
            </p>
          <p className="text-gray-600"></p>
        </div>
          ) :(
            
            <div className="text-center py-10 px-4 text-blue-900">
           <p className="text-2xl font-semibold mb-2">
            You don't have any appointments scheduled yet.
           </p>
          <p className="text-lg text-blue-700">
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-sm transition'>Book</button>one now to take care of your health!
          </p>
          </div>

            // <div className='m-50 p-5'>
            //    You don't have any appointments scheduled yet. <button className=' bg-blue-600 px-4 py-2 rounded-full text-white text-sm m-auto md:m-0'>Book</button> one now to take care of your health!
            // </div>
          )
      }
    </div>
</div>
  )
}

export default MyAppointments