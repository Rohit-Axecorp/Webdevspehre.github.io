"use client";
import React, { useState } from 'react';
import Accordians from '../AustinSeo/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "Is web development in demand in London, UK?",
            content: (
                <p>
                    This data gathered by Maximise Market Research (MMR) suggests that the global web content management market will grow at a CAGR of 14.2 percent from 2021 to 2029. During that period, demand for web developers in the UK should also remain on an increase because companies will want web developers to produce websites.
                </p>

            ),
        },

        {
            title: "Why should I hire a web design agency in London?",
            content: (
                <p>
                    Hiring a website design agency is a win because you already know the benefit of years of experience and expertise behind hiring a professional. Since there’ll be an agency that’ll have a bunch of designers that have brought up a website for almost any kind of category, they’ll be this to assist you make an excellent as well as running website.
                </p>

            ),
        },
        {
            title: "How to hire a web development company in London?",
            content: (
                <p>
                    7 Tips to Choose the Best Web Development Agency:
                    <ul className="list-disc ml-5">
                        <li>Plan out Your Requirements and Goals.</li>
                        <li>Evaluate Their Portfolio.
                        </li>
                        <li>Check out Client Reviews and Client Testimonials.
                        </li>
                        <li>Check If They Are Technical Experts.
                        </li>
                        <li>Know their Pricing and Value Proposition.
                        </li>
                        <li>Post-Launch Support.
                        </li>
                        <li>Determine cultural compatibility.
                        </li>
                    </ul>
                </p>

            ),
        },
        {
            title: "How long does it take to build a website in London?",
            content: (
                <p>
                    Building a website usually requires from 1 to 6 months, obviously depending on your goals and resources. Not only is “it depends”—and depending can sometimes be a bit unsatisfying, no matter the needs you have—when you are ready to launch your website. However, what this section will describe exactly is what that time frame relies on.
                </p>

            ),
        },
        {
            title: "How much does web development cost in London, UK?",
            content: (
                <p>
                    Here’s the website development cost in UK categorized according to the types of website:
                    <div class="overflow-x-auto py-6">
                        <table class="min-w-full border border-gray-300 text-left">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="px-6 py-3 text-sm font-semibold text-gray-700 border-b">Website Type</th>
                                    <th class="px-6 py-3 text-sm font-semibold text-gray-700 border-b">Cost Range</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-100">
                                <tr class="border-b">
                                    <td class="px-6 py-4">Personal Website</td>
                                    <td class="px-6 py-4">£1,500 – £5,000</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="px-6 py-4">Corporate Website</td>
                                    <td class="px-6 py-4">£8,000 – £15,000</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="px-6 py-4">eCommerce Website</td>
                                    <td class="px-6 py-4">£10,000 – £50,000</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">MVP Website</td>
                                    <td class="px-6 py-4">£5,000 – £10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </p>

            ),
        },
        {
            title: "How much does it cost to hire a web developer in the UK?",
            content: (
                <p>
                    Expect a freelancer to ask around £30 – £60 per hour or £200 – £400 per day. On average, a digital agency will charge around £50 – £200 per hour or £300 – £1000 per day.
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
            <h5 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] text-center">

                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ED1E3A] to-red-700">
                    Frequently Asked Questions
                </span>
            </h5>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
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
