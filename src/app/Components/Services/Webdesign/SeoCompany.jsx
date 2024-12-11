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
                    <h2 className="text-2xl md:text-[#ED1E3A] font-bold text-gray-800 mb-2"> {/* Adjusted text size */}
                        Work with the Best Web Design Company in Houston
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Crafting an intuitive and user-centric web design increases your chances of converting more users with a 3X ROI and you can achieve it by collaborating with Webdev Sphere.
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            We redefine web design at WebDev Sphere where creativity, strategy, and technology are combined to deliver an exceptional digital experience. We are one of Houston&apos;s top web design companies, and this means we consider your brand&apos;s vision before coming up with solutions that will relate to your audience.
                            <br />
                            Our expertise as a web design firm in Houston Texas lies in using advanced methodologies and creating visually stunning, user-friendly websites. Whether it’s an awesome UI or a rich platform, we always put user satisfaction and long-term functionality first.
                            <br />

                            Here, we are a trusted web design company in Houston that provides measurable results. They are our next-generation web design services that help your business grow with your online visibility. At us, your digital will win the market landscape filled with competitors.
                            <br />

                            Core Values:
                            <ul className="list-disc list-inside mt-2">
                                <li><b>User-Centric Design:</b> We apply thorough user research to drive our designs and build experiences that fit the audience to the point.
                                </li>
                                <li><b>Innovative Technology:</b> Our next-gen tools and techniques are used to deliver modern, future-proof solutions that are scalable.
                                </li>
                                <li><b>Collaboration-Driven Process: </b> We’re working hand in hand with you at every step so the final design reflects what you envisioned.
                                </li>
                                <li><b>Commitment to Excellence:</b> We have high-quality standards to achieve and surpass clientele’s expectations.
                                </li>
                                <li><b>Growth-Oriented Approach:</b> We design intending to help your business grow by increasing brand visibility as well as driving user engagement.
                                </li>

                            </ul>
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-lg font-semibold text-blue-600 mr-2">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
