"use client";
import React, { useState } from 'react';
import Accordians from '../AustinSeo/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much should I pay someone for SEO?",
            content: (
                <p>
                    Local SEO services can cost you up to $3,000-$10,000 per month. Most businesses have a budget of $500 per month to $10,000 per month. The average hourly SEO services cost from $100-$300 per hour. Results take a spend of at least $500 a month (Search Engine Journal).
                </p>
            ),
        },
        {
            title: "How much does it cost to hire an SEO agency?",
            content: (
                <div>
                    <p>
                        <strong>SEO Hourly Rates</strong>
                    </p>
                    <p>
                        SEO pricing varies from anywhere in the range of $50 per hour to more than $250 per hour, according to the SEO agency you hire. Neil Patel — the SEO famous — supposedly charges at least $5,000 for his first hour-long consultation.
                    </p>
                </div>
            ),
        },
        {
            title: "Is it worth hiring an SEO company in El Paso?",
            content: (
                <p>
                    Optimizing SEO services can be costly, but if you really want more traffic to your site and more conversions—well, you know what to do. If you want to hire an SEO consultant, you must have the budget.
                </p>
            ),
        },
        {
            title: "Is SEO worth it for small businesses in El Paso?",
            content: (
                <p>
                    Definitely, SEO is a worthy investment for small businesses, providing undeniable benefits such as a good brand identity, long-term sustainable growth, and cost-effective lead generation. However, it&apos;s important to remember the caveats: Going the SEO route is a long-term commitment that might not really suit businesses that need quick wins.
                </p>
            ),
        },
        {
            title: "What is the success rate of SEO?",
            content: (
                <p>
                    SEO leads have a 14.6% close rate, while outbound leads have a 1.7% close rate. Of the many ways to get leads, this shows just how good SEO-processed leads are compared to any other traditional outbound method, having much higher chances of conversion.
                </p>
            ),
        },
        {
            title: "What to look for when hiring an SEO agency in El Paso?",
            content: (
                <p>
                    Search for examples of results in the past—customer reviews and case studies. Try to get a breakdown of their process to understand whether they have a formal process where they help you grow, and how transparent they&apos;re going to be with you for results and deliverables over the long term.
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
            <h5 className="text-[#ED1E3A]xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                FAQS RELATED TO{" "}
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ED1E3A] to-red-700">
                    AUSTIN SEO COMPANY
                </span>
            </h5>

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
