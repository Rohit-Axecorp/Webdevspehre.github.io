"use client";
import React, { useState } from 'react';
import Accordians from '../SocialMedia/SocialMediaAccordians';

export default function SocialMediaAccordiansFAQ() {
    const accordionData = [
        {
            title: "Why is social media and marketing services important for my business?",
            content: (
                <p>
                    Social media and marketing services help increase brand awareness, reach a larger audience, and foster community engagement. It allows you to connect with customers directly, gather feedback, and build loyalty, ultimately driving sales and conversions.
                </p>
            ),
        },
        {
            title: "How much do your social media marketing services cost?",
            content: (
                <p>
                    Our pricing varies based on the specific services you require, your business goals, and the platforms you wish to target. We offer affordable social media marketing services to fit different budgets, and we can provide a detailed quote after discussing your needs.
                </p>
            ),
        },
        {
            title: "How long does it take to see results from social media marketing?",
            content: (
                <p>
                    Results can vary based on your goals and the strategies implemented. Generally, you may start seeing engagement and traffic within a few weeks, while significant growth in sales or conversions may take a few months. Our social media marketing services packages provide regular updates to keep you informed.
                </p>
            ),
        },
        {
            title: "What metrics do you track to measure success?",
            content: (
                <p>
                    We track key performance indicators (KPIs) such as engagement rate, reach, impressions, click-through rate, and conversion rate. Analyzing these metrics helps us assess the effectiveness of our strategies and make data-driven adjustments.
                </p>
            ),
        },
        {
            title: "How do I get started with your social media marketing services?",
            content: (
                <p>
                    Getting started with our social media marketing services is easy. Simply reach out to us for a consultation. We&apos;ll discuss your goals, evaluate your current social media presence, and propose a customized strategy to elevate your brand in the digital space.
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
            <h4 className="text-[#ED1E3A] md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                FAQS
            </h4>
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
