"use client";
import React, { useState } from 'react';
import Accordians from '../Home/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "How much does it cost to hire an SEO company?",
            content: (
                <p>
                    The cost of employing an SEO firm may fluctuate based on various factors like your project&apos;s extent, your company&apos;s size, and your industry&apos;s competition. Usually, ongoing SEO services Austin TX can be priced between $500 and $5,000 per month. Certain businesses can provide SEO audits for a single time or price their services based on specific projects, whereas others bill clients on an hourly basis between $75 and $200.
                    <br /><br />
                    Considering higher costs typically indicate a greater range of services, expertise, and successful outcomes is significant. Make sure to select a company that matches your objectives and financial plans. Searching for the best SEO companies Austin? Partner with Web Dev Sphere today!

                </p>

            ),
        },

        {
            title: "Why go with your SEO company Austin?",
            content: (
                <p>
                    When you choose our Austin SEO service, you&apos;re getting a team that really gets what works in this market. We don&apos;t just apply the same strategies—we tailor everything to fit your business and its goals. Our focus is on real, measurable results, like improving your rankings, boosting traffic, and bringing in more qualified leads.
                    <br /><br />
                    Plus, our SEO company in Austin specializes in local SEO, helping you stand out in Austin&apos;s competitive landscape. With us, you&apos;ll always know what&apos;s happening, thanks to clear communication and regular reports. We&apos;re here to help your business grow with strategies that actually work. Check out our local SEO company Austin for top-tier solutions.
                </p>

            ),
        },
        {
            title: "How to choose the best Austin SEO agency?",
            content: (
                <p>
                    To choose the right Austin SEO firm, start by looking for one that has a proven track record with local businesses.
                    <ul className="list-disc ml-5">
                        <li>Ask about their experience with local SEO, as it&apos;s key for targeting the Austin market.</li>
                        <li>Look for companies that can back up their claims with case studies or client reviews, showing real results.
                        </li>
                        <li>You&apos;ll also want to find a transparent company—one that clearly explains its strategies, pricing, and progress updates.
                        </li>
                        <li>A good SEO company in Austin should take time to understand your specific business needs and offer a tailored plan, not just a generic solution.
                        </li>
                        <li>Lastly, make sure they communicate well and are committed to long-term growth, not just quick fixes.
                        </li>
                    </ul>
                </p>

            ),
        },
        {
            title: "Do you work with small businesses or only larger companies in Austin?",
            content: (
                <p>
                    We are happy to collaborate with small businesses and large corporations in Austin! We acknowledge that each company, no matter its size, has distinct requirements and objectives. Our Dallas SEO experts have expertise in developing customized SEO plans that align with your budget and goals.
                    <br /><br />
                    If you are a new company wanting to establish yourself online or a well-established business wanting to improve your visibility, we are here to assist you in achieving success. We prioritize achieving meaningful outcomes for your particular business in order to effectively compete in the Austin market.
                </p>

            ),
        },
        {
            title: "How long does it take to see results from your SEO efforts in Austin?",
            content: (
                <p>
                    The time frame for observing outcomes from our SEO work may differ based on various factors such as your sector, market competitiveness, and website status. Typically, you should see improvements in your rankings and traffic within three to six months. Yet, larger changes, such as a noteworthy boost in leads or sales, might require a longer period of time, typically ranging from six to twelve months.
                    <br /><br />
                    SEO requires a long-term commitment, with our emphasis on creating enduring tactics that deliver continuous outcomes. We will give consistent updates and valuable information for you to monitor your progress throughout the entire journey. Looking for Search Engine Optimization Austin? Partner with Web Dev Sphere today!
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
