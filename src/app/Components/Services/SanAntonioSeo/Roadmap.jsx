import React from 'react';

export default function Roadmap() {
    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Best SEO Service San Antonio – Our Proven Process
                    </h3>
                    <p className="text-gray-600 w-2/3 mx-auto mb-12">
                        SEO for us is all about depth research, data-led strategies, and advanced optimizing. With years of experience as one of the top San Antonio SEO companies, we know how to drive measurable results to match your business goals. When you partner with us, you can count on experts to provide innovative solutions to your SEO services in San Antonio.
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
                                    {index === 0 && "In-depth data gathering and market study to set the foundation."}
                                    {index === 1 && "Crafting a customized SEO roadmap for your business."}
                                    {index === 2 && "Implementing strategies to enhance website visibility"}
                                    {index === 3 && "Monitoring performance to ensure continuous improvement."}
                                    {index === 4 && "Refining strategies based on data and emerging trends"}
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
