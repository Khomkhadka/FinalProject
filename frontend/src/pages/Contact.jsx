import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you. Whether you have a question about our platform, need support, or just want to connect — feel free to reach out!
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-xl" />
              <span className="text-gray-700">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-700">support@doctime.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700">123 Health Street, Wellness City, USA</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea className="w-full border border-gray-300 px-4 py-2 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
