"use client";

import React from 'react';

export default function Hero() {
  return (
    <div className="relative lg:h-[88vh] h-[60vh] w-full overflow-hidden py-12">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        <source src="/backgroundVideo.webm" type="video/webm" />
        Your browsernot support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-black p-4 md:p-6 lg:p-8">
        <div className="container mx-auto">
          {/* Content Box */}

          <h1 className='text-red-500 text-2xl h1x-4 sm:px-6 lg:px-8 font-semibold'>Web designing and development company</h1>
          <div className=" p-4 sm:p-6 lg:p-8 rounded-2xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-white">
              Digitizing Business Experience with for Sustainable Growth

            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl my-4 leading-relaxed font-normal text-white">
              Sell experience rather than a product or service. WebDev Sphere has introduced a way for startups to create an impact on clients with its futuristic web design and development services. With user-centric UI to highly functional features and mobile-first experience, we create websites from scratch right according to your brand purpose. Plus, you can sustain your business online by leveraging our secret digital marketing strategy.
            </p>
            <button className="group relative px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 border border-black rounded-full text-sm sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
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
