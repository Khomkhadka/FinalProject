import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

const Header = () => {

  return (
    // <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-6 lg:px-6 '>
    //     {/*  Leftside */}
    //     <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-5 m-auto md:py-[10vw] md:mb-[-30px] '>
    //      <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
    //         Your Health, <br /> Our Verified Experts.
    //      </p>
    //      <div className='flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light'>
    //         <img className='w-28 ' src={assets.group_profiles} alt="" />
    //         <p>A trusted platform to find, book, and consult verified doctors
    //             <br className='hidden lg:block' /> quickly and securely</p>
    //      </div>
    //      <a className='flex item-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">
    //         Get Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
    //      </a>
    //     </div>
    //     {/* rightSide */}
    //     {/* <div className='md:w-1/2 relative'>
    //       <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
    //     </div> */}
    // </div>
    <div className="min-h-screen  text-gray-800">
     

      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-[#7494EC] text-white rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">Your Health, Our Mission</h1>
        <p className="text-lg max-w-xl mx-auto">
          Seamlessly connect with healthcare providers. Book, manage, and track appointments — all in one place.
        </p>
        <button className="mt-8 bg-white text-[#7494EC] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#7494EC]">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.Booking}
              alt="Easy Booking"
              className="mx-auto mb-4 h-40"
            />
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600 text-sm">Schedule your appointments in just a few clicks.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.Secure}
              alt="Easy Booking"
              className="mx-auto mb-4 h-40"
            />
            <h3 className="text-xl font-semibold mb-2">Secure System</h3>
            <p className="text-gray-600 text-sm">Your data is encrypted and confidential.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.userFriendly}
              alt="Easy Booking"
              className="mx-auto mb-4 h-40"
            />
            <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-600 text-sm">Use our system easily on any device.</p>
          </div>

        </div>
      </section>

      {/* Full-Width Image Banner */}
      <section className="px-6 pb-20">
        <img
          src="https://via.placeholder.com/1200x400?text=Healthcare+Banner"
          alt="Healthcare Visual"
          className="w-full rounded-3xl shadow-xl object-cover"
        />
      </section>
    </div>
  )
}

export default Header