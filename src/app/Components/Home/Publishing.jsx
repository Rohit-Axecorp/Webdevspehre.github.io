"use client";

import React from 'react';

export default function Publishing() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start container 2xl:py-12 py-10 px-4 sm:px-6 lg:px-8">
            {/* Left Column - Code Section */}
            <div className="lg:w-1/2 bg-white lg:pr-8 mb-8 lg:mb-0">
                <h4 className="text-[#ED1E3A] lg:text-4xl 2xl:text-5xl font-bold"><span className='text-[#ED1E3A]'> In the Limelight WebDev Sphere </span>Featured by Top-Tier Industry Publications
                </h4>
                <p className="mt-6 text-black 2xl:text-lg lg:text-base text-sm">
                    Proving itself as one of the best web development companies, WebDev Sphere is celebrated by some of the prestigious publications in the tech industry as the testament of our impactful web design and development services.
                </p>
                <button className="group mt-5 relative px-6 py-3 text-white border-[#ED1E3A] bg-red-600 rounded-full 2xl:text-2xl lg:text-lg text-base  flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent">
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
                    {[
                        { src: "/Images/programminginsider.png", alt: "PI Logo" },
                        { src: "/Images/benzinga.png", alt: "BZ Logo" },
                        { src: "/Images/Khaleej-times.png", alt: "KT Logo" },
                        { src: "/Images/ein.png", alt: "EIN Logo" },
                        { src: "/Images/ap.png", alt: "AP Logo" },
                        { src: "/Images/iem.png", alt: "Checkmark Logo" },
                        { src: "/Images/Digital-journal.png", alt: "Digital Journal Logo" },
                        { src: "/Images/gt.png", alt: "GT Logo" },
                        { src: "/Images/Grit-Daily.png", alt: "Grit Daily Logo" },
                        { src: "/Images/timebusiness.png", alt: "Time Business Logo" },
                        { src: "/Images/Zwwya.png", alt: "Zawya Logo" },
                        { src: "/Images/mbn.png", alt: "MBN Logo" },
                    ].map((logo, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img src={logo.src} alt={logo.alt} className="2xl:w-20 2xl:h-20 w-16 h-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
