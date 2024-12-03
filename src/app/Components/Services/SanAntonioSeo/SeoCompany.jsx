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
                            src="/Images/Austin SEO Company.png"
                            alt="Austin SEO Company"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        Professional San Antonio SEO Company
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Associate Your Business with a Reliable SEO Company in San Antonio
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            When you are in a competitive digital world, you will need to properly position your business with a proven SEO company in San Antonio TX. Our goal is to help elevate your online visibility through data-driven strategies that will get you the results you want. With plenty of experience being among the top SEO companies in San Antonio, we integrate innovative solutions with a comprehensive view of search algorithms to guarantee top ranks for your website.
                            <br />

                            It’s more than rankings: we aim to deliver measurable value to your business. When working with a local SEO company San Antonio, you get a team of experts that boost brand credibility and targeted traffic, convert visitors into loyal customers, and more. We support businesses to thrive in a digital world with an emphasis on sustainable growth.
                            <br />

                            Exceptional results are at the core of our services. We look after all aspects of SEO — from keyword optimization to technical SEO — so your business gets the most out of its online presence. We’ll help you turn your website into a winning weapon, a powerful asset to your brand.
                            <br />

                        </p>

                        <p>
                            Core Values
                            <li>Data-Driven Excellence: Every strategy is backed by research and analysis.</li>
                            <li>Transparency: Clear reporting and communication every step of the way.</li>
                            <li>Customization: Solutions tailored to fit your unique business needs.</li>
                            <li>Integrity: Ethical practices that prioritize long-term success.</li>
                            <li>Growth-Focused: Dedicated to measurable outcomes and ROI.</li>
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
