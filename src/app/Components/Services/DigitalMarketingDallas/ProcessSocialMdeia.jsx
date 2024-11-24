"use client";

import React from "react";
import CountUp from "react-countup";

export default function ProcessSocialMedia() {
    const iconBoxes = [
        {
            number: 1,
            heading: "Target the Right People",
            text: "We get to know your ideal customers first, ensuring we focus on reaching those who are likely to engage."
        },
        {
            number: 2,
            heading: "Craft Your Brand Voice",
            text: "Our team helps you shape a memorable brand message that reflects your values and stands out."
        },
        {
            number: 3,
            heading: "Platform Selection & Profile Optimization",
            text: "Our team chooses the best platforms for your business and ensures your profiles align with your brand’s vision."
        },
        {
            number: 4,
            heading: "Create Content that Connects",
            text: "We help you craft content that grabs your audience’s attention and keeps them coming back for more."
        },
        {
            number: 5,
            heading: "Set Clear KPIs & Budget Strategy",
            text: "We collaborate to define KPIs that align with your vision and build a budget that supports your growth."
        },
        {
            number: 6,
            heading: "Launch & Run Campaigns",
            text: "With the strategy set, we take action by launching your campaigns, from ad creation to running email marketing."
        },
        {
            number: 7,
            heading: "In-Depth SEO Audit",
            text: "We conduct a thorough SEO audit to identify opportunities to boost your website’s visibility and improve performance."
        },
        {
            number: 8,
            heading: "Monitoring & Optimizing for Peak Results",
            text: "We closely monitor your campaigns, analyzing performance to fine-tune strategies and deliver better outcomes."
        },
    ];


    return (
        <>
            {/* Section with Paragraphs and Counters */}
            <div className="py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Column 1: Heading and Paragraph */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Our Digital Marketing Services Dallas Process
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-normal mb-4 text-gray-600">
                            We kick things off by conducting an in-depth audit to understand where your brand stands. Next, we fine-tune your social media profiles to align with your business goals. Our team produces engaging content and shares it strategically, closely tracking audience interaction to make sure we’re hitting the right notes.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600">
                            We consistently track performance and fine-tune our strategy to deliver the best results. As a leading <a href="/dallas-texas-digital-marketing-agency">Dallas digital marketing agency</a> we focus on getting you the best results from your investment, bringing you riches in the fastest way possible!
                        </p>
                    </div>

                    {/* Column 2: Counters Section */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
                            Key Highlights of Our Full-Service Digital Marketing Services in Dallas
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                            {/* Counter 1 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Happy Clients</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
                                    <CountUp end={1000} duration={3} />+
                                </h3>
                            </div>

                            {/* Counter 2 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Projects Completed</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
                                    <CountUp end={1250} duration={3} />+
                                </h3>
                            </div>

                            {/* Counter 3 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Years of Experience</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
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
                                <div className="flex items-center justify-center p-4 sm:p-10 bg-red-500 text-white font-bold rounded-md text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-0 sm:mr-6">
                                    {box.number}
                                </div>
                                {/* Text content on the right or bottom on mobile */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{box.heading}</h3>
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
