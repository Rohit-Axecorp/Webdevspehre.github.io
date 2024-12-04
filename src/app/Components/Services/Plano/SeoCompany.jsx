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
                            src="/Images/Plano SEO Company.png"
                            alt="Plano SEO Company"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        We&apos;re the Best Plano SEO Company
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Partner with the Top SEO Company Plano for Proven Results!
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            At Website Dev Sphere, we&apos;re proud to be the best Plano SEO company, offering customized SEO solutions that drive results. Our comprehensive SEO plan is designed to elevate your online presence and help your business succeed.
                            <br />

                            Plano, located in the heart of North Texas, is a vibrant and growing city known for its thriving economy, excellent quality of life, and rich cultural heritage. It is home to many thriving businesses, and we help you stand out with local SEO strategies that put your business on the map. Our Search Engine Optimization Plano company ensures you attract customers in your area, driving more foot traffic and online leads.
                            <br />

                            We have a track record of serving the following cities:
                            <br />
                            <ul>
                                <li>
                                    Frisco
                                </li>
                                <li>
                                    Carrolton
                                </li>
                                <li>
                                    Richardson
                                </li>
                                <li>
                                    Allen
                                </li>
                                <li>
                                    McKinney
                                </li>
                            </ul>

                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-[#ED1E3A] mr-2">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
