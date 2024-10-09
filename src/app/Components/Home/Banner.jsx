"use client";


import Image from 'next/image';
import React from 'react';
import '../Home/Banner.css';

export default function Banner() {
    return (
        <div className="relative w-full">
            {/* Background Image that covers the entire section */}
            <Image
    src="/Images/background-image.webp" // Replace with your background image
    alt="Background Purple"
    fill // Use fill instead of layout="fill"
    className="absolute top-0 left-0 w-full h-full z-0 object-cover" // Use object-cover as a class
/>
            {/* Two-column layout for content and image */}
            <div className="relative z-10 flex justify-between items-center container pt-20">
                {/* Left Column: Content */}
                <div className="flex flex-col justify-center pl-16 md:pl-24 z-20 text-white w-2/5">
                    <div className="inline-flex items-center">
                        <div className="border border-white rounded-xl mb-4 px-4 py-2 inline-flex items-center bg-[#1b1b1b]">
                            <p className="text-red-500 text-2xl font-bold">
                                <span>A Smart Choice</span>
                                <span className="text-white"> for Every Business Owner</span>
                            </p>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl  font-bold text-red-500 mb-8 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"> Pick Your Perfect Website!</span>
                    </h1>
                    <button className="relative px-8 py-4 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-full shadow-lg overflow-hidden group hover:bg-red-700 transition duration-300 ease-in-out w-2/3">
                        <span className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-500 opacity-0 rounded-full transition duration-500 ease-in-out group-hover:opacity-50 group-hover:translate-x-full"></span>
                        <span className="relative z-10 text-lg font-normal">Get <span className='font-semibold'>Free</span> Consultation Now</span>
                    </button>
                </div>
                {/* Right Column: Image */}
                <div className="flex justify-center z-20 w-1/2">
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
