// AccordiansFAQ Component
"use client"
import React, { useState } from 'react';
import Accordians from '../Home/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "What makes our website design services different?",
            content: "We focus on both great looks and functionality, creating websites that are visually appealing and user-friendly. Our designs are crafted to enhance user experience and performance.",
        },
        {
            title: "Why choose our web design Dubai team?",
            content: "Our team is made up of experienced web designers who specialize in delivering bespoke designs tailored to your needs.",
        },
        {
            title: "How do we make your web designs effective?",
            content: "We ensure that every website is optimized for performance, accessibility, and SEO.",
        },
        {
            title: "What benefits can you get from our website design services?",
            content: "Our design services come with a range of benefits, from enhanced online presence to improved conversion rates.",
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
                Frequently Asked <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700'>Questions</span>
            </h2>
            <p className="text-center lg:text-lg text-md mb-12 md:mx-20">
                Find answers to common questions about our services.
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