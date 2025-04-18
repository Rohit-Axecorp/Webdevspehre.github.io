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
                            src="/Images/dallas-seo-company.jpg"
                            alt="Dallas SEO Company"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4"> {/* Adjusted text size */}
                        Professional SEO Solutions
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-smmb-4"> {/* Adjusted text size */}
                        Experience Higher Sales with Our Dallas Texas SEO Company
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="2xl:text-lg lg:text-base text-sm mb-6">
                            We are a reputable Dallas SEO company that caters to more than just basic optimization. Web Dev Sphere is an all-inclusive platform that provides comprehensive SEO solutions under one roof.
                            <br />

                            Dallas is a vibrant and lively hub in North Texas, known for its strong economy, high quality of life, and diverse cultural scene. It&apos;s a city full of thriving businesses, and we&apos;re here to help yours stand out. With our personalized local SEO strategies, we&apos;ll make sure your brand gets the attention it deserves in this bustling market.
                            <br />

                            Our Dallas SEO experts know all about the competition, search behavior, and trends to give your business the edge it deserves. So, partnering with a Dallas Texas SEO company  today means scaling your business and ensuring lasting success.
                            <br />

                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="open-popup text-lg font-semibold text-[#ED1E3A] mr-2 cursor-pointer">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
