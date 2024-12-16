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
                            src="/Images/austin-seo-company.jpg"
                            alt="Austin SEO Company"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4"> {/* Adjusted text size */}
                        Professional Austin SEO Company
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-sm mb-4"> {/* Adjusted text size */}
                        Outrank Competitors and Capture More Leads with Strategic SEO
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="2xl:text-lg lg:text-base text-sm mb-6">
                            At <a href="/">Web Dev Sphere</a>, we pride ourselves on being the best SEO company Austin TX offering customized SEO services with real results. Our full-cycle SEO strategy targets increasing online website visibility and guaranteeing your business&apos;s success in a very competitive market.
                            <br />

                            Located in Texas, Austin enjoys a thriving tech hub, vibrant culture, and a dynamically developing economy. With so many businesses expanding rapidly in the area, we&apos;ll help you stand out with local SEO strategies that put your business in the top searches. Our Search Engine Optimization service Austin ensures that you will reach customers in your community and drive more foot traffic and online leads right to your business.
                            <br />

                            We have years of experience working with successful businesses in Austin and within the growing neighboring cities of <a href="/austin-seo-company">Austin</a>, <a href="/fort-worth-seo-company">Fort Worth</a>, <a href="/houston-seo-company">Houston</a>, <a href="/plano-seo-company">Plano</a>, <a href="/dallas-seo-company">Dallas</a>, Round Rock, Cedar Park, Pflugerville, Georgetown, and Lakeway.
                            <br />

                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-[#ED1E3A]  mr-2">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
