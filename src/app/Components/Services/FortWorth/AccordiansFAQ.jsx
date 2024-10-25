"use client";
import React, { useState } from 'react';
import Accordians from '../FortWorth/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much does it cost to hire a Fort Worth SEO company?",
            content: (
                <p>
                    The cost of hiring a Fort Worth SEO company can vary widely depending on several factors, including the company&apos;s experience, the services, and your requirements. Generally, you can expect to pay anywhere from $500 to $5,000 per month for a SEO service Fort Worth.
                    <br /><br />
                    For startups, a basic package might cost around $500 to $1,500 per month, focusing on essential small business SEO services Fort Worth TX like keyword research, on-page optimization, and local SEO. For medium to large businesses requiring more comprehensive strategies, the cost can range from $1,500 to $5,000 or more per month.
                    <br /><br />
                    Many companies also offer one-time project-based pricing for Fort Worth SEO service, which can range from $1,000 to $30,000 depending on the project&apos;s complexity and duration.
                </p>
            ),
        },
        {
            title: "Why choose our Fort Worth SEO company?",
            content: (
                <p>
                    We&apos;ve helped plenty of businesses boost their search rankings and drive more traffic, and we&apos;re passionate about delivering results that matter. Our SEO services in Fort Worth cover everything you need like keyword research, optimizing your website, and building high-quality links.
                    <br /><br />
                    Web Dev Sphere also keeps things transparent and will keep you updated on your progress, so you&apos;ll always know how your investment is working for you. Ready to get started? Check out our local SEO services Fort Worth right away!
                </p>
            ),
        },
        {
            title: "How to choose the right SEO company in Fort Worth?",
            content: (
                <p>
                    Choosing the right SEO company Fort Worth TX involves a few key steps:
                    <ul className="list-disc ml-5">
                        <li>Start by researching companies that have a solid reputation and a proven track record of success.</li>
                        <li>Look for case studies or testimonials that demonstrate their ability to deliver results.</li>
                        <li>Consider their experience with businesses similar to yours and ask about their approach to SEO—are they transparent, and do they communicate clearly about their strategies?</li>
                        <li>Don&apos;t forget to inquire about their pricing and what&apos;s included in their packages.</li>
                        <li>Finally, trust your instincts; a good local SEO company Fort Worth will listen to your goals, share their expertise, and make you feel confident in their ability to help you succeed.</li>
                    </ul>
                </p>
            ),
        },
        {
            title: "What services does Web Dev Sphere provide?",
            content: (
                <p>
                    At Web Dev Sphere, we offer a range of affordable Fort Worth SEO services, designed to grow your online presence. Our services include local SEO to help you connect with your community, comprehensive keyword research and analysis to identify the best opportunities, and expert content writing to engage your audience.
                    <br /><br />
                    Our SEO company in Austin also specializes in on-page optimization to enhance your website&apos;s structure, technical SEO to improve site performance, and tailored solutions for franchises and eCommerce businesses. If you&apos;re ready to get started, check out our SEO services Fort Worth today!
                </p>
            ),
        },
        {
            title: "How long does it take to see results from SEO efforts?",
            content: (
                <p>
                    The timeline for seeing results from SEO can really depend on a few factors, like your industry, the level of competition, and the specific strategies we use. Generally, you might start to see some improvements in your search rankings within about 3 to 6 months. Keep in mind, though, that SEO is an ongoing journey. It requires continuous effort to maintain and improve your rankings over time, so staying committed is key to achieving lasting results.
                    <br /><br />
                    Looking for the best SEO services in Dallas Fort Worth? Partner with Web Dev Sphere today!
                </p>
            ),
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-12 mx-auto container">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                FAQS RELATED TO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                    FORT WORTH SEO COMPANY
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
