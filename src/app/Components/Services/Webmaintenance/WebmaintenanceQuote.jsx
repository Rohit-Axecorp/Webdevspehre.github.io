"use client";

import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input'; // Import PhoneInput for country flag selection

export default function WebmaintenanceQuote() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between container mx-auto py-12">
          {/* Left Section */}
          <div className="pt-5 w-full md:w-1/2 mb-8 md:mb-0">
            {/* Main Heading */}
            <h1 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Website Maintenance Services
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-">
              Say Goodbye to these Web Maintenance Problems!
            </h2>

            {/* Benefits List */}
            <ul className="text-base md:text-lg text-gray-600 mb-6 space-y-2">
              <li>Increase brand awareness & loyalty</li>
              <li>Increase your qualified leads</li>
              <li>Elevate your conversion rate</li>
              <li>Foster a repeat customer base</li>
              <li>Decrease cost per lead</li>
              <li>Increase return on marketing investment</li>
            </ul>

            <button className="flex items-center justify-center bg-white text-[#ED1E3A]  py-4 px-8 md:py-5 md:px-10 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
              View pricing and plan
            </button>
          </div>

          {/* Right Section: Contact Form */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-full md:w-2/5">
            <h1 className="text-2xl md:text-[#ED1E3A]xl font-semibold text-gray-800 mb-6 capitalize">
              GET FREE EXPERT CONSULTATION
            </h1>
            <form action="#" method="POST">
              <div className="space-y-4">
                {/* Name (Full Width) */}
                <div className="w-full">
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Name*"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Email*"
                    required
                  />
                </div>

                {/* Phone Number with Country Flag */}
                <div>
                  <PhoneInput
                    id="phone"
                    defaultCountry="US"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Phone*"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    id="message"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Please tell us your project information"
                    rows="5"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                >
                  Get a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
