"use client";
import React from 'react';
import '../Home/ContactForm.css';


export default function ContactForm() {
  return (
    <div className="flex justify-center items-center pt-40 pb-16 bg-gray-100">
      <div className="flex bg-red-500 p-8 shadow-lg relative container h-[450px] ">
        {/* Form Section */}
        <div className="bg-white p-8 shadow-md w-2/5 h-[500px] relative -top-32">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name*"
                className="w-full border-b border-gray-300 py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-lg"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full border-b border-gray-300 py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-lg"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone*"
                className="w-full border-b border-gray-300 py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-lg"
              />
            </div>

            {/* Website Field */}
            <div>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Website"
                className="w-full border-b border-gray-300 py-4 px-4 focus:ring-0 focus:border-b-red-500 text-black text-lg"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-2/5 bg-red-500 text-xl rounded-md text-white font-semibold py-3 px-2 hover:bg-red-600 transition"
              >
                Get A Free Quote
              </button>
            </div>
          </form>
          <p className="mt-4 text-lg text-gray-500">We respect your privacy.</p>
        </div>

        {/* Text and Image Section */}
        <div className="relative w-3/5 flex items-start">
          <div className="text-white w-2/3 p-6">
            <p className='text-2xl font-light'>No fluff. No BS. Just pure results.</p>
            <p className="text-2xl font-light">
              Our clients achieve an average of <span className="text-black font-semibold">4-5x ROI</span> when they employ our digital marketing services – you can too.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li className='text-xl font-light mb-2'>Dominate online traffic</li>
              <li className='text-xl font-light mb-2'>Outperform competitors</li>
              <li className='text-xl font-light mb-2'>Increase conversions</li>
              <li className='text-xl font-light mb-2'>Track and monitor results</li>
              <li className='text-xl font-light mb-2'>Reduce cost per acquisition effectively</li>
            </ul>
          </div>

          {/* Girl Image */}
          <div className="absolute right-[-50px] bottom-0 w-1/3">
            <img
              src="/Images/model1.webp" // Use the correct path to your image
              alt="Woman pointing"
              className="h-auto max-w-full"
              style={{ width: '350px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
