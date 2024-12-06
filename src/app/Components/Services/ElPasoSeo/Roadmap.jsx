import React from 'react';

export default function Roadmap() {
    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Transform Results with the Expertise of SEO Company El Paso TX
                    </h3>
                    <p className="text-gray-600 w-2/3 mx-auto mb-12">
                        Our SEO company El Paso TX has derived custom strategies that align with your unique goals and business needs. Apart from other El Paso SEO companies, we combine data-driven insights with industry expertise to deliver exceptional results. Let us show you why we stand out among all SEO company in El Paso Texas with our comprehensive process.
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
                                    {index === 0 && "Research & Analysis"}
                                    {index === 1 && "Strategy Plan"}
                                    {index === 2 && "Optimize"}
                                    {index === 3 && "Track Results"}
                                    {index === 4 && "Improvise"}
                                </h3>

                                {/* Paragraphs for Each Step */}
                                <p className="text-gray-500">
                                    {index === 0 && "Deep dive into your business, industry, and competitors to uncover opportunities."}
                                    {index === 1 && "Create a custom roadmap for SEO success aligned with your objectives."}
                                    {index === 2 && " Implement proven on-page and off-page strategies for maximum impact."}
                                    {index === 3 && "Monitor performance metrics to measure progress and ROI."}
                                    {index === 4 && "Continuously refine strategies based on insights and trends."}
                                </p>

                                {/* Dot */}
                                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full z-40 -mt-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
