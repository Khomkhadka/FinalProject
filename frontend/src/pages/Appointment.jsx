import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Calender from '../components/Calender'
const Appointment = () => {
  
  
  const {docId} = useParams()
  const {doctors, currencySymbol,popUp,setPopUP,} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)
  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)

  const fetchDocInfo = async () =>{
     const docInfo = doctors.find(doc => doc._id === docId)
     setDocInfo(docInfo)
     console.log(docInfo)
  }

  const getAvailableSlots = ()=>{
      setDocSlots([])

      //current date
      let today = new Date()

      for(let i=0; i<7; i++){
        //next 7 days
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+indexedDB)
      }
  }
 
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
         getAvailableSlots()
  },[docInfo])

  return docInfo &&(
    <div>
     {/* -----doctor Detail------ */}
     <div className='flex flex-col sm:flex-row gap-4'>
      <div>
        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
      </div>
      {/* --- Doc Info---- */}
      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-slider mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        <p className='flex item-center gap-2 text-2xl font-medium text-gray-900'>
          {docInfo.name}
           <img className='w-5' src={assets.verified_icon} alt="" />
        </p>
        <div className='flex item-center gap-2 text-sm mt-1 text-gray-900'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2 border border-gray-400 text-xs rounded-full'>{docInfo.experience}</button>
        </div>
        {/* --Doctor About--- */}
        <div>
          <p className='flex item-center gap-1 text-sm font-medium text-gray-900 mt-3'>
            About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-white-900 max-w-[700px] mt-1'>
             {docInfo.about}</p>
        </div>
        <p className='text-indigo-600 font-medium mt-4'>
          Appointment fee: <span className='text-red-600'>{currencySymbol}{docInfo.fees}</span>
        </p>
        {
          !popUp &&
           <button onClick={()=>setPopUP(true)} className=' item-center gap-2 bg-primary hover:bg-blue-600 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Appoint Now</button>
        }
      </div>
      
      <div>{docSlots}</div>
     </div>
       <div className='items-center'>
        {
          popUp &&
          <Calender/>
         }

       </div>
       
    
    </div>
    
  )
}

export default Appointment