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
                            src="/Images/el-paso-seo-company.jpg"
                            alt="El Paso SEO Company"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:px-16"> {/* Reduced padding for smaller screens */}
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4"> {/* Adjusted text size */}
                        Professional El Paso SEO Company
                    </h2>
                    <p className="2xl:text-lg lg:text-base text-sm mb-4"> {/* Adjusted text size */}
                        Collab with the Best SEO Company El Paso
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-y-auto max-h-96 flex-1">
                        <p className="2xl:text-lg lg:text-base text-sm mb-6">
                            We at our SEO Company El Paso focus on driving measurable growth through our unique strategies to rank your website at the top of search results. This isn’t just about getting better at making you visible, it’s about continuing to bring a steady consistent stream of qualified traffic that converts into actual customers.
                            <br />
                            Our commitment to understanding your unique business goals makes us the best SEO company El Paso TX. In our campaigns, you will find integrated and innovative SEO techniques, advanced analytics, and industry expertise to sustain long-term success. If you’re looking to be local or global, we’ve got the tools and know-how to take your brand to the next level.
                            <br />
                            As a result-oriented SEO company, we focus on the overall growth of your business in El Paso Texas. Besides ranking, we build credibility and improve the user experience. We have strategic optimizations that bring true value. We will make your online presence precise and innovative to take your online presence to the next level.
                            <br />

                        </p>

                        <p>
                            Core Values
                            <li>Tailored Strategies: All campaigns are custom to your unique business goals.
                            </li>
                            <li>Transparency: We believe in clear communication and being transparent the whole time.
                            </li>
                            <li>Data-Driven Decisions: Actionable insights from detailed analytics are at the root of our approach.
                            </li>
                            <li>Long-Term Growth: We focus on strategies that guarantee your brand will be successful.
                            </li>
                            <li>Customer-Centric Approach: Results speak for themselves and we always put your satisfaction first.
                            </li>
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="open-popup text-lg font-semibold text-[#ED1E3A] mr-2 cursor-pointer">WE CAN INCREASE YOUR LEADS AND SALES</span>
                        <span className="text-2xl text-gray-800">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
