"use client";

import React from 'react';
import Slider from './Slider';

export default function Strategies() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto container px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          {/* Left Column - Static Content */}
          <div className="w-full lg:w-1/2 xl:w-1/3 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Web Design And Development Company In Dubai
            </h1>
            <p className="text-[#ED1E3A] text-xl sm:text-2xl mt-4">
              Let&apos;s Turn Visitors Into Customers
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
              As a leading web design company in Dubai, we promise to build websites for businesses that bring them convertible traffic and measurable success. Your success is our goal and we are dedicated to it.
            </p>
            <button className="group mt-6 relative px-6 py-3 border border-black rounded-full text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
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
