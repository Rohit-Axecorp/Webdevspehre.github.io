"use client";

import React from 'react';

export default function Digitalsocialmedia() {
    return (
        <>
            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="mb-4 text-center">
                        <span className='text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-light pb-2'>See Our Success Stories:</span>
                        <br />
                        <span className='text-3xl lg:text-4xl 2xl:text-5xl font-bold'>A Portfolio of Proven Results</span>
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-sm text-center max-w-xl">
                    Here are some of our client’s success stories of SEO social media marketing services:
                    </p>
                </div>

                {/* Grid Layout for Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="/Images/ufc-portfolio.webp"
                            alt="Feature 1"
                            className="w-full h-auto object-cover transition duration-300 transform group-hover:scale-105"
                        />
                        <video
                            src="/Images/UFC Small (1).mp4"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            muted
                            loop
                            preload="auto"
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="/Images/Triworld.webp"
                            alt="Feature 2"
                            className="w-full h-auto object-cover transition duration-300 transform group-hover:scale-105"
                        />
                        <video
                            src="/Images/Triworld Small.mp4"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            muted
                            loop
                            preload="auto"
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                    </div>

                    {/* Column 3 */}
                    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="/Images/Suntree-MOckup.webp"
                            alt="Feature 3"
                            className="w-full h-auto object-cover transition duration-300 transform group-hover:scale-105"
                        />
                        <video
                            src="/Images/Suntree Small.mp4"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            muted
                            loop
                            preload="auto"
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
