"use client";

import React from 'react';

export default function Digitalsocialmedia() {
    return (
        <>
            <section className="container py-12">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="mb-4 text-center">
                        <span className='text-5xl font-light pb-2'>Our Works Define Our</span>
                        <br />
                        <span className='text-6xl font-bold '>Success Look Through Some</span>
                    </h2>
                    <p className="text-xl text-center max-w-xl">
                        Excellent customer service is our foundation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="relative group bg-white shadow-lg rounded-lg p-4">
                        <img
                            src="/Images/ufc-portfolio.webp"
                            alt="Feature 1"
                            className="w-full h-auto transition duration-300 transform group-hover:scale-105"
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
                    <div className="relative group bg-white shadow-lg rounded-lg p-4">
                        <img
                            src="/Images/Triworld.webp"
                            alt="Feature 2"
                            className="w-full h-auto transition duration-300 transform group-hover:scale-105"
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
                    <div className="relative group bg-white shadow-lg rounded-lg p-4">
                        <img
                            src="/Images/Suntree-MOckup.webp"
                            alt="Feature 3"
                            className="w-full h-auto transition duration-300 transform group-hover:scale-105"
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
