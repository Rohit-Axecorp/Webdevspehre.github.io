"use client";

import React from "react";

export default function SeoSolution() {
    const image = '/Images/comrade-img-1.jpg'; // Static image path

    return (
        <>
            <section className="bg-red-500 py-12">
                <div className="flex flex-col md:flex-row p-6 container mx-auto gap-20">
                    {/* Left Column */}
                    <div className="md:w-1/2 flex flex-col justify-center p-4">
                        <h2 className="text-3xl font-bold mb-4 text-white ">
                            Get Solution Tailored for Your Chicago Business
                        </h2>
                        <p className="mb-4 text-white ">
                            At Comrade, we&apos;re committed to empowering businesses across Chicago by driving leads and boosting revenue. Regardless of your industry or niche, our team excels at tailoring solutions to meet your unique needs, ensuring your business reaches its goals. If you haven’t discovered an ideal solution that suits your Chicago-based enterprise, reach out to us, and let’s explore how our SEO expertise can be the catalyst for your success!
                        </p>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900-600 w-1/3">
                            Get Custom Solution
                        </button>
                    </div>

                    {/* Right Column - Static Image */}
                    <div className="md:w-1/2">
                        <img 
                            src={image} 
                            alt="Chicago Business Solution" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
