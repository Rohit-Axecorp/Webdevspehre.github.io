"use client";

import React from 'react';
export default function CTAsection() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12 container">
      <div
        className="mx-auto max-w-7xl rounded-3xl bg-cover bg-center lg:p-16 md:p-10 p-4 text-center relative"
        style={{ backgroundImage: "url('/Images/footer-top.webp')" }}
      >
        <h4 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white md:w-2/3 w-full mx-auto px-4">
          Still Scrolling? It&apos;s Time to
          {' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ED1E3A] to-red-700'>
            Get Started!
          </span>
        </h4>
        {/* 
        <div className="absolute left-2/3 top-[55%]">
          <img src={'Images/arrow.svg'} alt="Arrow" className="w-16 h-16" />
        </div> */}
        <div className="border border-black rounded-full lg:my-4 my-2 px-4 py-2 inline-flex items-center bg-[#1b1b1b]">
          <span className="text-white lg:text-lg text-base font-medium">
            Let&apos;s move forward to grow your presence online.
          </span>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="relative px-8 py-4 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-full shadow-lg overflow-hidden group hover:bg-red-700 transition duration-300 ease-in-out lg:w-1/4 sm:w-2/4 w-3/4">
            <span className="absolute inset-0 bg-gradient-to-r from-red-300 to-[#ED1E3A] opacity-0 rounded-full transition duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-full"></span>
            <span className="relative z-10 text-lg font-normal">Let&apos;s Talk</span>
          </button>
        </div>


      </div>
    </div>
  );
}
