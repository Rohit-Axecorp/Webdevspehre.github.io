import React from 'react';

export default function Roadmap() {
    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-6">
                        Our Result-Driven Road Map for Dallas SEO Services
                    </h3>
                    <p className="2xl:text-lg lg:text-base text-sm text-gray-600 w-2/3 mx-auto mb-12">
                        As a leading SEO company Dallas, we follow a streamlined approach to SEO that&apos;s designed to boost your website&apos;s visibility and drive organic traffic. Our Austin Texas SEO experts help you achieve your long-term goals!
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
                                    className="text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-200 relative z-10">
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
                                <p className="2xl:text-lg lg:text-base text-sm text-gray-500">
                                    {index === 0 && "Conducting SEO audits to identify opportunities and improvement areas."}
                                    {index === 1 && "Researching high-intent relevant keywords to attract the target audience."}
                                    {index === 2 && "Optimizing on-page elements like website content, meta tags, images, etc."}
                                    {index === 3 && "Securing high-quality backlinks and using digital PR to grow the website’s authority."}
                                    {index === 4 && "Monitor your SEO performance with monthly reports, ensuring continuous growth."}
                                </p>

                                {/* Dot */}
                                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:w-4 2xl:h-4 w-3 h-3 bg-red-600 rounded-full z-40 -mt-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
