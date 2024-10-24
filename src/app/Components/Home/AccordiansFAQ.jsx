"use client";
import React, { useState } from 'react';
import Accordians from '../Home/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much does it cost to hire an SEO company?",
            content: (
                <p>
                    The cost of employing an SEO firm may fluctuate based on various factors like your project&apos;s extent, your company&apos;s size, and your industry&apos;s competition. Usually, ongoing SEO services Austin TX can be priced between $500 and $5,000 per month. Certain businesses can provide SEO audits for a single time or price their services based on specific projects, whereas others bill clients on an hourly basis between $75 and $200.
                    <br /><br />
                    Considering higher costs typically indicate a greater range of services, expertise, and successful outcomes is significant. Make sure to select a company that matches your objectives and financial plans. Searching for the best SEO companies Austin? Partner with Web Dev Sphere today!

                </p>

            ),
        },

        {
            title: "Why go with your SEO company Austin?",
            content: (
                <p>
                    When you choose our Austin SEO service, you&apos;re getting a team that really gets what works in this market. We don&apos;t just apply the same strategies—we tailor everything to fit your business and its goals. Our focus is on real, measurable results, like improving your rankings, boosting traffic, and bringing in more qualified leads.
                    <br /><br />
                    Plus, our SEO company in Austin specializes in local SEO, helping you stand out in Austin&apos;s competitive landscape. With us, you&apos;ll always know what&apos;s happening, thanks to clear communication and regular reports. We&apos;re here to help your business grow with strategies that actually work. Check out our local SEO company Austin for top-tier solutions.
                </p>

            ),
        },

    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        // Only allow one accordion to be open at a time
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-12 mx-auto container">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                FAQS RELATED TO
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                    AUSTIN SEO COMPANY
                </span>
            </h2>
            <p className="text-center lg:text-lg text-md mb-12 md:mx-20">
                Get Answers to Your Queries Here!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accordionData.map((item, index) => (
                    <Accordians
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}
