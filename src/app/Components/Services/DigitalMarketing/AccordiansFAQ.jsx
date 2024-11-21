"use client";
import React, { useState } from 'react';
import Accordians from '../DigitalMarketing/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "What digital marketing services does your Houston agency offer?",
            content: (
                <p>
                    As the best digital marketing agency in Houston, TX, we offer a full range of digital marketing services, including SEO, social media marketing, PPC (Pay-Per-Click), content creation, website design and development, online reputation management, video production, and conversion rate optimization. Whatever your business needs to grow online, we’ve got you covered. Searching for the leading digital marketing agency near me Houston? Reach out to Web Dev Sphere today!
                </p>
            ),
        },
        {
            title: "How long will it take to see results from your digital marketing services in Houston?",
            content: (
                <p>
                    Results vary depending on your goals and the strategies we implement, but typically, you can start seeing noticeable changes in traffic and engagement within 3 to 6 months. We focus on sustainable, long-term growth and keep optimizing to achieve the best possible outcomes. If you’re ready to partner with a digital marketing consulting agency Houston, TX, partner with Web Dev Sphere today!
                </p>
            ),
        },
        {
            title: "What makes digital media marketing agency Houston different from others?",
            content: (
                <p>
                    What makes us different from other Houston digital marketing agencies is that we truly listen to your needs and work with you to get the best results. We don’t believe in one-size-fits-all strategies—everything we do is tailored to your business. Our goal is to help you grow and succeed, and we’ll be with you every step of the way.
                </p>
            ),
        },
        {
            title: "How do you create a custom marketing strategy for my Houston business?",
            content: (
                <p>
                    We begin by understanding your business, goals, and target audience. Then, we research your industry and competitors to identify opportunities. Based on these insights, we develop a custom strategy that aligns with your objectives and optimizes your marketing efforts to maximize results. If you’re looking for a leading web development company, partner with us today for result-driven solutions!
                </p>
            ),
        },
        {
            title: "Do you provide social media marketing and PPC services in Houston?",
            content: (
                <p>
                    Yes! We offer both social media marketing and PPC services. We create targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and Google Ads to help you reach your ideal customers and drive conversions, all while keeping your budget in mind.


                </p>
            ),
        },
        {
            title: "How do you measure the success of your digital marketing efforts in Houston?",
            content: (
                <p>
                    We use key performance indicators (KPIs) like website traffic, conversion rates, social media engagement, and sales growth to track success. We provide you with detailed reports and ongoing analysis, so you always know how your campaigns are performing and where adjustments might be needed. Ready to get started with the best digital marketing agency Houston? Get started with Web Dev Sphere today!
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
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
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
