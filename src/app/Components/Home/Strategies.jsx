"use client";

import React from 'react';
import Slider from './Slider';

export default function Strategies() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto container px-4 sm:px-6 lg:px-8 py-10 2xl:py-12">
          {/* Left Column - Static Content */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h3 className="text-[#ED1E3A] lg:text-4xl 2xl:text-5xl text-[#ED1E3A]  font-bold leading-tight">
              Our Web Development Services
            </h3>
            <p className="text-xl lg:text-[#ED1E3A] font-semibold mt-2">
              From Concept to Code: Services Designed to Elevate Your Brand
            </p>
            <p className="mt-6 2xl:text-lg lg:text-base text-sm text-black leading-7">
              Unlike normal web development firms, WebDev Sphere is an entire web design and improvement organization dedicated to creating client-focused online solutions that lift your brand’s online existence.
            </p>
            <button className="group mt-6 relative px-6 py-3 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
              More About Us
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
          {/* Slider Component */}
          <Slider />
        </div>
      </div>
    </>
  );
}
