import React from 'react'

import { icons } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white  py-5 ">
      <div className="max-w-7x mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold mb-2">DocTime</h2>
          <p className="text-sm text-gray-300">
            A trusted platform to find, book, and consult verified doctors
quickly and securely
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-row md:flex-row ">
            <a href="https://www.facebook.com/" className="hover:text-blue-400"><img className='w-8' src={icons.Facebook} alt="" /></a>
            <a href="#" className="hover:text-blue-400"><img className='w-8' src={icons.Twitter} alt="" /></a>
            <a href="#" className="hover:text-blue-400"><img className='w-8' src={icons.Instagram} alt="" /></a>
            <a href="#" className="hover:text-blue-400"><img className='w-8' src={icons.Linkdin} alt="" /></a>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            Bhairahawa Multiple Campus<br />
            Email: support@doctime.com<br />
            Phone: +071 506070
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
             <li><a href="/doctors" className="hover:text-blue-400">Doctors</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-5 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DocTime. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer