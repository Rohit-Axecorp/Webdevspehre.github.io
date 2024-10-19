"use client"

import React, { useState } from 'react';

const ProfessionalWebDesignServices = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const tabsLeft = [
        'UI/UX Services',
        'Landing Page Design and Optimization',
        'Corporate Design and Branding',
        'Custom WordPress Web Design',
        'Custom Mobile Friendly Websites'
    ];

    const tabsRight = [
        'Conversion Rate Optimization',
        'Ecommerce Web Design',
        'Shopify Web Design',
        'Website Support'
    ];

    // Add background images for each tab
    const content = [
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
        {
            text: 'For ecommerce good website is the line between life and death. It has to do everything: promote and sell goods, give good information, incentivise clients to come back and more. Comrade has more that 12 years of experience in website development, we have worked with ecommerce businesses across the country and know exactly how to create an ecommerce site, that will make your business prosper.',
            bgImage: '/Images/Ecommerce-Web-Design.jpg',
        },
    ];

    return (
        <div className="flex items-center justify-center py-12">
            <div className="relative rounded-lg w-full container p-4 flex flex-col items-center">

                {/* "Services" heading */}
                <h1 className="text-4xl font-medium mb-4 text-red-500">Services</h1>

                {/* Main heading */}
                <h2 className="text-6xl font-extrabold mb-12">Professional Web Design Services</h2>

                <div className="relative w-full flex">

                    {/* Left Tabs */}
                    <div className="w-1/4 flex flex-col space-y-2 justify-center">
                        {tabsLeft.map((tab, index) => (
                            <button
                                key={index}
                                className={`py-4 px-4 text-lg font-medium text-left rounded ${selectedTab === index ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Area with background image */}
                    <div
                        className="w-1/2 p-12 relative bg-cover bg-center text-white m-4"
                        style={{ backgroundImage: `url('${content[selectedTab].bgImage}')`, minHeight: '400px' }}
                    >
                        <div className="relative w-full">
                            <h3 className="text-3xl font-bold mb-4">
                                {tabsLeft[selectedTab] || tabsRight[selectedTab - tabsLeft.length]}
                            </h3>
                            <p className='text-xl'>{content[selectedTab].text}</p>
                        </div>
                    </div>

                    {/* Right Tabs */}
                    <div className="w-1/4 flex flex-col space-y-2 justify-center">
                        {tabsRight.map((tab, index) => (
                            <button
                                key={index}
                                className={`py-4 px-4 text-lg font-medium text-left rounded ${selectedTab === index + tabsLeft.length ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
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
