"use client";

import React from 'react'

export default function Publishing() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start container lg:py-16 py-10 ">
            {/* Left Column - Code Section */}
            <div className="lg:w-1/2 bg-white pr-8">
                <h1 className="lg:text-5xl text-3xl font-bold">Aun Digital in Spotlight - Featured by The Most Prestigious Publishing Houses</h1>
                <p className="mt-6 text-gray-600 leading-relaxed">
                Our reputation as the best web design company in Dubai is reflected through the prestigious exhibition of our comprehensive work on distinguished websites.
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

            {/* Right Column - Logo Grid Section */}
            <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-3 gap-4">
                    {/* Logos - You can replicate this for other logos */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/programminginsider.png" alt="PI Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/benzinga.png" alt="BZ Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/Khaleej-times.png" alt="KT Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/ein.png" alt="EIN Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/ap.png" alt="AP Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/iem.png" alt="Checkmark Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/Digital-journal.png" alt="Digital Journal Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/gt.png" alt="GT Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/Grit-Daily.png" alt="Grit Daily Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/timebusiness.png" alt="Time Business Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/Zwwya.png" alt="Zawya Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Images/mbn.png" alt="MBN Logo" className="w-20 h-20" />
                    </div>
                </div>
            </div>
        </div>
    )
}
