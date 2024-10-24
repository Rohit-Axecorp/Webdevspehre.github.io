import React from 'react';

export default function Roadmap() {
    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Comprehensive Process for SEO Services Austin
                    </h1>
                    <p className="text-gray-600 w-2/3 mx-auto mb-12">
                        As a leading Austin SEO company, our team of Austin Texas SEO experts is dedicated to helping you achieve your long-term goals with a process that combines industry best practices and local insights.
                    </p>
                    <div className="relative flex lg:flex-row flex-col items-center lg:gap-0 gap-5">
                        {/* Line Container */}
                        <div className="absolute inset-0 flex items-center z-30 -mt-16">
                            <div className="w-5/6 mx-auto h-[2px] bg-gray-300 hidden lg:block"></div>
                        </div>
                        {/* Steps */}
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-col items-center relative lg:w-1/5 w-1/2 ">
                                <div
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-200 relative z-10">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Custom Headings for Each Step */}
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {index === 0 && "Audit & Analysis"}
                                    {index === 1 && "Keyword Research & Strategy"}
                                    {index === 2 && "On-Page Optimization"}
                                    {index === 3 && "Link-Building & PR"}
                                    {index === 4 && "Tracking & Reporting"}
                                </h3>

                                {/* Paragraphs for Each Step */}
                                <p className="text-gray-500">
                                    {index === 0 && "Conducting thorough SEO audits to pinpoint growth opportunities."}
                                    {index === 1 && "Finding high-intent keywords that are relevant to your business."}
                                    {index === 2 && "Optimizing on-page elements like web content, meta tags, and images."}
                                    {index === 3 && "Securing high-quality backlinks and leveraging digital PR strategies."}
                                    {index === 4 && "Monitoring SEO performance with detailed monthly tracking reports."}
                                </p>

                                {/* Dot */}
                                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full z-40 -mt-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
