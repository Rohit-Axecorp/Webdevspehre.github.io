"use client"

import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input'; // Import PhoneInput for country flag selection

export default function WebmaintenanceQuote() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex justify-between container py-12">
          {/* Left Section */}
          <div className=" pt-5 w-1/2">
            {/* Subheading */}

            {/* Main Heading */}
            <h1 className="text-6xl font-bold text-gray-800 mb-8 uppercase">
              Website Maintenance Services
            </h1>
            <h2 className="text-2xl font-medium text-gray-700 mb-2 uppercase">
              Say Goodbye to these Web Maintenance Problems!
            </h2>

            {/* Benefits List */}
            <ul className=" text-lg text-gray-600 mb-6 space-y-3">
              <li>Increase brand awareness & loyalty</li>
              <li>Increase your qualified leads</li>
              <li>Elevate your conversion rate</li>
              <li>Foster a repeat customer base</li>
              <li>Decrease cost per lead</li>
              <li>Increase return on marketing investment</li>
            </ul>

            <button className="flex items-center justify-center uppercase bg-white text-red-500 py-5 px-10 rounded-lg text-xl font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
              View pricing and plan
            </button>
          </div>

          {/* Right Section: Contact Form */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-2/5">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">
              GET FREE EXPERT CONSULTATION
            </h1>
            <form action="#" method="POST">
              <div className="space-y-4">
                {/* Name (Full Width) */}
                <div className="w-full">
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Name*"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Email*"
                    required
                  />
                </div>

                {/* Phone Number with Country Flag */}
                <div>
                  <PhoneInput
                    id="phone"
                    defaultCountry="US"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Phone*"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    id="message"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Please tell us your project information"
                    rows="5"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
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