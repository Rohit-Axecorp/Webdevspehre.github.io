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
                        Chicago SEO Company
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4"> {/* Adjusted text size */}
                        Boost your ROI with Proven SEO Solutions From a Leading SEO Agency in Chicago, IL
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="text-lg text-gray-600 mb-6">
                            Comrade Digital Marketing Agency in Chicago offers comprehensive marketing solutions to enhance online presence and drive business growth. With expertise in marketing and search engine optimization, our award-winning team helps clients create effective marketing funnels to attract qualified leads.
                            <br />
                            Nestled along the picturesque shores of Lake Michigan, Chicago, Illinois exudes vibrancy and prosperity. A bustling modern metropolis, the city showcases a diversified and robust economy encompassing finance, manufacturing, technology, healthcare, and hospitality sectors.
                            <br />

                            Chicago proudly hosts numerous Fortune 500 companies, establishing it as a coveted hub for business and commerce. Its prime central location and exceptional transportation infrastructure ensure seamless access to both domestic and international markets, amplifying its appeal as a thriving business destination. Chicago embraces entrepreneurship and innovation, fostering a supportive ecosystem with abundant resources for startups and small businesses.
                            <br />

                            Boasting a highly skilled workforce, renowned educational institutions, and a dynamic entrepreneurial culture, the city creates an ideal environment for business growth. Furthermore, Chicago&apos;s strategic positioning, diverse talent pool, and vibrant cultural scene make it an irresistible magnet for professionals and companies seeking abundant opportunities.
                            <br />

                            With its flourishing economy, favorable business climate, and unwavering potential, Chicago remains a premier choice for enterprises seeking to establish or expand their footprint within the United States.
                            <br />

                            Comrade has worked with diverse businesses, including B2B, B2C, eCommerce, home services, and law firms. While we can&apos;t predict market fluctuations, our track record assures business expansion through our services.
                            <br />

                            We&apos;re a full-service SEO agency, proudly helping businesses in Chicago and surrounding areas:
                            <ul className="list-disc list-inside mt-2">
                                <li>Schaumburg</li>
                                <li>Aurora</li>
                                <li>Evanston</li>
                                <li>Naperville</li>
                                <li>and others</li>
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
