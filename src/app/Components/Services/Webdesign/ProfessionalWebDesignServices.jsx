"use client";

import React, { useState } from 'react';

const ProfessionalWebDesignServices = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const tabsLeft = [
        'UI/UX Design Services',
        'Landing Page Design',
        'Corporate Design and Branding',
        'Custom WordPress Web Design',
        'Custom Mobile-friendly Websites'
    ];

    const tabsRight = [
        'SEO-Optimized Web Design',
        'Ecommerce Web Design',
        'Shopify Web Design',
        'Website Support'
    ];

    const content = [
        {
            text: 'With our UI/UX design services, we try to bring visually appealing and also seamless experiences to your target audience. We take care of everything, from wireframes to the final mockups, so everything is perfectly intuitive, functional, and in line with your brand identity. User behavior analytics help us design interfaces that drive maximum engagement and conversions, cementing us as a leading company in website design in Houston.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'Landing pages that perform, that convert. Instead, by leveraging in-depth user research, compelling visuals, and persuasive CTAs we optimize every touch point in our process. We have a web design reputation of excellence in Houston TX, which ensures our landing pages don’t just draw attention, but they convert visitors to business growth.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'The brand designs that we specialize in, are coherent and professional and leave an impact. We offer all the solutions from logo design to marketing materials that can speak out loud the brand’s vision. At a Houston-based web design company disruptive, we help businesses build trust, credibility & recognition in their field with great corporate designs.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'Our WordPress web design service is customized to cater to the diverse needs of your business. Feel that we facilitate the development of dynamic, scalable, clean code robust websites. We’re recognized by customers as a trustworthy Houston web design agency, and our WordPress websites are easy to manage, fully responsive, and Google-optimized.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'In now a mobile-first world, we magnify designs that are responsive across all devices. We make sure your website looks good and stays working properly on your desktop, your tablet, and your smartphone. Get responsive website design in Houston that gives customer satisfaction and also increases engagement.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: '<a href="/houston-seo-company">SEO</a> strategies become part of the core of our designs to improve the visibility and rank potential. With these advanced tools and techniques, we generate websites that get organic traffic and at the same time a good user experience. However, it is the best web design company in Houston TX that will know how to combine stunning visuals with top search performance.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'We build eCommerce platforms that allow you to shop smoothly and gain revenue online. Intuitive navigation, secure payment integrations, and scalable frameworks are our solutions. For people who specialize in website redesign as Houston has, your eCommerce platform needs to stand out.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'We build high-converting custom stores, especially for Shopify web design services. We can adapt templates to create a unique look, then we can integrate super-advanced functionality to meet your business goals. In Houston TX, we have experience in web design and Shopify and we’ll make Shopify work for you by providing superior user experience and scalable growth opportunities.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'We offer dedicated support services during which we update your website, and make certain it’s secure and functional. We do it all, from bug fixes to performance improvements, with precision. Being a website design Houston TX company tops us off with peace of mind that your website is constantly in good shape.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg w-full container p-4 flex flex-col items-center">

                {/* "Services" heading */}
                <h1 className="text-2xl font-medium mb-4 text-red-500">Services</h1>

                {/* Main heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                    Improvising Digital Presence with Web Design Company Houston TX
                </h2>

                <div className="relative w-full flex flex-col lg:flex-row">

                    {/* Left Tabs */}
                    <div className="w-full lg:w-1/4 flex flex-col space-y-2 justify-center mb-8 lg:mb-0">
                        {tabsLeft.map((tab, index) => (
                            <button
                                key={index}
                                className={`py-4 px-4 text-base md:text-lg font-medium text-left rounded ${selectedTab === index ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Area with background image */}
                    <div
                        className="w-full lg:w-1/2 p-8 relative bg-cover bg-center text-white"
                        style={{ backgroundImage: `url('${content[selectedTab].bgImage}')`, minHeight: '300px' }}
                    >
                        <div className="relative w-full">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {tabsLeft[selectedTab] || tabsRight[selectedTab - tabsLeft.length]}
                            </h3>
                            <p
                                className="text-lg md:text-xl"
                                dangerouslySetInnerHTML={{ __html: content[selectedTab].text }}
                            ></p>
                        </div>
                    </div>

                    {/* Right Tabs */}
                    <div className="w-full lg:w-1/4 flex flex-col space-y-2 justify-center mt-8 lg:mt-0">
                        {tabsRight.map((tab, index) => (
                            <button
                                key={index}
                                className={`py-4 px-4 text-base md:text-lg font-medium text-left rounded ${selectedTab === index + tabsLeft.length ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => handleTabClick(index + tabsLeft.length)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfessionalWebDesignServices;
