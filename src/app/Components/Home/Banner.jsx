"use client";

import Image from 'next/image';
import React from 'react';
import '../Home/Banner.css';

export default function Banner() {
  return (
    <div className="relative w-full py-12">
      {/* Background Image that covers the entire section */}
      <Image
        src="/Images/background-image.webp" // Replace with your background image
        alt="Background Purple"
        fill
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />

      {/* Two-column layout for content and image */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center container lg:pt-24 px-6 md:px-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:pl-16 md:pl-24 z-20 text-white w-full md-3/5 lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center">
            <div className="border border-white rounded-xl mb-4 px-4 py-2 inline-flex items-center bg-[#1b1b1b]">
              <p className="text-[#ED1E3A] text-xl 2xl:text-2xl font-bold">
                <span>Web Solutions
                </span>
                <span className="text-white"> Built to Win</span>
              </p>
            </div>
          </div>
          <h5 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#ED1E3A] mb-6 lg:mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1E3A] to-red-700">
              Build the Website Your Brand Deserves!
            </span>
          </h5>
          <button className="relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-full shadow-lg overflow-hidden group hover:bg-red-700 transition duration-300 ease-in-out w-2/3 lg:w-2/3 mx-auto lg:mx-0">
            <span className="absolute inset-0 bg-gradient-to-r from-red-300 to-[#ED1E3A] opacity-0 rounded-full transition duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-full"></span>
            <span className="relative z-10 text-base 2xl:text-lg font-normal">
              Get a <span className="font-semibold">Free
              </span> Strategy Call Now
            </span>
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center z-20 w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/Images/perfect-website.webp" // Replace with the website image
            alt="Website Preview"
            width={716}
            height={384}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
