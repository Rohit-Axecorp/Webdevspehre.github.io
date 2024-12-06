"use client";
import React, { useState } from 'react';
import Accordians from '../Dallas/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much does it cost to hire a Dallas SEO company?",
            content: (
                <p>
                    The cost of hiring an SEO company can vary widely based on several factors, including the size of your business, the complexity of your website, the level of competition in your industry, and the specific services you require. Generally, you can expect to pay anywhere from $500 to $5,000 per month for ongoing SEO services.
                    <br /><br />
                    <strong>Hourly Rates:</strong> Some companies charge hourly rates, which typically range from $75 to $300 per hour, depending on the agency&apos;s expertise and reputation.
                    <br /><br />
                    <strong>Project-Based Pricing:</strong> For specific projects, such as a website audit or a one-time SEO optimization, costs can range from $1,000 to $30,000, depending on the scope of work.
                    <br /><br />
                    <strong>Performance-Based Pricing:</strong> Some SEO companies offer performance-based pricing models, where fees are tied to the results achieved, such as increased traffic or higher search rankings.
                    <br /><br />
                    If you’re looking for the best Dallas SEO service, partner with Web Dev Sphere today!
                </p>
            ),
        },
        {
            title: "Why hire the best SEO company in Dallas?",
            content: (
                <p>
                    Hiring the best SEO company in Dallas offers local expertise and a deep understanding of the Dallas-Fort Worth market, helping businesses reach the right audience effectively. An experienced SEO company in Dallas can craft a tailored strategy that aligns with the unique characteristics of the local market, including competitive analysis, keyword targeting, and local SEO tactics that drive more foot traffic to your business.
                    <br /><br />
                    Additionally, SEO experts in Dallas are well-versed in optimizing for search engines like Google, increasing your website&apos;s visibility, and ultimately helping you attract more leads and customers.
                </p>
            ),
        },
        {
            title: "Will I need to make changes to my website for SEO?",
            content: (
                <p>
                    Yes, some changes may be necessary to improve your website&apos;s SEO performance. This can include optimizing meta tags, improving site speed, enhancing mobile responsiveness, and ensuring a user-friendly layout. Our SEO services company Dallas will conduct a thorough audit of your site and provide recommendations for any required adjustments.
                </p>
            ),
        },
        {
            title: "How soon can I see the results of my SEO campaign?",
            content: (
                <p>
                    The timeline for seeing results from an SEO campaign can vary significantly depending on several factors, including your industry, competition, current website status, and the specific strategies being implemented. Generally, it can take anywhere from three to six months to start noticing meaningful improvements in your search engine rankings and organic traffic.
                </p>
            ),
        },
        {
            title: "What services does Web Dev Sphere provide?",
            content: (
                <p>
                    At Web Dev Sphere, we offer affordable SEO services Dallas TX designed to elevate your online presence and drive results. It includes local SEO, keyword research and analysis, content writing, on-page optimization, technical SEO, Franchise SEO, eCommerce SEO, and more.
                    <br /><br />
                    If you’re ready to go for a SEO service Dallas, watch out for the services Web Dev Sphere offers!
                </p>
            ),
        },
        {
            title: "Why should companies invest in Dallas SEO services?",
            content: (
                <p>
                    With higher search engine rankings, businesses can increase visibility and brand awareness, making it easier for potential customers to find them. SEO is a cost-effective marketing strategy, as it drives organic traffic without the ongoing costs associated with paid advertising.
                    <br /><br />
                    By focusing on SEO, companies can enhance user experience, leading to longer engagement and higher conversion rates.
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1E3A] to-red-700">
                    DALLAS SEO COMPANY
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
