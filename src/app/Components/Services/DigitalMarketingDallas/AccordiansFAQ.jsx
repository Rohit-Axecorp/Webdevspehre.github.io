"use client";
import React, { useState } from 'react';
import Accordians from '../DigitalMarketingDallas/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "What types of digital marketing services do you offer in Dallas?",
            content: (
                <p>
                    We offer a full range of digital marketing services in Dallas, including SEO, pay-per-click advertising (PPC), social media marketing, content creation, email marketing, web design, and online reputation management.  If you’re looking for best digital marketing agencies Dallas TX, look no further.
                </p>
            ),
        },
        {
            title: "How long does it take to see results from digital marketing campaigns?",
            content: (
                <p>
                    The timeline for seeing results varies depending on the type of campaign and the specific goals. SEO typically takes 3-6 months to show significant results, while paid advertising (PPC) can yield faster results within weeks.
                </p>
            ),
        },
        {
            title: "How do you measure the success of a digital marketing campaign in Dallas?",
            content: (
                <p>
                    As the leading Dallas TX digital marketing agency, we use key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, lead generation, and return on investment (ROI) to measure the success of a campaign.
                </p>
            ),
        },
        {
            title: "What is the cost of digital marketing services in Dallas?",
            content: (
                <p>
                    The cost of our services depends on the scope of the campaign, the services included, and the level of competition in your industry. We offer customizable packages that suit businesses of all sizes. If you’re looking to collaborate with the best Dallas Forth Worth digital marketing agency, look no further!
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
            <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] text-center">
            FAQS
            </h4>
            <p className="text-center 2xl:text-lg lg:text-base text-sm mb-12 md:mx-20">
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
