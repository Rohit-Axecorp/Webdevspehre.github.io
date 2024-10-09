"use client";


import React from 'react'
import Slider from './Slider'


export default function Strategies() {
    return (
        <>

            <div className='bg-gray-100'>
                <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto container  lg:py-16 py-10">
                    {/* Left Column - Static Content */}
                    <div className="xl:w-1/3 lg:w-1/2 w-full pr-8">
                        <h1 className="lg:text-5xl text-3xl font-bold">Web Design And Development Company In Dubai</h1>
                        <p className="text-[#ED1E3A] text-2xl mt-4">Let&apos;s Turn Visitors Into Customers</p>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            As a leading web design company in Dubai, we promise to build websites for businesses that bring them convertible traffic and measurable success. Your success is our goal and we are dedicated to it.
                        </p>
                        <button className="group mt-3 relative px-6 py-3 border border-black rounded-full text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
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
                    <Slider />
                </div>
            </div>


        </>
    )
}
