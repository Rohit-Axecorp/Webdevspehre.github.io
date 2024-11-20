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
                        Collaborate with the Best SEO Company in Houston
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Build an online presence that sustains and ensures a solid domain authority, generating leads that convert users quickly.
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            You can rely on us as the best Houston SEO company that combines technical expertise with creative strategy to make your website rank at the top of search engine results. Based on our sharp methodologies to power organic traffic, user engagement, and conversions. We work with your business’s specific goals to drive measurable results that produce sustainable growth.
                            <br />
                            Apart from other SEO companies in Houston, we are data-driven, meaning that we search for opportunities and solve issues in your online presence. We measure our efforts from optimizing on-page elements to building high-quality backlinks to make you the authority in your niche and above your competition.
                            <br />

                            We provide professional SEO services Houston businesses depend on for long-term success, partnering with us means you can have the best of the best. We have comprehensive SEO strategies for enhancing your local visibility as well as broadening your reach across the country.
                            <br />

                            Our Core Values:
                            <ul className="list-disc list-inside mt-2">
                                <li><b>Transparency:</b> Detailed reporting at every step of the way, combined with open communication.
                                </li>
                                <li><b>Customization:</b> Strategies perfectly suited to your business needs.
                                </li>
                                <li><b>Innovation:</b> Utilizing the most up-to-date technology to produce results like you&apos;ve never seen before.
                                </li>
                                <li><b>Dedication:</b> A team at Anderson is committed to helping you be successful.
                                </li>
                                <li><b>Results-Oriented Approach:</b> I want to ensure ROI that is maximized and has a long-lasting impact.
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
