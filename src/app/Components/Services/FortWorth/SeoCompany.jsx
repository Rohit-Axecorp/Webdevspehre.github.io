"use client";

import React from 'react';

export default function SeoCompany() {
    return (
        <section className='bg-gray-100 py-6 md:py-12'> {/* Reduced padding for smaller screens */}
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Image Column */}
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full -mb-10 md:-mb-16 lg:-mb-32"> {/* Adjusted margin for smaller screens */}
                        <img
                            src="/Images/Chicago-SEO-Agency.jpg.webp"
                            alt="Chicago City View"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        Best SEO Company Fort Worth
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Dominate In the Market with Specialized Dallas SEO
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            We are a reputable Fort Worth SEO company that doesn&apos;t limit itself only to basic optimization. Our experts provide all-inclusive SEO solutions customized to help your business thrive in Fort Worth&apos;s growing ecosystem.
                            <br />

                            Fort Worth is an impeccable city in the Dallas-Fort Worth metroplex, known for its rich history, culture, and economic growth. It is home to many businesses from industries like oil and gas, healthcare, and technology. With a rapidly growing population and ever-expanding local economy, the opportunities are vast, and so is the competition.
                            <br />

                            Web Dev Sphere takes care of every aspect of your digital marketing needs under one roof, ensuring your brand stands out online with Austin, Texas SEO services.
                            <br />

                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-red-500 mr-2">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
