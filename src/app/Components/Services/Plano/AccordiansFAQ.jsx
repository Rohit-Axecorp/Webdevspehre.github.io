"use client";
import React, { useState } from 'react';
import Accordians from '../Plano/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much does it cost to hire an SEO company?",
            content: (
                <p>
                    The cost of hiring a Plano SEO company can vary widely based on several factors, including the complexity of your project, the size of your business, and the specific services you require. Generally, SEO services can range from $500 to $5,000 per month.
                    <br /><br />
                    For small businesses or startups, you might expect to pay between $500 and $2,000 monthly for basic services such as keyword research, on-page optimization, and monthly reporting. For mid-sized to larger businesses seeking comprehensive strategies, including link building, content creation, and ongoing consultation, costs can range from $2,000 to $5,000 or more each month.
                </p>
            ),
        },
        {
            title: "Why go with Search Engine Optimization in Texas?",
            content: (
                <p>
                    As a leading SEO Plano Texas company, we understand the local market dynamics and consumer behavior. Our strategies are tailored to meet the specific needs of businesses in the Plano area, helping you connect with your target audience effectively.
                    <br /><br />
                    With years of experience in the SEO industry, we have a proven track record of helping businesses improve their search engine rankings and drive organic traffic. Searching for a professional SEO service? Partner with Web Dev Sphere today!
                </p>
            ),
        },
        {
            title: "How to choose the right Plano SEO agency?",
            content: (
                <p>
                    Choosing the right SEO Plano TX company is crucial for achieving your online marketing goals. Here are some key factors to consider:
                    <ul className="list-disc ml-5">
                        <li>Look for an SEO company Plano with a proven track record and experience in your industry. Review their case studies and client testimonials to gauge their success in delivering results.</li>
                        <li>Ensure the company offers a comprehensive range of SEO services, including keyword research, on-page optimization, technical SEO, link building, and content creation.</li>
                        <li>Avoid companies that offer a one-size-fits-all approach, as each business requires a unique strategy to succeed.</li>
                        <li>Choose a company that values open communication and transparency. They should provide regular updates, detailed reports, and be available to answer your questions or address your concerns.</li>
                        <li>Ensure the company adheres to ethical SEO practices (often referred to as white-hat SEO). Avoid companies that promise quick fixes or use dubious tactics, as these can lead to penalties from search engines.</li>
                        <li>Discuss your budget upfront and find a company that can provide the services you need within that budget.</li>
                        <li>Look for a SEO company Plano that offers ongoing support and is committed to your long-term success.</li>
                    </ul>
                </p>
            ),
        },
        {
            title: "How long does it take to see results from SEO?",
            content: (
                <p>
                    The timeline for seeing results from SEO can vary depending on several factors, including your industry, competition, and the specific strategies implemented. Generally, clients may start to see improvements in their search rankings and traffic within three to six months. SEO is a long-term investment, and sustained efforts will lead to more significant results over time.
                    <br /><br />
                    Searching for Dallas SEO experts or Austin Texas SEO experts? Partner with us for the best solutions!
                </p>
            ),
        },
        {
            title: "What makes your SEO company in Plano different from others?",
            content: (
                <p>
                    Our SEO agency Plano stands out due to our local expertise, personalized approach, and commitment to transparency. We understand your business goals and craft tailored strategies that deliver measurable results. Our dedicated team prioritizes communication and support, ensuring you feel informed and engaged throughout the process.
                </p>
            ),
        },
        {
            title: "How do I get started with your SEO services?",
            content: (
                <p>
                    Getting started with our Search Engine Optimization in Plano is simple! Contact us to schedule a free consultation. We’ll discuss your business goals, analyze your current online presence, and develop a customized SEO strategy tailored to your needs. We’re here to help you every step of the way!
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
                FAQS RELATED TO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                    PLANO SEO COMPANY
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
