"use client";

import React from 'react';
import PopupModal from '../PopupModal';

export default function Hero() {
  return (
    <div className="relative 2xl:h-[700px] h-[600px] w-full overflow-hidden py-12">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
        <source src="/bg_video_home.mp4" type="video/mp4" />
        <source src="/bg_video_home.webm" type="video/webm" />
        Your browsernot support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-black p-0 md:p-6 lg:p-8 py-10">
        <div className="container mx-auto">
          {/* Content Box */}

          <h1 className='text-[#ED1E3A] 2xl:text-2xl lg:text-lg text-base font-semibold capitalize'>Web designing and development company</h1>
          <div className="py-2 lg:py-4 rounded-2xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-3xl">
            <p className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2 text-white">
              Digitizing Business Experience with for Sustainable Growth
            </p>
            <p className="2xl:text-lg text-sm my-4 font-normal text-white">
              Sell experience rather than a product or service. WebDev Sphere has introduced a way for startups to create an impact on clients with its futuristic <a href='https://webdevsphere.com/'>web design and development services.</a> With user-centric UI to highly functional features and mobile-first experience, we create websites from scratch right according to your brand purpose. Plus, you can sustain your business online by leveraging our secret digital marketing strategy.
            </p>
            <PopupModal />
            <button id="open-popup" className="open-popup group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-10 2xl:py-4 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent">
              Digitize Your Presence!
              {/* Inline SVG for the arrow icon */}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
