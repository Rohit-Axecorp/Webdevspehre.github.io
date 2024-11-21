"use client";

import React from "react";
import CountUp from "react-countup";

export default function ProcessSocialMedia() {
    const iconBoxes = [
        { number: 1, heading: "Customer Analysis", text: "Ascertaining the customer psyche and perceptions to devise contents according to the users, who can turn into potential clients." },
        { number: 2, heading: "Brainstorming Ideas", text: "Based on the analytical data, our social media professionals and skilled creators will derive catchy concepts and ideas." },
        { number: 3, heading: "Determine Marketing Medium", text: "Not all mediums will be suitable for everyone. In this step, we will choose the most effective marketing medium to promote your business." },
        { number: 4, heading: "Creative Designs", text: "The digital artists along with the graphic experts will design content developed by the ideators to enhance your business growth." },
        { number: 5, heading: "Set Marketing Goals", text: "We will set social media marketing goals to make sure your advertising budget is allocated and utilized in the best possible manner." },
        { number: 6, heading: "Create Campaigns", text: "Our experts will create the campaigns based on your budget, goals and target audience. Multiple campaigns may be created." },
        { number: 7, heading: "Engage with Audience", text: "Engaging with the audience is a critical part of effective social media marketing. Our team will connect and engage with your audience." },
        { number: 8, heading: "Analytics & Tracking", text: "Our advertising team will always keep an eye on the performance of your Ads. We will present you with various analytics reports to track the campaigns." }
    ];

    return (
        <>
            {/* Section with Paragraphs and Counters */}
            <div className="py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Column 1: Heading and Paragraph */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Our Seamless Digital Marketing Process
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-normal mb-4 text-gray-600">
                            We start by getting to know your brand through a detailed audit to see where you currently stand. Then, we optimize your social media profiles to make sure they’re in sync with your business goals. Our team creates eye-catching content and posts it strategically, all while keeping a close eye on audience engagement to make sure we’re hitting the mark.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600">
                            We regularly check in on performance, tweaking our strategy to get the best results. As a leading Houston digital marketing agency  give you the best value for your investment, helping you get the most out of every dollar. Let us help boost your brand’s online presence and connect with your audience in a way that feels real and effective.
                        </p>
                    </div>

                    {/* Column 2: Counters Section */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
                            Key Highlights of Our Full Service Digital Marketing Services Houston
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                            {/* Counter 1 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Happy Clients</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
                                    <CountUp end={800} duration={3} />+
                                </h3>
                            </div>

                            {/* Counter 2 */}
                            <div className="py-4 px-4">
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Projects Completed</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
                                    <CountUp end={1000} duration={3} />+
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
