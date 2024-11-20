"use client";
import React, { useState } from 'react';
import Accordians from '../Webdesign/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "What does a web design company do?",
            content: (
                <p>
                    A web design company creates and manages websites and web pages, offering a range of services such as:
                    <ul className="list-disc ml-5">
                        <li>Website design and development: Planning, creating, and building websites with text, photos, graphics, and videos.</li>
                        <li>Web application development: Creating interactive web applications.</li>
                        <li>E-commerce solutions: Developing online stores for selling products or services.</li>
                        <li>Digital marketing: Providing services to boost online visibility.</li>
                        <li>SEO (Search Engine Optimization): Improving a website&apos;s ranking on search engines.</li>
                        <li>Content creation and management: Producing and maintaining website content.</li>
                    </ul>
                    Web design involves building a website that is user-friendly and intuitive to navigate. It often uses technologies like HTML, CSS, and JavaScript.
                </p>
            ),
        },

        {
            title: "How much do companies charge for web design?",
            content: (
                <p>

                    Hourly Rate
                    <br></br>
                    A freelance web designer who is reasonably skilled gets about $75 per hour. According to CSS-Tricks, however, this figure can vary. According to Website Builder Expert, developing a website costs $100 to $180 per hour, whereas if you design it yourself with a website builder that cost ranges from $30 to $80 per hour.

                </p>

            ),
        },
        {
            title: "How many hours does it take to design a website?",
            content: (
                <p>On the one hand, developing a website takes anywhere from 150 to 500 hours, depending on its complexity; on the other hand, around 25% of websites already appear to have been created already. There are websites and web apps listed above. These vary based on several factors. Depending on your target audience, you have to choose between a simple website and a web app.
                </p>

            ),
        },
        {
            title: "Is web design still in demand?",
            content: (
                <p>
                    You know that there is still demand for web design and this demand will increase. According to the U.S. Bureau of Labor Statistics (BLS), employment of web developers and digital designers will increase by 8 percent from 2023 to 2033, faster than the average for all occupations.
                </p>

            ),
        },
        {
            title: "How to choose a good web design company?",
            content: (
                <p>
                    Here are the tips to find the right web design company for your business:
                    <ul className="list-disc ml-5">
                        <li>Know your website design budget.
                        </li>
                        <li>Decide what type of design agency or freelancer that you want to work with.
                        </li>
                        <li>Check the portfolio to see how their style and expertise.</li>
                        <li>Client reviews and testimonials can reveal your potential client’s reputation.
                        </li>
                        <li>Check the pricing to see if your budget will balance with this.
                        </li>
                        <li>Ask if they offer things on the side such as SEO or maintenance.
                        </li>
                        <li>Get their detailed questions about their design and development process.
                        </li>
                        <li>They should be requested to verify their credibility.</li>
                        <li>Discover how to work with different services to get the most suitable web designer for your situation.
                        </li>

                    </ul>
                </p>

            ),
        },
        {
            title: "What are the three types of web design?",
            content: (
                <p>
                    The three main types of web design are static, dynamic, and e-commerce:
                    <ul className="list-disc ml-5">
                        <li>
                            <b>Static web design
                            </b>
                            In static websites, the content as well as the layout of the web pages is fixed and is the simplest type of web design. A low-maintenance simple site is ideal if it fulfills your requirements.
                        </li>
                        <li>
                            <b>Dynamic web design
                            </b>
                            Web Design of this type is interactive and scalable meaning blogs and content-heavy sites offer being the best. Dynamic HTML is a combination of three technologies that add structure, style, and interactivity to web pages.
                        </li>
                        <li>
                            <b>E-commerce web design
                            </b>
                            For online stores, this type of web design is necessary for selling products/services. E-commerce can be business-to-business, business-to-consumer, or consumer-to-consumer.
                        </li>
                    </ul>
                </p>

            ),
        },
        {
            title: "What is the difference between a web designer and a web developer?",
            content: (
                <p>
                    The main difference between a web designer and a web developer is the technical know-how. Web designers are responsible for the visual elements, including the overall look, feel, and aesthetics of a website, while web developers handle the coding and programming that operate behind the scenes.
                </p>

            ),
        },
        {
            title: "How to create a website?",
            content: (
                <p>
                    To create a website, you can follow these steps:
                    <ul className="list-disc ml-5">
                        <li>
                            <b>Define your website&apos;s purpose:
                            </b>
                            Decide what you intend your website to be used for.
                        </li>
                        <li>
                            <b>Register a domain name:
                            </b>
                            Pick out a specific domain name for your use site. To catch a name, it has to be easy to remember and spell.                        </li>
                        <li>
                            <b>Choose a web host:
                            </b>
                            A web host means you rent space on the internet to create a site.
                        </li>
                        <li>
                            <b>Select a website-building platform:
                            </b>
                            You need to choose what platform to build your website on.                        </li>
                        <li>
                            <b>Plan your website:
                            </b>
                            Determine the structure of your site, and build a layout.
                        </li>
                        <li>
                            <b>Add content:
                            </b>
                            Add more content to your website.
                        </li>
                        <li>
                            <b>Test and launch:
                            </b>
                            Launch your website by testing whether it’s working properly.                         </li>
                        <li>
                            <b>Promote and maintain:
                            </b>
                            You can promote your website and keep it up to date.
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
