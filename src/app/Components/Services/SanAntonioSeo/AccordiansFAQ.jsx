"use client";
import React, { useState } from 'react';
import Accordians from '../AustinSeo/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "Is it worth hiring an SEO company?",
            content: (
                <p>
                    Investing in SEO services may not be cheap as it is an investment to grow your business online. When you receive more traffic to your site and increase conversions, then it can be a worthy investment. If you want to hire an SEO consultant, ensure you have the money to spare.
                </p>
            ),
        },
        {
            title: "How much does it cost to hire an SEO company?",
            content: (
                <p>
                    SEO pricing packages tend to be in the $1,500 – $2,500 per month range. This can be as much as $3,000 – $5,000 per month for Comprehensive Local SEO. We know that most businesses have budgets ranging from $500/month or $10,000/month. SEO services average $100-$300 per hour.
                </p>
            ),
        },
        {
            title: "Does SEO really work for small businesses in San Antonio?",
            content: (
                <p>
                    Is SEO Worth It for a Small Business? SEO is a great tool any small business uses to successfully market your products. It’s a cheap and accessible way to help make your business easy to find online and your website easy to use.
                </p>
            ),
        },
        {
            title: "How much time does SEO take?",
            content: (
                <p>
                    It will take three to six months before you begin to see results from SEO. Meanwhile, in some cases, you actually don’t see improvements from SEO for up to a year. SEO is not an instant fix — for changes to occur in rankings and traffic, it takes time and effort.
                </p>
            ),
        },
        {
            title: "How much do local SEO services cost?",
            content: (
                <p>
                    $300 to $1,500 monthly
                    Local SEO pricing scales from $300 to $1,500 per month depending on services and service size. You have small, big, or small local SEO plans according to your needs and budget. The average monthly spend on SEO by businesses is between $500 to $10,000
                </p>
            ),
        },
        {
            title: "Do I really need SEO for my website?",
            content: (
                <p>
                    Visibility and higher rankings are both boosted by SEO

                    Your ranking is directly related to visibility. The logic is this, the more likely prospects will see you and click through to your site, the better your organic page ranking, so it&apos;s worth increasing it.
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
            <h5 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                FAQS RELATED TO{" "}
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
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
