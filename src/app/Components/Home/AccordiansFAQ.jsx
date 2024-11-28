"use client";
import React, { useState } from 'react';
import Accordians from '../Home/Accordians';

export default function AccordiansFAQ() {
    const accordionData = [
        {
            title: "What services does a web design and development company offer?",
            content: (
                <p>
                    We do comprehensive web design, custom web development, e-commerce solutions, and digital marketing SEO services. Whether we are talking about user-friendly, engaging websites that help your business grow and convert visitors or other technologies for your business our goal is your success.
                </p>
            ),
        },
        {
            title: "What's the difference between web design and web development?",
            content: (
                <p>
                    Web design looks at how your site appears and what the user can do with it and web development takes care of the technical structure and how it works. We weave them both together to integrate a seamless, attractive, and fully functional website.
                </p>
            ),
        },
        {
            title: "Why should I choose a custom web design for my business?",
            content: (
                <p>
                    A custom web design means we can make your website look exactly how you, your website, and your brand want it to. We&apos;ve tailored our solution to your specific goals and user needs to suit your site.
                </p>
            ),
        },
        {
            title: "How do you ensure website maintenance and support after launch?",
            content: (
                <p>
                    As part of our service, we keep your site maintained and supported, with regular updates, security, and optimization. Your site is monitored proactively for potential issues and updates are performed proactively, ensuring your site performs at its best.
                </p>
            ),
        },
        {
            title: "Can a website development company help with e-commerce integration?",
            content: (
                <p>
                    Absolutely! We are eCommerce specialists and dedicated to making your shopping experience for your customers a safe, easy, and seamless one. We cover everything from the management of product listing, to secure payment integration.
                </p>
            ),
        },
        {
            title: "How long does it take to develop a custom website?",
            content: (
                <p>
                    Typically, it will take you anywhere from one to six months to build a website, based on how far you want to go and how much effort and time you have available. While you&apos;re excited to publish your website, it&apos;s frustrating not to have a specific yes or no to the question of when. It&apos;s why we know that ‘it depends&apos; may not appease you as an answer. However, this section will describe what time frame that actually depends on.
                </p>
            ),
        },
        {
            title: "What industries do you specialize in for web design and development?",
            content: (
                <p>
                    We partner with industries ranging from eCommerce to healthcare and finance to education and more with tailored solutions to fit their needs. We know how to design a certain type of website – ideally from the niche you&apos;re in and from the regulatory standards.
                </p>
            ),
        },
        {
            title: "Why is mobile optimization important for my website?",
            content: (
                <p>
                    With the majority of users accessing websites on mobile devices, a mobile-optimized website ensures a seamless experience, leading to higher engagement and better search engine rankings. We ensure all our sites are mobile-friendly and responsive.
                </p>
            ),
        },
        {
            title: "What is the process for custom web development?",
            content: (
                <p>
                    The process of custom web development that we follow involves consultation, planning, designing, development, testing, and launch. At each step of the way, we work with you closely to make sure the website reflects what you want to accomplish.
                </p>
            ),
        },
        {
            title: "How can digital marketing SEO services improve my website's ranking on Google?",
            content: (
                <p>
                    SEO services we offer are all about using sophisticated NLP algorithms and key phrase strategies according to your website. By understanding and implementing relevant terms and search intents, we try to improve your ranking on Google and draw in high-quality, targeted traffic.
                </p>
            ),
        },
        {
            title: "How do you approach SEO in web design and development?",
            content: (
                <p>
                    We combine SEO best practices in our web design and development process right from the site structure to the content optimization with the Google search engine in mind so that your site is search engine friendly and ranks higher on Google.
                </p>
            ),
        },
        {
            title: "How does SEO help in digital marketing?",
            content: (
                <p>
                    It is a foundational component of digital marketing, and that involves improving your website&apos;s visibility in search engines. When you optimize for relevant search terms and search intent, you boost your site&apos;s organic traffic and your brand&apos;s reach and engagement.
                </p>
            ),
        },
        {
            title: "What's the importance of user experience (UX) in web design?",
            content: (
                <p>
                    Without UX, your visitors won&apos;t be engaged on your site. It has the ability to improve navigation, accessibility, and all-around feel on behalf of the user, and that can lead to bigger conversions and customer retention.
                </p>
            ),
        },
        {
            title: "What makes you one of the top web development companies in the USA?",
            content: (
                <p>
                    With technical expertise and a customer-centric approach, we pull out our team and deliver high-quality, tailored solutions for businesses. We&apos;re the company that&apos;s known for innovation, efficiency, and results you can measure.
                </p>
            ),
        },
        {
            title: "What is the best web development company near me?",
            content: (
                <p>
                    When searching for the best web development company near you, you can easily find WebDev Sphere. Being a reliable web design and development company, we carefully offer our best customized, innovative solutions that meet your specific business requirements. We bring together a team of web developers, custom designers, and digital marketing SEO to build high-performing websites that drive engagement and growth. WebDev Sphere possesses a reputation for excellence and a dedication to client success to assist businesses in a successful online marketplace.
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
            <h4 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-center">
                FAQS
            </h4>
            <p className="text-center 2xl:text-lg lg:text-base text-sm mb-12 md:mx-20">
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
