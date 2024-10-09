"use client";

import React from 'react';
export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden md:p-8 p-4">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        <source src="/backgroundVideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-black md:p-8 p-4">
        <div className="container">
          {/* Content Box */}
          <div className="bg-white bg-opacity-50 p-5 rounded-2xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-4xl font-bold mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
            <p className="text-xl mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="group relative px-6 py-3 border border-black rounded-full text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
              More About Us
              {/* Inline SVG for the arrow icon */}
              <svg
                className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-2"
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
