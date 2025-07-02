import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {AppContext } from '../context/AppContext'

const YtAppointment = () => {

    const {docId} = useParams()
    const {doctors} = useContext(AppContext)
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

    const [docInfo,setDocInfo] = useState(null)
    const[docSlot,setDocSlot]= useState([])
    const [slotIndex,setSlotIndex] = useState(0)
    const[slotTime,setSlotTime] = useState('')

    const fetchDocInfo = async () =>{
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
    }
     
    const getAvailableSlots = async () =>{
     setDocSlot([])

     //get new date
     let today = new Date()
     for(let i=0; i<7;i++){
        // get next 7 days
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate()+i)

    // end time of date
    let endTime = new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)

    // setting hours
    if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
    }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
    }

    let timeSlots = []

    while ( currentDate < endTime)
    {
        let formattedTime = currentDate.toLocaleTimeString([], { hour:'2-digit',minute:'2-digit'})
       // add slot to array
       timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime
       })

       // increase current time by 30 min
       currentDate.setMinutes(currentDate.getMinutes() + 30)
    
    }

    setDocSlot(prev => ( [...prev, timeSlots]))
     }

    }

    useEffect(()=>{
         fetchDocInfo()
    },[doctors,docId])

    useEffect(()=>{
    getAvailableSlots()
    },[docInfo])

    useEffect(()=>{
     
    },[docSlot])

  return docInfo && (
    <div>
        {/* --doctor detail */}
        <div>
            <div>
                <img src={docInfo.image} alt="" />
            </div>
            <div>
                {/* --Doctor info-- */}
                <p>{docInfo.name}</p>
                <div>
                    <p>{docInfo.degree} - {docInfo.speciality}</p>
                </div>
            </div>
        </div>
       {/* -- Book Slot-- */}
       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking Slot</p>
            <div>
                {
                    docSlot.length && docSlot.map((item,index)=>(
                       <div key={index}>
                        <p>
                            {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                        </p>
                        <p>
                            
                        </p>

                       </div> 
                    ))
                }
            </div>
       </div>

    </div>
  )
}

export default YtAppointment