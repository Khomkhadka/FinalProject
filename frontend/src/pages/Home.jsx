import React from 'react'
import Header from '../components/Header'
import DoctorSpeciality from '../components/DoctorSpeciality'
import DoctorsList from '../components/DoctorsList'
import Banner from '../components/Banner'
import YtAppointment from './YtAppointment'
import Test from './Test'


const Home = () => {
  return (
    <>
  
      <Header/>
    <DoctorSpeciality />
    {/* <DoctorsList /> */}
    <Banner/>
    <YtAppointment/>
 
    </>
  )
}

export default Home