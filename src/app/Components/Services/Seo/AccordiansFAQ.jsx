"use client";
import React, { useState } from 'react';
import Accordians from '../Seo/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How effective is SEO?",
            content: (
                <p>
                    SEO can be a very effective digital marketing strategy, with the potential to:
                    <br /><br />
                    <ul className="list-disc ml-5">
                        <li>
                            <b>Improve visibility:</b> By improving your SEO, you have a greater chance of visitors finding your website and hence, more traffic and sales. For instance, the first organic result in the Google search has an average click-through rate (CTR) of 27.6% while the second result is 18.7% and the third is 10.2%.
                        </li>
                        <li>
                            <b>Improve ROI:</b> SEO can provide a very reasonable ROI. Closely beating traditional marketing, search engine leads have a close rate of a whopping 14.6 percent.
                        </li>
                        <li>
                            <b>Build credibility:</b> SEO will help you get attention and develop brand credibility.
                        </li>
                        <li>
                            <b>Attract new customers:</b> SEO helps earn new customers and deepen customer relationships.
                        </li>
                        <li>
                            <b>Help with local searches:</b> Local SEO strategies can bring in local searchers who are normally eager to buy.
                        </li>
                    </ul>
                </p>
            ),
        },
        {
            title: "How much does it cost to hire an SEO company?",
            content: (
                <p>
                    SEO pricing packages offered by small-scale providers come at between $1,500 – $2,500 per month. The cost to hire comprehensive Local SEO services can run around $3,000 – $5,000 per month. The majority of businesses have budgets between $500/month and $10,000/month. Hourly SEO services average around $100-$300 per hour.
                </p>
            ),
        },
        {
            title: "Is it worth paying an SEO company?",
            content: (
                <p>
                    Remember that SEO is like any other service: you get what you pay for. Are SEO companies worth it? Yes, if you go for quality. When working with a reputable SEO provider, you have a much higher chance of success by having one who knows how to create an organic strategy around your business.
                </p>
            ),
        },
        {
            title: "Is SEO worth it for small businesses?",
            content: (
                <p>
                    Yes without a doubt, small businesses can benefit greatly from investing in SEO through its strong brand identity, sustainable long-term growth, and cost-effective lead generation. However, it&apos;s important to remember the caveats: SEO is a long-term commitment and isn’t something to be considered for businesses that need quick wins so you won’t see an instant return.
                </p>
            ),
        },
        {
            title: "How do I know if my SEO company is doing a good job?",
            content: (
                <p>
                    Now, when you hire an SEO company, one of the most important KPIs to measure is Organic traffic growth. In most cases, if they’re adding more and more traffic to your site from Google or any other search engine, they’re probably doing a very good job of optimizing your site.
                </p>
            ),
        },
        {
            title: "How long does it take for SEO to start working?",
            content: (
                <p>
                    Between three and six months.
                    It can take you between three to six months before SEO starts showing results. If SEO is a big part of your business you might not see any changes for up to a year. SEO is not a quick fix, it takes some time to put in place and further effort to see the benefits.
                </p>
            ),
        },
        {
            title: "Should I hire an agency for SEO?",
            content: (
                <p>
                    Hiring an SEO agency can be a good option if you want to improve your website&apos;s visibility, attract more traffic, and grow your business:
                    <br /><br />
                    <ul className="list-disc ml-5">
                        <li>
                            <b>You lack SEO expertise:</b> An agency can help get you access to people with the know-how and experience to improve your website’s visibility.
                        </li>
                        <li>
                            <b>You&apos;re redesigning your website:</b> When making changes to your website, it’s important to prioritize SEO.
                        </li>
                        <li>
                            <b>You want to scale your business:</b> As your business grows, an agency can scale its services for you.
                        </li>
                        <li>
                            <b>You want to focus on other tasks:</b> With search marketing, an agency can take over and run your campaign for you.
                        </li>
                        <li>
                            <b>You want to save money:</b> Enhanced site speed, usability, and mobile-friendliness indicate good technical SEO practices.
                        </li>
                    </ul>
                </p>
            ),
        },
        {
            title: "How to choose the right SEO company for your business in Houston?",
            content: (
                <p>
                    Search for the right SEO company for your business by clearly spelling out what you want, do your homework on which companies to consider, read their case studies portfolios, and reviews by their clients, understand their core strategy, get proposals from them, and make sure their pricing fits your budget, and most importantly ensure you insist on transparency and experience in your field.
                    <br /><br />
                    <b>Key steps to consider:</b>
                    <br />
                    <ul className="list-disc ml-5">
                        <li>
                            <b>Define your goals:</b> Spell this out clearly and specify what you want to get out of SEO: an increase in organic traffic, the ability to rank for particular keywords, or the ability to generate leads from search engines.
                        </li>
                        <li>
                            <b>Research SEO companies:</b>Instead, go for those companies that have already proven themselves through a track record of doing good work, as well as positive reviews from previous clients on platforms like Google My Business or Clutch, while also having a strong status as a respected player in a given industry.

                        </li>
                        <li>
                            <b>Evaluate their expertise:</b> See that the company has a basic understanding of your industry, target audience, and the exact SEO strategies required for your niche.

                        </li>
                        <li>
                            <b>Review case studies and portfolio:</b>Compare past client success stories and see if their story matches the success you are looking for.

                        </li>
                        <li>
                            <b>Ask for proposals:</b> They should provide details of their proposed timeline, key performance indicators (KPIs), and pricing proposals.
                        </li>
                        <li>
                            <b>Assess their approach to SEO:</b> Check whether the company makes use of ethical &apos;white hat&apos; SEO practices and doesn’t promise unrealistic results.

                        </li>
                        <li>
                            <b>Check their technical knowledge:</b> Make sure that the company is an expert at technical SEO things like site structure, website speed optimization, and mobile friendliness.

                        </li>
                        <li>
                            <b>Consider communication and transparency:</b> Make sure to pick an agency that conveys its strategy perfectly, updates you regularly, and is free to share its potential challenges.

                        </li>
                        <li>
                            <b>Evaluate pricing and value:</b> Talk to various companies and compare quotes about what the companies can provide and the potential return on investment.

                        </li>
                    </ul>
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
