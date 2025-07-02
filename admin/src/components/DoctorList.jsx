import React from 'react';
import { doctors,assets } from '../../../frontend/src/assets/assets';

const DoctorList = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Doctor List</h2>
    { 
      doctors.map((item, index)=>{
       return(
          <div className='h-14 bg-gray-300 w-100% mb-2 rounded-md flex items-center gap-4 '>
            <img src={item.image} alt=""
            className='h-10 rounded-full ' />
           <p className=''>{item.name}</p>
            <p>{item.speciality},{item.degree}</p>
          
           <button className=' bg-blue-600 px-4 py-2 rounded-full text-white text-sm m-auto md:m-0'>View Profile</button>
           <img src={assets.Delete} alt="" 
           className='h-6 ml-auto pr-2'/>

    </div>
    
       )
     
      })
    }
   
  </section>
);

export default DoctorList;
