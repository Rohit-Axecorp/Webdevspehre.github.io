"use client";

import React from "react";
import CountUp from "react-countup";

export default function ProcessSocialMedia() {
    const iconBoxes = [
        { number: 1, heading: "Target Analysis", text: "Analyze demographics, preferences, behaviors, and pain points to tailor your message effectively" },
        { number: 2, heading: "Brainstorming Ideas", text: "Gather a team or work individually to brainstorm creative ideas that resonate with your target audience." },
        { number: 3, heading: "Determining Marketing Medium", text: "Decide on the best channels to reach your audience such as social media, email, online ads, content marketing, etc." },
        { number: 4, heading: "Creative Designs", text: "Develop visually appealing and engaging materials like graphics and videos that align with your campaign message." },
        { number: 5, heading: "Set Marketing Goals", text: "Define clear, measurable objectives for your campaign, such as increasing brand awareness and generating leads." },
        { number: 6, heading: "Create Campaigns", text: "Plan and execute your marketing campaigns based on the ideas generated and the mediums selected." },
        { number: 7, heading: "Engage with Audience", text: "Actively interact with your audience through comments, messages, and feedback to build long-term relationships." },
        { number: 8, heading: "Analytics & Tracking", text: "Monitor campaign performance such as engagement rates, conversion rates and ROI through analytics tools." }
    ];

    return (
        <>
            {/* Section with Paragraphs and Counters */}
            <div className="py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Column 1: Heading and Paragraph */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[#ED1E3A]xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Our Social Media Marketing Service Workflow
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-normal mb-4 text-gray-600">
                            Ready to supercharge your social media strategy? Our social media marketing agency services workflow is designed to outrank your brand to new heights. We begin by analyzing your goals and identifying your ideal audience, allowing us to tailor content that truly resonates.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600">
                            With our hands-on community management, we foster meaningful connections, ensuring your brand shines brightly in the digital landscape.
                        </p>
                    </div>

                    {/* Column 2: Counters Section */}
                    <div>
                        <h2 className="text-[#ED1E3A]xl sm:text-4xl font-bold text-center mb-6">
                            Key Highlights of Our Full Service Social Media Marketing
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                            {/* Counter 1 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Happy Clients</p>
                                <h3 className="text-[#ED1E3A]xl sm:text-4xl md:text-5xl font-bold text-[#ED1E3A]">
                                    <CountUp end={800} duration={3} />+
                                </h3>
                            </div>

                            {/* Counter 2 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Projects Completed</p>
                                <h3 className="text-[#ED1E3A]xl sm:text-4xl md:text-5xl font-bold text-[#ED1E3A]">
                                    <CountUp end={1000} duration={3} />+
                                </h3>
                            </div>

                            {/* Counter 3 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Years of Experience</p>
                                <h3 className="text-[#ED1E3A]xl sm:text-4xl md:text-5xl font-bold text-[#ED1E3A]">
                                    <CountUp end={10} duration={3} />+
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section with Icon Boxes */}
            <section className="bg-gray-100 py-12">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {iconBoxes.map((box, index) => (
                            <div key={index} className="flex flex-col sm:flex-row">
                                {/* Icon-like box on the left or top on mobile */}
                                <div className="flex items-center justify-center p-4 sm:p-10 bg-red-600 text-white font-bold rounded-md text-[#ED1E3A]xl sm:text-4xl md:text-5xl mb-4 sm:mb-0 sm:mr-6">
                                    {box.number}
                                </div>
                                {/* Text content on the right or bottom on mobile */}
                                <div>
                                    <h3 className="text-2xl sm:text-[#ED1E3A]xl lg:text-4xl font-bold mb-3">{box.heading}</h3>
                                    <p className="text-base sm:text-lg md:text-xl font-normal">{box.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
